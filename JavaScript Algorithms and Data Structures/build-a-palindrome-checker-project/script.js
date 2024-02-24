let inputText, checkText, showResult;

// initializing //

function init(){

	inputText = document.getElementById("text-input");
	checkText = document.getElementById("check-btn");
	showResult = document.getElementById("result");
	checkText.addEventListener("click", isPalindrome);
}

// ----------------- //

function isPalindrome(){
	if(inputText.value === ""){
		alert("Please input a value.");
		return;
	}
	const str = inputText.value.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
	const reverseStr = str.split("").reverse().join("");
	showResult.innerText = reverseStr;

	/* 失敗作
	for(let i = 0; i < str.length / 2; i++){
		if(str.chatAt(i + 1) !== str.chatAt(str.length - i)){
			return false;
		}
	}
	return true;
	*/

	showResult.classList.remove("hide");

	if(str === reverseStr){
		showResult.innerText = inputText.value + " is a Palindrome."
	} else {
		showResult.innerText = inputText.value + " is not a Palindrome."
	}
}

init();


// ----------------- //

particlesJS("particles-js",{
	"particles":{
		"number":{
			"value":38,
			"density":{
				"enable":true,
				"value_area":800
			}
		},
		"color":{
			"value":"#000000"
		},
		"shape":{
			"type":"polygon",
			"stroke":{
				"width":0,
			},
	"polygon":{
		"nb_sides":3
	},
	"image":{
		"width":190,
		"height":100
	}
	},
		"opacity":{
		"value":0.664994832269074,
		"random":false,
		"anim":{
			"enable":true,
			"speed":2.2722661797524872,
			"opacity_min":0.08115236356258881,
			"sync":false
		}
		},
		"size":{
			"value":5,
			"random":true,
			"anim":{
				"enable":false,
				"speed":40,
				"size_min":0.1,
				"sync":false
			}
		},
		"line_linked":{
			"enable":true,
			"distance":150,
			"color":"#000000",
			"opacity":0.6,
			"width":1
		},
		"move":{
			"enable":true,
			"speed":5,
			"direction":"none",
			"random":false,
			"straight":false,
			"out_mode":"out",
			"bounce":false,
			"attract":{
				"enable":false,
				"rotateX":600,
				"rotateY":961.4383117143238
			}
		}
	},
	"interactivity":{
		"detect_on":"canvas",
		"events":{
			"onhover":{
				"enable":false,
				"mode":"repulse"
			},
	"onclick":{
		"enable":false
	},
	"resize":true
		}
	},
	"retina_detect":true
});
