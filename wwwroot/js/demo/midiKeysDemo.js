var graph = new LGraph();

var canvas = new LGraphCanvas("#mycanvas", graph);
var editor = new Editor(canvas, graph);

var timer = LiteGraph.createNode("events/timer");
timer.pos = [50, 50];
timer.title = "Timer";
timer.addProperty("interval", 300);
timer.addProperty("event", "interval");
graph.add(timer);

var midi_generator = LiteGraph.createNode("midi/generator");
midi_generator.pos = [300, 200];
graph.add(midi_generator);

var note_scale = LiteGraph.createNode("basic/string");
note_scale.pos = [50, 600];
note_scale.title = "NOTE SCALE";
note_scale.mode = "Always";
note_scale.setValue("A,B,C,D,E,F,G");
graph.add(note_scale);

var keys = LiteGraph.createNode("midi/keys");
keys.pos = [500, 300];
graph.add(keys);

var midi_play = LiteGraph.createNode("midi/play");
midi_play.pos = [1000, 50];
midi_play.properties = {
    notes: "A,B,C",
    octave: 3,
    duration: 0.5,
    mode: "sequence"
};

graph.add(midi_play);

// var rand = LiteGraph.createNode("math/rand");
// rand.pos = [800, 50];
// rand.addProperty("min", 0);
// rand.addProperty("max", 0.200);
// graph.add(rand);

timer.connect(0, midi_generator);
note_scale.connect(0,midi_generator,1);
midi_generator.connect(0, keys);
// rand.connect(0, midi_play, 1);
keys.connect(0, midi_play);

var graphNodesAtLoad = graph.serialize().nodes;
var graphLinksAtLoad = graph.serialize().links; 

// graph.start()