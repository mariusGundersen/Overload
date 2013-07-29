describe("when calling overload", function(){

	var method,
		spy;

	beforeEach(function () {
		spy = sinon.spy();
	});


	describe("with no arguments", function(){

		it("should throw an exception", function(){
			expect(function(){
				overload();
			}).toThrow();
		});

	});


	describe("with one wrong argument", function(){

		it("should throw an exception", function(){
			expect(function(){
				overload("hello");
			}).toThrow();
		});

	});


	describe("with one of two wrong argument", function(){

		it("should throw an exception", function(){
			expect(function(){
				overload("hello", function(){ });
			}).toThrow();
		});

	});

	describe("with two wrong arguments", function(){

		it("should throw an exception", function(){
			expect(function(){
				overload("hello", true);
			}).toThrow();
		});

	});

	describe("with one function argument", function(){

		beforeEach(function(){

			because: {
				method = overload(spy);
			}

		});

		it("should return a function", function(){
			expect(method).toBeA("function");
		});

		it("the returned function should have a with method", function(){
			expect(method.when).toBeA("function");
		});

		it("the returned function should have a fallback method", function(){
			expect(method.fallback).toBeA("function");
		});

		describe("when calling the returned function", function(){

			beforeEach(function(){
				because: {
					method();
				}
			})

			it("should call the spy", function(){
				expect(spy.callCount).toBe(1);
			});

		});

	});

	describe("with one array and one function argument", function(){

		beforeEach(function(){

			because: {
				method = overload([], spy);
			}

		});

		it("should return a function", function(){
			expect(method).toBeA("function");
		});

		it("the returned function should have a with method", function(){
			expect(method.when).toBeA("function");
		});

		it("the returned function should have a fallback method", function(){
			expect(method.fallback).toBeA("function");
		});

		describe("when calling the returned function", function(){

			beforeEach(function(){
				because: {
					method();
				}
			})

			it("should call the spy", function(){
				expect(spy.callCount).toBe(1);
			});

		});

	});

});