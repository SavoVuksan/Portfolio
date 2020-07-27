class DotPattern extends HTMLElement {
    constructor(){
        super();

        const pointCountX = parseInt(this.getAttribute('count-x'));
        const pointCountY = parseInt(this.getAttribute('count-y'));
        const pointSize = parseInt(this.getAttribute('size'));
        const pointColor = this.getAttribute('color');
        const spacing = parseInt(this.getAttribute('spacing'));
        const pointStlye = `
        margin-top: ${spacing}px;
        margin-left: ${spacing}px;
        background-color: ${pointColor};
        border-radius: 100%;
        width: ${pointSize}px;
        height: ${pointSize}px;
        display: inline-block;`;
        // Create a shadow root
        let shadow = this.attachShadow({mode: 'open'});
        const wrapper = document.createElement('div');
        
        for(let y = 1; y <= pointCountY; y++){
            const row = document.createElement('div');
            for(let x = 1; x <= pointCountX; x++){
                const point = document.createElement('div');
                point.style.cssText = pointStlye ;
                row.appendChild(point);
            }
            wrapper.appendChild(row);
        }
        shadow.appendChild(wrapper);
        
    }
}

customElements.define('dot-pattern', DotPattern);