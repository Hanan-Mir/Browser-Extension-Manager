import * as model from './model.js';
import allExtensionsView from './Views/allExtensionsView.js';
import activeView from './Views/activeView.js';
import inactiveView from './Views/inactiveView.js';
import removeView from './Views/removeView.js';
const controlAddons=async function(){
// const addOns= await model.getData();
// const allAddons=[]
// addOns.forEach(addon=>{
//     const obj={
//         logo:addon.logo,
//         description:addon.description,
//         isActive:addon.isActive,
//         name:addon.name
//     }
// allExtensionsView._render(allExtensionsView._generateMarkup(obj));

// })
// allAddons.forEach(addon=>{
//     allExtensionsView._render(allExtensionsView._generateMarkup(addon));
// })
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
const loadAllActiveAddons=async function(){
    const extensionList=model.plugIn;
    extensionList.forEach((value,key)=>{
        if(value.isActive){
            activeView._render(value);
        }
    })
}
const loadAllInActiveAddons=async function(){
    const extensionList=model.plugIn;
    extensionList.forEach((value,key)=>{
        if(!value.isActive){
            activeView._render(value);
        }
    })
}
const removeplugin=function(removeEl,section){
const extensionList=model.plugIn;
console.log(extensionList);
extensionList.delete(removeEl);
console.log(extensionList);
if(section==="allsection"){
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
let init=function(){
    controlAddons();
    activeView.addHandlerRenderActivePlugins(loadAllActiveAddons);
    inactiveView.addHandlerRenderInActivePlugins(loadAllInActiveAddons);
    allExtensionsView.addHandlerRenderAllPlugins(controlAddons);
    removeView.addHandlerRemovePlugin(removeplugin);
}
init();
