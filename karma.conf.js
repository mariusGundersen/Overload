module.exports = function(config){
	config.set({
	
		files: [
		  'specs/libs/*.js',
		  'specs/matchers.js',
		  'specs/*.js',
		  'source/*.js'
		],

		frameworks: [
		  'jasmine'
		],
		
		exclude: [

		],
		
		reporters: [
			'dots'
		],

		autoWatch: true

	});
};