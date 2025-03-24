async function getData(){
    try{
        const response=await import('./data.json');
        const {...data}=[...response];
        console.log(data);
    }
    catch(err){
        console.log(err);
    }
}
getData();