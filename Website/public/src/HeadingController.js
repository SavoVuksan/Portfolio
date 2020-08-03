export default class HeadingController {
    constructor(heading, professions) {
        this.heading = heading;
        this.professions = professions;
        this.professions.forEach(e => {
            e.profession = e.profession.toUpperCase();
        });
        this.sequence1();
    }

    sequence1() {
        const timeout = 1500;
        let i = 0;
        const interval = setInterval(() => {
            if (i < this.professions.length) {
                this.setHeading(this.professions[i].profession,this.professions[i].color);
                i++
            } else {
                i = 0;
               
                //clearInterval(interval);
            }
        }, timeout);
    }
    setHeading(profession,color) {
        this.heading.textContent = profession;
        this.heading.parentElement.style.backgroundColor = color;
    }
}