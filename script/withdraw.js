document.getElementById("btn-withdraw").addEventListener("click", function () {
  const newWithdrawAmount = getInputFieldValueById("withdraw");
  const previousWithdrawTotal = getElementValueById("total-withdraw");

  const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  setElementValueById("total-withdraw", newWithdrawTotal);

  const previousBalanceTotal = getElementValueById("total-balance");
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

  setElementValueById("total-balance", newBalanceTotal);
});
