import View from "./view";
import activeView from "./activeView";
import allExtensionsView from "./allExtensionsView";
import inactiveView from "./inactiveView";
class RemoveView extends View{
    _parentEl=document.querySelector('.card-container');
addHandlerRemovePlugin(handler){
    this._parentEl.addEventListener('click',(e)=>{
        e.preventDefault();
if(e.target.classList.contains('remove') && allExtensionsView._allPluginBtn.classList.contains('active')){
    this._clear();
    handler(e.target.classList[2],"allsection");
}
if(e.target.classList.contains('remove') && activeView._activeBtn.classList.contains('active')){
    this._clear();
    handler(e.target.classList[2],"activesection");
}
if(e.target.classList.contains('remove') && inactiveView._inactiveBtn.classList.contains('active')){
    this._clear();
    handler(e.target.classList[2],"inactivesection")
}

    }

)

}
}
export default new RemoveView();