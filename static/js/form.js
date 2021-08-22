// Append CSRF token on every request
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

(() => {
  const getElemet = (className) => {
    const element = document.querySelector(className);

    return element;
  };

  const nameInput = getElemet('#name');
  const emailInput = getElemet('#email');
  const msgInput = getElemet('#msg');
  const nameLabel = getElemet('#name_label');
  const emailLabel = getElemet('#email_label');
  const msgLabel = getElemet('#msg_label');
  const button = getElemet('.send_button');
  const title = getElemet('#socials_title');

  const changeTitle = () => {
    if (window.innerWidth > 1025) {
      title.innerHTML = 'Socials & Informations';
    } else {
      title.innerHTML = 'Socials & Info';
    }
  };

  window.addEventListener('resize', changeTitle);

  // Adjust floating labels on focus
  nameInput.addEventListener('focusin', () => {
    nameLabel.style.top = '31%';
    nameLabel.style.color = '#acacac';
    nameLabel.style.fontSize = '0.55rem';

    nameLabel.style.color = '#575757';
    nameLabel.innerHTML = 'Full Name';
    nameInput.style.border = 'none';
  });

  nameInput.addEventListener('focusout', () => {
    if (!nameInput.value) {
      nameLabel.style.top = '46%';
      nameLabel.style.color = '#000';
      nameLabel.style.fontSize = '0.81rem';
    }
  });

  emailInput.addEventListener('focusin', () => {
    emailLabel.style.top = '31%';
    emailLabel.style.color = '#acacac';
    emailLabel.style.fontSize = '0.55rem';

    emailLabel.style.color = '#575757';
    emailLabel.innerHTML = 'Email Address';
    emailInput.style.border = 'none';
  });

  emailInput.addEventListener('focusout', () => {
    if (!emailInput.value) {
      emailLabel.style.top = '46%';
      emailLabel.style.color = '#000';
      emailLabel.style.fontSize = '0.81rem';
    }
  });

  msgInput.addEventListener('focusin', () => {
    msgLabel.style.top = '18%';
    msgLabel.style.color = '#acacac';
    msgLabel.style.fontSize = '0.55rem';

    msgLabel.style.color = '#575757';
    msgLabel.innerHTML = 'Your Message';
    msgInput.style.border = 'none';
  });

  msgInput.addEventListener('focusout', () => {
    if (!msgInput.value) {
      msgLabel.style.top = '19%';
      msgLabel.style.color = '#000';
      msgLabel.style.fontSize = '0.81rem';
    }
  });
})();
