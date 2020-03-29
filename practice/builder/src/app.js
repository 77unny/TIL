import MainService from './mainService.js';

window.addEventListener('DOMContentLoaded', ()=>{
  console.log('aa')
  const targetEl = document.querySelector('#log');
  const service = new MainService({targetEl});
  const datalist = [1,2,3,4,[5,6,[7]]];

  service.init(datalist.flat(2));
  targetEl.innerHTML += `datalist is ${service.datalist}`;
})