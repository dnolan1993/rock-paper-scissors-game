const welcomeMessage = document.getElementById('welcome-message');
const getStartedBtn = document.getElementById('get-started');

getStartedBtn.addEventListener("click", function () {
    welcomeMessage.style.display = 'none';
});

document.addEventListener ('DOMContentLoaded', function() {
    let buttons = document.getElementsByTagName('button')
    for(let button of buttons) {
        button.addEventListener('click', function() {
            if(this.getAttribute('data-type') === 'rock' || this.getAttribute('data-type') === 'paper'
            || this.getAttribute('data-type') === 'scissors' || this.getAttribute('data-type') === 'john-wick'
            || this.getAttribute('data-type') === 'chuck-norris'
            ) {
                let selection = this.getAttribute('data-type');
                console.log(selection)
                alert (`${selection} works!`)
            } else if(this.getAttribute('data-type') === 'get-started'){
                
            }
        })
    }
});