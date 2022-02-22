var graph = new LGraph();

var canvas = new LGraphCanvas("#mycanvas", graph);
var editor = new Editor(canvas, graph);

var slider = LiteGraph.createNode("widget/internal_slider");
slider.pos = [100, 300];
graph.add(slider);

var to_string1 = LiteGraph.createNode("string/toString");
to_string1.pos = [350, 300];
graph.add(to_string1);

var node_watch = LiteGraph.createNode("basic/watch");
node_watch.pos = [700, 300];
graph.add(node_watch);

slider.connect(0,to_string1);
to_string1.connect(0, node_watch);

var graphNodesAtLoad = graph.serialize().nodes;
var graphLinksAtLoad = graph.serialize().links; 

graph.start()