document.addEventListener('DOMContentLoaded', function () {
  const feedbackForm = document.querySelector('.feedback-form');

  function saveFormData() {
    const emailValue = feedbackForm.elements.email.value.trim();
    const messageValue = feedbackForm.elements.message.value.trim();

    localStorage.setItem('feedback-form-state', JSON.stringify({ email: emailValue, message: messageValue }));
  }

  const storedState = localStorage.getItem('feedback-form-state');
  if (storedState) {
    const parsedState = JSON.parse(storedState);

    feedbackForm.elements.email.value = parsedState.email || '';
    feedbackForm.elements.message.value = parsedState.message || '';
  }

  feedbackForm.addEventListener('input', function (event) {
    saveFormData();
  });

  feedbackForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const emailValue = feedbackForm.elements.email.value.trim();
    const messageValue = feedbackForm.elements.message.value.trim();

    if (emailValue && messageValue) {
      const submittedData = {
        email: emailValue,
        message: messageValue
      };

      console.log('Submitted Data:', submittedData);

      localStorage.removeItem('feedback-form-state');
      feedbackForm.reset();
    }
  });
});
