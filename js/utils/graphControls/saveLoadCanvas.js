function SaveCanvas(name){
    console.log('saved')
    localStorage.setItem( name, JSON.stringify(graph.serialize()));
}

function LoadCanvas(name){
    console.log('loaded')
    var data = localStorage.getItem(name);
    if(data)
        graph.configure( JSON.parse(data) );
}

function CheckSavedData(name){
    var data = localStorage.getItem(name);
    if (data) {
        return true
    } 
    else {
        return false;
    }
}