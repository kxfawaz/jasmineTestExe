describe("helpers test (with setup and tear-down)", function() {
    beforeEach(function () {
    //     billAmtInput.value = 200;
    // tipAmtInput.value = 30;
    // submitPaymentInfo();
     
    });

it('should sum all bills paid through sumPaymentTotal()',function(){
    billAmtInput.value = 200;
    tipAmtInput.value = 30;
    submitPaymentInfo();

    expect(sumPaymentTotal('billAmt')).toEqual(200);
    
})

it('should sum all tips through sumPaymentTotal',function(){
    billAmtInput.value = 200;
    tipAmtInput.value = 30;
    submitPaymentInfo();

    expect(sumPaymentTotal('tipAmt')).toEqual(30);

});
it('should sum all tips through sumPaymentTotal',function(){
    billAmtInput.value = 200;
    tipAmtInput.value = 30;
    submitPaymentInfo();

    expect(sumPaymentTotal('tipPercent')).toEqual(30);

});

});
