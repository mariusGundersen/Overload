beforeEach(function(){
	this.addMatchers({
		toBeA: function(type){
			return typeof this.actual == type;
		}
	});
});