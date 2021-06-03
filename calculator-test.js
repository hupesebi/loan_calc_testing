
it('should calculate the monthly rate correctly', function () {
 const values = {amount : 10000, years: 1, rate: 10 }
 expect (calculateMonthlyPayment(values)).toEqual('879.16');
});


it("should return a result with 2 decimal places", function() {
  const values = {amount : 12, years: 1, rate: 10 }
  expect (calculateMonthlyPayment(values)).toEqual('1.05');
 });

/// etc
