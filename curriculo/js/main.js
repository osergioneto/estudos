$(".menu").on("click", function () {
    if ($(".l-site").hasClass("is-open")) {
        console.log('Entru no if');
        $(".menu").removeClass("is-active");
        $(".l-site").removeClass("is-open");
    } else {
        console.log('Entru no if');
        $(".menu").addClass("is-active");
        $(".l-site").addClass("is-open");
    }
});
