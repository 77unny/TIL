export const $select = el => document.querySelector(el);
export const $selectAll = el => document.querySelectorAll(el);
export const $addListenr = (target, type, callback) =>
  target.addEventListener(type, callback);
