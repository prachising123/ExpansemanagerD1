import React from 'react';

const ExpenseSection = () => {
  return (
    <div id="current-status" class="main-section">
    <div id="income" class="balance">
       <span>
        <p>Current Income</p>
        <h1>₹100,000</h1>
        </span>
    </div>

            <div id="expense" class="balance">
                <span>
                    <p>Current Expense</p>
                <h1>₹100,000</h1>
                </span>
            </div>
        </div> 
  );
}

export default ExpenseSection;
