var firstNames = ['moon', 'top', 'spider', 'soap', 'bill', 'credit', 'fish', 'duck', 'night', 'vision', 'love', 'cash', 'relaxation', 'fun', 'dining', 'elevator', 'shopping', 'pasta', 'aspiration', 'donut'];
    dividers = ['', '-'];
    secondNames = ['world', 'tank', 'barn','trap', 'head', 'search', 'finder', 'master', 'helper', 'brain', 'news', 'hire', 'expert', 'guru', 'revenge', 'rodeo', 'care', 'cakes', 'gent', 'lady', 'crater'],
	responseCodes = ['200', '400', '404', '403', '302', '301', '500','000'],
    webingoCount = 0,
    $title = $('h1'),
    $getSiteBtn = $('button'),
    $winMsg = $('#winMsg'),
    $statusMsg = $('#status');

function initGame() {
	$.each($('ul.grid li'), function () {
		var $this = $(this);
		// Cleardown:
		if ($this.hasClass('got')) $this.removeClass('got');
		if ($this.hasClass('webingo')) $this.removeClass('webingo');
		if ($winMsg.hasClass('show')) $winMsg.removeClass('show');
		// Set up:
		webingoCount = 0;
		$getSiteBtn.text('Hit me!');
		$(this).text(getRandomItem(responseCodes));
	});
}

function checkBoard(code) {
	$.each($('ul.grid li'), function () {
		var $this = $(this);
		if ($this.text() == code) {
			$this.addClass('got');
		}
	});
	checkForLines();
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

    $statusMsg.text(status);
}

function getUrlStatus(url) {
	$getSiteBtn.prop('disabled', true);
	$.ajax({
  		url: 'api.php/' + url,
  		context: document.body,
  		timeout: 3000,
  		error: function (e) {
  			var randomCode = getRandomItem(responseCodes);
  			checkBoard(randomCode);
			printStatus('Took too long...have a ' + randomCode);
			$getSiteBtn.prop('disabled', false);
  		}

	}).done(function(data) {
		printStatus(data);
		$getSiteBtn.prop('disabled', false);
		checkBoard(data.substring(9, 12));
	});
}

function checkForLines() {
	var x_count = 5,
		y_count = 3,
		x_index = 0,
		y_index = 0,
		x_squares = [],
		y_squares = [],
		$squares = $('ul.grid li'),
		grid_count = $squares.length,
		
		checkHorizontal = function (index) {
			if($squares.eq(index).hasClass('got')) {
				x_squares.push(index);
				checkForWebingo(x_squares, x_count);
				checkHorizontal(index + 1);
			} else {
				x_squares = [];
				if(x_index < (grid_count - x_count)) {
					x_index += x_count;
					checkHorizontal(x_index);
				}
			}
		},

		checkVertical = function (index) {
			if($squares.eq(index).hasClass('got')) {
				y_squares.push(index);
				checkForWebingo(y_squares, y_count);
				checkVertical(index + x_count);
			} else {
				y_squares = [];
				if(y_index < x_count) {
					y_index++;
					checkVertical(y_index);
				}
			}
		},

		checkForWebingo = function (array, winningSize) {
			if (array.length === winningSize) {
				$.each(array, function(i){
					webingoIndex = array[i];
					$squares.eq(webingoIndex).addClass('webingo');
				});
				webingoCount++;
				if (!$title.hasClass('webingo')) {
					$title.addClass('webingo');
				}
				$getSiteBtn.text('Go again?');
			}
			if(webingoCount > 0) {
				$winMsg.text('WEBINGO x ' + webingoCount);
				$winMsg.addClass('show');
			}
		};

	checkHorizontal(x_index);
	checkVertical(y_index);
}

// - - - - - - - - - - - - - - - - - -

$(function(){

    initGame();

	$getSiteBtn.on('click keypress', function () {
		$statusMsg.text('');
		if(webingoCount > 0) {
    		$title.removeClass('webingo')
    		initGame();
		}	else {
			var url_for_checking = generateName();
			printUrl(url_for_checking);
			getUrlStatus(url_for_checking);
		}

	})
});