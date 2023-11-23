$(document).ready(function () {
    $('.navbar-toggle').click(function () {
        $(this).closest('.navbar-collapse').find('ul').toggleClass('show');
    });
});
