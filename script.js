let likesNumber = document.querySelector('.section-article-like-number');
let likesIcon = document.querySelector('.section-article-like-icon');


likesIcon.onclick = function () {
    if (likesIcon.classList.contains('like-shadow')) {
      likesNumber.textContent--;
    } else {
      likesNumber.textContent++;
    }
    likesIcon.classList.toggle('like-shadow');
  };
  
  