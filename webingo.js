$(function(){

	var firstNames = [],
        secondNames = [],

	    firstNames = ['bill', 'credit', 'fish', 'duck', 'night', 'vision', 'love', 'news', 'relaxation', 'fun', 'dining', 'elevator', 'shopping', 'pasta'];
	    dividers = ['', '-'];
	    secondNames = ['head', 'search', 'finder', 'master', 'helper', 'brain', 'news', 'hire', 'expert', 'guru', 'revenge', 'rodeo', 'care'];
    
    function initBoard() {
    	var codes = ['200', '400', '404', '403', '302', '301', '000'];
    	$.each($('ul.grid li'), function () {
    		$(this).text(getRandomItem(codes));
    	});
    }

    function checkBoard(code) {
    	$.each($('ul.grid li'), function () {
    		if ($(this).text() == code) {
    			$(this).addClass('got');
    		}
    	});	
    }

    function getRandomItem(array) {
        var rnd = Math.floor(Math.random() * array.length);
        return array[rnd];
    }
    
    function generateName() {
        var firstName = getRandomItem(firstNames),
        	divider = getRandomItem(dividers),
            secondName =  getRandomItem(secondNames);
        return 'www.' + firstName + divider + secondName + '.com';
    }
    
    function printUrl(str) {
        $('#message').text(str);
    }

    function printStatus(str) {
    	var status;
    	if (str[0] === '*') {
    		status = 'Site not found';
    	} else {
    		status = str;
    	}

        $('#status').text(status);
    }

    function checkUrl(url) {
		$.ajax({
	  		url: 'api.php/' + url,
	  		context: document.body
		}).done(function(data) {
			// console.log(data.substring(9, 12));
			printStatus(data);
			checkBoard(data.substring(9, 12));
		});
    }

    // - - - - - - - - - - - - - - - - - -

    initBoard();

	$('button').on('click keypress', function () {
		$('#status').text('');

		var url_for_checking = generateName();
		printUrl(url_for_checking);
		checkUrl(url_for_checking);

	})
});