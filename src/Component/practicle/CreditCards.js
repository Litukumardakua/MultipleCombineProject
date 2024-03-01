import React, { useState } from "react";
import Cards from "react-credit-cards";
import 'react-credit-cards/es/styles-compiled.css';

const CreditCards = () => {
  const [creditState, setCrediState] = useState({
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  });

  handleInputFocus = (e) => {
    setCrediState({ focus: e.target.name });
  }
  
  handleInputChange = (e) => {
    const { name, value } = e.target;
    
    setCrediState({ [name]: value });
  }

  return (
      <div id="PaymentForm">
        <Cards
          cvc={creditState.cvc}
          expiry={creditState.expiry}
          focused={creditState.focus}
          name={creditState.name}
          number={creditState.number}
        />
        <form>
          <input
            type="text"
            name="number"
            placeholder="Card Number"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <input
            type="text"
            name="name"
            placeholder="name"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <input
            type="text"
            name="expiry"
            placeholder="MM?YY Expiry"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <input
            type="tel"
            name="cvc"
            placeholder="cvc"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </form>
      </div>
  );
};

export default CreditCards;
