var graph = new LGraph();

var canvas = new LGraphCanvas("#mycanvas", graph);
var editor = new Editor(canvas, graph);

var node_const1 = LiteGraph.createNode("basic/const");
node_const1.pos = [100, 100];
graph.add(node_const1);
node_const1.setValue(178);

var to_string1 = LiteGraph.createNode("string/toString");
to_string1.pos = [350, 100];
graph.add(to_string1);

var node_const2 = LiteGraph.createNode("basic/boolean");
node_const2.pos = [100, 400];
graph.add(node_const2);

var to_string2 = LiteGraph.createNode("string/toString");
to_string2.pos = [350, 400];
graph.add(to_string2);

var concat = LiteGraph.createNode("string/concatenate");
concat.pos = [600, 200];
graph.add(concat);

var node_watch = LiteGraph.createNode("basic/watch");
node_watch.pos = [900, 200];
graph.add(node_watch);

node_const1.connect(0,to_string1);
to_string1.connect(0, concat, 0);
node_const2.connect(0,to_string2);
to_string2.connect(0, concat, 1);
concat.connect(0, node_watch);

var graphNodesAtLoad = graph.serialize().nodes;
var graphLinksAtLoad = graph.serialize().links; 

graph.start()