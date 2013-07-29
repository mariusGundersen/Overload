describe("when calling overload with a Number type", function(){

	var method,
		spy;

	beforeEach(function () {
		spy = sinon.spy();

		because: {
			method = overload([Number], spy);
		}

	});

	describe("when calling the returned function with a number", function(){

		beforeEach(function(){
			because: {
				method(1);
			}
		})

		it("should call the spy", function(){
			expect(spy.callCount).toBe(1);
		});

	});

	describe("when calling the returned function with something else", function(){

		beforeEach(function(){
			because: {
				method("hello");
			}
		})

		it("should not call the spy", function(){
			expect(spy.callCount).toBe(0);
		});

	});

});