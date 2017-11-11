$(function () {
    console.log("hello");

    var solType = ['6', '3', 'b7', '#5', '#2', '4', '1', 'b5', '7', '#6', '#3', '#1', '5', '2', '#6', '#4'];
    var laType = ['7', '#6', '#3', '#1', '5', '2', 'b6', '#4', '#7', '#2', '6', '3', 'b7', '#1', '#5', '4', 'b1'];
    var siType = ['7', '2', '6', '#3', '#7', '#1', '5', 'b4', 'b1', '3', 'b7', '#2', '6', '4', '1', 'b5', 'b2'];
    var reType = ['3', 'b7', '#2', '6', '4', '1', 'b5', 'b2', '#3', '7', '5', '2', 'b6', 'b3', '#4', '#1', 'b4'];

    var miType = ['#3', '7', '5', '2', 'b6', 'b3', '#4', '#1', 'b4', '6', '3', '#5', '#2', '4', '1', 'b5'];
    var miTypeAmount = miType.length;
    var flineStr = '';

    for (var i = 0; i < 16; i++) {
        var getRandomPitch = Math.floor((Math.random() * miTypeAmount) + 1);

        if (i == 3 || i == 7 || i == 11) {
            flineStr += miType[getRandomPitch] + ' || ';
        } else
            flineStr += miType[getRandomPitch] + '  ';
    }
    $("#fLine").html(flineStr);


});