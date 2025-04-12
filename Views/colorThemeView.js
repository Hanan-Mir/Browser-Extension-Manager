import View from "./view";
import moon from 'url:../assets/images/icon-moon.svg';
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
    this.changeToSunColor();   
    })
}
    changeToSunColor()
    {
        this._moonClicked=true;
        this._themeEL.src=moon;
        this._themeEL.classList.add('moon');
        this._logoContainer.style.backgroundColor='hsl(200, 60%, 99%)';
        this._containerEl.style.background="linear-gradient(180deg, #EBF2FC 0%, #EEF8F9 100%)";
    this._listEl.style.color="hsl(227,75%,14%)";
    let el=document.querySelector('.moon');
    el.addEventListener('mouseenter',()=>{
        el.style.background="linear-gradient(180deg, #EBF2FC 0%, #EEF8F9 100%)"
    el.style.border='1px solid hsl(3,77%,44%)';
    })
    el.addEventListener('mouseleave',()=>{
        el.style.border='none';
        el.style.background="hsl(200, 60%, 99%)";
    })
    this._button.forEach((btn)=>{
        btn.style.backgroundColor='hsl(200, 60%, 99%)';
       
    })
    if(this._containerEl.childNodes){
        let cards=document.querySelectorAll('.card');
    let extensionName=document.querySelectorAll('.extensionName');
    let extensionDes=document.querySelectorAll('.extensionDescription');

    let removeBtn=document.querySelectorAll('.remove');
    let allSlider=document.querySelectorAll('.toggle');  
    console.log(cards);  
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
        })
        allSlider.forEach(slider=>{
            slider.style.backgroundColor='hsl(200, 60%, 99%)';
        })
    }
            
    }
}








export default new ColorTheme();