# overload.js

A simple way to overload a function depending on the type of the parameters passed to it.

## Usage

Create a mathod taking different types and number of arguments by calling overload. The returned method can be called just like any other function.

```javascript
var createPerson = overload([String], function(name){
	return "name: "+name;
}).when([String, Number], function(name, age){
	return createPerson(name)+", age: "+age;
}).when([String, Number, Function], function(name, age, callback){
	return callback(name, age);
});



createPerson("JavaScript") //returns 'name: JavaScript'
createPerson("JavaScript", 18) //returns 'name: JavaScript, age: 18'
createPerson("JavaScript", 18, function(name, age){
	return "age: "+age+", name: "+name;
}) //returns 'age: 18, name: JavaScript'

```

### Fallback

If nothing matches, a fallback function will be called:

```javascript
var myMethod = overload([String], function(value){
	return value.toUpperCase();
}).fallback(function(){
	throw Error("what happened here?" + arguments);
});


myMethod() //throws error

```

### Constructors

You can create your own instances and use the constructor to match

```javascript
function Person(name, age){
	this.name = name;
	this.age = age;
}

var getAge = overload([Person], function(person){
	return person.age
}).when([Number], function(age){
	return age;
});


getAge(new Person("JavaScript", 18)) //returns 18
getAge(18) //returns 18

```


## MIT Licence

Copyright ©2014 Marius Gundersen All Rights Reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
