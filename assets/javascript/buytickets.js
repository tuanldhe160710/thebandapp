
var btn_actions = document.querySelectorAll('.js-place-btn')
var modal = document.querySelector('.modal');
var out_modal = document.querySelector('.js-modal-close');
var modalContainer = document.querySelector('.js-modal-container');

function showModal() {
    modal.classList.add('open');
}

function hideModal() {
    modal.classList.remove('open');
}

for(var btn_action of btn_actions){
    btn_action.addEventListener("click", showModal);
}

out_modal.addEventListener("click", hideModal);

modal.addEventListener("click", hideModal);

modalContainer.addEventListener("click", function (e) {
    e.stopPropagation();    
})