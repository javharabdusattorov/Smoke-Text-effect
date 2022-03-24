const elText = document.querySelector('.text');
elText.innerHTML = elText.textContent.replace(/\S/g, "<span>$&</span>");

const elAllLetter = document.querySelectorAll('span');
for(let i = 0; i < elAllLetter.length; i++) {
    elAllLetter[i].addEventListener('mouseover', function(){
        elAllLetter[i].classList.add('active');
    })
}