window.onload = function() {
	var oBtn = document.getElementById("btn");
	oBtn.addEventListener("click", Sends);
	var oEnter = document.getElementById("text1");

	function Sends() {
		var oText = document.getElementById("text1");
		var textValue=oText.value;
		var oP = document.getElementById("time");
		var day = new Date();
		var w = day.getDay();
		var weekday = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
		if(textValue.trim() != "") {
			var oContent = document.getElementById("Content");
			var option = document.createElement("div");
			option.className="list";
			var option1 = document.createElement("div");
			option1.className="list1";
			option.style.width=textValue.length*10+"px";
			option1.innerHTML += day.getFullYear() + '-' + (day.getMonth() + 1) + '-' + day.getDate() + "  " + weekday[w] + "  " + day.getHours() + ":" + clocktime(day.getMinutes());
			option.innerHTML += textValue;
			oContent.appendChild(option1);
			oContent.appendChild(option);
			oText.value="";
			oText.focus();
		}

	}

	function clocktime(num) {
		if(num < 10) {
			num = "0" + num;
		}
		return num;
	}
	oEnter.onkeyup = function(ev) {
		var ev = ev || event;
		if(this.value != " ") {
			if(ev.keyCode == 13&&ev.ctrlKey) {
				Sends();
			}
		}
	}
}