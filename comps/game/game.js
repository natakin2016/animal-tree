;(function(){

  
    angular.module('kingdoms') 
        .component('game',{
        templateUrl:'game.html',
        controller:GameController
    }) 
    function GameController(){
        var ConwaysGameOfLife = function(options) {

        var newConwayGame = {};

        // intialize options
        // options = options || {};

        var timeStep = options.timeStep || 200;
        var width = options.width || 500;
        var height = options.height || 500;
        var squareSize = options.squareSize || 10;
        var radius=5;
        var borderWidth = 2;

        var gridSize = Math.ceil(width / squareSize);

        var paused = true;

        var boardData = [];

        // setup board
        var svg = d3.select("body")
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .style("background-color", "#DDFF93")
            .style("display", "inline");
        
        // Make initial empty boardData
        for (var col = 0; col < gridSize; col++) {
            var gridRow = [];

            for (var row = 0; row < gridSize; row++) {
            gridRow.push({
                full : false,
                x : col,
                y : row
            });
            }
            boardData.push(gridRow);
        }

        // sets boardData to be true
        var getData = function() {

            newGridData = []
            for (var i = 0; i < gridSize; i++) {
            var row = [];
            for (var j = 0; j < gridSize; j++) {

                var newSquare = {
                x: i,
                y: j,
                full: boardData[i][j].full
                };
                var liveNeighbors = 0;
                for (var x = -1; x < 2; x++) {
                for (var y = -1; y < 2; y++) {
                    if (boardData[i + x] !== undefined &&
                        boardData[i + x][j + y] !== undefined && 
                        (x !== 0 || y !== 0) &&
                        boardData[i + x][j + y].full) {
                    
                    liveNeighbors++;
                    }
                }
                }

                if (liveNeighbors === 3) {
                newSquare.full = true;
                } else if (liveNeighbors !== 2) {
                newSquare.full = false;              
                }
                row.push(newSquare);
            }
            newGridData.push(row);
            }
            boardData = newGridData;

            // var data = boardData.reduce(function(prev, value) {
            //   return prev.concat(value);
            // },[])

            var data = flatten(boardData);

            return data;
        }

        var renderData = function(data) {

            squares = svg.selectAll("rect")
                .data(data)

            squares.enter()
            .append("rect")
                .attr("x", function(d) {
                return d.x * squareSize + borderWidth;
                })
                .attr("y", function(d) {
                return d.y * squareSize + borderWidth;
                })
                .attr("width", squareSize - borderWidth)
                .attr("height", squareSize - borderWidth)
                .on("mousedown", function(d) {
                boardData[d.x][d.y].full = true;
                d3.select(this).attr("fill", "#51691D")
                });

            squares.exit()
            .remove();

            squares.attr("fill", function(d) {
                if (d.full) {
                    return "#51691D"
                }
                return "#DDFF93"
                });
        }

        // Toggles pause for game
        newConwayGame.togglePause = function() {
            paused = !paused;
        }

        // 
        newConwayGame.restart = function() {
            boardData.forEach(function(row) {
            row.forEach(function(square) {
                square.full = false;
            });
            });
            renderData(flatten(boardData));
        }

        // Randomly fills spaces on board
        newConwayGame.randomlyPopulate = function() { 
            for (var i = 0; i < gridSize * gridSize / 8; i++) {
            var randomCol = Math.floor(Math.random() * gridSize);
            var randomRow = Math.floor(Math.random() * gridSize);
            boardData[randomCol][randomRow].full = true;
            }

            renderData(flatten(boardData));
        }

        newConwayGame.start = function() {
            renderData(getData());
            setInterval(function() {

            if (paused) {
                renderData(getData());
            }

            }, timeStep);
        }

        return newConwayGame;
        }

    }
        
       

}());