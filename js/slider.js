const glide = new Glide('.glide', {
  type: 'carousel',
  focusAt: 'center',
    perView: 2,
  breakpoints:{768: {
    perView: 2
  }}
});
glide.mount();
