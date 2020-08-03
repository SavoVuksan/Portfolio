export default class Navigation{
    constructor(openBtn, closeBtn,navCnt , navs){
        this.mobile = window.matchMedia('only screen  and (orientation: portrait) and (max-width: 600px)').matches;
        this.active = false;
        this.openBtn = openBtn;
        this.closeBtn = closeBtn;
        this.navCnt = navCnt;
        this.navs = navs;

        this.init();
    }

    init(){
        this.openBtn.addEventListener('click', (e) => {
            this.setActive(true);
        });
        this.closeBtn.addEventListener('click', (e) =>{
            this.setActive(false);
        });
        this.addNavsEventListeners();

        window.addEventListener('scroll', (e) =>{
            const n = this.navs.filter(el => this.isElementInViewport(el.target));
            
            this.updateCallers(n[0]);
        });
    }

    setActive(active){
        this.active = active;
        this.updateNavigation();
    }

    updateNavigation(){
        if(this.mobile){
        if(this.active){
            this.navCnt.style.display ='initial';
            document.querySelector('body').style.height = '100%';
            document.querySelector('body').style.overflow = 'hidden';
        }else{
            this.navCnt.style.display = 'none';
            document.querySelector('body').style.height = 'initial';
            document.querySelector('body').style.overflow = 'initial';
        }

    }
    }

    addNavsEventListeners(){
        this.navs.forEach((o) =>{
            o.caller.addEventListener('click', (e) => {
                this.scrollTo(o.target);
                this.setActive(false);
            });
        });
    }

    scrollTo(element){
        element.scrollIntoView({behavior: 'smooth'});
    }

    isElementInViewport (el) {
        const rect = el.getBoundingClientRect();
    
        return (
            rect.x + rect.width / 2 >= 0 && rect.x + rect.width / 2 <= (window.innerWidth || document.documentElement.clientWidth) &&
            rect.y + rect.height / 2 >= 0 && rect.y + rect.height / 2 <= (window.innerHeight || document.documentElement.clientHeight) 

        );
    }

    updateCallers(nav){
        this.navs.forEach(el => el.caller.classList.remove('li-active'));
        if(nav !== undefined)
        nav.caller.classList.add('li-active');
    }
}