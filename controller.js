import * as model from './model.js';
import allExtensionsView from './Views/allExtensionsView.js';
import activeView from './Views/activeView.js';
import inactiveView from './Views/inactiveView.js';
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
const mydata=JSON.parse(addons);
mydata.forEach(element => {
    allExtensionsView._render(element)
});
}
//load all active elements;
const loadAllActiveAddons=async function(){
    const addons=await model.pluginData;
const mydata=JSON.parse(addons);

mydata.forEach(element => {
    console.log(element);
    if(element.isActive){
    activeView._render(element)

}});
}
const loadAllInActiveAddons=async function(){
    const addons=await model.pluginData;
const mydata=JSON.parse(addons);

mydata.forEach(element => {
    console.log(element);
    if(!element.isActive){
    inactiveView._render(element)

}});
}


let init=function(){
    controlAddons();
    activeView.addHandlerRenderActivePlugins(loadAllActiveAddons);
    inactiveView.addHandlerRenderInActivePlugins(loadAllInActiveAddons);
    allExtensionsView.addHandlerRenderAllPlugins(controlAddons);
}
init();
