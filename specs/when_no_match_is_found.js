describe("when no match is found", function(){

	var fallbackSpy,
		shouldNotBeCalledSpy;

	beforeEach(function(){

		fallbackSpy = sinon.spy();
		shouldNotBeCalledSpy = sinon.spy();

		var method = overload([Number], shouldNotBeCalledSpy).fallback(fallbackSpy);

		because: {
			method();
		}
	});


	it("should call the fallback", function(){
		expect(fallbackSpy.callCount).toBe(1);
	});
	it("should not call the overloaded function", function(){
		expect(fallbackSpy.callCount).toBe(1);
	});

});
