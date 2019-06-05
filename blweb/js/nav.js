(function() {
    let bodyEl = $('body'),
        navToggleBtn = bodyEl.find('.nav-toggle-btn');

    navToggleBtn.on('click', function(e) {
        bodyEl.toggleClass('active-nav');
        e.preventDefault();
    });

})();

(function() {
    let aboutEl = $('div.about'),
        aboutElOffset = aboutEl.offset().top/2,
        documentEl = $(document);

    documentEl.on('scroll', function() {
        if ( documentEl.scrollTop() > aboutElOffset && aboutEl.hasClass('hidden')) aboutEl.removeClass('hidden');
    });

})();