// Append CSRF token on every request
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

(async () => {
  await axios.get('/remove-message/');
})();

const successMsg = document.querySelector('.success_message_cont');

setTimeout(() => {
  successMsg.style.right = '-26%';
}, 5000);