describe("when calling overload with a Custom type", function(){

	var method,
		spy;

	function Custom(){

	}

	beforeEach(function () {
		spy = sinon.spy();

		because: {
			method = overload([Custom], spy);
		}

	});

	describe("when calling the returned function with an instance of Custom", function(){

		beforeEach(function(){
			because: {
				method(new Custom());
			}
		})

		it("should call the spy", function(){
			expect(spy.callCount).toBe(1);
		});

	});

	describe("when calling the returned function with something else", function(){

		beforeEach(function(){
			because: {
				method([]);
			}
		})

		it("should not call the spy", function(){
			expect(spy.callCount).toBe(0);
		});

	});

});