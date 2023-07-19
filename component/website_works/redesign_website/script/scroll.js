const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    diration: 2000,
    reset: false
});


sr.reveal('.product-caption', {
    interval: 1000,
    reset: true
});

sr.reveal('.product-detail-text', {
    interval: 1800,
    reset: true
});


sr.reveal('.more-hero-btn', {
    interval: 1800,
    reset: true,
    origin: 'right'
});
