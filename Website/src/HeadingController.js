export default class HeadingController {
    constructor(heading, professions) {
        this.heading = heading;
        this.professions = professions;
        this.professions = this.professions.map((p) => p.toUpperCase());
        this.sequence1();
    }

    sequence1() {
        const timeout = 1000;
        let i = 0;
        const interval = setInterval(() => {
            if (i < this.professions.length) {
                this.setHeading(this.professions[i],i);
                i++
            } else {
                i = 0;
               
                //clearInterval(interval);
            }
        }, timeout);
    }
    setHeading(profession,i) {
        this.heading.textContent = profession;
        
        this.heading.parentElement.classList.add('bg-signal-'+(i+1));
    }
}