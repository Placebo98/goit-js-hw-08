import throttle from 'lodash.throttle';

const throttle = require('lodash.throttle');

const feedbackStorage = 'feedback-form-state';
const formEl = document.querySelector('.feedback-form');
const formEmail = formEl.querySelector('input');
const formMessage = formEl.querySelector('textarea');

let output = JSON.parse(localStorage.getItem(feedbackStorage)) || {
  email: '',
  message: '',
};
console.log(output);

formEmail.value = output.email;
formMessage.value = output.message;

formEl.addEventListener('input', throttle(setFeedbackForm, 500));

function setFeedbackForm(event) {
  event.preventDefault();
  output[event.target.name] = event.target.value;
  localStorage.setItem(feedbackStorage, JSON.stringify(output));
}
formEl.addEventListener('submit', throttle(getFeedbackForm, 500));

function getFeedbackForm(event) {
  event.preventDefault();
  console.log(output);
  event.target.reset();
  output = { email: '', message: '' };
  localStorage.removeItem(feedbackStorage);
}
