import { Fragment, useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const [total, setTotal] = useState(0);

  //calculate total balance amounts
  useEffect(() => {
    const amounts = transactions.map((transaction) => transaction.amount);
    console.log("amounts", amounts);
    const totalAmounts = amounts
      .reduce((acc, item) => (acc += item), 0)
      .toFixed(2);
    setTotal(totalAmounts);
  }, [transactions]);

  return (
    <Fragment>
      <h4>YOUR BALANCE</h4>
      <h1 id="balance">${total}</h1>
    </Fragment>
  );
};

export default Balance;
