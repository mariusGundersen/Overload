describe("when calling overload with empty array", function(){

	var method,
		spy;

	beforeEach(function () {
		spy = sinon.spy();

		because: {
			method = overload([], spy);
		}

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