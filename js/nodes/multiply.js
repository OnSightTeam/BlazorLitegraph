function CustomMultNode()
{
    this.addInput("A","number");
    this.addInput("B","number");
    this.addOutput("A*B","number");
    this.properties = { precision: 0.1 };
}

CustomMultNode.title = "Multiply"

CustomMultNode.prototype.onExecute = function() {
    var a = this.getInputData(0) || 0;
    var b = this.getInputData(1) || 0;
    this.setOutputData(0,a*b);
}

LiteGraph.registerNodeType("basic/mult", CustomMultNode)