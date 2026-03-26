const QUESTIONS = [
    {
        id: 1,
        category: "Science",
        question: "Which particle is known as the 'God Particle', discovered at CERN in 2012?",
        options: ["Neutrino", "Quark", "Higgs Boson", "Photon"],
        correct: 2,
        explanation: "The Higgs boson gives other particles their mass through the Higgs field. Its discovery at CERN's Large Hadron Collider confirmed the Standard Model of particle physics."
    },
    {
        id: 2,
        category: "Tech",
        question: "In JavaScript, what does the '===' operator check for compared to '=='?",
        options: ["Only value equality", "Both value and type equality", "Reference equality only", "Deep object equality"],
        correct: 1,
        explanation: "The '===' (strict equality) operator checks both value AND type without type coercion. '==' performs type coercion before comparing, which can lead to unexpected results."
    },
    {
        id: 3,
        category: "History",
        question: "In which year did the Berlin Wall fall, marking a pivotal moment in the Cold War's end?",
        options: ["1987", "1988", "1989", "1991"],
        correct: 2,
        explanation: "The Berlin Wall fell on November 9, 1989. East Germany announced citizens could cross freely, and crowds gathered to tear it down, symbolising the collapse of communist rule in Eastern Europe."
    },
    {
        id: 4,
        category: "Science",
        question: "What is the approximate speed of light in a vacuum?",
        options: ["150,000 km/s", "299,792 km/s", "350,000 km/s", "186,000 km/s"],
        correct: 1,
        explanation: "The speed of light in a vacuum is approximately 299,792 km/s (roughly 3 x 10^8 m/s). This is denoted by 'c' and is a fundamental constant in physics."
    },
    {
        id: 5,
        category: "Tech",
        question: "Which data structure operates on a Last-In, First-Out (LIFO) principle?",
        options: ["Queue", "Linked List", "Stack", "Heap"],
        correct: 2,
        explanation: "A Stack uses LIFO — the last element pushed is the first to be popped. Think of a stack of plates. Queues use FIFO (First-In, First-Out)."
    },
    {
        id: 6,
        category: "General Knowledge",
        question: "Which planet in our solar system has the most known moons?",
        options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
        correct: 1,
        explanation: "Saturn holds the record with over 140 confirmed moons as of recent discoveries, surpassing Jupiter. Many are small irregular moons captured from the asteroid belt."
    },
    {
        id: 7,
        category: "Movies",
        question: "Which film became the first non-English language movie to win the Academy Award for Best Picture?",
        options: ["Roma", "Life is Beautiful", "Parasite", "Crouching Tiger, Hidden Dragon"],
        correct: 2,
        explanation: "Parasite (2019), directed by Bong Joon-ho, made history as the first non-English language film to win Best Picture at the Oscars, also winning Best Director, Best Original Screenplay, and Best International Feature Film."
    },
    {
        id: 8,
        category: "Tech",
        question: "What does 'DNS' stand for in networking?",
        options: ["Digital Name Server", "Domain Name System", "Dynamic Network Service", "Data Node System"],
        correct: 1,
        explanation: "DNS (Domain Name System) is often called the 'phonebook of the internet'. It translates human-readable domain names like google.com into IP addresses that computers use to communicate."
    },
    {
        id: 9,
        category: "Science",
        question: "What is the process by which plants convert sunlight into chemical energy?",
        options: ["Respiration", "Transpiration", "Photosynthesis", "Osmosis"],
        correct: 2,
        explanation: "Photosynthesis converts light energy (usually sunlight), water, and carbon dioxide into glucose and oxygen. The equation is: 6CO2 + 6H2O + light energy -> C6H12O6 + 6O2."
    },
    {
        id: 10,
        category: "History",
        question: "Who was the first person to walk on the Moon?",
        options: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "Michael Collins"],
        correct: 1,
        explanation: "Neil Armstrong became the first human to walk on the Moon on July 20, 1969, during NASA's Apollo 11 mission. His famous words were 'That's one small step for man, one giant leap for mankind.'"
    },
    {
        id: 11,
        category: "General Knowledge",
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correct: 3,
        explanation: "The Pacific Ocean is the largest, covering about 165 million square kilometres — more than all land masses combined. It spans from the Arctic in the north to the Antarctic in the south."
    },
    {
        id: 12,
        category: "Movies",
        question: "In the film 'Inception', what is a 'totem' used for?",
        options: ["To enter dreams", "To distinguish reality from dreams", "To communicate with other dreamers", "To stabilise dream architecture"],
        correct: 1,
        explanation: "In Inception, a totem is a small personal object that behaves differently in dreams vs reality, allowing the owner to determine which state they are in. Cobb's totem is a spinning top."
    },
    {
        id: 13,
        category: "Cybersecurity",
        question: "What type of attack involves overwhelming a server with traffic to make it unavailable?",
        options: ["Phishing", "SQL Injection", "DDoS Attack", "Man-in-the-Middle"],
        correct: 2,
        explanation: "A Distributed Denial of Service (DDoS) attack floods a target server with massive traffic from multiple sources, exhausting its resources and making it unavailable to legitimate users."
    },
    {
        id: 14,
        category: "Cybersecurity",
        question: "What does 'HTTPS' use to encrypt communication between browser and server?",
        options: ["SSL/TLS", "RSA only", "AES-256", "SHA-256"],
        correct: 0,
        explanation: "HTTPS uses SSL/TLS (Secure Sockets Layer / Transport Layer Security) protocols to encrypt data in transit, ensuring confidentiality and integrity between the client and server."
    },
    {
        id: 15,
        category: "Cybersecurity",
        question: "What is a 'zero-day' vulnerability?",
        options: ["A bug fixed within 24 hours", "An exploit with no known patch yet", "A virus that activates at midnight", "A firewall misconfiguration"],
        correct: 1,
        explanation: "A zero-day vulnerability is a software flaw unknown to the vendor, meaning there are zero days of protection. Attackers can exploit it before a patch is developed and deployed."
    },
    {
        id: 16,
        category: "Cybersecurity",
        question: "Which of these is an example of social engineering?",
        options: ["Brute force attack", "Phishing email", "Port scanning", "Buffer overflow"],
        correct: 1,
        explanation: "Phishing is a social engineering attack that manipulates people psychologically rather than exploiting technical vulnerabilities. Attackers impersonate trusted entities to steal credentials or data."
    },
    {
        id: 17,
        category: "Cybersecurity",
        question: "What is the purpose of a VPN?",
        options: ["Speed up internet connection", "Block all advertisements", "Encrypt traffic and mask IP address", "Scan for malware"],
        correct: 2,
        explanation: "A VPN (Virtual Private Network) creates an encrypted tunnel for your traffic and masks your real IP address, protecting your privacy especially on public networks."
    },
    {
        id: 18,
        category: "Gaming",
        question: "Which game franchise features the protagonist 'Master Chief'?",
        options: ["Call of Duty", "Destiny", "Halo", "Titanfall"],
        correct: 2,
        explanation: "Master Chief (John-117) is the iconic protagonist of the Halo franchise, developed originally by Bungie and later 343 Industries. The series began in 2001 with Halo: Combat Evolved."
    },
    {
        id: 19,
        category: "Gaming",
        question: "What year was the original PlayStation released in Japan?",
        options: ["1992", "1993", "1994", "1995"],
        correct: 2,
        explanation: "Sony's original PlayStation was released in Japan on December 3, 1994. It launched in North America and Europe in 1995 and went on to sell over 102 million units worldwide."
    },
    {
        id: 20,
        category: "Gaming",
        question: "In Minecraft, what material is required to craft the strongest tools and armour?",
        options: ["Diamond", "Obsidian", "Netherite", "Emerald"],
        correct: 2,
        explanation: "Netherite, introduced in the Nether Update (1.16), is stronger than Diamond. It's crafted by combining Diamond gear with Netherite Ingots, which are made from Ancient Debris found in the Nether."
    },
    {
        id: 21,
        category: "Gaming",
        question: "Which game is credited with popularising the Battle Royale genre on PC?",
        options: ["Fortnite", "PUBG", "Apex Legends", "H1Z1"],
        correct: 1,
        explanation: "PlayerUnknown's Battlegrounds (PUBG), released in 2017, is widely credited with popularising the Battle Royale genre at scale, inspiring Fortnite and dozens of other titles."
    },
    {
        id: 22,
        category: "Gaming",
        question: "What is the best-selling video game of all time?",
        options: ["Tetris", "GTA V", "Minecraft", "Wii Sports"],
        correct: 2,
        explanation: "Minecraft has sold over 300 million copies across all platforms, making it the best-selling video game of all time. It was created by Markus 'Notch' Persson and released in 2011."
    },
    {
        id: 23,
        category: "Tech",
        question: "What does 'API' stand for?",
        options: ["Application Programming Interface", "Automated Process Integration", "Applied Program Index", "Application Process Interpreter"],
        correct: 0,
        explanation: "API stands for Application Programming Interface. It defines how software components interact, allowing developers to use pre-built functionality without knowing the underlying implementation."
    },
    {
        id: 24,
        category: "Science",
        question: "What is the most abundant gas in Earth's atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
        correct: 2,
        explanation: "Nitrogen makes up approximately 78% of Earth's atmosphere, followed by oxygen at 21%. Despite being essential to life, nitrogen is relatively inert in its atmospheric form (N2)."
    }
];

const MOCK_LEADERBOARD = [
    { username: "QuantumQueen", score: 12500, accuracy: 94, streak: 12, category: "Science", quizzesDone: 42 },
    { username: "CodeNinja_X", score: 11200, accuracy: 88, streak: 8, category: "Tech", quizzesDone: 38 },
    { username: "CinematicSage", score: 10800, accuracy: 85, streak: 15, category: "Movies", quizzesDone: 35 },
    { username: "HistoryHunter", score: 9500, accuracy: 82, streak: 10, category: "History", quizzesDone: 30 },
    { username: "GeekGodfather", score: 8900, accuracy: 78, streak: 6, category: "Tech", quizzesDone: 27 },
    { username: "AstralBoy", score: 7600, accuracy: 75, streak: 9, category: "Science", quizzesDone: 22 },
    { username: "Neuromancer", score: 6800, accuracy: 71, streak: 4, category: "General Knowledge", quizzesDone: 20 },
    { username: "VoidArcher", score: 5900, accuracy: 68, streak: 3, category: "Movies", quizzesDone: 18 }
];

const ACHIEVEMENTS_DEF = [
    { id: 'first_quiz', name: 'First Step', desc: 'Complete your first quiz', icon: 'rocket_launch' },
    { id: 'perfect_score', name: 'Flawless', desc: 'Score 100% on any quiz', icon: 'workspace_premium' },
    { id: 'streak_3', name: 'On Fire', desc: 'Get a 3-answer streak', icon: 'local_fire_department' },
    { id: 'top_10', name: 'Top 10', desc: 'Reach Global Top 10', icon: 'leaderboard' },
    { id: 'speed_demon', name: 'Speed Demon', desc: 'Answer in under 5 seconds', icon: 'bolt' },
    { id: 'quiz_5', name: 'Dedicated', desc: 'Complete 5 quizzes', icon: 'school' }
];

// ==========================================
// STATE
// ==========================================

const state = {
    currentView: 'home',
    currentUser: null,
    selectedCategory: 'all',

    // Quiz session
    questions: [],
    currentQ: 0,
    score: 0,
    timer: 30,
    timerInterval: null,
    isAnswered: false,
    quizStartTime: null,
    fastestAnswer: 999,
    answerRecord: [],
    currentStreak: 0,
    bestStreak: 0,

    // Leaderboard
    lbPage: 8
};

// ==========================================
// UTILS
// ==========================================

function getInitials(name) {
    if (!name) return '?';
    return name.trim().split(/\s+/).map(n => n[0]).join('').toUpperCase().substring(0, 2);
}

function formatTime(seconds) {
    if (seconds < 60) return `${seconds}s`;
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}m ${s.toString().padStart(2, '0')}s`;
}

function showToast(msg, type = 'success') {
    const toast = document.getElementById('toast');
    const icon = document.getElementById('toast-icon');
    const msgEl = document.getElementById('toast-msg');
    icon.textContent = type === 'success' ? 'check_circle' : type === 'error' ? 'error' : 'info';
    icon.style.color = type === 'success' ? 'var(--tertiary)' : type === 'error' ? 'var(--error)' : 'var(--primary)';
    msgEl.textContent = msg;
    toast.classList.remove('hidden');
    toast.classList.add('show');
    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.classList.add('hidden'), 300);
    }, 2800);
}

function saveSession(session) {
    localStorage.setItem('quiznow_session', JSON.stringify(session));
}

function loadSession() {
    try {
        const raw = localStorage.getItem('quiznow_session');
        return raw ? JSON.parse(raw) : null;
    } catch { return null; }
}

function getLeaderboard() {
    try {
        const raw = localStorage.getItem('quiznow_leaderboard');
        return raw ? JSON.parse(raw) : [...MOCK_LEADERBOARD];
    } catch { return [...MOCK_LEADERBOARD]; }
}

function saveLeaderboard(lb) {
    localStorage.setItem('quiznow_leaderboard', JSON.stringify(lb));
}

// ==========================================
// ROUTER
// ==========================================

function showView(viewId) {
    if (viewId === 'quiz' && state.currentView !== 'quiz') {
        startQuiz();
        return;
    }

    if (viewId === 'profile' && !state.currentUser) {
        showView('auth');
        switchAuthTab('login');
        return;
    }

    document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));

    const target = document.getElementById(`${viewId}-view`);
    if (!target) return;
    target.classList.remove('hidden');
    state.currentView = viewId;

    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.toggle('active', item.dataset.view === viewId);
    });
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.toggle('active', link.dataset.view === viewId);
    });

    if (viewId !== 'quiz') clearInterval(state.timerInterval);

    const authView = viewId === 'auth';
    const quizViews = ['quiz'];
    document.getElementById('desktop-nav').classList.toggle('hidden', authView);
    document.getElementById('side-nav').style.display = (authView || quizViews.includes(viewId)) ? 'none' : '';
    document.getElementById('bottom-nav').style.display = authView ? 'none' : '';

    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (viewId === 'leaderboard') renderLeaderboard();
    if (viewId === 'profile') renderProfile();
    if (viewId === 'home') renderHomeStats();
}

// ==========================================
// SESSION / AUTH
// ==========================================

function initSession() {
    const session = loadSession();
    if (session && session.isLoggedIn) {
        state.currentUser = session;
        updateHeaderAuth(true);
    } else {
        updateHeaderAuth(false);
    }
}

function updateHeaderAuth(loggedIn) {
    const authBtns = document.getElementById('auth-buttons');
    const userInfo = document.getElementById('user-info');
    const desktopNav = document.getElementById('desktop-nav');

    if (loggedIn && state.currentUser) {
        authBtns.classList.add('hidden');
        userInfo.classList.remove('hidden');
        desktopNav.classList.remove('hidden');
        document.getElementById('header-pts').textContent = `LVL ${state.currentUser.lvl} \u2022 ${state.currentUser.pts.toLocaleString()} PTS`;
        document.getElementById('header-avatar').textContent = getInitials(state.currentUser.user);
    } else {
        authBtns.classList.remove('hidden');
        userInfo.classList.add('hidden');
        desktopNav.classList.add('hidden');
    }
}

function switchAuthTab(tab) {
    const indicator = document.getElementById('tabIndicator');
    const container = document.getElementById('authFormsContainer');
    const btns = document.querySelectorAll('.tab-btn');

    if (tab === 'login') {
        indicator.style.transform = 'translateX(0)';
        container.style.transform = 'translateX(0)';
        btns[0].classList.add('active');
        btns[1].classList.remove('active');
    } else {
        indicator.style.transform = 'translateX(100%)';
        container.style.transform = 'translateX(-50%)';
        btns[1].classList.add('active');
        btns[0].classList.remove('active');
    }
}

function togglePassword(icon) {
    const input = icon.previousElementSibling;
    if (!input || input.tagName !== 'INPUT') return;
    if (input.type === 'password') {
        input.type = 'text';
        icon.textContent = 'visibility';
    } else {
        input.type = 'password';
        icon.textContent = 'visibility_off';
    }
}

function handleAuth(event, type) {
    event.preventDefault();
    const form = event.target;
    const btn = form.querySelector('button[type="submit"]');
    let valid = true;

    form.querySelectorAll('.input-group').forEach(g => g.classList.remove('has-error', 'has-success'));
    form.querySelectorAll('.auth-error-banner').forEach(b => b.classList.add('hidden'));

    if (type === 'signup') {
        const username = document.getElementById('signup-user').value.trim();
        const email = document.getElementById('signup-email').value.trim();
        const pass = document.getElementById('signup-pass').value;
        const confirm = document.getElementById('signup-confirm').value;

        if (username.length < 3) { setFieldError('signup-user-group', 'signup-user-err', 'Username must be at least 3 characters.'); valid = false; }
        else setFieldSuccess('signup-user-group');

        if (!isValidEmail(email)) { setFieldError('signup-email-group', 'signup-email-err', 'Please enter a valid email address.'); valid = false; }
        else setFieldSuccess('signup-email-group');

        if (pass.length < 6) { setFieldError('signup-pass-group', 'signup-pass-err', 'Password must be at least 6 characters.'); valid = false; }
        else setFieldSuccess('signup-pass-group');

        if (pass !== confirm) { setFieldError('signup-confirm-group', 'signup-confirm-err', 'Passwords do not match.'); valid = false; }
        else if (pass.length >= 6) setFieldSuccess('signup-confirm-group');

        if (!valid) return;

        const existing = loadSession();
        if (existing && existing.isLoggedIn && existing.email === email) {
            showBanner('signup-banner', 'An account with this email already exists.');
            return;
        }

        btn.classList.add('btn-loading');
        btn.disabled = true;

        setTimeout(() => {
            const session = createNewSession(username, email);
            saveSession(session);
            state.currentUser = session;
            updateHeaderAuth(true);
            updateLeaderboardWithUser();
            showView('home');
            showToast(`Welcome to QuizNow, ${username}!`);
            btn.classList.remove('btn-loading');
            btn.disabled = false;
        }, 1200);

    } else {
        const email = document.getElementById('login-email').value.trim();
        const pass = document.getElementById('login-pass').value;

        if (!isValidEmail(email)) { setFieldError('login-email-group', 'login-email-err', 'Please enter a valid email address.'); valid = false; }
        if (!pass) { setFieldError('login-pass-group', 'login-pass-err', 'Password is required.'); valid = false; }
        if (!valid) return;

        btn.classList.add('btn-loading');
        btn.disabled = true;

        setTimeout(() => {
            const saved = loadSession();
            if (saved && saved.email === email) {
                state.currentUser = saved;
                state.currentUser.isLoggedIn = true;
                saveSession(state.currentUser);
                updateHeaderAuth(true);
                showView('home');
                showToast(`Welcome back, ${state.currentUser.user}!`);
            } else {
                showBanner('login-banner', 'No account found with that email. Please sign up first.');
            }
            btn.classList.remove('btn-loading');
            btn.disabled = false;
        }, 1000);
    }
}

function handleGoogleAuth() {
    const name = 'Google User';
    const email = 'google.user@gmail.com';
    const session = createNewSession(name, email);
    saveSession(session);
    state.currentUser = session;
    updateHeaderAuth(true);
    updateLeaderboardWithUser();
    showView('home');
    showToast('Signed in with Google!');
}

function createNewSession(username, email) {
    return {
        isLoggedIn: true,
        user: username,
        email: email,
        lvl: 1,
        pts: 0,
        bestStreak: 0,
        quizzesDone: 0,
        accuracy: 0,
        totalCorrect: 0,
        totalAnswered: 0,
        joinDate: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
        history: [],
        achievements: []
    };
}

function handleLogout() {
    localStorage.removeItem('quiznow_session');
    state.currentUser = null;
    updateHeaderAuth(false);
    toggleLogoutModal(false);
    showView('home');
    showToast('You have been logged out.', 'info');
}

function setFieldError(groupId, errId, msg) {
    const group = document.getElementById(groupId);
    const err = document.getElementById(errId);
    if (group) group.classList.add('has-error');
    if (err) err.textContent = msg;
}

function setFieldSuccess(groupId) {
    const group = document.getElementById(groupId);
    if (group) { group.classList.remove('has-error'); group.classList.add('has-success'); }
}

function showBanner(bannerId, msg) {
    const banner = document.getElementById(bannerId);
    const msgEl = banner.querySelector('span:last-child');
    if (msgEl) msgEl.textContent = msg;
    banner.classList.remove('hidden');
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ==========================================
// HOME
// ==========================================

function startQuizFromHome() {
    if (!state.currentUser) {
        showView('auth');
        switchAuthTab('login');
        showToast('Please log in to start a quiz.', 'info');
        return;
    }
    startQuiz();
}

function renderHomeStats() {
    if (!state.currentUser) {
        document.getElementById('home-streak').textContent = '0 Days';
        document.getElementById('home-streak-bar').style.width = '0%';
        document.getElementById('home-rank-label').textContent = 'Log in to track rank';
        return;
    }
    const user = state.currentUser;
    document.getElementById('home-streak').textContent = `${user.bestStreak || 0} Best`;
    const streakPct = Math.min(((user.bestStreak || 0) / 20) * 100, 100);
    document.getElementById('home-streak-bar').style.width = `${streakPct}%`;
    const lb = getLeaderboard();
    const rank = lb.findIndex(u => u.username === user.user) + 1;
    document.getElementById('home-rank-label').textContent = rank > 0 ? `Rank #${rank} Global` : 'Start playing';
}

function startLiveCountdown() {
    const el = document.getElementById('live-countdown');
    if (!el) return;
    let total = 4 * 3600 + 22 * 60 + 15;
    setInterval(() => {
        if (total <= 0) { el.textContent = '00:00:00'; return; }
        total--;
        const h = Math.floor(total / 3600).toString().padStart(2, '0');
        const m = Math.floor((total % 3600) / 60).toString().padStart(2, '0');
        const s = (total % 60).toString().padStart(2, '0');
        el.textContent = `${h}:${m}:${s}`;
    }, 1000);
}

// ==========================================
// CATEGORY FILTER
// ==========================================

function setCategory(cat) {
    state.selectedCategory = cat;

    // Update chip active state
    const catChips = document.getElementById('category-chips');
    if (catChips) {
        catChips.querySelectorAll('.chip').forEach(c => {
            c.classList.toggle('active', c.dataset.cat === cat);
        });
    }

    // Show/hide bento cards based on category
    document.querySelectorAll('.bento-card').forEach(card => {
        const cardCat = card.dataset.cat;
        if (cat === 'all' || cardCat === cat || cardCat === 'all') {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}

// ==========================================
// QUIZ LOGIC
// ==========================================

function startQuiz() {
    const pool = state.selectedCategory === 'all'
        ? QUESTIONS
        : QUESTIONS.filter(q => q.category.toLowerCase() === state.selectedCategory.toLowerCase());

    if (pool.length === 0) {
        showToast('No questions available for this category yet.', 'info');
        return;
    }

    const shuffled = [...pool].sort(() => Math.random() - 0.5).slice(0, Math.min(10, pool.length));

    state.questions = shuffled;
    state.currentQ = 0;
    state.score = 0;
    state.fastestAnswer = 999;
    state.answerRecord = [];
    state.currentStreak = 0;
    state.bestStreak = 0;
    state.quizStartTime = Date.now();

    document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
    document.getElementById('quiz-view').classList.remove('hidden');
    state.currentView = 'quiz';
    document.getElementById('side-nav').style.display = 'none';
    window.scrollTo({ top: 0 });

    renderQuestion();
}

function renderQuestion() {
    if (state.currentQ >= state.questions.length) {
        endQuiz();
        return;
    }

    const q = state.questions[state.currentQ];
    state.isAnswered = false;
    state.timer = 30;

    const pct = Math.round(((state.currentQ + 1) / state.questions.length) * 100);
    document.getElementById('progress-text').textContent = `Question ${state.currentQ + 1} of ${state.questions.length}`;
    document.getElementById('progress-pct').textContent = `${pct}%`;
    document.getElementById('progress-bar').style.width = `${pct}%`;

    document.getElementById('question-cat-tag').textContent = q.category;
    document.getElementById('question-display').textContent = q.question;
    document.getElementById('live-score').textContent = `${state.score} pts`;
    document.getElementById('live-streak').textContent = `${state.currentStreak} streak`;

    const grid = document.getElementById('options-grid');
    grid.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];
    q.options.forEach((opt, idx) => {
        const card = document.createElement('div');
        card.className = 'option-card';
        card.innerHTML = `
            <div class="option-badge">${letters[idx]}</div>
            <div class="option-text">${opt}</div>
            <span class="material-symbols-outlined option-status">check_circle</span>
        `;
        card.addEventListener('click', () => selectAnswer(idx, card));
        grid.appendChild(card);
    });

    document.getElementById('explanation-panel').classList.remove('show');
    document.getElementById('explanation-text').textContent = '';
    document.getElementById('next-btn').disabled = true;

    startTimer();
}

function startTimer() {
    clearInterval(state.timerInterval);
    const timerText = document.getElementById('timer-text');
    const timerPill = document.getElementById('timer-pill');

    timerPill.classList.remove('warning');
    timerText.textContent = `${state.timer}s`;

    state.timerInterval = setInterval(() => {
        state.timer--;
        timerText.textContent = `${state.timer}s`;
        if (state.timer <= 10) timerPill.classList.add('warning');
        if (state.timer <= 0) {
            clearInterval(state.timerInterval);
            if (!state.isAnswered) autoExpire();
        }
    }, 1000);
}

function selectAnswer(index, element) {
    if (state.isAnswered) return;
    state.isAnswered = true;
    clearInterval(state.timerInterval);

    const q = state.questions[state.currentQ];
    const isCorrect = index === q.correct;
    const timeTaken = 30 - state.timer;

    if (isCorrect && timeTaken < state.fastestAnswer) state.fastestAnswer = timeTaken;

    let pointsEarned = 0;
    if (isCorrect) {
        pointsEarned = 100;
        if (timeTaken < 15) pointsEarned += 50;
        state.score += pointsEarned;
        state.currentStreak++;
        if (state.currentStreak > state.bestStreak) state.bestStreak = state.currentStreak;
        element.classList.add('correct');
        element.querySelector('.option-status').textContent = 'check_circle';
    } else {
        state.currentStreak = 0;
        element.classList.add('wrong');
        element.querySelector('.option-status').textContent = 'cancel';
        const allCards = document.querySelectorAll('.option-card');
        allCards[q.correct].classList.add('correct');
        allCards[q.correct].querySelector('.option-status').textContent = 'check_circle';
    }

    document.querySelectorAll('.option-card').forEach((card, idx) => {
        card.classList.add('locked');
        if (idx !== index && idx !== q.correct) card.classList.add('dimmed');
    });

    state.answerRecord.push({
        questionId: q.id,
        questionText: q.question,
        category: q.category,
        userAnswerIdx: index,
        userAnswerText: index >= 0 ? q.options[index] : 'No answer (time expired)',
        correctAnswerIdx: q.correct,
        correctAnswerText: q.options[q.correct],
        isCorrect,
        timeTaken,
        explanation: q.explanation,
        pointsEarned
    });

    document.getElementById('live-score').textContent = `${state.score} pts`;
    document.getElementById('live-streak').textContent = `${state.currentStreak} streak`;
    document.getElementById('explanation-text').textContent = q.explanation;
    document.getElementById('explanation-panel').classList.add('show');
    document.getElementById('next-btn').disabled = false;
}

function autoExpire() {
    if (state.isAnswered) return;
    state.isAnswered = true;
    state.currentStreak = 0;

    const q = state.questions[state.currentQ];
    document.querySelectorAll('.option-card').forEach((card, idx) => {
        card.classList.add('locked');
        if (idx === q.correct) {
            card.classList.add('correct');
            card.querySelector('.option-status').textContent = 'check_circle';
        } else {
            card.classList.add('dimmed');
        }
    });

    state.answerRecord.push({
        questionId: q.id,
        questionText: q.question,
        category: q.category,
        userAnswerIdx: -1,
        userAnswerText: 'Time expired',
        correctAnswerIdx: q.correct,
        correctAnswerText: q.options[q.correct],
        isCorrect: false,
        timeTaken: 30,
        explanation: q.explanation,
        pointsEarned: 0
    });

    document.getElementById('live-streak').textContent = '0 streak';
    document.getElementById('explanation-text').textContent = q.explanation;
    document.getElementById('explanation-panel').classList.add('show');
    document.getElementById('next-btn').disabled = false;
    showToast('Time expired!', 'error');
}

function nextQuestion() {
    state.currentQ++;
    renderQuestion();
}

function endQuiz() {
    clearInterval(state.timerInterval);

    const totalTime = Math.round((Date.now() - state.quizStartTime) / 1000);
    const correctCount = state.answerRecord.filter(r => r.isCorrect).length;
    const total = state.answerRecord.length;
    const accuracy = total > 0 ? Math.round((correctCount / total) * 100) : 0;

    if (state.currentUser) {
        const user = state.currentUser;

        user.history = user.history || [];
        user.history.push({
            date: new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short' }),
            category: state.questions[0]?.category || 'Mixed',
            scorePercent: accuracy,
            correct: correctCount,
            total,
            time: formatTime(totalTime),
            pts: state.score
        });

        user.achievements = user.achievements || [];
        if (user.quizzesDone === 0 && !user.achievements.includes('first_quiz')) {
            user.achievements.push('first_quiz');
            showToast('Achievement unlocked: First Step!');
        }
        if (accuracy === 100 && !user.achievements.includes('perfect_score')) {
            user.achievements.push('perfect_score');
            showToast('Achievement unlocked: Flawless!');
        }
        if (state.bestStreak >= 3 && !user.achievements.includes('streak_3')) {
            user.achievements.push('streak_3');
            showToast('Achievement unlocked: On Fire!');
        }
        if (state.fastestAnswer < 5 && !user.achievements.includes('speed_demon')) {
            user.achievements.push('speed_demon');
            showToast('Achievement unlocked: Speed Demon!');
        }

        user.pts += state.score;
        user.quizzesDone++;
        user.totalCorrect = (user.totalCorrect || 0) + correctCount;
        user.totalAnswered = (user.totalAnswered || 0) + total;
        user.accuracy = user.totalAnswered > 0 ? Math.round((user.totalCorrect / user.totalAnswered) * 100) : 0;
        if (state.bestStreak > (user.bestStreak || 0)) user.bestStreak = state.bestStreak;
        user.lvl = Math.floor(user.pts / 5000) + 1;

        if (user.quizzesDone >= 5 && !user.achievements.includes('quiz_5')) {
            user.achievements.push('quiz_5');
            showToast('Achievement unlocked: Dedicated!');
        }

        saveSession(user);
        updateHeaderAuth(true);
        updateLeaderboardWithUser();

        const lb = getLeaderboard();
        const rank = lb.findIndex(u => u.username === user.user) + 1;
        if (rank > 0 && rank <= 10 && !user.achievements.includes('top_10')) {
            user.achievements.push('top_10');
            saveSession(user);
            showToast('Achievement unlocked: Top 10!');
        }
    }

    renderResults(correctCount, total, accuracy, totalTime);

    document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
    document.getElementById('results-view').classList.remove('hidden');
    state.currentView = 'results';
    document.getElementById('side-nav').style.display = '';
    window.scrollTo({ top: 0 });
}

function restartQuiz() {
    startQuiz();
}

function exitQuiz() {
    clearInterval(state.timerInterval);
    toggleExitModal(false);
    showView('home');
}

// ==========================================
// RESULTS
// ==========================================

function renderResults(correctCount, total, accuracy, totalTime) {
    const donutRing = document.getElementById('donut-ring');
    setTimeout(() => {
        donutRing.style.background = `conic-gradient(var(--tertiary) 0% ${accuracy}%, var(--surface-highest) ${accuracy}% 100%)`;
    }, 100);
    document.getElementById('donut-pct').textContent = `${accuracy}%`;

    let title, subtitle;
    if (accuracy >= 90) { title = 'Elite Performance'; subtitle = "You're in the top tier. Exceptional precision and speed."; }
    else if (accuracy >= 70) { title = 'Strong Showing'; subtitle = "Solid performance. A few more reps and you'll be flawless."; }
    else if (accuracy >= 50) { title = 'Good Effort'; subtitle = "You're getting there. Keep studying and try again!"; }
    else { title = 'Keep Practising'; subtitle = "Every expert was once a beginner. Review and come back stronger."; }

    document.getElementById('results-title').textContent = title;
    document.getElementById('results-subtitle').textContent = subtitle;
    document.getElementById('res-time').textContent = formatTime(totalTime);
    document.getElementById('res-correct').textContent = `${correctCount}/${total}`;
    document.getElementById('res-streak').textContent = state.bestStreak;
    document.getElementById('res-pts').textContent = `+${state.score}`;

    const list = document.getElementById('review-list');
    list.innerHTML = '';
    state.answerRecord.forEach((rec, idx) => {
        const card = document.createElement('div');
        card.className = `glass-high review-card ${rec.isCorrect ? 'review-correct' : 'review-wrong'}`;
        card.innerHTML = `
            <div class="review-card-top">
                <span class="review-q-num">Question ${String(idx + 1).padStart(2, '0')} &bull; ${rec.category}</span>
                <span class="material-symbols-outlined" style="color:${rec.isCorrect ? 'var(--tertiary)' : 'var(--error)'}; font-variation-settings:'FILL' 1">${rec.isCorrect ? 'check_circle' : 'cancel'}</span>
            </div>
            <div class="review-q-text">${rec.questionText}</div>
            <div class="review-answers">
                <div class="review-answer-box user-ans">
                    <span class="ans-label">Your Answer</span>
                    <span class="ans-val">${rec.userAnswerText}</span>
                </div>
                <div class="review-answer-box correct-ans">
                    <span class="ans-label">Correct Answer</span>
                    <span class="ans-val">${rec.correctAnswerText}</span>
                </div>
            </div>
            <div class="review-insight">
                <p class="review-insight-text"><strong style="color:var(--text)">Insight: </strong>${rec.explanation}</p>
            </div>
        `;
        list.appendChild(card);
    });

    renderMiniLeaderboard();
}

function renderMiniLeaderboard() {
    const lb = getLeaderboard();
    const listEl = document.getElementById('results-leaderboard-list');
    listEl.innerHTML = '';
    lb.slice(0, 5).forEach((entry, idx) => {
        const isMe = state.currentUser && entry.username === state.currentUser.user;
        const row = document.createElement('div');
        row.className = `mini-lb-row ${isMe ? 'is-me' : ''}`;
        row.innerHTML = `
            <div class="mini-avatar">${getInitials(entry.username)}</div>
            <div class="mini-lb-info">
                <div class="mini-lb-name">${entry.username}${isMe ? '<span class="you-tag">YOU</span>' : ''}</div>
                <div class="mini-lb-rank">Rank #${idx + 1}</div>
            </div>
            <div class="mini-lb-score">${entry.score.toLocaleString()}</div>
        `;
        listEl.appendChild(row);
    });
}

// ==========================================
// LEADERBOARD
// ==========================================

function updateLeaderboardWithUser() {
    if (!state.currentUser) return;
    let lb = getLeaderboard();
    const userIdx = lb.findIndex(u => u.username === state.currentUser.user);
    const userData = {
        username: state.currentUser.user,
        score: state.currentUser.pts,
        accuracy: state.currentUser.accuracy || 0,
        streak: state.currentUser.bestStreak || 0,
        category: state.currentUser.history?.length > 0
            ? state.currentUser.history[state.currentUser.history.length - 1].category
            : 'General',
        quizzesDone: state.currentUser.quizzesDone || 0
    };
    if (userIdx > -1) lb[userIdx] = userData;
    else lb.push(userData);
    lb.sort((a, b) => b.score - a.score);
    saveLeaderboard(lb);
}

function renderLeaderboard() {
    updateLeaderboardWithUser();
    const lb = getLeaderboard();

    const podiumEl = document.getElementById('podium-container');
    podiumEl.innerHTML = '';
    lb.slice(0, 3).forEach((entry, i) => {
        const rank = i + 1;
        const slot = document.createElement('div');
        slot.className = `podium-slot rank-${rank}`;
        slot.innerHTML = `
            ${rank === 1 ? '<span class="material-symbols-outlined podium-crown">workspace_premium</span><div class="podium-halo"></div>' : ''}
            <div class="podium-avatar-wrap">
                <div class="podium-avatar">${getInitials(entry.username)}</div>
                <div class="podium-medal">${rank}</div>
            </div>
            <div class="podium-name">${entry.username}</div>
            <div class="podium-score">${entry.score.toLocaleString()} PTS</div>
        `;
        podiumEl.appendChild(slot);
    });

    renderLbTable(lb);

    if (state.currentUser) {
        const rank = lb.findIndex(u => u.username === state.currentUser.user) + 1;
        document.getElementById('ps-rank').textContent = rank > 0 ? `#${rank}` : '#--';
        document.getElementById('ps-score').textContent = state.currentUser.pts.toLocaleString();
        document.getElementById('ps-streak').textContent = state.currentUser.bestStreak || 0;
        document.getElementById('ps-count').textContent = state.currentUser.quizzesDone || 0;
        const pct = Math.min(((state.currentUser.pts || 0) / 20000) * 100, 100);
        document.getElementById('ps-milestone-bar').style.width = `${pct}%`;
    }
}

function renderLbTable(lb) {
    const tbody = document.getElementById('lb-table-body');
    tbody.innerHTML = '';
    lb.slice(0, state.lbPage).forEach((entry, i) => {
        const rank = i + 1;
        const isMe = state.currentUser && entry.username === state.currentUser.user;
        const tr = document.createElement('tr');
        if (rank === 1) tr.className = 'tr-gold';
        else if (rank === 2) tr.className = 'tr-silver';
        else if (rank === 3) tr.className = 'tr-bronze';
        if (isMe) tr.classList.add('tr-me');
        tr.innerHTML = `
            <td><span class="rank-num">#${rank}</span></td>
            <td>
                <div class="player-cell">
                    <div class="player-avatar-sm">${getInitials(entry.username)}</div>
                    <span class="player-name">${entry.username}${isMe ? '<span class="you-tag">YOU</span>' : ''}</span>
                </div>
            </td>
            <td><span class="score-col">${entry.score.toLocaleString()}</span></td>
            <td>${entry.accuracy}%</td>
            <td>${entry.streak}</td>
            <td><span class="badge badge-primary">${entry.category}</span></td>
        `;
        tbody.appendChild(tr);
    });
}

function loadMoreLeaderboard() {
    state.lbPage += 5;
    renderLbTable(getLeaderboard());
}

// ==========================================
// PROFILE
// ==========================================

function renderProfile() {
    if (!state.currentUser) {
        showView('auth');
        return;
    }
    const user = state.currentUser;
    const lb = getLeaderboard();
    const rank = lb.findIndex(u => u.username === user.user) + 1;

    document.getElementById('profile-avatar-lg').textContent = getInitials(user.user);
    document.getElementById('profile-name').textContent = user.user;
    document.getElementById('profile-lvl-badge').textContent = `LVL ${user.lvl}`;
    document.getElementById('profile-join').textContent = `Joined ${user.joinDate || 'March 2026'}`;
    document.getElementById('profile-quiz-count').textContent = `${user.quizzesDone || 0} Quizzes`;

    const xpInLevel = user.pts % 5000;
    document.getElementById('xp-cur').textContent = `${xpInLevel} XP`;
    document.getElementById('xp-max').textContent = `5000 XP`;
    document.getElementById('xp-bar').style.width = `${(xpInLevel / 5000) * 100}%`;

    document.getElementById('p-total-score').textContent = user.pts.toLocaleString();
    document.getElementById('p-accuracy').textContent = `${user.accuracy || 0}%`;
    document.getElementById('p-streak').textContent = user.bestStreak || 0;
    document.getElementById('p-rank').textContent = rank > 0 ? `#${rank}` : '#--';

    const achList = document.getElementById('achievements-list');
    achList.innerHTML = '';
    ACHIEVEMENTS_DEF.forEach(def => {
        const unlocked = (user.achievements || []).includes(def.id);
        const card = document.createElement('div');
        card.className = `glass achievement-card ${unlocked ? '' : 'locked'}`;
        card.innerHTML = `
            <div class="ach-icon-wrap">
                <span class="material-symbols-outlined" style="font-variation-settings:'FILL' ${unlocked ? '1' : '0'}">${def.icon}</span>
            </div>
            <div class="ach-name">${def.name}</div>
            <div class="ach-desc">${def.desc}</div>
        `;
        achList.appendChild(card);
    });

    const histList = document.getElementById('history-list');
    histList.innerHTML = '';
    if (!user.history || user.history.length === 0) {
        histList.innerHTML = '<div class="history-empty">No quizzes played yet. Start your first quiz!</div>';
    } else {
        [...user.history].reverse().forEach(item => {
            const scoreClass = item.scorePercent >= 80 ? 'score-hi' : item.scorePercent >= 50 ? 'score-mid' : 'score-lo';
            const row = document.createElement('div');
            row.className = 'history-item';
            row.innerHTML = `
                <div class="history-icon-wrap"><span class="material-symbols-outlined">science</span></div>
                <span class="history-name">${item.category || 'Mixed'}</span>
                <span class="history-date">${item.date}</span>
                <span class="history-score ${scoreClass}">${item.scorePercent}%</span>
                <span class="history-detail">${item.correct}/${item.total}</span>
            `;
            histList.appendChild(row);
        });
    }
}

// ==========================================
// MODALS
// ==========================================

function toggleExitModal(show) {
    document.getElementById('exit-modal').classList.toggle('hidden', !show);
}

function toggleLogoutModal(show) {
    document.getElementById('logout-modal').classList.toggle('hidden', !show);
}

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) {
        e.target.classList.add('hidden');
    }
});

// ==========================================
// INIT
// ==========================================

document.addEventListener('DOMContentLoaded', () => {

    // Category chips
    const catChips = document.getElementById('category-chips');
    if (catChips) {
        catChips.querySelectorAll('.chip').forEach(chip => {
            chip.addEventListener('click', () => {
                setCategory(chip.dataset.cat);
            });
        });
    }

    // Leaderboard time filter
    const lbToggle = document.getElementById('lb-time-toggle');
    if (lbToggle) {
        lbToggle.querySelectorAll('.toggle-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                lbToggle.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                renderLeaderboard();
            });
        });
    }

    initSession();
    showView('home');
    startLiveCountdown();

    if (window.innerWidth <= 1024) {
        const sn = document.getElementById('side-nav');
        if (sn) sn.style.display = 'none';
    }
});
