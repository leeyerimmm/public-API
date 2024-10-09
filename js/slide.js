document.addEventListener('DOMContentLoaded', function() {
  const logo = document.querySelector('.logo');
  const content = document.querySelector('.content');

  // 로고 클릭 시 상단으로
  logo.addEventListener('click', function(evt) {
    evt.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    content.scrollTo({ top: 0, behavior: 'smooth' });
  });

  const headerHeight = document.querySelector('header').offsetHeight;
  const extraOffset = 20;

  const menuItems = document.querySelectorAll('.sidebar ul li');
  const sections = document.querySelectorAll('main section');
  
  menuItems.forEach((item) => {
    item.addEventListener('click', function(evt) {
      evt.preventDefault();
  
      menuItems.forEach(li => {
        li.classList.remove('on');
        li.querySelector('i').classList.remove('on');
      });
  
      item.classList.add('on');
      item.querySelector('i').classList.add('on');
  
      // 스크롤 기능
      const targetId = item.querySelector('a').getAttribute('href').slice(1);
      const targetElement = document.getElementById(targetId);
  
      if (targetElement) {
        const targetPosition = targetElement.offsetTop - headerHeight - extraOffset;
  
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth"
        });
  
        content.scrollTo({
          top: targetPosition,
          behavior: "smooth"
        });
      } else {
        console.error('id:', targetId);
      }
    });
  });
  
  // 스크롤 시 on 클래스 처리
  function handleScroll() {
    let currentSectionId = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop - headerHeight - extraOffset;
      const sectionHeight = section.offsetHeight;
      const scrollY = window.scrollY || content.scrollTop;

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    if (currentSectionId) {
      menuItems.forEach(item => {
        const itemHref = item.querySelector('a').getAttribute('href').slice(1);
        const icon = item.querySelector('i'); 

        if (itemHref === currentSectionId) {
          item.classList.add('on'); 
          icon.classList.add('on'); 
        } else {
          item.classList.remove('on'); 
          icon.classList.remove('on');
        }
      });
    } else {
      menuItems.forEach(item => {
        const icon = item.querySelector('i'); 
        item.classList.remove('on'); 
        icon.classList.remove('on'); 
      });
    }
  }

  // 스크롤 이벤트에 handleScroll 함수 연결
  window.addEventListener('scroll', handleScroll);
  content.addEventListener('scroll', handleScroll);
});
