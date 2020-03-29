import 'core-js/modules/es.array.flat';
export default class MainService {
  constructor({ targetEl }) {
    this.targetEl = targetEl;
    this.datalist = '';
  }
  init(datalist) {
    this.datalist = datalist.flat(2).join('');
    this.render(this.datalist);
  }
  render(data) {
    this.targetEl.innerHTML = `<span>${data}</span>`;
  }
}
