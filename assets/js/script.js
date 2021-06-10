/*
  nama : candra dwi cahyo
  umur : 17 tahun
  email : candradwicahyo18@gmail.com
*/

// library aos (animate on scroll))
AOS.init({
  once: true
});

function imageGallery() {
  
  const imgBig = document.querySelector('.img-big');
  const imgSmall = document.querySelectorAll('.img-small');
  
  imgSmall.forEach(img => {
    img.addEventListener('click', event => {
      imgSmall.forEach(img => img.classList.remove('active'));
      event.target.classList.add('active');
      imgBig.src = event.target.src;
    });
  });
  
}

imageGallery();
