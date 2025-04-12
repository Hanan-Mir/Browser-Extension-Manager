import View from "./view";
import DevLens from 'url:../assets/images/logo-devlens.svg';
import StyleSpy from 'url:../assets/images/logo-style-spy.svg';
import SpeedBoost from 'url:../assets/images/logo-speed-boost.svg';
import JSONWizard from 'url:../assets/images/logo-json-wizard.svg';
import TabMaster from 'url:../assets/images/logo-tab-master-pro.svg';
import ViewportBuddy from 'url:../assets/images/logo-viewport-buddy.svg';
import MarkUpNotes from 'url:../assets/images/logo-markup-notes.svg';
import GridGuides from 'url:../assets/images/logo-grid-guides.svg';
import palettePicker from 'url:../assets/images/logo-palette-picker.svg';
import linkchecker from 'url:../assets/images/logo-link-checker.svg';
import DOMSnapshot from 'url:../assets/images/logo-dom-snapshot.svg';
import consolePlus from 'url:../assets/images/logo-console-plus.svg';

class AllExtensionsView extends View{
_parentEl=document.querySelector('.card-container');
_allPluginBtn=document.querySelector('.allBtn');
_radioBtn=document.querySelectorAll('.state');
_logoArray=[DevLens,StyleSpy,SpeedBoost,JSONWizard,TabMaster,ViewportBuddy,MarkUpNotes,GridGuides,palettePicker,linkchecker,DOMSnapshot,consolePlus];
_generateMarkup(data){
  let imgAddress;
  let mydata=data.logo.split('/');
  let index=mydata.length;
  let newArr=mydata[index-1].split('.');
  this._logoArray.forEach(logo=>{
    if(logo.includes(newArr[0])){
      imgAddress=logo;
    }
  })
return `<div class="card">
      <div class="upper-section">
        <div class="logo">
      <img src=${imgAddress} alt="" class="logo">
      </div>
      <div class="extensionInfo">
      <h2 class="extensionName">${data.name}</h2>
      <p class="extensionDescription">${data.description}</p>
    </div>
    </div>
    <div class="lower-section">
    <button class="button remove ${data.name.replace(' ',"")}">Remove</button>
      <div class="toggle">
        <input type="radio" name="${data.name}"  id="inactive" value="inactive" class="state">
        <input type="radio" name="${data.name}" id="active" value="active" class="state" ${data.isActive?'checked':''}>
        <div class="slider"></div>  
        
      </div>
    </div> 
    `
  }
  addHandlerRenderAllPlugins(handler){
    this._allPluginBtn.addEventListener('click',(e)=>{
    console.log("all clicked");
        this._clear();
        this._addActiveClass(this._allPluginBtn);
        handler();
    })
}
addHandlerTogglePlugins(handler){
  this._parentEl.addEventListener('click',(e)=>{
    if(e.target.classList.contains('state')){
      handler(e.target.getAttribute('name'));
    }



  })
}


}
export default new AllExtensionsView();