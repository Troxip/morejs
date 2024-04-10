const selectedItemEl = document.querySelector('[data-item="fruit"]');
console.log(selectedItemEl);
const parentListEl = selectedItemEl.parentNode;
console.log(parentListEl);
const grandparentEl = parentListEl.parentNode;
console.log(grandparentEl);
const grandGrandParentEl = grandparentEl.parentNode;
console.log(grandGrandParentEl);
