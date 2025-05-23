export let getData=async function(location){
    try{
        const response=await import('./data.json');
        const myData=JSON.stringify(response);
        return myData;
    }
    catch(err){
        console.log(err);
    }
}
export let pluginData=getData();
export let plugIn=new Map();
export let pluginMap=async function(){
    const response=await import('./data.json');
        response.forEach((res)=>{
            plugIn.set(res.name.replace(' ',""),res)
        })
        console.log(plugIn);
}
export let state;
export let setState=function(data){
    state=data;
}
export let getState=function(){
    return state;
}
