document.getElementById("btn-deposit").addEventListener("click", function () {
  const newDepositAmount = getInputFieldValueById("deposit");
  const previousDepositTotal = getElementValueById("total-deposit");

  const newDepositTotal = previousDepositTotal + newDepositAmount;
  setElementValueById("total-deposit", newDepositTotal);
  const previousBalanceTotal = getElementValueById("total-balance");
  const newBalanceTotal = previousBalanceTotal + newDepositAmount;

  setElementValueById("total-balance", newBalanceTotal);
});
