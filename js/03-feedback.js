
import throttle from 'lodash.throttle';

const FEEDBACK_FORM_KEY = 'feedback-form-state';
const formRef = document.querySelector('.feedback-form');

initForm();

formRef.addEventListener('input', throttle(onInputForm, 500));

formRef.addEventListener('submit', e => {
  e.preventDefault();

  if (
    e.target.elements.email.value !== '' &&
    e.target.elements.message.value !== ''
  ) {
    const formData = new FormData(formRef);

    formData.forEach((value, name) => console.log(`${name}: ${value}`));

    localStorage.removeItem(FEEDBACK_FORM_KEY);
    formRef.reset();
  } else {
    alert('need to fiil all fields');
  }
});

function onInputForm(e) {
  let savedForm = localStorage.getItem(FEEDBACK_FORM_KEY);

  savedForm = savedForm ? JSON.parse(savedForm) : {};

  savedForm[e.target.name] = e.target.value;

  localStorage.setItem(FEEDBACK_FORM_KEY, JSON.stringify(savedForm));
}

function initForm() {
  let savedForm = localStorage.getItem(FEEDBACK_FORM_KEY);

  if (savedForm) {
    savedForm = JSON.parse(savedForm);

    Object.entries(savedForm).forEach(([name, value]) => {
      formRef.elements[name].value = value;
    });
  }
}
