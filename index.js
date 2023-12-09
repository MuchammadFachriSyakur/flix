const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");
function selectItem(e){
  removeBorder();
  removeShow();
  this.classList.toggle('tab-border');
}
function removeBorder(){
  tabItems.forEach(item => item.classList.remove('tab-border'));
}
function removeShow(){
  tabContentItems.foEach(item => item.classList.remove('show'));
}
tabItems.foEach(item => item.addEventListener("click", selectItem));
