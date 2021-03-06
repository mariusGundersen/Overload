describe("when calling overload.fallback", function(){

	var overloadResult,
		fallbackResult;

	beforeEach(function(){
		overloadResult = overload(sinon.spy());

		fallbackResult = overloadResult.fallback(sinon.spy());
	});

	it("should return the same function as overload returned", function(){
		expect(fallbackResult).toBe(overloadResult);
	});

	describe("with no arguments", function(){
		it("should throw an error", function(){
			expect(function(){
				overload(sinon.spy()).fallback();
			}).toThrow();
		});
	});

});