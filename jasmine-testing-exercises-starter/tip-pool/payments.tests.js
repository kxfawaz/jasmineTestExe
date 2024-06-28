describe("Payment Test(with setup and tear-down)", function() {
    beforeEach(function () {
        // billAmtInput.value = 200;
        // tipAmtInput.value = 30;
        // submitPaymentInfo();
     
    });



it('should add a new payment on submitPaymentInfo()',function(){
    billAmtInput.value = 200;
    tipAmtInput.value = 30;
    submitPaymentInfo();
    
expect(Object.keys(allPayments).length).toEqual(1);
expect(allPayments["payment1"].billAmt).toEqual('200');
expect(allPayments["payment1"].tipAmt).toEqual('30');
expect(allPayments["payment1"].tipPercent).toEqual(15);

});

it('should not add a new payment if submitPaymentInfo() has an empty input',function(){


billAmtInput.value = ""
tipAmtInput.value = ""
submitPaymentInfo();

expect(Object.keys(allPayments).length).toEqual(0);


});

it('should update payment on appendPaymentTable()',function(){


// let curPayment = createCurPayment();
//     allPayments['payment1'] = curPayment;
//     appendPaymentTable(curPayment);

let tdPayment = document.querySelectorAll('#paymentTable tbody tr td');



expect(tdPayment.length).toEqual(3);
expect(tdPayment[0].innerHTML).toEqual('$200');
expect(tdPayment[1].innerHTML).toEqual('$30');
expect(tdPayment[2].innerHTML).toEqual('15%');


});

afterEach(function() {
 
    // serverId = 0;
    // allServers = {};
    // serverTbody.innerHTML = '';
  });
});