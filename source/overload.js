var overload = (function(){

	function overload(){

		if(arguments.length == 0){
			throw new Error("usage: overload(function) or overload(array, function)");
		}else if(arguments.length == 1){
			var func = arguments[0];
			return function(){
				func.apply(this, arguments);
			};
		}else if(arguments.length == 2){
			var func = arguments[1];
			return function(){
				func.apply(this, arguments);
			};
		}
	}

	return overload;

})();