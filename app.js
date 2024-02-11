const $btnYes = document.querySelector('.js-yes')
$btnNo = document.querySelector ('.js-no')
$confirm = document.querySelector('.js-confirm ')
$dialog = document.querySelector('.js-dialog')
$body = document.querySelector('body')

let counter = 0

$btnYes.addEventListener('mouseover', (e) => {
    e.target.innerHTML = 'Yes pls naman <3'
})

$btnYes.addEventListener('click', () => {
    $body.classList.add('yes')
})

$btnNo.addEventListener('mouseover', (e) => {
    
    const $target = e.target;
    const maxOffset = 200;
    const randomOffsetX = Math.floor(Math.random() * maxOffset * 2) - maxOffset;
    const randomOffsetY = Math.floor(Math.random() * maxOffset * 2) - maxOffset;

    $target.style.transform = `translate3d(${randomOffsetX}px, ${randomOffsetY}px, 0px)`;

    let counter = 0;
    counter++;

    if(counter>= 5 ) {
        $target.textContent = 'Hmmmmmmmpfffttttt'
    }

    counter += 1

});