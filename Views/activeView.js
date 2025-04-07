import View from "./view";
import allExtensionsView from "./allExtensionsView";
class ActiveView extends View{
_activeBtn=document.querySelector('.activeBtn');
_parentEl=document.querySelector('.card-container');

addHandlerRenderActivePlugins(handler){
    this._activeBtn.addEventListener('click',(e)=>{
        this._clear();
        this._addActiveClass(this._activeBtn);
        handler();
    })
}
_generateMarkup(data){
    return `<div class="card">
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
export default new ActiveView();