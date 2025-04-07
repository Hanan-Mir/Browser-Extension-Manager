export let getData=async function(location){
    try{
        const state=[];
        const response=await import('./data.json');
        return JSON.stringify(response);
    }
    catch(err){
        console.log(err);
    }
}
export let pluginData=getData();