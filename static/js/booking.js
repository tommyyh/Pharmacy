// Append CSRF token on every request
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

const getElement = (tag) => {
  const element = document.querySelector(tag);

  return element;
};

const dateInput = getElement('#date');
const nextButton = getElement('#next_button');

nextButton.addEventListener('click', async () => {
  const res = await axios.post('/new-date/', {
    date: dateInput.value,
  });

  console.log(res.data.times_taken);
});
