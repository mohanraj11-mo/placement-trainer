/* ============================================================
   PLACEMENT TRAINER AI — Subject & Topic Registry
   Master lists of subjects/topics. Question banks live in
   separate files under /data/questions-*.js keyed by these ids.
   ============================================================ */
window.PTA = window.PTA || {};

PTA.subjects = {
  ece: [
    { id: 'electronic-devices',          name: 'Electronic Devices',              icon: '⚡', blurb: 'Diodes, BJTs, FETs & devices' },
    { id: 'analog-electronics',          name: 'Analog Electronics',              icon: '📈', blurb: 'Amplifiers & analog circuits' },
    { id: 'digital-electronics',         name: 'Digital Electronics',             icon: '🔢', blurb: 'Logic gates & digital design' },
    { id: 'network-theory',              name: 'Network Theory',                  icon: '🔌', blurb: 'Circuit theorems & analysis' },
    { id: 'signals-systems',             name: 'Signals and Systems',             icon: '〰️', blurb: 'Signals & transforms' },
    { id: 'control-systems',             name: 'Control Systems',                 icon: '🎛️', blurb: 'Feedback & stability' },
    { id: 'communication-systems',       name: 'Communication Systems',           icon: '📡', blurb: 'Modulation & transmission' },
    { id: 'digital-communication',       name: 'Digital Communication',           icon: '💠', blurb: 'Digital modulation schemes' },
    { id: 'analog-communication',        name: 'Analog Communication',            icon: '📻', blurb: 'AM, FM & analog links' },
    { id: 'microprocessors',             name: 'Microprocessors',                 icon: '🖥️', blurb: '8085 / 8086 architecture' },
    { id: 'microcontrollers',            name: 'Microcontrollers',                icon: '🔧', blurb: '8051, ARM & embedded control' },
    { id: 'embedded-systems',            name: 'Embedded Systems',                icon: '🤖', blurb: 'Real-time embedded design' },
    { id: 'vlsi',                        name: 'VLSI',                            icon: '🧩', blurb: 'Chip design fundamentals' },
    { id: 'cmos',                        name: 'CMOS',                            icon: '⚙️', blurb: 'CMOS technology & logic' },
    { id: 'semiconductor-physics',       name: 'Semiconductor Physics',           icon: '🔬', blurb: 'Physics of semiconductors' },
    { id: 'electromagnetic-theory',      name: 'Electromagnetic Theory',          icon: '🧲', blurb: 'Fields & waves' },
    { id: 'antenna-wave-propagation',    name: 'Antenna and Wave Propagation',    icon: '📶', blurb: 'Antennas & propagation' },
    { id: 'computer-networks-ece',       name: 'Computer Networks',               icon: '🌐', blurb: 'Networking fundamentals' },
    { id: 'operating-systems-ece',       name: 'Operating Systems',               icon: '💾', blurb: 'OS core concepts' },
    { id: 'data-structures-basic-ece',   name: 'Data Structures (Basic)',         icon: '🗂️', blurb: 'Core DS concepts' },
    { id: 'c-programming-ece',           name: 'C Programming',                   icon: '💻', blurb: 'C language fundamentals' },
    { id: 'cpp-ece',                     name: 'C++',                             icon: '➕', blurb: 'Object-oriented C++' },
    { id: 'java-basic-ece',              name: 'Basic Java',                      icon: '☕', blurb: 'Java essentials' },
    { id: 'iot-basics',                  name: 'IoT Basics',                      icon: '📲', blurb: 'Internet of Things' },
    { id: 'sensors-instrumentation',     name: 'Sensors and Instrumentation',     icon: '📏', blurb: 'Sensors & measurement' },
    { id: 'electronic-measurements',     name: 'Electronic Measurements',         icon: '📐', blurb: 'Measurement techniques' },
    { id: 'engineering-mathematics',     name: 'Engineering Mathematics',         icon: '∑',  blurb: 'Placement-level maths' },
    { id: 'engineering-physics',         name: 'Engineering Physics',             icon: '🧪', blurb: 'Placement-level physics' }
  ],
  software: [
    { id: 'c-programming',      name: 'C Programming',                icon: '💻', blurb: 'C language fundamentals' },
    { id: 'cpp',                name: 'C++',                          icon: '➕', blurb: 'Object-oriented C++' },
    { id: 'java',               name: 'Java',                         icon: '☕', blurb: 'Core Java for interviews' },
    { id: 'python',             name: 'Python',                       icon: '🐍', blurb: 'Python essentials' },
    { id: 'javascript',         name: 'JavaScript',                  icon: '🟨', blurb: 'JS fundamentals' },
    { id: 'html',               name: 'HTML',                        icon: '🌐', blurb: 'Markup essentials' },
    { id: 'css',                name: 'CSS',                         icon: '🎨', blurb: 'Styling essentials' },
    { id: 'sql',                name: 'SQL',                         icon: '🗃️', blurb: 'Query language basics' },
    { id: 'dbms',               name: 'DBMS',                        icon: '💾', blurb: 'Database management' },
    { id: 'operating-systems',  name: 'Operating Systems',           icon: '🖥️', blurb: 'OS core concepts' },
    { id: 'computer-networks',  name: 'Computer Networks',           icon: '🌐', blurb: 'Networking fundamentals' },
    { id: 'data-structures',    name: 'Data Structures',             icon: '🗂️', blurb: 'Arrays, trees, graphs...' },
    { id: 'algorithms',         name: 'Algorithms',                  icon: '🧮', blurb: 'Sorting, searching & more' },
    { id: 'oop',                name: 'Object Oriented Programming', icon: '🧱', blurb: 'OOP concepts' },
    { id: 'software-engineering', name: 'Software Engineering',      icon: '🏗️', blurb: 'SDLC & engineering practice' },
    { id: 'git',                name: 'Git',                         icon: '🔀', blurb: 'Version control basics' },
    { id: 'github',             name: 'GitHub',                      icon: '🐙', blurb: 'Collaboration workflows' },
    { id: 'rest-api',           name: 'REST API Basics',             icon: '🔗', blurb: 'API design fundamentals' },
    { id: 'cloud-basics',       name: 'Cloud Basics',                icon: '☁️', blurb: 'Cloud computing basics' },
    { id: 'linux-basics',       name: 'Linux Basics',                icon: '🐧', blurb: 'Shell & OS basics' },
    { id: 'ai-basics',          name: 'AI Basics',                   icon: '🧠', blurb: 'Artificial intelligence 101' },
    { id: 'ml-basics',          name: 'Machine Learning Basics',     icon: '📊', blurb: 'ML fundamentals' }
  ]
};

PTA.aptitudeTopics = [
  { id: 'quantitative-aptitude',    name: 'Quantitative Aptitude',        icon: '🔢' },
  { id: 'logical-reasoning',        name: 'Logical Reasoning',            icon: '🧩' },
  { id: 'verbal-ability',           name: 'Verbal Ability',               icon: '📖' },
  { id: 'data-interpretation',      name: 'Data Interpretation',          icon: '📊' },
  { id: 'number-system',            name: 'Number System',                icon: '#️⃣' },
  { id: 'percentage',               name: 'Percentage',                   icon: '％' },
  { id: 'profit-loss',              name: 'Profit and Loss',              icon: '💰' },
  { id: 'time-work',                name: 'Time and Work',                icon: '⏱️' },
  { id: 'time-speed-distance',      name: 'Time Speed Distance',          icon: '🚗' },
  { id: 'probability',              name: 'Probability',                  icon: '🎲' },
  { id: 'permutation-combination',  name: 'Permutation and Combination',  icon: '🔀' },
  { id: 'blood-relations',          name: 'Blood Relations',              icon: '👪' },
  { id: 'direction-sense',          name: 'Direction Sense',              icon: '🧭' },
  { id: 'coding-decoding',          name: 'Coding-Decoding',              icon: '🔐' },
  { id: 'puzzles',                  name: 'Puzzles',                      icon: '🧩' },
  { id: 'series',                   name: 'Series',                       icon: '🔗' },
  { id: 'calendar',                 name: 'Calendar',                     icon: '📅' },
  { id: 'clock',                    name: 'Clock',                        icon: '🕐' },
  { id: 'seating-arrangement',      name: 'Seating Arrangement',          icon: '💺' }
];

/* Question bank container — populated by data/questions-*.js
   Schema per question: { q: "...", o: ["A","B","C","D"], c: correctIndex } */
PTA.questions = PTA.questions || {};
