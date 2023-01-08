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


(function Init() {
    modal();
})();

// TABS
const Tabs = function() {

    const $tabNavListItems = $("ul.tab-nav__list li");
    const $tabContentItem  = $(".tab-content__item");

    $tabContentItem.hide().first().show();

    $tabNavListItems.on('click', function () {

        $tabNavListItems.removeClass("active");
        $(this).addClass("active");
        $tabContentItem.hide();

        const activeTab = $(this).attr("data-id");
        $("#" + activeTab).fadeIn(1000);

    });
};

(function Init() {
    Tabs();
})();