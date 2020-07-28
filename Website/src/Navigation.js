export default class Navigation{
    constructor(openBtn, closeBtn, navs){
        this.active = false;
        this.openBtn = openBtn;
        this.closeBtn = closeBtn;
        this.navs = navs;
    }

    setActive(active){
        this.active = active;
    }

    toggle(){
        this.active = !this.active;
    }
}