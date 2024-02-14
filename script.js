const adviceContainer = document.querySelector('.advice');
const adviceID = document.querySelector('.advice__ID');
const diceContaienr = document.querySelector('.dice__container');

async function giveAdvice(){
    try {
        const advice = await fetch('https://api.adviceslip.com/advice');
        const data = await advice.json();
        console.log(data.slip)
        adviceContainer.innerHTML = `"${data.slip.advice}"` ;
        adviceID.innerHTML = data.slip.id;
    } catch(err) {
        console.error(err)
    }
}

diceContaienr.addEventListener('click', function() {giveAdvice()})