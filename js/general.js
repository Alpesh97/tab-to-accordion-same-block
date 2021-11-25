function tab_view() {

    if ($(window).innerWidth() > 992) {
        $(".wrapper").addClass("tab_view");
        $(".wrapper .card").addClass("tab_card");
        $(".wrapper .collapse").addClass("tab_collapse");
    } else {
        $(".wrapper").removeClass("tab_view");
        $(".wrapper .card").removeClass("tab_card");
        $(".wrapper .collapse").removeClass("tab_collapse");
    }
}

function active_tab() {
    if ($(window).innerWidth() > 992) {
        $(".tab_view .tab_card").click(function() {
            $(".tab_view .tab_card").removeClass("active");
            $(this).addClass("active");
        });
    } else {
        $(".card").removeClass("active");
    }
}
$(document).ready(function() {
    tab_view();
    active_tab();

    $(window).resize(function() {
        tab_view();
        active_tab();
    });
});