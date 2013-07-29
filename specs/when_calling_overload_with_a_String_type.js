describe("when calling overload with a String type", function(){

	var method,
		spy;

	beforeEach(function () {
		spy = sinon.spy();

		because: {
			method = overload([String], spy);
		}

	});

	describe("when calling the returned function with a string", function(){

		beforeEach(function(){
			because: {
				method("hello");
			}
		})

		it("should call the spy", function(){
			expect(spy.callCount).toBe(1);
		});

	});

	describe("when calling the returned function with something else", function(){

		beforeEach(function(){
			because: {
				method(true);
			}
		})

		it("should not call the spy", function(){
			expect(spy.callCount).toBe(0);
		});

	});

});