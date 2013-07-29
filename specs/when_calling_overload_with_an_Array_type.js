describe("when calling overload with an Array type", function(){

	var method,
		spy;

	beforeEach(function () {
		spy = sinon.spy();

		because: {
			method = overload([Array], spy);
		}

	});

	describe("when calling the returned function with an array", function(){

		beforeEach(function(){
			because: {
				method([]);
			}
		})

		it("should call the spy", function(){
			expect(spy.callCount).toBe(1);
		});

	});

	describe("when calling the returned function with something else", function(){

		beforeEach(function(){
			because: {
				method(1);
			}
		})

		it("should not call the spy", function(){
			expect(spy.callCount).toBe(0);
		});

	});

});