import * as model from './model.js';
import allExtensionsView from './Views/allExtensionsView.js';
import activeView from './Views/activeView.js';
import inactiveView from './Views/inactiveView.js';
import removeView from './Views/removeView.js';
import colorThemeView from './Views/colorThemeView.js';
const controlAddons=async function(){
const addons=await model.pluginData;
await model.pluginMap();
const mydata=JSON.parse(addons);
const pluginMap=new Map();
mydata.forEach(element => {
    allExtensionsView._render(element);
    pluginMap.set(element.name.replace(' ',""),element);
});

}
//load all active elements;
const loadAllActiveAddons=function(){
    const extensionList=model.plugIn;
    extensionList.forEach((value,key)=>{
        if(value.isActive){
            activeView._render(value);
        }
    })
}
const loadAllInActiveAddons=function(){
    const allPlugin=model.plugIn;
    allPlugin.forEach((value,key)=>{
        if(!value.isActive){
            inactiveView._render(value);
        }
    })
}
const removeplugin=function(removeEl,section){
const extensionList=model.plugIn;
extensionList.delete(removeEl);

if(section==="allsection"){
    model.setState(extensionList);
extensionList.forEach((value,key)=>{
    allExtensionsView._render(value);
    
})
}
if(section==="activesection"){
    extensionList.forEach((value,key)=>{
    if(value.isActive){
activeView._render(value)
    }    
    })
}
if(section==="inactivesection"){
    extensionList.forEach((value,key)=>{
        if(!value.isActive){
    inactiveView._render(value)
        }    
        })
}
}
const controlToggle=function(value){
    const allPlugin=model.plugIn;
    const item=value.replace(' ',"");
    let currentPlugin=allPlugin.get(item);
    console.log(currentPlugin);
    if(currentPlugin.isActive){
    currentPlugin.isActive=false;
    }
    else{
        currentPlugin.isActive=true;
    }
    console.log(currentPlugin);
}
let init=function(){
    controlAddons();
    activeView.addHandlerRenderActivePlugins(loadAllActiveAddons);
    inactiveView.addHandlerRenderInActivePlugins(loadAllInActiveAddons);
    allExtensionsView.addHandlerRenderAllPlugins(controlAddons);
    removeView.addHandlerRemovePlugin(removeplugin);
    allExtensionsView.addHandlerTogglePlugins(controlToggle);
    colorThemeView.addHandlerClickSunEl();
    colorThemeView.addHandlerChangeColor();
}
init();
