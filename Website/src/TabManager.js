export default class TabManager{
    constructor(tabs){
        this.activeTab = tabs[0];
        this.tabs = tabs;
        this.init();
    }

    init(){
        this.tabs.forEach(t => {
            t.caller.addEventListener('click', (e) =>{
                
                this.setActiveTab(t);
            });
        });
    }

    setActiveTab(tab){
        this.activeTab.caller.classList.toggle('li-active');
        this.activeTab.target.classList.toggle('invisible');
        this.activeTab = tab;
        this.activeTab.caller.classList.toggle('li-active');
        this.activeTab.target.classList.toggle('invisible');
    }

    
}