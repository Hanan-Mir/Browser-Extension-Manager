import View from "./view";
import moon from 'url:../assets/images/icon-moon.svg';
import sun from 'url:../assets/images/icon-sun.svg';
import allExtensionsView from "./allExtensionsView";
import activeView from "./activeView";
import inactiveView from "./inactiveView";
class ColorTheme extends View{
_themeEL=document.querySelector(".mode");
_containerEl=document.querySelector('.container');
_listEl=document.querySelector('.list');
_button=document.querySelectorAll('.button');
_logoContainer=document.querySelector('.logo-container');
_moonClicked=false;
addHandlerClickSunEl(){
   
    this._themeEL.addEventListener('click',(e)=>{
        if(e.target.classList.contains('sun')){
    this.changeToSunColor();
    return;
        }
        if(e.target.classList.contains('moon')){
        this.addHandlerChangeToMoonColor();
        return;    
        }
           
    })
}
    changeToSunColor()
    {
        this._moonClicked=true;
        this._themeEL.src=moon;
        this._themeEL.classList.add('moon');
        this._themeEL.classList.remove('sun');
        
        this._logoContainer.style.backgroundColor='hsl(200, 60%, 99%)';
        this._containerEl.style.background="linear-gradient(180deg, #EBF2FC 0%, #EEF8F9 100%)";
    this._listEl.style.color="hsl(227,75%,14%)";
    let el=document.querySelector('.moon');
    // el.addEventListener('mouseenter',()=>{
    //     el.style.background="linear-gradient(180deg, #EBF2FC 0%, #EEF8F9 100%)"
    // el.style.border='1px solid hsl(3,77%,44%)';
    // })
    // el.addEventListener('mouseleave',()=>{
    //     el.style.border='none';
    //     el.style.background="hsl(200, 60%, 99%)";
    // })
    this._button.forEach((btn)=>{
        btn.style.backgroundColor='hsl(200, 60%, 99%)';
       
    })
    if(this._containerEl.childNodes){
        let toggle=document.querySelectorAll('.toggle')
        let cards=document.querySelectorAll('.card');
    let extensionName=document.querySelectorAll('.extensionName');
    let extensionDes=document.querySelectorAll('.extensionDescription');


    let removeBtn=document.querySelectorAll('.remove');
    // let allSlider=document.querySelectorAll('.toggle');   
    cards.forEach((card)=>{
            card.style.backgroundColor='hsl(200, 60%, 99%)'
        })
        extensionName.forEach(extension=>{
            extension.style.color='hsl(227,75%,14%)';
        })
        extensionDes.forEach(extension=>{
            extension.style.color='hsl(227,75%,14%)';
        })
        removeBtn.forEach(rBtn=>{
            rBtn.style.backgroundColor='hsl(200, 60%, 99%)';
            rBtn.style.color='black';
            rBtn.addEventListener('mouseenter',()=>{
                rBtn.style.backgroundColor='hsl(3,77%,44%)';
                rBtn.style.cursor='pointer'
            })
            rBtn.addEventListener('mouseleave',()=>{
                rBtn.style.backgroundColor='hsl(200, 60%, 99%)'
            })
        })
        toggle.forEach(toggle=>{
            toggle.style.cursor='pointer'
        })
        // allSlider.forEach(slider=>{
        //     slider.style.backgroundColor='hsl(200, 60%, 99%)';
        // })
    }
    
            
    }
    addHandlerChangeColor(){
        this._button.forEach(btn=>{
            btn.addEventListener('click',(e)=>{
                if(this._moonClicked){
this.changeToSunColor();
                }
            })
        })
    }
addHandlerChangeToMoonColor(){
    this._themeEL.classList.remove('moon');
    this._moonClicked=false;
    this._themeEL.classList.add('sun');
    this._themeEL.src=sun;
    this._containerEl.style.background='linear-gradient(180deg, #040918 0%, #091540 100%)';
    this._logoContainer.style.backgroundColor='var(--neutral--700)';
    this._button.forEach((btn)=>{
        btn.style.backgroundColor='hsl(226,25%,17%)'; 
    })
    if(this._containerEl.childNodes){
        let cardContainer=document.querySelector('.card-container');
        let cards=document.querySelectorAll('.card');
    let extensionName=document.querySelectorAll('.extensionName');
    let extensionDes=document.querySelectorAll('.extensionDescription');
    let removeBtn=document.querySelectorAll('.remove');
    cards.forEach((card)=>{
            card.style.backgroundColor='hsl(226,25%,17%)'
        })
        extensionName.forEach(extension=>{
            extension.style.color='hsl(200, 60%, 99%)';
        })
        extensionDes.forEach(extension=>{
            extension.style.color='hsl(0, 0%, 78%)';
        })
        removeBtn.forEach(rBtn=>{
            rBtn.style.backgroundColor='hsl(226,25%,17%)';
            rBtn.style.color='hsl(0, 0%, 93%)';
            rBtn.style.border='1px solid hsl(0, 0%, 93%)'
            rBtn.addEventListener('mouseleave',()=>{
                rBtn.style.backgroundColor='hsl(226,25%,17%)';
            })
            
        })
        // allSlider.forEach(slider=>{
        //     slider.style.backgroundColor='hsl(200, 60%, 99%)';
        // })
        this._listEl.style.color="hsl(0, 0%, 93%)";
    }
}
   
}








export default new ColorTheme();