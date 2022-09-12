// Dashboard.................

const dashboard = () => {
    const login = document.querySelector('#login');
    const logout = document.querySelector('.logout');
    const change = document.querySelector('.change');
    const dash = document.querySelector('#dashboard');
  
    logout.onclick = () => {
      dash.style.opacity = '0';
      setTimeout(() => {
        dash.style.display = 'none';
        login.style.display = 'flex';
      },600);
      setTimeout(() => {
        login.style.opacity = '1';
      },700);
    };
  
    change.onclick = () => {
      dash.style.opacity = '0';
      setTimeout(() => {
        dash.style.display = 'none';
        login.style.display = 'flex';
      },600);
      setTimeout(() => {
        login.style.opacity = '1';
      },700);
    };
};

export {dashboard}