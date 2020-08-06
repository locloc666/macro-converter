document.addEventListener("copy", function (e) {
	var copied = window.getSelection().toString();
	// console.log('copied');
	alert("copied");
});

// const CCC = document.getElementById(copyBtn);
// 取得したtextarea.select();
// document.execCommand("copy");


var app = new Vue({
	el: "#app",
	data: {
		textInput: "(Loc Alh'ost) このように使います",
		textOutput: "",
		optionWatcher: '',
		addText: ''
	},
	mounted: function () {
		this.TTF();
	},
	watch: {
		textInput: function () {
			this.TTF();
		},
		optionWatcher: function () {
			this.TTF();
		},
		addText: function () {
			this.optionWatcher = this.addText
		}
	},
	methods: {
		TTF: function () {
			let tgtTF = [];
			let t = this.textInput;
			let tgt = t.split(/\r\n|\r|\n/);
			var option = this.optionWatcher;
			let i = 0;
			while (i < tgt.length) {
				let temp = tgt[i].replace(/^(\[.*\] )*?\(.*?\)/g, "");
				tgtTF.push(option + " " + temp);
				// if (!this.textInput) {
				// 	tgtTF = [];
				// }
				i++;
			}
			// console.log(tgtTF);
			this.textOutput = tgtTF.join("\r\n");
		}
	}
});



// ^(\[.*\] )*?\(.*?\) 