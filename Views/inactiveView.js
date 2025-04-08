import View from "./view";
import allExtensionsView from "./allExtensionsView";
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
class InActiveView extends View{
_inactiveBtn=document.querySelector('.inactiveBtn');
_parentEl=document.querySelector('.card-container');

addHandlerRenderInActivePlugins(handler){
    this._inactiveBtn.addEventListener('click',(e)=>{
        this._clear();
        this._addActiveClass(this._inactiveBtn);
        handler();
    })
}
_generateMarkup(data){
  let imgAddress;
  let mydata=data.logo.split('/');
  let index=mydata.length;
  let newArr=mydata[index-1].split('.');
  allExtensionsView._logoArray.forEach(logo=>{
    if(logo.includes(newArr[0])){
      imgAddress=logo;
    }
  })
    return `<div class="card">s
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
          <a href="" class="button remove ${data.name.replace(' ',"")}">Remove</a>
          <div class="toggle">
            <input type="radio" name="${data.name}"  id="inactive" value="inactive" class="state">
            <input type="radio" name="${data.name}" id="active" value="active" class="state" ${data.isActive?'checked':''}>
            <div class="slider"></div>  
            
          </div>
        </div> 
        `
      }




}
export default new InActiveView();