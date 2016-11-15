require("./style.css");
module.exports = function(ngModule) {

	ngModule.directive('whiteBoard', whiteBoardFn);

	function whiteBoardFn() {
		return {
			restrict: 'E',
			templateUrl: 'directives/white-board/white-board.html',
			controllerAs: 'sentenceList',
			controller: function () {
				var sentenceList = this;
				sentenceList.sentences = [];
				
				sentenceList.addSentence = function() {
					if (sentenceList.addText) {
						sentenceList.sentences.push({text:sentenceList.addText});
						sentenceList.addText = '';
					}
				};

				sentenceList.delSentence = function(index) {
					sentenceList.sentences.splice(index, 1);
				};
			}
		};
	}	
};
