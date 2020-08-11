var app = new Vue({
	el: "#app",
	data: {
		textInput: "(Loc Alh'ost) 左にペーストすると右に出るよ",
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
				i++;
			}
			this.textOutput = tgtTF.join("\r\n");
		}
	}
});