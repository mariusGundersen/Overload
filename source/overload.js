var overload = (function(){


	function createEntry(func){
		var entry = function(){
			func.apply(this, arguments);
		};

		entry.with = function(){

		};
		
		return entry;
	}

	function overload(){

		if(arguments.length == 0){
			throw new Error("usage: overload(function) or overload(array, function)");
		}else if(arguments.length == 1){
			var func = arguments[0];
			return createEntry(func);
		}else if(arguments.length == 2){
			var func = arguments[1];
			return createEntry(func);
		}
	}

	return overload;

})();