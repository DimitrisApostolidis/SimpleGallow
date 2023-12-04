// You can change the below.
let triesRemaing = 10;
const chosenWord = 'thanos';
// You can change the above.
let chosenWordHiddenArray = Array(chosenWord.length).fill('_');
let hangedImage;


function setup() {
textAlign(CENTER);
createCanvas(windowWidth, windowHeight);
createButtons();
hangedImage = loadImage('hanged.png')
}

function draw() {
background(160, 160, 160);
drawHiddenWord();
showTriesRemaining();
drawHanged();
checkWinLoseCondition();
}

function drawHiddenWord() {
    fill(255);
text(chosenWordHiddenArray.join('  '), windowWidth/2, 150);
}

function showTriesRemaining() {
    fill(0);
textSize(26);
text("You have  " + triesRemaing + " tries remaining", windowWidth/2, 200);
}

function createButtons() {
    let letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

    let buttons = createDiv();
    buttons.class('buttons');
    letters.forEach(letter => {
    let button = createButton(letter);
    buttons.class('button');
    button.mouseClicked(() => {buttonClicked(letter)});
    buttons.child(button);
    })
}

function drawHanged() {
    let crop = 360 * triesRemaing/10;
    image(hangedImage, 0, crop, 0, 0, 0, crop);
}

function checkWinLoseCondition() {
    if (triesRemaing == 0) {
        text("You Suck!", windowWidth/2, 300);
        noloop();
        return;
    }

    for (let l = 0; l < chosenWordHiddenArray.length; l++) {
        if (chosenWordHiddenArray[l] == '_') {
            return;
        }
    }

    text("Well Done!", windowWidth/2, 300);
}


function buttonClicked(letter) {
    let chosenWordArray = chosenWord.split('');
    let letterFound = false;
 for (let i = 0; i < chosenWordArray.length; i++) {
    if (chosenWordArray[i] == letter) {
        chosenWordHiddenArray[i] = letter;
        letterFound = true;
    }
 }
 
 if (letterFound == false) {
    triesRemaing--;
 }
 
}