
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Webingo!</title>
	<link href="https://fonts.googleapis.com/css?family=Bungee+Shade" rel="stylesheet">
	<style>
	body {
		margin: 2em 10%;
		text-align: center;
	}
	h1 {
		margin-bottom: .25em;
		font-family: 'Bungee Shade', cursive;
		font-weight: normal;
		font-size: 3.5em;
	}
	ul.grid {
		list-style: none;
		display: inline-block;
		width: 280px;
		padding: 0;
	}

	ul.grid li{
		display: inline-block;
		box-sizing: border-box;
		width: 50px;
		height: 50px;
		padding-top: 1em;
		border: 1px solid pink;
		font-family: monospace;
	}

	ul.grid li.got {
		background-color: pink;	
	}

	.monospaced {
		font-family: monospace;
	}
	</style>
</head>
<body>
		
	<h1>WEBINGO!</h1>

	<ul class="grid">
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
	</ul>

	<h2 id="message"></h3>
	<p id="status" class="monospaced"></p>

	<button id="" type="button">Hit me!</button>
	<script src="node_modules/jquery/dist/jquery.min.js"></script>
	<script src="webingo.js"></script>
</body>
</html>