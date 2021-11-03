

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  document.querySelector(".float").style.display= "none";
  document.querySelector(".textarea-container").style.display= "none";
  var element = document.getElementById("article");
  element.classList.remove("article");
  var element = document.getElementById("section");
  element.classList.remove("section");
}
	else {
	  document.querySelector(".mobile-text").style.display= "none";
	}
  
	function enable_viram() {
    document.getElementById("viram").disabled = false;
	}
  
document.getElementById("viram").accessKey = ".";

	
	
		function viram() { 

		var curos = document.querySelector("#unicode_text").selectionStart;
		var viram = $("#unicode_text").val();
		$("#unicode_text").val(viram.slice(0, curos) + "। " + viram.slice(curos));
		  document.getElementById("viram").disabled = true;
                    $('#unicode_text').focus();
			}
