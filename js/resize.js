function resize () {
    var pageWidth = $('.center-page').width();
    $('.header').height(pageWidth * 0.25);
    $('.footer').height(pageWidth * 0.1);

    $('.intro').css('font-size', pageWidth * .0203 + 'px');
    $('.form-label').css('font-size', pageWidth * .0203 + 'px');
    $('.property_type').css('font-size', pageWidth * .025 + 'px');
    $('.property_address').css('font-size', pageWidth * .022 + 'px');
    $('.answer').css('font-size', pageWidth * .025 + 'px');
    $('.footer-text').css('font-size', pageWidth * .02 + 'px');

    $('.sort-container').css('font-size', pageWidth * .022 + 'px');
    $('.sort-select').css('font-size', pageWidth * .022 + 'px');

    $('.property_img').css('border', (pageWidth * .002) + 'px solid black');

    var smaller = $( window ).width() < $( window ).height()
        ? $( window ).width()
        : $( window ).height();
    $('.center-page').css('padding', '0% ' + 0.04 * smaller + 'px');
}
