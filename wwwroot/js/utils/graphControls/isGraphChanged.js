function IsGraphChanged(){
    var nodesAfterRernender = graph.serialize().nodes;
    var linksAfterRernender = graph.serialize().links;

    if (nodesAfterRernender.length != graphNodesAtLoad.length || linksAfterRernender.length != graphLinksAtLoad.length){
        console.log('returned true')
        return true;
    }
    else {
        console.log('returned false')
        return false;
    }
}