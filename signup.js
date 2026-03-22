import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyC9PzIapkX_uwileMw3Ffqkg8d1_57RjtM",
  authDomain: "agrisetu-75ccd.firebaseapp.com",
  databaseURL: "https://agrisetu-75ccd-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "agrisetu-75ccd",
  storageBucket: "agrisetu-75ccd.firebasestorage.app",
  messagingSenderId: "134242302853",
  appId: "1:134242302853:web:d123e9230ea5ffc30fa2ec",
  measurementId: "G-WED85HFEGQ"
};

const app  = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db   = getDatabase(app);

async function registerUser(profileData, password) {
  // Use phone as fake email since you're collecting phone numbers
  const fakeEmail = profileData.phone.replace('+91','') + '@agrisetu.app';
  const cred = await createUserWithEmailAndPassword(auth, fakeEmail, password);
  const uid = cred.user.uid;

  // Save full farmer profile under their UID
  await set(ref(db, 'farmers/' + uid + '/profile'), {
    name:     profileData.name,
    phone:    profileData.phone,
    village:  profileData.village,
    district: profileData.district,
    state:    profileData.state,
    land:     profileData.land,
    crop:     profileData.crop,
    lang:     profileData.lang,
    referral: profileData.referral || null,
    createdAt: Date.now()
  });

  return uid;
}

// ── STATE ──
let currentStep = 1;
let selectedLang = 'en';

// ── STEP NAVIGATION ──
function goToStep(step) {
  // Hide all steps
  document.querySelectorAll('.form-step').forEach(el => el.classList.remove('active'));
  // Show target step
  document.getElementById('step-' + step).classList.add('active');
  // Update dots
  for (let i = 1; i <= 3; i++) {
    const dot = document.getElementById('step-dot-' + i);
    dot.classList.remove('active', 'done');
    if (i === step) dot.classList.add('active');
    if (i < step)  dot.classList.add('done');
  }
  // Update connector lines
  const lines = document.querySelectorAll('.step-line');
  lines.forEach((l, i) => {
    l.classList.toggle('done', i < step - 1);
  });
  currentStep = step;
  window.scrollTo(0, 0);
}

function nextStep(from) {
  if (!validate(from)) return;
  goToStep(from + 1);
}

function prevStep(from) {
  goToStep(from - 1);
}

// ── VALIDATION ──
function validate(step) {
  clearErrors();
  let valid = true;

  if (step === 1) {
    const name = val('name');
    const phone = val('phone');
    const pwd = val('password');

    if (!name || name.trim().length < 2) {
      showError('name', 'Please enter your full name'); valid = false;
    }
    if (!phone || !/^\d{10}$/.test(phone.trim())) {
      showError('phone', 'Enter a valid 10-digit mobile number'); valid = false;
    }
    if (!pwd || pwd.length < 8) {
      showError('password', 'Password must be at least 8 characters'); valid = false;
    }
  }

  if (step === 2) {
    const village = val('village');
    const district = val('district');
    const state = val('state');
    const land = val('land');

    if (!village || village.trim().length < 2) {
      showError('village', 'Please enter your village or town name'); valid = false;
    }
    if (!district || district.trim().length < 2) {
      showError('district', 'Please enter your district'); valid = false;
    }
    if (!state) {
      showError('state', 'Please select your state'); valid = false;
    }
    if (!land || isNaN(land) || Number(land) < 0) {
      showError('land', 'Please enter your land holding'); valid = false;
    }
  }

  if (step === 3) {
    const terms = document.getElementById('terms').checked;
    if (!terms) {
      showError('terms', 'Please accept the terms to continue'); valid = false;
    }
  }

  return valid;
}

function val(id) {
  const el = document.getElementById(id);
  return el ? el.value : '';
}

function showError(id, msg) {
  const el = document.getElementById('err-' + id);
  if (el) el.textContent = msg;
  const wrap = document.getElementById(id)?.closest('.input-wrap');
  if (wrap) wrap.classList.add('error');
}

function clearErrors() {
  document.querySelectorAll('.field-error').forEach(el => el.textContent = '');
  document.querySelectorAll('.input-wrap').forEach(el => el.classList.remove('error'));
}

// ── SUBMIT ──
async function submitForm() {
  if (!validate(3)) return;

  const btn = document.getElementById('submit-btn');
  btn.disabled = true;
  btn.innerHTML = '<div class="spinner"></div> Creating account…';

  const profileData = {
    name:     val('name').trim(),
    phone:    '+91' + val('phone').trim(),
    village:  val('village').trim(),
    district: val('district').trim(),
    state:    val('state'),
    land:     val('land'),
    crop:     val('crop'),
    lang:     selectedLang,
    referral: val('referral').trim().toUpperCase() || null,
  };

  try {
    // 🔥 FIREBASE: Replace the timeout below with your real registerUser() call:
    // const user = await registerUser(profileData.phone + '@app.com', val('password'), profileData);
    //
    // For now — simulated 1.5s delay:
    const uid = await registerUser(profileData, val('password'));
    localStorage.setItem('uid', uid);

    // Save lang preference
    localStorage.setItem('lang', selectedLang);

    // Show success
    document.getElementById('success-name').textContent = profileData.name.split(' ')[0];
    document.querySelectorAll('.form-step').forEach(el => el.classList.remove('active'));
    document.getElementById('step-success').classList.add('active');

    // Mark all steps done
    for (let i = 1; i <= 3; i++) {
      const dot = document.getElementById('step-dot-' + i);
      dot.classList.remove('active');
      dot.classList.add('done');
    }
    document.querySelectorAll('.step-line').forEach(l => l.classList.add('done'));

  } catch (err) {
    // 🔥 FIREBASE: Handle real errors here
    // e.g. auth/phone-already-in-use, auth/weak-password etc.
    btn.disabled = false;
    btn.innerHTML = 'Create Account <svg viewBox="0 0 24 24" fill="none"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke-linecap="round" stroke-linejoin="round"/><polyline points="22 4 12 14.01 9 11.01" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    alert('Something went wrong. Please try again.');
    console.error(err);
  }
}

// ── PASSWORD STRENGTH ──
document.getElementById('password').addEventListener('input', function () {
  const pwd = this.value;
  const fill = document.getElementById('pwd-fill');
  const label = document.getElementById('pwd-label');

  let score = 0;
  if (pwd.length >= 8)  score++;
  if (pwd.length >= 12) score++;
  if (/[A-Z]/.test(pwd)) score++;
  if (/[0-9]/.test(pwd)) score++;
  if (/[^A-Za-z0-9]/.test(pwd)) score++;

  const levels = [
    { pct: '0%',   color: 'var(--border)', text: '' },
    { pct: '25%',  color: 'var(--red)',    text: 'Weak' },
    { pct: '50%',  color: 'var(--amber)',  text: 'Fair' },
    { pct: '75%',  color: 'var(--amber)',  text: 'Good' },
    { pct: '100%', color: 'var(--green)',  text: 'Strong' },
    { pct: '100%', color: 'var(--green)',  text: 'Strong' },
  ];

  const level = levels[Math.min(score, 5)];
  fill.style.width = pwd.length ? level.pct : '0%';
  fill.style.background = level.color;
  label.textContent = pwd.length ? level.text : '';
  label.style.color = level.color;
});

// ── PASSWORD TOGGLE ──
function togglePwd(inputId, btn) {
  const input = document.getElementById(inputId);
  const isHidden = input.type === 'password';
  input.type = isHidden ? 'text' : 'password';
  btn.querySelector('svg').style.opacity = isHidden ? '0.4' : '1';
}

// ── LANGUAGE SELECTION ──
function selectLang(el) {
  document.querySelectorAll('.lang-opt').forEach(o => o.classList.remove('active'));
  el.classList.add('active');
  selectedLang = el.dataset.lang;
}

// ── PHONE — only allow digits ──
document.getElementById('phone').addEventListener('input', function () {
  this.value = this.value.replace(/\D/g, '').slice(0, 10);
});

// ── CLEAR error on input ──
document.querySelectorAll('input, select').forEach(el => {
  el.addEventListener('input', () => {
    const errEl = document.getElementById('err-' + el.id);
    if (errEl) errEl.textContent = '';
    el.closest('.input-wrap')?.classList.remove('error');
  });
});

window.nextStep = nextStep;
window.prevStep = prevStep;
window.submitForm = submitForm;
window.togglePwd = togglePwd;
window.selectLang = selectLang;