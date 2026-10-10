/* ============================================================
   PLACEMENT TRAINER AI — App Shell & Router
   Tiny hash-based router. All page templates render into
   #app-view; the navbar is rendered once and stays static.
   ============================================================ */
(function () {

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  function parseHash() {
    let hash = location.hash.replace(/^#/, '') || '/';
    let [path, query] = hash.split('?');
    const params = new URLSearchParams(query || '');
    const parts = path.split('/').filter(Boolean); // e.g. ['module','ece']
    return { path, parts, params };
  }

  function renderNavbar() {
    const nav = document.getElementById('navbar');
    nav.innerHTML = `
      <a href="#/" class="brand"><span class="brand-mark">PT</span> Placement Trainer AI</a>
      <div class="nav-links">
        <a class="nav-link" href="#/">Home</a>
        <a class="nav-link" href="#/module/ece">ECE Core</a>
        <a class="nav-link" href="#/module/software">Software</a>
        <a class="nav-link" href="#/admin">Admin</a>
        <a class="nav-link exit" href="#/thankyou">Exit</a>
      </div>
    `;
  }

  function subjectCount(module) {
    return window.PTAStore.getSubjects(module).length;
  }

  /* ---------------- HOME ---------------- */
  function renderHome() {
    const app = document.getElementById('app-view');
    app.innerHTML = `
      <section class="hero">
        <span class="eyebrow">● AI-Powered Placement Prep</span>
        <h1>Train smarter for your <span>placement</span> interviews.</h1>
        <p class="sub">Two focused tracks, real interview-style MCQs, instant feedback and a growing question bank — built to scale to thousands of questions.</p>
        <svg class="waveform" viewBox="0 0 640 60" xmlns="http://www.w3.org/2000/svg">
          <path class="trace-2" d="M0,40 L60,40 L80,15 L100,50 L120,40 L200,40 L220,20 L240,45 L260,40 L640,40"/>
          <path d="M0,30 L50,30 L70,8 L90,52 L110,30 L180,30 L205,45 L225,10 L245,30 L640,30"/>
        </svg>
      </section>

      <div class="module-grid">
        <div class="module-card" data-go="#/module/ece">
          <span class="module-icon">📡</span>
          <h3>ECE Core Placement Training</h3>
          <p>28 core Electronics & Communication subjects — from semiconductor physics to VLSI — plus the full aptitude suite.</p>
          <div class="count">${subjectCount('ece')} SUBJECTS · 20 MCQs EACH</div>
          <span class="go">→</span>
        </div>
        <div class="module-card" data-go="#/module/software">
          <span class="module-icon">💻</span>
          <h3>Software Placement Training</h3>
          <p>22 software & CS fundamentals subjects — languages, DBMS, OS, networks, git — plus the full aptitude suite.</p>
          <div class="count">${subjectCount('software')} SUBJECTS · 20 MCQs EACH</div>
          <span class="go">→</span>
        </div>
      </div>

      <p class="footer-note">Built modular &amp; scalable — questions are data, not code. Use Admin to grow the bank.</p>
    `;
    app.querySelectorAll('.module-card').forEach(c => {
      c.addEventListener('click', () => { location.hash = c.dataset.go; });
      c.addEventListener('mousemove', e => {
        const r = c.getBoundingClientRect();
        c.style.setProperty('--mx', (e.clientX - r.left) + 'px');
        c.style.setProperty('--my', (e.clientY - r.top) + 'px');
      });
    });
  }

  /* ---------------- MODULE SUBJECT GRID ---------------- */
  function renderModule(module) {
    const app = document.getElementById('app-view');
    const label = module === 'ece' ? 'ECE Core Placement Training' : 'Software Placement Training';
    const subjects = window.PTAStore.getSubjects(module);

    app.innerHTML = `
      <div class="breadcrumb"><a href="#/">Home</a> / ${label}</div>
      <div class="section-head">
        <div>
          <h2>${label}</h2>
          <div class="desc">Pick a subject to start a 20-question interview-style quiz. Aptitude training is included below.</div>
        </div>
      </div>
      <div class="subject-grid" id="subjectGrid"></div>

      <div class="section-head" style="margin-top:48px;">
        <div>
          <h2>Aptitude Training</h2>
          <div class="desc">Quant, reasoning, verbal &amp; more — required for almost every placement drive.</div>
        </div>
        <a class="btn btn-primary btn-sm" href="#/aptitude/${module}">Open Full Aptitude Suite →</a>
      </div>
    `;

    const grid = document.getElementById('subjectGrid');
    subjects.forEach((s, i) => {
      const qc = window.PTAStore.getQuestions(s.id).length;
      const card = document.createElement('div');
      card.className = 'subject-card';
      card.style.animationDelay = (i * 0.02) + 's';
      card.innerHTML = `
        <div class="icon">${s.icon || '📘'}</div>
        <h4>${escapeHtml(s.name)}</h4>
        <div class="blurb">${escapeHtml(s.blurb || '')}</div>
        <div class="meta"><span>MCQ Quiz</span><span class="qcount ${qc > 0 ? 'has-q' : ''}">${qc}/20 Qs</span></div>
      `;
      card.addEventListener('click', () => { location.hash = `#/quiz/${s.id}?back=/module/${module}`; });
      grid.appendChild(card);
    });
  }

  /* ---------------- APTITUDE GRID ---------------- */
  function renderAptitude(module) {
    const app = document.getElementById('app-view');
    const topics = window.PTAStore.getAptitudeTopics();
    const backRoute = module ? `/module/${module}` : '/';

    app.innerHTML = `
      <div class="breadcrumb"><a href="#/">Home</a> / <a href="#${backRoute}">${module === 'ece' ? 'ECE Core' : 'Software'}</a> / Aptitude</div>
      <div class="section-head">
        <div>
          <h2>Aptitude Training</h2>
          <div class="desc">19 high-frequency placement aptitude topics — 20 MCQs each, same instant-feedback quiz format.</div>
        </div>
      </div>
      <div class="subject-grid" id="aptGrid"></div>
    `;

    const grid = document.getElementById('aptGrid');
    topics.forEach((t, i) => {
      const qc = window.PTAStore.getQuestions(t.id).length;
      const card = document.createElement('div');
      card.className = 'subject-card aptitude-highlight';
      card.style.animationDelay = (i * 0.02) + 's';
      card.innerHTML = `
        <div class="icon">${t.icon || '🧠'}</div>
        <h4>${escapeHtml(t.name)}</h4>
        <div class="meta" style="margin-top:14px;"><span>MCQ Quiz</span><span class="qcount ${qc > 0 ? 'has-q' : ''}">${qc}/20 Qs</span></div>
      `;
      card.addEventListener('click', () => { location.hash = `#/quiz/${t.id}?back=/aptitude/${module || ''}`; });
      grid.appendChild(card);
    });
  }

  /* ---------------- THANK YOU / EXIT ---------------- */
  function renderThankYou() {
    const app = document.getElementById('app-view');
    app.innerHTML = `
      <div class="thankyou-page">
        <svg class="bot-wave" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="100" cy="176" rx="42" ry="8" fill="rgba(69,224,209,0.12)"/>
          <rect x="70" y="70" width="60" height="66" rx="18" fill="#182444" stroke="#45e0d1" stroke-width="2"/>
          <circle cx="100" cy="46" r="34" fill="#182444" stroke="#45e0d1" stroke-width="2"/>
          <circle cx="88" cy="44" r="6" fill="#45e0d1"/>
          <circle cx="112" cy="44" r="6" fill="#45e0d1"/>
          <path d="M86,58 Q100,68 114,58" stroke="#45e0d1" stroke-width="3" fill="none" stroke-linecap="round"/>
          <rect x="96" y="8" width="8" height="14" rx="4" fill="#45e0d1"/>
          <circle cx="100" cy="6" r="5" fill="#f5b942"/>
          <g class="bot-arm">
            <rect x="108" y="88" width="34" height="12" rx="6" fill="#45e0d1"/>
            <circle cx="146" cy="94" r="10" fill="#f5b942"/>
          </g>
          <rect x="60" y="90" width="14" height="34" rx="7" fill="#182444" stroke="#45e0d1" stroke-width="2"/>
          <rect x="80" y="140" width="16" height="30" rx="6" fill="#182444" stroke="#45e0d1" stroke-width="2"/>
          <rect x="104" y="140" width="16" height="30" rx="6" fill="#182444" stroke="#45e0d1" stroke-width="2"/>
        </svg>
        <h1>Thank You for Visiting <span>Placement Trainer AI</span></h1>
        <p>Keep Learning. Keep Growing.<br>All the Best for Your Placement.</p>
        <div class="thankyou-actions">
          <a class="btn btn-ghost" href="#/">Back to Home</a>
          <button class="btn btn-primary" id="exitBtn">Exit Application</button>
        </div>
        <div class="closed-note" id="closedNote"></div>
      </div>
    `;
    document.getElementById('exitBtn').addEventListener('click', () => {
      const note = document.getElementById('closedNote');
      try { window.close(); } catch (e) { /* ignore */ }
      note.textContent = 'You can now close this browser tab. See you at your next practice session!';
    });
  }

  /* ---------------- ROUTER ---------------- */
  function route() {
    const { parts, params } = parseHash();
    const app = document.getElementById('app-view');
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });

    if (parts.length === 0) return renderHome();

    if (parts[0] === 'module' && parts[1]) return renderModule(parts[1]);

    if (parts[0] === 'aptitude') return renderAptitude(parts[1] || '');

    if (parts[0] === 'quiz' && parts[1]) {
      const back = params.get('back') || '/';
      return window.PTAQuiz.start(parts[1], back);
    }

    if (parts[0] === 'admin') return window.PTAAdmin.render(params.get('subject'));

    if (parts[0] === 'thankyou') return renderThankYou();

    app.innerHTML = `<div class="empty-bank"><h3>Page not found</h3><a class="btn btn-primary" href="#/">Go Home</a></div>`;
  }

  window.addEventListener('hashchange', route);
  window.addEventListener('DOMContentLoaded', () => {
    renderNavbar();
    route();
  });
})();
