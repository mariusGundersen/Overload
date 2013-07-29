var overload = (function(){

	function compareAllElements(arr1, arr2){
		if(arr1.length != arr2.length) return false;
		for(var i=0; i<arr1.length; i++){
			if(arr1[i] !== arr2[i]) return false;
		}
		return true;
	}
	
	function typeOf(obj) {
		return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1];
	}

	function typeOfArray(types){
		return Array.prototype.map.call(types, typeOf);
	}

	function matchesTypes(types, expected){
		return compareAllElements(expected.map(function(m){
			return m.name;
		}),
		typeOfArray(types));
	}


	function createEntry(types, func){
		var entry = function(){
			if(matchesTypes(arguments, types))
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
			return createEntry([], arguments[0]);
		}else if(arguments.length == 2){
			return createEntry(arguments[0], arguments[1]);
		}
	}

	return overload;

})();