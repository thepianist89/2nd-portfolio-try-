console.log('Bonjour LuCie');

const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  header.classList.toggle('sticky', window.scrollY > 100);
});
