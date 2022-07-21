const welcomeMessage = document.getElementById('welcome-message');
const getStartedBtn = document.getElementById('get-started');

getStartedBtn.addEventListener("click", function () {
    welcomeMessage.style.display = 'none';
});

document.addEventListener ('DOMContentLoaded', function() {
    let buttons = document.getElementsByTagName('button')
    for(let button of buttons) {
        button.addEventListener('click', function() {
            if(this.getAttribute('data-type') === 'rock' || 'paper' || 'scissors') {
                alert ('it works!')
            }
        })
    }
})