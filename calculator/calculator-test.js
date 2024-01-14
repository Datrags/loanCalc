
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount: 1000, years: 10, rate: 0.05})).toEqual("10.61");
});


it("should return a result with 2 decimal places", function() {
  //check if the 3rd element before the end is a '.'
  let mp = calculateMonthlyPayment({amount: 10000, years: 13, rate: 0.05});
  expect(mp.slice(mp.length-3, mp.length)).toHaveSize(3);
  expect(mp.slice(mp.length-3, mp.length)).toContain(".");
});

/// etc
