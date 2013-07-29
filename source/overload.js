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


	function createOverload(types, func){

		var typeNames = types.map(function(m){
			return m.name;
		})

		var fallbackTo = function(){};

		var multiMethod = function(){
			if(matchesTypes(arguments, typeNames)){
				func.apply(this, arguments);
			}else{
				fallbackTo.apply(this, arguments);
			}
		};

		multiMethod.with = function(){
			if(arguments.length == 0){
				throw new Error("usage: with([types...], function(){ ... });");
			}else{
				return multiMethod;
			}
		};

		multiMethod.fallback = function(func){
			if(func && typeof func == "function"){
				fallbackTo = func;
				return multiMethod;
			}else{
				throw new Error("usage: fallback(function(){ ... });");
			}
		};

		return multiMethod;
	}

	function overload(){

		if(arguments.length == 0){
			throw new Error("usage: overload(function) or overload(array, function)");
		}else if(arguments.length == 1){
			return createOverload([], arguments[0]);
		}else if(arguments.length == 2){
			return createOverload(arguments[0], arguments[1]);
		}
	}

	return overload;

})();