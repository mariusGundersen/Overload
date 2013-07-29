describe("when calling overload with a Function type", function(){

	var method,
		spy;

	beforeEach(function () {
		spy = sinon.spy();

		because: {
			method = overload([Function], spy);
		}

	});

	describe("when calling the returned function with a function", function(){

		beforeEach(function(){
			because: {
				method(function(){

				});
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