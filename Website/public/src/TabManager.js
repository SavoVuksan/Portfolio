export default class TabManager{
    constructor(tabs){
        this.activeTab = tabs[0];
        this.tabs = tabs;
        console.log(this.tabs);
        this.init();

        let lastTab = localStorage.getItem('lastTab');
        if(lastTab !== null){
            this.setActiveTab(this.tabs.find(t => t.caller.id === lastTab));

        }else{
            localStorage.setItem('lastTab', this.activeTab.caller.id);
        }
  
    }

    init(){
        this.tabs.forEach(t => {
            t.caller.addEventListener('click', (e) =>{
                
                this.setActiveTab(t);
                AOS.refreshHard();
            });
        });
    }

    setActiveTab(tab){
        this.activeTab.caller.classList.toggle('li-active');
        this.activeTab.target.classList.toggle('invisible');
        this.activeTab = tab;
        this.activeTab.caller.classList.toggle('li-active');
        this.activeTab.target.classList.toggle('invisible');

        localStorage.setItem('lastTab', this.activeTab.caller.id);
    }

    
}