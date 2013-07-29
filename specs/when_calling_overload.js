describe("when calling overload", function(){

	var method;

	beforeEach(function(){

		because: {
			method = overload();
		}

	});

	it("should return a function", function(){
		expect(method).toBeA("function");
	})

});