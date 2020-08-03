module.exports = class Card{
    constructor(title, text, tags){
        this.title = title;
        this.text = text;
        this.tags = tags;
    }

    getHTMLSuitableTags(){
        return this.tags.map((tag) => `&lt;${tag}&gt;`);
    }
    outputHTMLSuitableTags(){
        let output = '';
        this.getHTMLSuitableTags().forEach(tag => {
            output += tag + ' ';
        });
        return output;
    }
};