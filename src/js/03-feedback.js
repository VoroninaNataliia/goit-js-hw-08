import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  input: document.querySelector('input'),
};

refs.form.addEventListener('submit', onFormSubmit);

refs.form.addEventListener('input', throttle(onInput), 500);

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}
const userInfo = {};

function onInput(e) {
  userInfo[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(userInfo));
}

onTextareaFill();

function onTextareaFill(e) {
  const savedInfo = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (savedInfo) {
    console.log(savedInfo);
    refs.textarea.value = savedInfo.message;
    refs.input.value = savedInfo.email;
  }
}
