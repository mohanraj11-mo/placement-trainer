/* ============================================================
   PLACEMENT TRAINER AI — Quiz Engine
   Renders a 20-question MCQ flow for any subject/topic id and
   hands off to a results screen with performance analysis.
   ============================================================ */
(function () {
  const MAX_Q = 20;
  let state = null;

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function start(subjectId, backRoute) {
    const meta = window.PTAStore.findSubjectMeta(subjectId) || { name: subjectId };
    const bank = window.PTAStore.getQuestions(subjectId);

    if (!bank || bank.length === 0) {
      renderEmpty(meta, backRoute);
      return;
    }

    state = {
      subjectId, meta, backRoute,
      questions: shuffle(bank).slice(0, MAX_Q),
      index: 0,
      answered: false,
      selected: null,
      correctCount: 0,
      wrongCount: 0,
      log: []
    };
    renderQuestion();
  }

  function renderEmpty(meta, backRoute) {
    const app = document.getElementById('app-view');
    app.innerHTML = `
      <div class="breadcrumb"><a href="#${backRoute}">&larr; Back</a></div>
      <div class="empty-bank">
        <h3>${meta.icon || '📭'} ${escapeHtml(meta.name)} — no questions yet</h3>
        <p>This topic doesn't have any questions in the bank yet.</p>
        <div class="inline-actions" style="justify-content:center;margin-top:18px;">
          <a class="btn btn-primary" href="#/admin?subject=${encodeURIComponent(meta.id)}">Add Questions in Admin</a>
          <a class="btn btn-ghost" href="#${backRoute}">Choose another topic</a>
        </div>
      </div>`;
  }

  function renderQuestion() {
    const app = document.getElementById('app-view');
    const q = state.questions[state.index];
    const total = state.questions.length;

    const bars = state.questions.map((_, i) => {
      let cls = '';
      if (i < state.index) cls = state.log[i] && state.log[i].correct ? 'done' : 'wrong-done';
      else if (i === state.index) cls = 'current';
      return `<i class="${cls}"></i>`;
    }).join('');

    app.innerHTML = `
      <div class="breadcrumb"><a href="#${state.backRoute}">&larr; Exit quiz</a></div>
      <div class="quiz-header">
        <div>
          <div class="quiz-title">${state.meta.icon || ''} ${escapeHtml(state.meta.name)}</div>
          <div class="quiz-progress-label">Question <span class="mono">${state.index + 1}</span> / <span class="mono">${total}</span></div>
        </div>
        <div class="score-pill-row">
          <span class="score-pill ok">✓ ${state.correctCount}</span>
          <span class="score-pill bad">✕ ${state.wrongCount}</span>
        </div>
      </div>
      <div class="signal-bar">${bars}</div>
      <div class="question-card" id="qcard">
        <div class="question-text">${escapeHtml(q.q)}</div>
        <div class="options" id="options">
          ${q.o.map((opt, i) => `
            <button class="option" data-i="${i}">
              <span class="tag">${String.fromCharCode(65 + i)}</span>
              <span>${escapeHtml(opt)}</span>
            </button>`).join('')}
        </div>
        <div id="feedbackSlot"></div>
      </div>
      <div class="quiz-footer">
        <button class="btn btn-primary" id="nextBtn" disabled>${state.index === total - 1 ? 'Finish Quiz' : 'Next Question'} →</button>
      </div>
    `;

    document.querySelectorAll('#options .option').forEach(btn => {
      btn.addEventListener('click', () => handleAnswer(parseInt(btn.dataset.i, 10)));
    });
    document.getElementById('nextBtn').addEventListener('click', nextQuestion);
  }

  function handleAnswer(selectedIndex) {
    if (state.answered) return;
    state.answered = true;
    const q = state.questions[state.index];
    const correct = selectedIndex === q.c;
    state.log[state.index] = { correct, selectedIndex };
    if (correct) state.correctCount++; else state.wrongCount++;

    document.querySelectorAll('#options .option').forEach((btn, i) => {
      btn.disabled = true;
      if (i === q.c) btn.classList.add('correct');
      if (i === selectedIndex && !correct) btn.classList.add('wrong');
      if (i !== q.c && i !== selectedIndex) btn.classList.add('muted');
    });

    const feedback = document.getElementById('feedbackSlot');
    feedback.innerHTML = correct
      ? `<div class="feedback-banner ok">✅ Correct! Great job.</div>`
      : `<div class="feedback-banner bad">❌ Wrong. Correct answer: <strong>&nbsp;${escapeHtml(q.o[q.c])}</strong></div>`;

    document.getElementById('nextBtn').disabled = false;
    document.querySelector('.score-pill-row').innerHTML =
      `<span class="score-pill ok">✓ ${state.correctCount}</span><span class="score-pill bad">✕ ${state.wrongCount}</span>`;
  }

  function nextQuestion() {
    if (state.index < state.questions.length - 1) {
      state.index++;
      state.answered = false;
      renderQuestion();
    } else {
      renderResults();
    }
  }

  function renderResults() {
    const total = state.questions.length;
    const correct = state.correctCount;
    const wrong = state.wrongCount;
    const pct = Math.round((correct / total) * 100);

    let level, levelClass, motivation;
    if (pct >= 90) { level = 'Excellent'; levelClass = 'level-excellent'; motivation = 'Outstanding work! You\'ve clearly mastered this topic — keep this momentum going into your interviews.'; }
    else if (pct >= 70) { level = 'Good'; levelClass = 'level-good'; motivation = 'Solid performance! A little more revision on the tricky spots and you\'ll be interview-ready.'; }
    else if (pct >= 50) { level = 'Average'; levelClass = 'level-average'; motivation = 'You\'re getting there. Revisit the questions you missed and try this quiz again to sharpen your recall.'; }
    else { level = 'Needs Improvement'; levelClass = 'level-needs'; motivation = 'Don\'t worry — every expert started here. Go back through the fundamentals and retake this quiz; you\'ll see real progress.'; }

    const reviewHtml = state.questions.map((q, i) => {
      const entry = state.log[i];
      if (!entry || entry.correct) return '';
      return `
        <div class="review-item wrong">
          <div class="q">${i + 1}. ${escapeHtml(q.q)}</div>
          <div class="a-line">Your answer: ${escapeHtml(q.o[entry.selectedIndex] ?? '—')}</div>
          <div class="a-line correct-ans">Correct answer: ${escapeHtml(q.o[q.c])}</div>
        </div>`;
    }).join('');

    const app = document.getElementById('app-view');
    app.innerHTML = `
      <div class="results-hero">
        <span class="level-badge ${levelClass}">${level}</span>
        <div class="big-score">${pct}%</div>
        <p class="motivation">${motivation}</p>
      </div>
      <div class="stats-grid">
        <div class="stat-box"><div class="num">${total}</div><div class="label">Total Questions</div></div>
        <div class="stat-box ok"><div class="num">${correct}</div><div class="label">Correct Answers</div></div>
        <div class="stat-box bad"><div class="num">${wrong}</div><div class="label">Wrong Answers</div></div>
        <div class="stat-box"><div class="num">${pct}%</div><div class="label">Percentage</div></div>
      </div>
      <div class="results-actions">
        <button class="btn btn-primary" id="retryBtn">↻ Retake Quiz</button>
        <a class="btn btn-ghost" href="#${state.backRoute}">Choose another topic</a>
        <a class="btn btn-ghost" href="#/">Home</a>
      </div>
      ${wrong > 0 ? `<h3 style="margin-top:44px;font-size:17px;">Review your missed questions</h3><div class="review-list">${reviewHtml}</div>` : ''}
    `;
    document.getElementById('retryBtn').addEventListener('click', () => start(state.subjectId, state.backRoute));
  }

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  window.PTAQuiz = { start };
})();
