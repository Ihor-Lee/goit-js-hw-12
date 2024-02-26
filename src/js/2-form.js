const feedbackForm = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

function getParsedData() {
  const rawData = localStorage.getItem(STORAGE_KEY);
  if (rawData) {
    return JSON.parse(rawData);
  }
  return {};
}

function updateFormContent(data) {
  feedbackForm.email.value = data.email || '';
  feedbackForm.message.value = data.message || '';
}

function updateLocalStorage(email, message) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ email, message }));
}

function clearLocalStorage() {
  localStorage.removeItem(STORAGE_KEY);
}

feedbackForm.addEventListener('input', () => {
  const email = feedbackForm.email.value.trim();
  const message = feedbackForm.message.value.trim();
  updateLocalStorage(email, message);
});

feedbackForm.addEventListener('submit', event => {
  event.preventDefault();

  const email = feedbackForm.email.value.trim();
  const message = feedbackForm.message.value.trim();

  if (email === '' || message === '') {
    alert('Please fill in all fields.');
    return;
  }

  console.log({ email, message });

  clearLocalStorage();

  feedbackForm.reset();
});

document.addEventListener('DOMContentLoaded', () => {
  const parsedData = getParsedData();
  updateFormContent(parsedData);
});
