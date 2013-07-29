describe("when chaining using with", function(){

	var method,
		spy1,
		spy2,
		spy3,
		spy4,
		result;

	beforeEach(function(){

		spy1 = sinon.stub().returns("result1");
		spy2 = sinon.stub().returns("result2");
		spy3 = sinon.stub().returns("result3");
		spy4 = sinon.stub().returns("result4");

		method = overload([String], spy1);
		method.with([Number], spy2);
		method.with([Array, Function], spy3);
		method.fallback(spy4);

	});

	describe("when called with a string", function(){

		beforeEach(function(){
			result = method("hello");
		});

		it("should call the first function", function(){
			expect(spy1.callCount).toBe(1);
			expect(spy2.callCount).toBe(0);
			expect(spy3.callCount).toBe(0);
			expect(spy4.callCount).toBe(0);
		});

		it("should call the function with the passed arguments", function(){
			expect(spy1.calledWithExactly("hello")).toBe(true);
		});

		it("should return the result of the spy", function(){
			expect(result).toBe("result1");
		});

	});

	describe("when called with a number", function(){

		beforeEach(function(){
			result = method(1);
		});

		it("should call the second function", function(){
			expect(spy1.callCount).toBe(0);
			expect(spy2.callCount).toBe(1);
			expect(spy3.callCount).toBe(0);
			expect(spy4.callCount).toBe(0);
		});

		it("should call the function with the passed arguments", function(){
			expect(spy2.calledWithExactly(1)).toBe(true);
		});

		it("should return the result of the spy", function(){
			expect(result).toBe("result2");
		});
	});

	describe("when called with an array and a function", function(){

		var arg1 = [1, "hello"];
		var arg2 = function(){};

		beforeEach(function(){
			result = method(arg1, arg2);
		});

		it("should call the third function", function(){
			expect(spy1.callCount).toBe(0);
			expect(spy2.callCount).toBe(0);
			expect(spy3.callCount).toBe(1);
			expect(spy4.callCount).toBe(0);
		});

		it("should call the function with the passed arguments", function(){
			expect(spy3.calledWithExactly(arg1, arg2)).toBe(true);
		});

		it("should return the result of the spy", function(){
			expect(result).toBe("result3");
		});
	});

	describe("when called with something else", function(){

		var arg1 = [1, "hello"];

		beforeEach(function(){
			result = method(arg1);
		});

		it("should call the fourth function", function(){
			expect(spy1.callCount).toBe(0);
			expect(spy2.callCount).toBe(0);
			expect(spy3.callCount).toBe(0);
			expect(spy4.callCount).toBe(1);
		});

		it("should call the function with the passed arguments", function(){
			expect(spy4.calledWithExactly(arg1)).toBe(true);
		});

		it("should return the result of the spy", function(){
			expect(result).toBe("result4");
		});
	});

});