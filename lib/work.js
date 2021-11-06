
document.getElementById("viram").accessKey = ".";

	
	
		function viram() { 

		var curos = document.querySelector("#unicode_text").selectionStart;
		var viram = $("#unicode_text").val();
		$("#unicode_text").val(viram.slice(0, curos) + "। " + viram.slice(curos));
		  document.getElementById("viram").disabled = true;
                    $('#unicode_text').focus();
			}
