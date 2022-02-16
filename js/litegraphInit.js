﻿var graph = new LGraph();

var canvas = new LGraphCanvas("#mycanvas", graph);
var editor = new Editor(canvas, graph);

var node_const2 = LiteGraph.createNode("basic/const");
node_const2.pos = [100, 400];
graph.add(node_const2);
node_const2.setValue(15.43);

var node_multiply = LiteGraph.createNode("basic/mult");
node_multiply.pos = [400, 200];
graph.add(node_multiply)

var node_watch = LiteGraph.createNode("basic/watch");
node_watch.pos = [800, 200];
graph.add(node_watch);

node_const2.connect(0,node_multiply,1);
node_multiply.connect(0, node_watch);

graph.start()

function SetConstantNode(nodeName,value, positionX, positionY){
    var nodeName = LiteGraph.createNode("basic/const");
    nodeName.pos = [positionX, positionY];
    graph.add(nodeName);
    nodeName.setValue(value);
}