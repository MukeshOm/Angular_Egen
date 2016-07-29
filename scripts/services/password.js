angular.module('passwordApp')

	.factory('Password', function() {

		function getStrength(pass) {
	    var progress = 0;
	    if (!pass)
	        return progress;


	    var letters = new Object();
	    for (var i=0; i<pass.length; i++) {
	        letters[pass[i]] = (letters[pass[i]] || 0) + 1;
	        progress += 5.0 / letters[pass[i]];
	    }

	    
	    var variations = {
	        digits: /\d/.test(pass),
	        lower: /[a-z]/.test(pass),
	        upper: /[A-Z]/.test(pass),
	        nonWords: /\W/.test(pass),
	    }

	    var variationCount = 0;
	    for (var check in variations) {
	        variationCount += (variations[check] == true) ? 1 : 0;
	    }
	    progress += (variationCount - 1) * 10;

	    if(progress > 100) progress = 100;

	    return parseInt(progress);
		}


		return {
			getStrength: function(pass) {
				return getStrength(pass);
			}
		}

	});