import View from "./view";
import DevLens from 'url:../assets/images/logo-devlens.svg';

class AllExtensionsView extends View{
_parentEl=document.querySelector('.card-container');
_allPluginBtn=document.querySelector('.allBtn');
_img;
_generateMarkup(data){
  console.log(data.name);
return `<div class="card">
      <div class="upper-section">
        <div class="logo">
      <img src=${this._getImage(data.name)} alt="" class="logo">
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
  addHandlerRenderAllPlugins(handler){
    this._allPluginBtn.addEventListener('click',(e)=>{
        this._clear();
        this._addActiveClass(this._allPluginBtn);
        handler();
    })
}
}
export default new AllExtensionsView();