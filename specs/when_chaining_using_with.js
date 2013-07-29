describe("when chaining using with", function(){

	var method,
		spy1,
		spy2,
		spy3,
		spy4;

	beforeEach(function(){

		spy1 = sinon.spy();
		spy2 = sinon.spy();
		spy3 = sinon.spy();
		spy4 = sinon.spy();

		method = overload([String], spy1);
		method.with([Number], spy2);
		method.with([Array, Function], spy3);
		method.fallback(spy4);

	});

	describe("when called with a string", function(){

		beforeEach(function(){
			method("hello");
		});

		it("should call the first function", function(){
			expect(spy1.callCount).toBe(1);
			expect(spy2.callCount).toBe(0);
			expect(spy3.callCount).toBe(0);
			expect(spy4.callCount).toBe(0);
		});
	});

	describe("when called with a number", function(){

		beforeEach(function(){
			method(1);
		});

		it("should call the second function", function(){
			expect(spy1.callCount).toBe(0);
			expect(spy2.callCount).toBe(1);
			expect(spy3.callCount).toBe(0);
			expect(spy4.callCount).toBe(0);
		});
	});

	describe("when called with an array and a function", function(){

		beforeEach(function(){
			method([1, "hello"], function(){});
		});

		it("should call the third function", function(){
			expect(spy1.callCount).toBe(0);
			expect(spy2.callCount).toBe(0);
			expect(spy3.callCount).toBe(1);
			expect(spy4.callCount).toBe(0);
		});
	});

	describe("when called with something else", function(){

		beforeEach(function(){
			method([1, "hello"]);
		});

		it("should call the fourth function", function(){
			expect(spy1.callCount).toBe(0);
			expect(spy2.callCount).toBe(0);
			expect(spy3.callCount).toBe(0);
			expect(spy4.callCount).toBe(1);
		});
	});

});