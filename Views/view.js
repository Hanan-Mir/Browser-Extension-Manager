import DevLens from "url:../assets/images/logo-devlens.svg";
import ConsolePlus from "url:../assets/images/logo-console-plus.svg";
export default class View{
    _data;
    _btns=document.querySelectorAll('.button');
    _imageMap=new Map();
_render(plugindata){
this._data=plugindata;
let markup=this._generateMarkup(this._data);
this._parentEl.insertAdjacentHTML('afterbegin',markup);
}
_clear(){
    this._parentEl.innerHTML='';
}
_addActiveClass(element){
    this._btns.forEach(btn=>{
        btn.classList.remove('active');
    })
    element.classList.add('active');
}
_getImage(value){
this._imageAddress.forEach(img=>{
    if(img===value){
        return value;
    }
})
}
}