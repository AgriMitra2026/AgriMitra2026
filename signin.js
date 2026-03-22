import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// ── FIREBASE CONFIG (same as your other files) ──
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

// ── If user is already signed in, skip straight to dashboard ──
onAuthStateChanged(auth, (user) => {
  if (user) {
    window.location.href = 'dashboard.html';
  }
});

// ── HELPERS ──

// Converts a 10-digit mobile number to the fake email used at signup
function phoneToEmail(phone) {
  return phone.replace(/\D/g, '').slice(-10) + '@agrisetu.app';
}

function showError(msg) {
  const banner = document.getElementById('error-banner');
  document.getElementById('error-msg').textContent = msg;
  banner.classList.add('show');
}

function hideError() {
  document.getElementById('error-banner').classList.remove('show');
}

function setFieldError(fieldId, wrapperId, msg) {
  const errEl = document.getElementById('err-' + fieldId);
  const wrap = document.getElementById(wrapperId);
  if (errEl) errEl.textContent = msg;
  if (wrap) wrap.classList.add('error');
}

function clearErrors() {
  document.querySelectorAll('.field-error').forEach(el => el.textContent = '');
  document.querySelectorAll('.input-wrap').forEach(el => el.classList.remove('error'));
  hideError();
}

// ── PASSWORD TOGGLE ──
function togglePwd(inputId, btn) {
  const input = document.getElementById(inputId);
  const isHidden = input.type === 'password';
  input.type = isHidden ? 'text' : 'password';
  btn.querySelector('svg').style.opacity = isHidden ? '0.4' : '1';
}
window.togglePwd = togglePwd;

// ── SIGN IN ──
async function doSignIn() {
  clearErrors();

  const phone    = document.getElementById('signin-phone').value.trim();
  const password = document.getElementById('signin-password').value;

  // Basic validation
  let valid = true;
  if (!phone || !/^\d{10}$/.test(phone)) {
    setFieldError('phone', 'wrap-phone', 'Enter a valid 10-digit mobile number');
    valid = false;
  }
  if (!password) {
    setFieldError('password', 'wrap-password', 'Please enter your password');
    valid = false;
  }
  if (!valid) return;

  const btn = document.getElementById('signin-btn');
  btn.disabled = true;
  btn.innerHTML = '<div class="spinner"></div> Signing in…';

  try {
    const email = phoneToEmail(phone);
    const cred  = await signInWithEmailAndPassword(auth, email, password);

    // Store UID for dashboard.js to pick up
    localStorage.setItem('uid', cred.user.uid);

    // Show success state
    document.getElementById('signin-form-area').classList.add('hidden');
    document.getElementById('signin-success').classList.add('show');

    // Auto-redirect after 1.5s
    setTimeout(() => { window.location.href = 'dashboard.html'; }, 1500);

  } catch (err) {
    btn.disabled = false;
    btn.innerHTML = `Sign In <svg viewBox="0 0 24 24" fill="none"><path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4" stroke-linecap="round" stroke-linejoin="round"/><polyline points="10 17 15 12 10 7" stroke-linecap="round" stroke-linejoin="round"/><line x1="15" y1="12" x2="3" y2="12" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

    // Map Firebase error codes to friendly messages
    const errorMessages = {
      'auth/user-not-found':       'No account found with this mobile number. Please register first.',
      'auth/wrong-password':       'Incorrect password. Please try again or reset your password below.',
      'auth/invalid-credential':   'Incorrect mobile number or password. Please try again.',
      'auth/invalid-email':        'Something went wrong. Please check your mobile number.',
      'auth/too-many-requests':    'Too many failed attempts. Please wait a few minutes and try again.',
      'auth/user-disabled':        'This account has been disabled. Please contact support.',
      'auth/network-request-failed': 'Network error. Please check your internet connection.',
    };
    const friendly = errorMessages[err.code] || 'Something went wrong. Please try again.';
    showError(friendly);
    console.error('Sign-in error:', err.code, err.message);
  }
}
window.doSignIn = doSignIn;

// ── FORGOT PASSWORD ──
function showReset() {
  document.getElementById('reset-wrap').classList.add('show');
  document.getElementById('reset-phone').value = document.getElementById('signin-phone').value;
  document.getElementById('reset-success').classList.remove('show');
  hideError();
}
window.showReset = showReset;

function cancelReset() {
  document.getElementById('reset-wrap').classList.remove('show');
  document.getElementById('reset-phone').value = '';
  document.getElementById('err-reset-phone').textContent = '';
  document.getElementById('reset-success').classList.remove('show');
  document.getElementById('reset-btn').disabled = false;
  document.getElementById('reset-btn').innerHTML = `<svg viewBox="0 0 24 24" fill="none"><path d="M22 2L11 13" stroke-linecap="round" stroke-linejoin="round"/><polygon points="22 2 15 22 11 13 2 9 22 2" stroke-linecap="round" stroke-linejoin="round"/></svg> Send Reset Link`;
}
window.cancelReset = cancelReset;

async function sendReset() {
  const phone = document.getElementById('reset-phone').value.trim();
  const errEl = document.getElementById('err-reset-phone');
  errEl.textContent = '';

  if (!phone || !/^\d{10}$/.test(phone)) {
    errEl.textContent = 'Enter a valid 10-digit mobile number';
    return;
  }

  const btn = document.getElementById('reset-btn');
  btn.disabled = true;
  btn.innerHTML = '<div class="spinner"></div> Sending…';

  try {
    const email = phoneToEmail(phone);
    await sendPasswordResetEmail(auth, email);
    document.getElementById('reset-success').classList.add('show');
    btn.innerHTML = '✓ Sent';
  } catch (err) {
    btn.disabled = false;
    btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none"><path d="M22 2L11 13" stroke-linecap="round" stroke-linejoin="round"/><polygon points="22 2 15 22 11 13 2 9 22 2" stroke-linecap="round" stroke-linejoin="round"/></svg> Send Reset Link`;

    if (err.code === 'auth/user-not-found' || err.code === 'auth/invalid-email') {
      errEl.textContent = 'No account found with this mobile number.';
    } else {
      errEl.textContent = 'Could not send reset link. Please try again.';
    }
    console.error('Reset error:', err.code);
  }
}
window.sendReset = sendReset;

// ── PHONE — only allow digits ──
document.getElementById('signin-phone').addEventListener('input', function () {
  this.value = this.value.replace(/\D/g, '').slice(0, 10);
});
document.getElementById('reset-phone').addEventListener('input', function () {
  this.value = this.value.replace(/\D/g, '').slice(0, 10);
});

// ── Clear field errors on input ──
['signin-phone', 'signin-password'].forEach(id => {
  document.getElementById(id)?.addEventListener('input', () => {
    hideError();
    const errId = id === 'signin-phone' ? 'err-phone' : 'err-password';
    const wrapId = id === 'signin-phone' ? 'wrap-phone' : 'wrap-password';
    const errEl = document.getElementById(errId);
    const wrap  = document.getElementById(wrapId);
    if (errEl) errEl.textContent = '';
    if (wrap)  wrap.classList.remove('error');
  });
});

// ── Allow Enter key to submit ──
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const resetWrap = document.getElementById('reset-wrap');
    if (resetWrap.classList.contains('show')) {
      sendReset();
    } else {
      doSignIn();
    }
  }
});