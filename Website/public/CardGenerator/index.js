const fs = require('fs');
const Card = require('./Card');
const path = __dirname+'';
const file = '/Games.in';
const outputFile = '/Games.html';

const inputData = readFile(path+file);
const cards = createCardList(inputData);
const html = createHTML(cards);
writeFile(path+outputFile, html);

function createHTML(cards){
    let html = '';
    cards.forEach(card => {
        html += `
        <div class="card">
            <div class="card-img">
                <img src="./asset/image/Taimi.png" alt="">
            </div>
            <div class="card-text">
                <h1>${card.title.toUpperCase()}</h1>
                <p>${card.text}</p>
                <p class="card-tags">${card.outputHTMLSuitableTags()}</p>
            </div>
            <img class="mobile" src="./asset/image/WavePatternThinMobile.svg" alt="">
            <img class="web" class="divider"src="./asset/image/WavePatternThin.svg" alt="">
        </div>
        `;
    }); 
    return html;
}

function createCardList(data){
    const lines = data.split(/\r\n/);
    const cardCount = lines.length / 4;
    const cards = [];
    for(let i = 0; i < cardCount; i++){
        const cursor = i * 4;
        const title = lines[cursor];
        const text = lines[cursor+1];
        let tags = lines[cursor+2].split(',');
        tags = tags.map((t) => t.trim());
        const card = new Card(title,text, tags);
        cards.push(card);
    }

    return cards;
}

function readFile(url){
    return fs.readFileSync(url, {encoding: 'utf-8'});
}
function writeFile(url, data){
    fs.writeFileSync(url, data);
}