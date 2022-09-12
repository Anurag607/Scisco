// Pre-Loader...........................

const Preloader = () => {
  const form = document.querySelector('.form');
  const login = document.querySelector('#login');
  const dash = document.querySelector('#dashboard');
  form.style.opacity = 0;
  setTimeout(() => {
    form.style.display='none';
  },350);

  const img = document.querySelector('.loaderImg');
  img.style.display='block';
  setTimeout(() => {
    img.style.opacity = '1';
  },350);

  const div1 = document.querySelectorAll('.preloader')[0];
  const div2 = document.querySelectorAll('.preloader')[1];
  div1.classList.add('load1');
  div2.classList.add('load2');
  
  window.addEventListener('load', () => {
    div1.style.opacity = '0';
    div2.style.opacity = '0';
    img.style.opacity = '0';
    setTimeout(() => {
        div1.style.display = "none";
        div2.style.display = "none";
        img.style.display = "none";
    }, 100);
  });

  setTimeout(() => {
    login.style.opacity = '0';
    dash.style.display = "flex";
  },1000);
  setTimeout(() => {
      login.style.display = "none";
      div2.classList.remove('load2');
      div1.classList.remove('load1');
      form.style.display='flex';
      form.style.opacity='1';
      img.style.opacity = '0';
      img.style.display='none';
  }, 1100);
  dash.style.opacity = '1';
};
    
const Ripple = () => {

  const buttons = document.querySelectorAll('button');
  buttons.forEach(btn => {
    btn.addEventListener('click', function (e) {
      
      let x = e.clientX - e.target.offsetLeft;
      let y = e.clientY - e.target.offsetTop;
      
      let ripples = document.createElement('span');
      ripples.style.left = x + 'px';
      ripples.style.top = y + 'px';
      this.appendChild(ripples);
      
      setTimeout(() => {
        ripples.remove()
      },1000);
    });
  });
  Preloader();
};
export {Preloader, Ripple};