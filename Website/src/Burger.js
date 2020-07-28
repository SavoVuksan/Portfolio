export default class Burger{

    constructor(btn, navigation){
        this.btn = btn;
        this.navigation = navigation;
        this.active = false;

        this.btn.addEventListener('click', this.onToggle.bind(this));
    }

    toggle(){
        this.active = !this.active;
    }
    setActive(active){
        this.active = active;
    }
    
    onToggle(e){
        this.toggle();
        if(this.active){
            this.navigation.style.display = 'initial';
        }
    }
};