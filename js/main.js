
// MODAL
const modal = function () {

    const modal = document.querySelector(".landing-modal");
    const trigger = document.querySelector(".landing-modal-trigger");
    const closeButton = document.querySelector(".landing-modal-close");

    function toggleModal() {
        modal.classList.toggle("show-modal");
    }
    function windowOnClick(event) {
        if (event.target === modal) {
            toggleModal();
        }
    }
    function pressEsc(event) {
        if (event.which == '27') {
            modal.classList.remove("show-modal");
        }
    }

    trigger.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);
    window.addEventListener("keyup", pressEsc);

};


(function ssInit() {
    modal();
})();