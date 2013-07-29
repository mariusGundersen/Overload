overload.js
===========

A simple way to overload a function depending on the type of the parameters passed to it.

==Usage:==

```javascript
var createPerson = overload([String], function(name){
	return "name: "+name;
}).with([String, Number], function(name, age){
	return "name: "+name+", age: "+age;
}).with([String, Number, Function], function(name, age, callback){
	return callback(name, age);
});



createPerson("JavaScript") //returns 'name: JavaScript'
createPerson("JavaScript", 18) //returns 'name: JavaScript, age: 18'
createPerson("JavaScript, 18, function(name, age){
	return "age: "+age+", name: "+name;
}) //returns 'age: 18, name: JavaScript'

```
