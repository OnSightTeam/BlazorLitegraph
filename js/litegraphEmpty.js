var graph = new LGraph();

var canvas = new LGraphCanvas("#mycanvas", graph);
var editor = new Editor(canvas, graph);

graph.start()