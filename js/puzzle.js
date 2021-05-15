
    


   let navigation = document.querySelectorAll('.navigation')
   let clicker = document.querySelectorAll('.clicker')

   // NAV1
navigation[0].onmouseover = function () {
    clicker[0].style.visibility = 'visible'
}
  
navigation[0].onmouseout = function () {
    clicker[0].style.visibility = 'hidden'
}
//NAV 2
navigation[1].onmouseover = function () {
    clicker[1].style.visibility = 'visible'
}
  
navigation[1].onmouseout = function () {
    clicker[1].style.visibility = 'hidden'
}
//NAV 3
navigation[2].onmouseover = function () {
    clicker[2].style.visibility = 'visible'
}
  
navigation[2].onmouseout = function () {
    clicker[2].style.visibility = 'hidden'
}
   
// TEST GAY

let inputOrientation = document.querySelector('.input-orientation')
let submitButton = document.querySelector('.submit-button')
let result = document.querySelector('.result')
let resultText = document.querySelector('.result-text')

let noMaks = confirm('вас зовут Максим?');

if(noMaks == true) {
    alert('иди в сраку)')
}else {
    alert('Добро пожаловать адекват')
}


submitButton.onclick = function() {
    if(inputOrientation.value == 'Максим' || inputOrientation.value == 'максим' || inputOrientation.value == 'Макс' || inputOrientation.value == 'макс'){
        result.classList.remove('other-image-all')
        result.classList.remove('other-image')
        result.classList.add('maks-image');
        resultText.textContent = 'Ты настоящий гейчик'
    }else if(inputOrientation.value == 'Никита' || inputOrientation.value == 'никита' || inputOrientation.value == 'Ник'){
        result.classList.remove('other-image-all')
        result.classList.remove('maks-image')
        result.classList.add('other-image');
        resultText.textContent = 'Ты настоящий буканьер'
    }else {
        result.classList.remove('other-image')
        result.classList.remove('maks-image')
        result.classList.add('other-image-all');
        resultText.textContent = 'Ты обычный челик'
    }
}