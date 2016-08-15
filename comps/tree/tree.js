;(function(){

  
    angular.module('kingdoms') 
        .component('tree',{
        templateUrl:'comps/tree/tree.html',
        controller:TreeController
    }) 
    function TreeController(){
      var treeData = [
                    {
                        "name": "I am a multicellular organism",
                        "parent": "null",
                        "children": [
                        {
                            "name": "I live in the ocean",
                            "parent": "I am a multicellular organism",
                            "children": [
                            {
                                "name": "I am a fish",
                                "parent": "I live in the ocean"
                            
                            },
                            {
                                "name": "I am a lobster ",
                                "parent": "Level 2: A"
                            }
                            ]
                        },
                        {
                            "name": "I live on land.",
                        "parent": "I am a multicellular organism",
                            "children": [
                            {
                                "name": "I am a fish",
                                "parent": "I live in the ocean"
                            
                            },
                            {
                                "name": "I am a lobster ",
                                "parent": "I live in the ocean"
                            }
                            ]
                        },
                        {
                            "name": "I fly in the sky.",
                        "parent": "I am a multicellular organism",
                            "children": [
                            {
                                "name": "I am a falcon",
                                "parent": "I fly in the sky."
                            
                            },
                            {
                                "name": "I am a bluebird",
                                "parent": "I fly in the sky."
                            }
                            ]
                        
                        }
                        
                        ]
                    }
                    ];
                    // **  tree diagram  *****************
                    var margin = {top: 40, right: 120, bottom: 20, left: 120},
                        width = 500 - margin.right - margin.left,
                        height = 1000 - margin.top - margin.bottom;
                        
                    var i = 0,
                        duration = 750,
                        root;
                    var tree = d3.layout.tree()
                        .size([height, width]);
                    var diagonal = d3.svg.diagonal()
                        .projection(function(d) { return [d.x, d.y]; });
                    var svg = d3.select("#putithere").append("svg")
                        .attr("width", width + margin.right + margin.left)
                        .attr("height", height + margin.top + margin.bottom)
                    .append("g")
                        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
                    root = treeData[0];
                    root.x0 = height / 2;
                    root.y0 = 0;
                    
                    update(root);
                    d3.select(self.frameElement).style("height", "180px");
                    function update(source) {
                    // Compute the new tree layout.
                    var nodes = tree.nodes(root).reverse(),
                        links = tree.links(nodes);
                    // Normalize for fixed-depth.
                    nodes.forEach(function(d) { d.y = d.depth * 120; });
                    // Update the nodes…
                    var node = svg.selectAll("g.node")
                        .data(nodes, function(d) { return d.id || (d.id = ++i); });
                    // Enter any new nodes at the parent's previous position.
                    var nodeEnter = node.enter().append("g")
                        .attr("class", "node")
                        .attr("transform", function(d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
                        .on("click", click);
                    nodeEnter.append("circle")
                        .attr("r", 1e-6)
                        .style("fill", function(d) { return d._children ? "chartreuse" : "fff"; });
                    nodeEnter.append("text")
                        .attr("y", function(d) { return d.children || d._children ? -13 : 13; })
                        .attr("dy", ".35em")
                        .attr("text-anchor", function(d) { return d.children || d._children ? "end" : "start"; })
                        .text(function(d) { return d.name; })
                        .style("fill-opacity", 1e-6);
                    // Transition nodes to their new position.
                    var nodeUpdate = node.transition()
                        .duration(duration)
                        .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
                    nodeUpdate.select("circle")
                        .attr("r", 1)
                        .style("fill", function(d) { return d._children ? "chartreuse" : "chartreuse"; });
                    nodeUpdate.select("text")
                        .style("fill-opacity", 1);
                    // Transition exiting nodes to the parent's new position.
                    var nodeExit = node.exit().transition()
                        .duration(duration)
                        .attr("transform", function(d) { return "translate(" + source.x + "," + source.y + ")"; })
                        .remove();
                    //not usuing clickable circle
                    // nodeExit.select("circle")
                        //   .attr("r", 1e-6);
                    nodeExit.select("text")
                        .style("fill-opacity", 1e-6);
                    // Update the links…
                    var link = svg.selectAll("path.link")
                        .data(links, function(d) { return d.target.id; });
                    // Enter any new links at the parent's previous position.
                    link.enter().insert("path", "g")
                        .attr("class", "link")
                        .attr("d", function(d) {
                            var o = {y: source.x0, x: source.y0};
                            return diagonal({source: o, target: o});
                        });
                    // Transition links to their new position.
                    link.transition()
                        .duration(duration)
                        .attr("d", diagonal);
                    // Transition exiting nodes to the parent's new position.
                    link.exit().transition()
                        .duration(duration)
                        .attr("d", function(d) {
                            var o = {y: source.y, x: source.x};
                            return diagonal({source: o, target: o});
                        })
                        .remove();
                    // Stash the old positions for transition.
                    nodes.forEach(function(d) {
                        d.x0 = d.y;
                        d.y0 = d.x;
                    });
                    }
                    // Toggle children on click.
                    function click(d) {
                    if (d.children) {
                        d._children = d.children;
                        d.children = null;
                    } else {
                        d.children = d._children;
                        d._children = null;
                    }
                    update(d);
                    }
    }
    
}());