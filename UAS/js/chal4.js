var paragraf = document.getElementsByClassName("paragraf");
		setInterval(function () {
			paragraf[0].style.color = "black";
			
			setTimeout(function () {
				paragraf[0].style.color = "white";
			}, 500)
		}, 1000);