
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Webingo!</title>
	<link href="https://fonts.googleapis.com/css?family=Bungee+Shade|Lato:300|Anonymous+Pro" rel="stylesheet">
	<style>
	body {
		margin: 2em 10%;
		text-align: center;
		font-size: 1.5em;
		font-family: 'Lato', sans-serif;
	}
	h1 {
		margin: .5em 0;
		font-family: 'Bungee Shade', cursive;
		font-weight: normal;
		font-size: 2.75em;
	}
	h1.webingo {
		animation: blinker .25s linear infinite;
	}
	@keyframes blinker {  
		50% { opacity: 0; }
	}
	button {
		margin: .75em auto;
		padding: .5em;
		border: none;
		cursor: pointer;
		background-color: #0087FF;
		color: #fff;
		font-size: 1em;
		font-family: 'Lato', sans-serif;
	} 
	button:hover {
		background-color: #4CAF50;
	}
	button:disabled {
		background-color: #CCC;
	}
	ul.grid {
		list-style: none;
		display: inline-block;
		width: 400px;
		margin: 0;
		padding: 0;
		border: 5px solid #0087FF;
		font-family: 'Anonymous Pro', monospace;
	}
	ul.grid li {
		box-sizing: border-box;
		display: inline-block;
		float: left;
		width: 80px;
		height: 80px;
		padding-top: 1.15em;
		border: 1px solid #0087FF;
	}
	ul.grid li.got {
		background-color: #0087FF;
	}
	ul.grid li.webingo {
		background-color: #F44336;
		border-color: #F44336; 	
	}
	.status {
		min-height: 1.15em;
		font-family: 'Anonymous Pro', monospace;
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
	<p id="status" class="status"></p>

	<button id="" type="button">Hit me!</button>
	<script src="node_modules/jquery/dist/jquery.min.js"></script>
	<script src="webingo.js"></script>
</body>
</html>