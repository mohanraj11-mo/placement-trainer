/* ============================================================
   PLACEMENT TRAINER AI — Admin Panel
   Lets a trainer/admin add subjects, aptitude topics, and fully
   manage (add/edit/delete/change-correct-answer) questions.
   Everything persists to localStorage via PTAStore, layered on
   top of the read-only seed data.
   ============================================================ */
(function () {
  let activeTab = 'questions';
  let selectedSubjectId = null;
  let editingIndex = null; // null = adding new question

  function render(presetSubjectId) {
    if (presetSubjectId) { selectedSubjectId = presetSubjectId; activeTab = 'questions'; }
    const app = document.getElementById('app-view');
    app.innerHTML = `
      <div class="section-head">
        <div>
          <h2>Admin Panel</h2>
          <div class="desc">Add subjects, aptitude topics, and manage every question in the bank.</div>
        </div>
      </div>
      <div class="admin-tabs">
        <button class="admin-tab ${activeTab === 'questions' ? 'active' : ''}" data-tab="questions">Manage Questions</button>
        <button class="admin-tab ${activeTab === 'subjects' ? 'active' : ''}" data-tab="subjects">Add Subjects / Topics</button>
      </div>
      <div id="adminBody"></div>
      <div class="toast" id="toast"></div>
    `;
    document.querySelectorAll('.admin-tab').forEach(t => t.addEventListener('click', () => { activeTab = t.dataset.tab; render(); }));
    if (activeTab === 'questions') renderQuestionsTab(); else renderSubjectsTab();
  }

  function toast(msg) {
    const t = document.getElementById('toast');
    if (!t) return;
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 1800);
  }

  /* ---------------- Questions Tab ---------------- */
  function renderQuestionsTab() {
    const body = document.getElementById('adminBody');
    const groups = [
      { label: 'ECE Core', items: window.PTAStore.getSubjects('ece') },
      { label: 'Software', items: window.PTAStore.getSubjects('software') },
      { label: 'Aptitude', items: window.PTAStore.getAptitudeTopics() }
    ];

    body.innerHTML = `
      <div class="admin-panel" style="margin-bottom:20px;">
        <label style="font-size:12.5px;color:var(--text-muted);font-weight:500;">Select a subject / topic to manage</label>
        ${groups.map(g => `
          <div style="margin-top:14px;">
            <div class="mono" style="font-size:11px;color:var(--text-faint);margin-bottom:6px;">${g.label.toUpperCase()}</div>
            <div class="subject-select-grid">
              ${g.items.map(s => `<button class="subject-pick ${selectedSubjectId === s.id ? 'active' : ''}" data-id="${s.id}">${s.icon || ''} ${escapeHtml(s.name)}</button>`).join('')}
            </div>
          </div>
        `).join('')}
      </div>
      <div id="questionManager"></div>
    `;
    body.querySelectorAll('.subject-pick').forEach(b => b.addEventListener('click', () => {
      selectedSubjectId = b.dataset.id; editingIndex = null; renderQuestionsTab();
    }));

    if (selectedSubjectId) renderQuestionManager();
  }

  function renderQuestionManager() {
    const mgr = document.getElementById('questionManager');
    const meta = window.PTAStore.findSubjectMeta(selectedSubjectId) || { name: selectedSubjectId };
    const list = window.PTAStore.getQuestions(selectedSubjectId);
    const editing = editingIndex !== null ? list[editingIndex] : null;

    mgr.innerHTML = `
      <div class="admin-panel">
        <div class="section-head" style="margin-bottom:16px;">
          <h3 style="font-size:17px;">${meta.icon || ''} ${escapeHtml(meta.name)} <span class="mono" style="color:var(--text-faint);font-size:12px;">(${list.length} questions)</span></h3>
        </div>
        <form id="qForm">
          <div class="form-row">
            <label>Question</label>
            <textarea id="qText" rows="2" required placeholder="Enter the question text">${editing ? escapeHtml(editing.q) : ''}</textarea>
          </div>
          <div class="form-row">
            <label>Options — select the radio button next to the correct answer</label>
            ${[0, 1, 2, 3].map(i => `
              <div class="option-input-row">
                <input type="radio" name="correct" value="${i}" ${editing && editing.c === i ? 'checked' : (!editing && i === 0 ? 'checked' : '')}>
                <input type="text" id="opt${i}" placeholder="Option ${String.fromCharCode(65 + i)}" required value="${editing ? escapeHtml(editing.o[i]) : ''}">
              </div>
            `).join('')}
          </div>
          <div class="inline-actions">
            <button type="submit" class="btn btn-primary">${editing ? 'Save Changes' : '+ Add Question'}</button>
            ${editing ? '<button type="button" class="btn btn-ghost" id="cancelEdit">Cancel</button>' : ''}
          </div>
        </form>

        <div class="q-list">
          ${list.map((q, i) => `
            <div class="q-list-item">
              <div class="qtxt">
                <div>${i + 1}. ${escapeHtml(q.q)}</div>
                <div class="correct-ans-note">Correct: ${escapeHtml(q.o[q.c])}</div>
              </div>
              <div class="qactions">
                <button class="btn btn-sm btn-ghost" data-edit="${i}">Edit</button>
                <button class="btn btn-sm btn-danger" data-del="${i}">Delete</button>
              </div>
            </div>
          `).join('') || '<p style="color:var(--text-muted);font-size:13.5px;">No questions yet — add the first one above.</p>'}
        </div>
      </div>
    `;

    document.getElementById('qForm').addEventListener('submit', onSubmitQuestion);
    const cancelBtn = document.getElementById('cancelEdit');
    if (cancelBtn) cancelBtn.addEventListener('click', () => { editingIndex = null; renderQuestionManager(); });
    mgr.querySelectorAll('[data-edit]').forEach(b => b.addEventListener('click', () => {
      editingIndex = parseInt(b.dataset.edit, 10); renderQuestionManager(); window.scrollTo({ top: 0, behavior: 'smooth' });
    }));
    mgr.querySelectorAll('[data-del]').forEach(b => b.addEventListener('click', () => {
      if (!confirm('Delete this question?')) return;
      window.PTAStore.deleteQuestion(selectedSubjectId, parseInt(b.dataset.del, 10));
      editingIndex = null; toast('Question deleted'); renderQuestionManager();
    }));
  }

  function onSubmitQuestion(e) {
    e.preventDefault();
    const q = document.getElementById('qText').value.trim();
    const o = [0, 1, 2, 3].map(i => document.getElementById('opt' + i).value.trim());
    const c = parseInt(document.querySelector('input[name="correct"]:checked').value, 10);
    if (!q || o.some(x => !x)) return;
    const question = { q, o, c };

    if (editingIndex !== null) {
      window.PTAStore.updateQuestion(selectedSubjectId, editingIndex, question);
      toast('Question updated');
    } else {
      window.PTAStore.addQuestion(selectedSubjectId, question);
      toast('Question added');
    }
    editingIndex = null;
    renderQuestionManager();
  }

  /* ---------------- Subjects Tab ---------------- */
  function renderSubjectsTab() {
    const body = document.getElementById('adminBody');
    body.innerHTML = `
      <div class="form-grid-2">
        <div class="admin-panel">
          <h3 style="font-size:16px;margin-bottom:14px;">Add New Subject</h3>
          <form id="subjectForm">
            <div class="form-row">
              <label>Module</label>
              <select id="subModule">
                <option value="ece">ECE Core Placement Training</option>
                <option value="software">Software Placement Training</option>
              </select>
            </div>
            <div class="form-row">
              <label>Subject Name</label>
              <input type="text" id="subName" placeholder="e.g. Power Electronics" required>
            </div>
            <div class="form-row">
              <label>Icon (emoji, optional)</label>
              <input type="text" id="subIcon" placeholder="e.g. 🔋">
            </div>
            <button type="submit" class="btn btn-primary">+ Add Subject</button>
          </form>
        </div>
        <div class="admin-panel">
          <h3 style="font-size:16px;margin-bottom:14px;">Add New Aptitude Topic</h3>
          <form id="topicForm">
            <div class="form-row">
              <label>Topic Name</label>
              <input type="text" id="topName" placeholder="e.g. Cubes and Dice" required>
            </div>
            <div class="form-row">
              <label>Icon (emoji, optional)</label>
              <input type="text" id="topIcon" placeholder="e.g. 🎲">
            </div>
            <button type="submit" class="btn btn-primary">+ Add Aptitude Topic</button>
          </form>
        </div>
      </div>
      <div class="toast" id="toast2"></div>
    `;

    document.getElementById('subjectForm').addEventListener('submit', e => {
      e.preventDefault();
      const module = document.getElementById('subModule').value;
      const name = document.getElementById('subName').value.trim();
      const icon = document.getElementById('subIcon').value.trim() || '📘';
      if (!name) return;
      window.PTAStore.addSubject(module, { name, icon, blurb: 'Custom subject' });
      toast('Subject added — find it on the module page');
      e.target.reset();
    });

    document.getElementById('topicForm').addEventListener('submit', e => {
      e.preventDefault();
      const name = document.getElementById('topName').value.trim();
      const icon = document.getElementById('topIcon').value.trim() || '🧠';
      if (!name) return;
      window.PTAStore.addAptitudeTopic({ name, icon });
      toast('Aptitude topic added');
      e.target.reset();
    });
  }

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  window.PTAAdmin = { render };
})();
