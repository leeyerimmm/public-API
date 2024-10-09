document.addEventListener('DOMContentLoaded', function() {
  const loginModal = document.getElementById('login');
  const deleteAccountBtn = document.getElementById('delete-account');
  const usernameInput = document.getElementById('username');
  const userDisplay = document.querySelector('.user');
  const loginForm = loginModal.querySelector('form');


  function showLoginModal() {
    loginModal.style.display = 'flex';
    document.body.classList.add('show-login');
  }

  // 알림 메시지
  function showAlert(message) {
    const alertBox = document.createElement('div');
    alertBox.className = 'alert-box';
    alertBox.textContent = message;
    document.body.appendChild(alertBox);

    setTimeout(() => {
      document.body.removeChild(alertBox);
    }, 2000);
  }


  if (!localStorage.getItem('loggedIn')) {
    showLoginModal();
  } else {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      userDisplay.textContent = storedUsername;
    }
  }

  deleteAccountBtn.addEventListener('click', function() {
    const confirmDelete = confirm('정말 탈퇴하시겠습니까?');
    if (confirmDelete) {
      showAlert('그동안 주말농장을 이용해주셔서 감사합니다.');
      userDisplay.textContent = '';
      usernameInput.value = '';
      localStorage.removeItem('loggedIn'); 
      localStorage.removeItem('username');
      showLoginModal();
    }
  });

  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = usernameInput.value.trim();
    if (username) {
      userDisplay.textContent = username;
      document.body.classList.remove('show-login');
      loginModal.style.display = 'none';
      localStorage.setItem('loggedIn', 'true');
      localStorage.setItem('username', username);
    }
  });


  const savedUsername = localStorage.getItem('username');
  if (savedUsername) {
    usernameInput.value = savedUsername;
  }
});
