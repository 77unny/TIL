const tabMenu = document.querySelector('.js-tab');
const menuItems = tabMenu.querySelectorAll('li');
const selectContents = document.querySelector('.js-contents');
const content = selectContents.querySelectorAll('p');

function tabContent(e) {
  let menuIndex = [...menuItems].indexOf(e.target);

  [...content].map(cont => {
    [...content].indexOf(cont) === menuIndex ? cont.classList.add('visible') : cont.classList.remove('visible');
  });
}

function setSelectItem(e) {
  [...menuItems].forEach(item => (item.classList.value === 'select' ? item.classList.remove('select') : e.target.classList.add('select')));
  if (e.target.classList.value !== 'select') {
    e.target.classList.add('select');
  }
  tabContent(e);
}
function initEvent() {
  [...menuItems].map(item =>
    item.addEventListener('click', e => {
      e.stopPropagation();
      setSelectItem(e);
    })
  );
}

initEvent();