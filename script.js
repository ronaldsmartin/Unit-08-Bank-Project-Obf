var depositNames = [];
var depositAmounts = [];
var deposit;
var name;
var totalDeposit;

$(".newDeposit").click(function() {
    totalDeposit = 0;

    deposit = $(".accountDeposit").val();
    name = $(".accountName").val();
    $(".ledger").append("<p>" + name + "</p><p class='ledgerBorder'>$" + deposit + "</p>");

    depositAmounts.push(deposit);
    depositNames.push(name);
    depositAmounts.forEach(function(total) {
        totalDeposit = totalDeposit + parseInt(total);
        $(".number").text("Number of Transactions: " + depositAmounts.length);
        $(".total").text("Total: $" + totalDeposit);
    });

});

$(".update").click(function(){
    console.log(depositAmounts[depositAmounts.length]);
   alert("Your last depsoit amount was $"+depositAmounts[depositAmounts.length-1]+" by "+depositNames[depositNames.length-1]);
 
});