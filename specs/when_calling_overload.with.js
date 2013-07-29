describe("when calling overload.with", function(){

	var overloadResult,
		withResult;

	beforeEach(function(){
		overloadResult = overload([String], sinon.spy());

		withResult = overloadResult.with([Number], sinon.spy());
	});

	it("should return the same function as overload returned", function(){
		expect(withResult).toBe(overloadResult);
	});


	describe("with no arguments", function(){
		it("should throw an error", function(){
			expect(function(){
				overload(sinon.spy()).with();
			}).toThrow();
		});
	});
});