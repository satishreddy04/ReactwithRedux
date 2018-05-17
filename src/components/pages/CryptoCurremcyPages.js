body {
	background-color: white;
	font-family: $font-family;
}

.animated {
	-webkit-animation-duration: 1s;
	animation-duration: 1s;
	-webkit-animation-fill-mode: both;
	animation-fill-mode: both;
}

@keyframes fadeIn {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

.fadeIn {
	-webkit-animation-name: fadeIn;
	animation-name: fadeIn;
}

.navbar {
	border-bottom: 4px solid white;
	background-color: #21ce99;
}

.p-3 {
	background-color: gray;
}
