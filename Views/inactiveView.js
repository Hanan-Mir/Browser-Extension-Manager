import View from "./view";
import allExtensionsView from "./allExtensionsView";
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
    return `<div class="card">s
          <div class="upper-section">
            <div class="logo">
          <img src= alt="" class="logo">
          </div>
          <div class="extensionInfo">
          <h2 class="extensionName">${data.name}</h2>
          <p class="extensionDescription">${data.description}</p>
        </div>
        </div>
        <div class="lower-section">
          <a href="" class="button">Remove</a>
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