function SetConstantNode(value, positionX, positionY){
    var nodeName = LiteGraph.createNode("basic/const");
    nodeName.pos = [positionX, positionY];
    graph.add(nodeName);
    nodeName.setValue(value);
}

function SetMultiplyNode(positionX, positionY){
    var nodeName = LiteGraph.createNode("basic/mult");
    nodeName.pos = [positionX, positionY];
    graph.add(nodeName)
}

function SetWatchNode(positionX, positionY){
    var nodeName = LiteGraph.createNode("basic/watch");
    nodeName.pos = [positionX, positionY];
    graph.add(nodeName)
}
