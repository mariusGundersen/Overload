var overload = (function(){

	function compareAllElements(arr1, arr2){
		if(arr1.length != arr2.length) return false;
		for(var i=0; i<arr1.length; i++){
			if(arr1[i] !== arr2[i]) return false;
		}
		return true;
	}
	
	function typeOf(obj) {
		var typeString = ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1];
		if(typeString == "Object"){
			return obj.constructor.name;
		}else{
			return typeString;
		}
	}

	function typeOfArray(types){
		return Array.prototype.map.call(types, typeOf);
	}

	function matchesTypes(types, expected){
		return compareAllElements(expected, typeOfArray(types));
	}


	function createEntry(types, func){

		var typeNames = types.map(function(m){
			return m.name;
		})

		var entry = function(){
			if(matchesTypes(arguments, typeNames)){
				func.apply(this, arguments);
			}else if(entry.fallbackTo && typeof entry.fallbackTo == "function"){
				entry.fallbackTo.apply(this, arguments);
			}
		};

		entry.with = function(){

		};

		entry.fallback = function(func){
			entry.fallbackTo = func;
			return entry;
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