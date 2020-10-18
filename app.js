let memeForm = document.querySelector('.meme-form');
let imgBox = document.querySelector('.imgBox');

memeForm.addEventListener('submit',(e) => {
    let urlInput = document.querySelector('.url-input');
    let topInput = document.querySelector('.top-input');
    let bottomInput = document.querySelector('.bottom-input');
    e.preventDefault();
    if (urlInput.value === ''){
        return;
    }
    generateImg(urlInput.value,topInput.value,bottomInput.value);
});

imgBox.addEventListener('click', (e) => {
    let del = e.target;
    let top = document.querySelector('.top');
    let bottom = document.querySelector('.bottom');
    if (del === top || bottom){
        bottom.parentElement.remove();
        console.log(del);
    }
});

function generateImg(url,top,bottom) {
    let newImg = document.createElement('img');
    let newImgDiv = document.createElement('div');
    let topText = document.createElement('div');
    let bottomText = document.createElement('div');
    topText.classList.add('top');
    topText.innerText = top;
    bottomText.classList.add('bottom');
    bottomText.innerText = bottom;

    newImg.setAttribute('src', url);
    newImgDiv.classList.add('img');
    newImgDiv.appendChild(newImg);
    newImgDiv.appendChild(topText);
    newImgDiv.appendChild(bottomText);
    imgBox.appendChild(newImgDiv);
};