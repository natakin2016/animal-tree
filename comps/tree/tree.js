; (function () {


    angular.module('kingdoms')
        .component('tree', {
            templateUrl: 'comps/tree/tree.html',
            controller: TreeController
        })
    function TreeController() {
        var treeData = [
            {
                "name": "Ancestral Protist",
                "img": "http://www.biology-resources.com/images/amoeba-feeding-big.jpg",
                "parent": "null",
                "_children": [
                    {
                        "name": "Parazoa",
                        "img": "https://cdn.vectorstock.com/i/thumb-large/74/72/6917472.jpg",
                        "parent": "Ancestral Protist",
                        // "_children": [
                        //     {
                        //         "name": "sponge",
                        //         "img": "https://cdn.vectorstock.com/i/thumb-large/74/72/6917472.jpg",
                        //         "parent": "Parazoa"
                        //     }
                        // ]
                    },
                    {
                        "name": "Eumetazoa",
                        "parent": "Ancestral Protist",
                        "_children": [
                            {
                                "name": "Radiata",
                                "parent": "Eumetazoa",
                                "_children": [
                                    {
                                        "name": "Ctenophora",
                                        "img": "http://www.beachhunter.net/images/thingstoknow/comb_jelly521262.jpg",
                                        "parent": "Radiata",
                                    },
                                    {
                                        "name": "Cnidaria",
                                        "img": "http://colorine.net/wp-content/uploads/jellyfish-coloring-purple-striped_46387-300x249.jpg",
                                        "parent": "Radiata"
                                    }
                                ]
                            },
                            {
                                "name": "Bilateria",
                                "parent": "Eumetazoa",
                                "_children": [
                                    {
                                        "name": "Acoelomates",
                                        "img": "http://www.erectus.it/me-t/pikaia.jpg",
                                        "parent": "Bilateria",
                                        // "_children": [
                                        //     {
                                        //         "name": "flatworms",
                                        //         "parent": "Acoelomates"
                                        //     }
                                        // ]
                                    },
                                    {
                                        "name": "Body Cavities",
                                        "parent": "Bilateria",
                                        "_children": [
                                            {
                                                "name": "Coelomates",
                                                "parent": "Body Cavities",
                                                "_children": [
                                                    {
                                                        "name": "Protosomes",
                                                        "parent": "Coelomates",
                                                        "_children": [
                                                            {
                                                                "name": "Bryoza",
                                                                "img": "http://www.asoldasthehills.org/Images/Joe's%20Drawings/BATOS~GZ.JPG",
                                                                "parent": "Protosomes"
                                                            },
                                                            {
                                                                "name": "Phoronida",
                                                                "img": "http://www.fjsq.gov.cn/img/HYXZ/4178.jpg",
                                                                "parent": "Protosomes"
                                                            },
                                                            {
                                                                "name": "Brachiopoda",
                                                                "img": "http://www.senckenberg.de/images/content/forschung/abteilung/palaeontologie/palzool3/palz3-1.png",                                                                "parent": "Protosomes"
                                                            },
                                                            {
                                                                "name": "Mollusca",
                                                                "img": "https://upload.wikimedia.org/wikipedia/commons/b/b4/Neohelix_albolabris_drawing_live.jpg",
                                                                "parent": "Protosomes"
                                                            },
                                                            {
                                                                "name": "Annelida",
                                                                "img": "http://www.clipartkid.com/images/367/article-by-leslieday-drawing-by-jonah-nishiura-FbWvKk-clipart.jpg",
                                                                "parent": "Protosomes"
                                                            },
                                                            {
                                                                "name": "Arthropoda",
                                                                "img": "http://www.imagebon.com/postpic/2014/11/butterfly-pencil-drawing_64672.jpg",
                                                                "parent": "Protosomes"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "name": "Deuterosomes",
                                                        "parent": "Coelomates",
                                                        "_children": [
                                                            {
                                                                "name": "Echinodermata",
                                                                "img": "http://cliparts.co/cliparts/BTa/zj4/BTazj4yT8.gif",
                                                                "parent": "Deuterosomes"
                                                            },
                                                            {
                                                                "name": "Chordata",
                                                                "img": "http://cliparts.co/cliparts/5cR/rEa/5cRrEazni.png",
                                                                "parent": "Deuterosomes"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "name": "Pseudocoelomates",
                                                "parent": "Body Cavities",
                                                "_children": [
                                                    {
                                                        "name": "Nemertea",
                                                        "img": "http://etc.usf.edu/clipart/72700/72784/72784_acorn_worm_lg.gif",
                                                        "parent": "Pseudocoelomates"
                                                    },
                                                    {
                                                        "name": "Rotifera",
                                                        "img": "http://creationwiki.org/pool/images/2/21/Rotifer_3.gif",
                                                        "parent": "Pseudocoelomates"
                                                    },
                                                    {
                                                        "name": "Nematoda",
                                                        "img": "https://upload.wikimedia.org/wikipedia/commons/d/db/Trichosomoides_crassicauda_drawing_in_Hall_1916.jpg",
                                                        "parent": "Pseudocoelomates"
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ];

        this.$onInit = draw;
        function draw() {
            // ************** Generate the tree diagram  *****************
            var margin = { top: 20, right: 20, bottom: 20, left: 230 },
                width = 3500 - margin.right - margin.left,
                height = 500 - margin.top - margin.bottom;

            var i = 0,
                duration = 750,
                root;
            var tree = d3.layout.tree()
                .size([height, width]);
            var diagonal = d3.svg.diagonal()
                .projection(function (d) { return [d.y, d.x]; });
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
                nodes.forEach(function (d) { d.y = d.depth * 150; });

                // Update the nodes…
                var node = svg.selectAll("g.node")
                    .data(nodes, function (d) { return d.id || (d.id = ++i); });

                // Enter any new nodes at the parent's previous position.

                var nodeEnter = node.enter().append("g")
                    .attr("class", "node")
                    .attr("transform", function (d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
                    .on("click", click);
                nodeEnter.append("circle")
                    .attr("r", 1e-6)
                    .style("fill", function (d) { return d._children ? "lightsteelblue" : "#fff"; });
                nodeEnter.append("text")
                    .attr("x", function (d) { return d.children || d._children ? -13 : 13; })
                    .attr("dy", ".35em")
                    .attr("text-anchor", function (d) { return d.children || d._children ? "end" : "start"; })
                    .text(function (d) { return d.name; })
                    .style("fill-opacity", 1e-6)
                nodeEnter.append("image")
                    .attr("xlink:href", function (d) { return `${d.img || ''}` })
                    .attr("x", function (d) { return  d._children ? 0 - (d.name.length * 4) : 0 + (d.name.length * 4)  })
                    .attr("y", function (d) { return -60 })
                    .attr("dy", ".35em")
                    .attr("width", "50")
                    .attr("height", "50");

                // Transition nodes to their new position.
                var nodeUpdate = node.transition()
                    .duration(duration)
                    .attr("transform", function (d) { return "translate(" + d.y + "," + d.x + ")"; });
                nodeUpdate.select("circle")
                    .attr("r", 0)
                    .style("fill", function (d) { return d._children ? "blue" : "#fff"; });
                nodeUpdate.select("text")
                    .style("fill-opacity", 1)
                nodeUpdate.select("image")
                    .style("fill-opacity", 1)
                    // .attr("x", function (d) { return d.x; })
                    // .attr("y", function (d) { return d.y; });

                // Transition exiting nodes to the parent's new position.
                var nodeExit = node.exit().transition()
                    .duration(duration)
                    .attr("transform", function (d) { return "translate(" + source.y + "," + source.x + ")"; })
                    .remove();

                // nodeExit.select("circle")
                //   .attr("r", 1e-6);
                nodeExit.select("image")
                    .style("fill-opacity", 1e-6)
                nodeExit.select("text")
                    .style("fill-opacity", 1e-6);

                // Update the links…
                var link = svg.selectAll("path.link")
                    .data(links, function (d) { return d.target.id; });

                // Enter any new links at the parent's previous position.
                link.enter().insert("path", "g")
                    .attr("class", "link")
                    .attr("d", function (d) {
                        var o = { x: source.x0, y: source.y0 };
                        return diagonal({ source: o, target: o });
                    });

                // Transition links to their new position.
                link.transition()
                    .duration(duration)
                    .attr("d", diagonal);

                // Transition exiting nodes to the parent's new position.
                link.exit().transition()
                    .duration(duration)
                    .attr("d", function (d) {
                        var o = { x: source.x, y: source.y };
                        return diagonal({ source: o, target: o });
                    })
                    .remove();

                // Stash the old positions for transition.
                nodes.forEach(function (d) {
                    d.x0 = d.x;
                    d.y0 = d.y;
                });
                // start(treeData);
                // update(root);
            }

            // Toggle children on click.
            function click(d) {
                toggleChildren(d);
                update(d);
            }

            function toggleChildren(d) {
                if (d.children) {
                    d._children = d.children;
                    d.children = null;
                } else {
                    d.children = d._children;
                    d._children = null;
                }
            }

        }
    }

} ());

