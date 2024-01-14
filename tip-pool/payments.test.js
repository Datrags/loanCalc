it('should not add a new payment on submitPaymentInfo() with empty input', function () {
    billAmtInput.value = '';
    submitPaymentInfo();

    expect(Object.keys(allPayments).length).toEqual(0);
});

it('should create a new payment on createCurPayment()', function () {
    let expectedPayment = {
        billAmt: '50',
        tipAmt: '10',
        tipPercent: 20,
    }

    expect(createCurPayment()).toEqual(expectedPayment);
});

it('should payment update #paymentTable on appendPaymentTable()', function () {
    let curPayment = createCurPayment();
    allPayments['payment1'] = curPayment;

    appendPaymentTable(curPayment);

    let curTdList = document.querySelectorAll('#paymentTable tbody tr td');

    expect(curTdList.length).toEqual(4);
    expect(curTdList[0].innerText).toEqual('$100');
    expect(curTdList[1].innerText).toEqual('$20');
    expect(curTdList[2].innerText).toEqual('%20');
    expect(curTdList[3].innerText).toEqual('X');
  });
