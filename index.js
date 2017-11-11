$(function () {

    var Sol = ['6', '3', 'b7', '#5', '#2', '4', '1', 'b5', '7', '#6', '#3', '#1', '5', '2', '#6', '#4'];
    var La = ['7', '#6', '#3', '#1', '5', '2', 'b6', '#4', '#7', '#2', '6', '3', 'b7', '#1', '#5', '4', 'b1'];
    var Si = ['7', '2', '6', '#3', '#7', '#1', '5', 'b4', 'b1', '3', 'b7', '#2', '6', '4', '1', 'b5', 'b2'];
    var Re = ['3', 'b7', '#2', '6', '4', '1', 'b5', 'b2', '#3', '7', '5', '2', 'b6', 'b3', '#4', '#1', 'b4'];
    var Mi = ['#3', '7', '5', '2', 'b6', 'b3', '#4', '#1', 'b4', '6', '3', '#5', '#2', '4', '1', 'b5'];


    /**
     * 
     * @param {*} symbolType 
     * @param {*} lineName 
     */
    function addSymbolsToLine(symbolType, lineName) {

        var typeAmount = symbolType.length;
        var flineStr = '';

        for (var i = 0; i < 16; i++) {
            var getRandomPitch = Math.floor((Math.random() * typeAmount));
            if (i == 3 || i == 7 || i == 11) {
                flineStr += populateSpace(symbolType[getRandomPitch]) + '&nbsp;&nbsp;&nbsp;&nbsp;||&nbsp;&nbsp;&nbsp;&nbsp;';
            } else
                flineStr += populateSpace(symbolType[getRandomPitch]) + '&nbsp;&nbsp;&nbsp;&nbsp;';
        }

        $(lineName).html(flineStr);
    }

    // Button click event
    $("a[name='switchBtn']").on("click", function () {
        var switchType = $(this).html();
        console.log(switchType);
        $(this).parent().parent().find('li').removeClass('active');
        $(this).parent().addClass('active');

        if (switchType == 'Mi') {
            addSymbolsToLine(Mi, '#fLine');
            addSymbolsToLine(Mi, '#sLine');
            addSymbolsToLine(Mi, '#tLine');
            addSymbolsToLine(Mi, '#f2Line');

        } else if (switchType == 'La') {
            addSymbolsToLine(La, '#fLine');
            addSymbolsToLine(La, '#sLine');
            addSymbolsToLine(La, '#tLine');
            addSymbolsToLine(La, '#f2Line');

        } else if (switchType == 'Si') {
            addSymbolsToLine(Si, '#fLine');
            addSymbolsToLine(Si, '#sLine');
            addSymbolsToLine(Si, '#tLine');
            addSymbolsToLine(Si, '#f2Line');

        } else if (switchType == 'Re') {
            addSymbolsToLine(Re, '#fLine');
            addSymbolsToLine(Re, '#sLine');
            addSymbolsToLine(Re, '#tLine');
            addSymbolsToLine(Re, '#f2Line');

        } else if (switchType == 'Sol') {
            addSymbolsToLine(Sol, '#fLine');
            addSymbolsToLine(Sol, '#sLine');
            addSymbolsToLine(Sol, '#tLine');
            addSymbolsToLine(Sol, '#f2Line');
        }

    });

    function populateSpace(originalStr) {
        return originalStr.length == 2 ? originalStr : '&nbsp;&nbsp;&nbsp;&nbsp;' + originalStr;
    }

});