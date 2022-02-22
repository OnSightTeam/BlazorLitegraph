var graph = new LGraph();

var canvas = new LGraphCanvas("#mycanvas", graph);
var editor = new Editor(canvas, graph);

var graphNodesAtLoad = graph.serialize().nodes;
var graphLinksAtLoad = graph.serialize().links; 

graph.start()