
//Creating grid cells
const container = document.querySelector('.container');

for (let i = 0; i < 256; i++) {
    let item = document.createElement('div');
    item.classList.add('grid-items');
    container.appendChild(item);
} 

// Manipulating Grid Cells
const divs = document.querySelectorAll('.grid-items');

for (let div of divs) {
    div.addEventListener('mouseover', (e) => {
        const divStyle = e.target.style;
        divStyle.backgroundColor = '#000';
        divStyle.boxSizing = 'border-box';
    })
}

// Clear button functionality
const button = document.querySelector('button');

const principalContent = document.querySelector('.principal-content');
const panel = document.querySelector('.panel');
const game = document.querySelector('.game')

// Replay window
const replay = document.createElement('div')
replay.classList.add('.replay')
const replayButton = document.createElement('button')   
replayButton.textContent = 'Replay';
replay.appendChild(replayButton);


//  On click Replay button
button.addEventListener('click', () => {
    for ( let divItem of divs) {
        divItem.style.backgroundColor = "";
    }
    setTimeout( () => {
    principalContent.removeChild(panel);
    principalContent.removeChild(game);
    principalContent.appendChild(replay);

    principalContent.style.margin = 'auto'
    principalContent.style.borderRadius = '6px'
    principalContent.style.height = '250px';
    principalContent.style.width = '800px';
    principalContent.style.marginTop = '15%';
    principalContent.style.marginBottom = '25%';
    principalContent.style.boxShadow = '0px 0px 5px 3px white'
    }, 500)
});

replayButton.addEventListener('click' , function() {
    window.location.reload(); 
    return false;
})

for (let i = 0; i < 5; i++){
    setTimeout( () => {console.log(i)}, 1000)
}