class DotPattern extends HTMLElement {
    constructor(){
        super();

        this.pointCountX = parseInt(this.getAttribute('count-x'));
        this.pointCountY = parseInt(this.getAttribute('count-y'));
        this.pointSize = parseInt(this.getAttribute('size'));
        this.pointColor = this.getAttribute('color');
        this.spacing = parseInt(this.getAttribute('spacing'));
        // Create a shadow root
        //let shadow = this.attachShadow({mode: 'closed'});
        const wrapper = document.createElement('div');
        wrapper.style.overflow = 'hidden';
        const dots = this.createDots(this.pointCountX,this.pointCountY);
        dots.forEach(dot => wrapper.appendChild(dot));

        this.appendChild(wrapper);
        
    }

    createDots(countX,countY){
        const pointStlye = `
        margin-top: ${this.spacing}px;
        margin-left: ${this.spacing}px;
        background-color: ${this.pointColor};
        border-radius: 100%;
        width: ${this.pointSize}px;
        height: ${this.pointSize}px;
        display: inline-block;`;

        const dots = [];
        for(let y = 1; y <= countY; y++){
            const row = document.createElement('div');
            row.style.whiteSpace = 'nowrap';
            for(let x = 1; x <= countX; x++){
                const point = document.createElement('div');
                point.style.cssText = pointStlye ;
                row.appendChild(point);
            }
           dots.push(row);
        }

        return dots;
    }
}

customElements.define('dot-pattern', DotPattern);
export default DotPattern;