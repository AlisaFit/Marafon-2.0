let commentForm = document.querySelector('.section-comment-form');
let commentField = document.querySelector('.section-comment-form-textarea');
let charCounter = document.querySelector('.char-counter');
let submitButton = document.querySelector('.section-comment-form-btn');
let commentList = document.querySelector('.section-comment-list');


commentField.oninput = function () { 
    charCounter.textContent = commentField.value.length;
    if (commentField.value.length > 200) {
        commentForm.classList.add('warning');  
        submitButton.disabled = true;
      } else {
        commentForm.classList.remove('warning');
        submitButton.disabled = false;
      }
};

commentForm.onsubmit = function (evt) {
    evt.preventDefault();
    let newComment = document.createElement('li');
    newComment.classList.add('section-comment-item');
    newComment.textContent = commentField.value;
    commentField.value = '';
    commentList.append(newComment);
    charCounter.textContent = 0;
  
  };