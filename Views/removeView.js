import View from "./view";
import activeView from "./activeView";
import allExtensionsView from "./allExtensionsView";
import inactiveView from "./inactiveView";
import colorThemeView from "./colorThemeView";
class RemoveView extends View{
    _parentEl=document.querySelector('.card-container');
addHandlerRemovePlugin(handler){
    this._parentEl.addEventListener('click',(e)=>{
if(e.target.classList.contains('remove') && allExtensionsView._allPluginBtn.classList.contains('active')){
    this._clear();
    // e.preventDefault();
    handler(e.target.classList[2],"allsection");
    if(colorThemeView._moonClicked){
        this._clear();
        handler(e.target.classList[2],"allsection");
        colorThemeView.changeToSunColor();
    }
}
if(e.target.classList.contains('remove') && activeView._activeBtn.classList.contains('active')){
    this._clear();
    handler(e.target.classList[2],"activesection");
    if(colorThemeView._moonClicked){
        this._clear();
        handler(e.target.classList[2],"activesection");
        colorThemeView.changeToSunColor();
    }
}
if(e.target.classList.contains('remove') && inactiveView._inactiveBtn.classList.contains('active')){
    this._clear();
    handler(e.target.classList[2],"inactivesection");
    if(colorThemeView._moonClicked){
        this._clear();
        handler(e.target.classList[2],"inactivesection");
        colorThemeView.changeToSunColor();
    }
}
    }

)

}
}
export default new RemoveView();