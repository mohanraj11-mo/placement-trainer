/* ============================================================
   PLACEMENT TRAINER AI — Storage / Data Access Layer
   All question/subject data flows through this module so the
   UI never touches localStorage or the seed files directly.
   Seed data (data/*.js) is never mutated — admin edits are
   layered on top inside localStorage, so "reset to defaults"
   is always possible.
   ============================================================ */
(function () {
  const KEY = 'pta_custom_v1';

  function blank() {
    return { subjects: { ece: [], software: [] }, aptitudeTopics: [], questions: {} };
  }

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return blank();
      const parsed = JSON.parse(raw);
      return Object.assign(blank(), parsed, {
        subjects: Object.assign({ ece: [], software: [] }, parsed.subjects || {}),
        questions: parsed.questions || {}
      });
    } catch (e) {
      console.warn('PTA storage load failed, resetting.', e);
      return blank();
    }
  }

  function persist() {
    localStorage.setItem(KEY, JSON.stringify(custom));
  }

  let custom = load();

  const Store = {
    /* ---------- Subjects & Topics ---------- */
    getSubjects(module) {
      const seed = (window.PTA.subjects[module] || []);
      const extra = (custom.subjects[module] || []);
      return seed.concat(extra);
    },
    getAptitudeTopics() {
      return (window.PTA.aptitudeTopics || []).concat(custom.aptitudeTopics || []);
    },
    findSubjectMeta(id) {
      const all = this.getSubjects('ece').concat(this.getSubjects('software'), this.getAptitudeTopics());
      return all.find(s => s.id === id);
    },
    addSubject(module, subject) {
      subject.id = slugify(subject.name) + '-' + Date.now().toString(36);
      custom.subjects[module].push(subject);
      custom.questions[subject.id] = [];
      persist();
      return subject;
    },
    addAptitudeTopic(topic) {
      topic.id = slugify(topic.name) + '-' + Date.now().toString(36);
      custom.aptitudeTopics.push(topic);
      custom.questions[topic.id] = [];
      persist();
      return topic;
    },

    /* ---------- Questions ---------- */
    getQuestions(subjectId) {
      if (Object.prototype.hasOwnProperty.call(custom.questions, subjectId)) {
        return custom.questions[subjectId];
      }
      return (window.PTA.questions[subjectId] || []).slice();
    },
    /** Ensures subjectId has an editable working copy in custom storage, returns it */
    ensureEditable(subjectId) {
      if (!Object.prototype.hasOwnProperty.call(custom.questions, subjectId)) {
        custom.questions[subjectId] = (window.PTA.questions[subjectId] || []).map(q => ({
          q: q.q, o: q.o.slice(), c: q.c
        }));
        persist();
      }
      return custom.questions[subjectId];
    },
    addQuestion(subjectId, question) {
      const list = this.ensureEditable(subjectId);
      list.push(question);
      persist();
    },
    updateQuestion(subjectId, index, question) {
      const list = this.ensureEditable(subjectId);
      list[index] = question;
      persist();
    },
    deleteQuestion(subjectId, index) {
      const list = this.ensureEditable(subjectId);
      list.splice(index, 1);
      persist();
    },
    resetSubjectQuestions(subjectId) {
      delete custom.questions[subjectId];
      persist();
    },

    /* ---------- Utility ---------- */
    resetAllCustomData() {
      custom = blank();
      persist();
    }
  };

  function slugify(str) {
    return String(str).toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  }

  window.PTAStore = Store;
})();
