;(function(){

  
    angular.module('kingdoms') 
        .component('tree',{
        templateUrl:'comps/tree/tree.html',
        controller:TreeController
    }) 
    function TreeController(){
            var treeData = [
        {
            "name": "Ancestral Protist",
            "parent":"null",
            "children": [
            {"name": "Parazoa",
            "parent": "Ancestral Protist",
            "children": [
                {"name": "sponge",
            "parent": "Parazoa"}
            ]},
            {"name": "Eumetazoa",
            "parent": "Ancestral Protist",
            "children": [
                {
                "name": "Radiata",
                "parent": "Eumetazoa",
                "children": [
                    {"name": "Ctenophora",
                    "parent": "Radiata",
                    },
                    {"name": "Cnidaria",
                    "parent": "Radiata"
                    }
                ]
                },
                {
                "name": "Bilateria",
                "parent": "Eumetazoa",
                "children": [
                    {
                    "name": "Acoelomates",
                    "parent": "Bilateria",
                    "children": [
                        {
                        "name": "flatworms",
                        "parent": "Acoelomates"
                        }
                    ]
                    },
                    {"name": "Body Cavities",
                "parent": "Bilateria",
                "children": [
                {"name": "Coelomates",
                "parent": "Body Cavities",
            "children": [
                {"name": "Protosomes",
            "parent": "Coelomates",
            "children": [
            {"name": "Bryoza",
            "parent": "Protosomes"},
            {"name": "Phoronida",
            "parent": "Protosomes"},
            {"name": "Brachiopoda",
            "parent": "Protosomes"},
            {"name": "Mollusca",
            "parent": "Protosomes"},
            {"name": "Annelida",
            "parent": "Protosomes"},
        {"name": "Arthropoda",
            "parent": "Protosomes"}
            ]},
                {"name": "Deuterosomes",
            "parent": "Coelomates",
            "children": [
            {"name": "Echinodermata",
            "parent": "Deuterosomes"},
            {"name": "Chordata",
            "parent": "Deuterosomes"}
            ]}
            ]},
                {
                    "name": "Pseudocoelomates",
                    "parent": "Body Cavities",
                    "children": [
                    {"name": "Nemertea",
                    "parent": "Pseudocoelomates"
                },
                    {"name": "Rotifera",
                    "parent": "Pseudocoelomates"},
                    {"name": "Nematoda",
                    "parent": "Pseudocoelomates"}
                    ]
                }
                ]}
                ]
                }
            ]}
            ]
        }
        ];
        // ************** Generate the tree diagram  *****************
        var margin = {top: 20, right: 20, bottom: 20, left: 230},
            width = 3500 - margin.right - margin.left,
            height = 500 - margin.top - margin.bottom;
            
        var i = 0,
            duration = 750,
            root;
        var tree = d3.layout.tree()
            .size([height, width]);
        var diagonal = d3.svg.diagonal()
            .projection(function(d) { return [d.y, d.x]; });
        var svg = d3.select("#putithere").append("svg")
            .attr("width", width + margin.right + margin.left)
            .attr("height", height + margin.top + margin.bottom)
        .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        root = treeData[0];
        root.x0 = height / 2;
        root.y0 = 0;
        
        update(root);
        d3.select(self.frameElement).style("height", "500px");
        function update(source) {

        // Compute the new tree layout.
        var nodes = tree.nodes(root).reverse(),
            links = tree.links(nodes);

        // Normalize for fixed-depth.
        nodes.forEach(function(d) { d.y = d.depth * 110; });

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
            .style("fill", function(d) { return d._children ? "lightsteelblue" : "#fff"; });
        nodeEnter.append("text")
            .attr("x", function(d) { return d.children || d._children ? -13 : 13; })
            .attr("dy", ".35em")
            .attr("text-anchor", function(d) { return d.children || d._children ? "end" : "start"; })
            .text(function(d) { return d.name; })
            .style("fill-opacity", 1e-6);

        // Transition nodes to their new position.
        var nodeUpdate = node.transition()
            .duration(duration)
            .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; });
        nodeUpdate.select("circle")
            .attr("r", 0)
            .style("fill", function(d) { return d._children ? "blue" : "#fff"; });
        nodeUpdate.select("text")
            .style("fill-opacity", 1);

        // Transition exiting nodes to the parent's new position.
        var nodeExit = node.exit().transition()
            .duration(duration)
            .attr("transform", function(d) { return "translate(" + source.y + "," + source.x + ")"; })
            .remove();

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
                var o = {x: source.x0, y: source.y0};
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
                var o = {x: source.x, y: source.y};
                return diagonal({source: o, target: o});
            })
            .remove();

        // Stash the old positions for transition.
        nodes.forEach(function(d) {
            d.x0 = d.x;
            d.y0 = d.y;
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