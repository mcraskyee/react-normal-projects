import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);
  const [money, setMoney] = useState({
    income: 0,
    expense: 0,
  });

  //calculate income and expense amounts separately
  useEffect(() => {
    const amounts = transactions.map((transaction) => transaction.amount);
    const income = amounts
      .filter((item) => item > 0)
      .reduce((acc, item) => (acc += item), 0)
      .toFixed(2);
    const expense = (
      amounts
        .filter((item) => item < 0)
        .reduce((acc, item) => (acc += item), 0) * -1
    ).toFixed(2);
    console.log("money", income, expense);
    setMoney({ income, expense });
  }, [transactions]);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          ${money.income}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          ${money.expense}
        </p>
      </div>
    </div>
  );
};

export default IncomeExpense;
