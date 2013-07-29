
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], function () {
            return (root.overload = factory());
        });
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like enviroments that support module.exports,
        // like Node.
        module.exports = factory(require());
    } else {
        // Browser globals
        root.overload = factory();
    }
}(this, function () {

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


	function createOverload(){


		var entries = [];

		var fallbackTo = function(){};

		var multiMethod = function(){

			for(var i=0; i<entries.length; i++){
				if(matchesTypes(arguments, entries[i].types)){
					return entries[i].func.apply(this, arguments);
				}	
			}

			return fallbackTo.apply(this, arguments);
		};

		multiMethod.with = function(types, func){
			if(arguments.length == 2 && typeOf(arguments[0]) == "Array" && typeOf(arguments[1]) == "Function"){

				var typeNames = types.map(function(m){
					return m.name;
				});

				entries.push({types: typeNames, func: func});


				return multiMethod;
			}else{
				throw new Error("usage: with([types...], function(){ ... });");
			}
		};

		multiMethod.fallback = function(func){
			if(typeOf(func) == "Function"){
				fallbackTo = func;
				return multiMethod;
			}else{
				throw new Error("usage: fallback(function(){ ... });");
			}
		};

		return multiMethod;
	}

	function overload(){

		if(arguments.length == 1 && typeOf(arguments[0]) == "Function"){
			return createOverload().with([], arguments[0]);
		}else if(arguments.length == 2 && typeOf(arguments[0]) == "Array" && typeOf(arguments[1]) == "Function"){
			return createOverload().with(arguments[0], arguments[1]);
		}else{
			throw new Error("usage: overload(function) or overload(array, function)");
		}
	}

	return overload;

}));