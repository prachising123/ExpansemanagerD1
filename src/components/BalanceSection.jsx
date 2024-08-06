import React from 'react';

const  BalanceSection = () => {
  return (
    <div class="main-section">

    <div id="current-bal" class="balance">
        <span>
            <p>Current Balance</p>
        <h1>₹100,000</h1>
        </span>
        <i class="fa-solid fa-wallet"></i>
    </div> 

    <form class="transaction-form">
        <input type="text" placeholder="Enter Your Transaction"/>
        <input type="number" placeholder="Enter Amount"/>
        <button>Save Transaction<i class="fa-solid fa-floppy-disk"></i></button>
    </form>

</div>
  );
}

export default BalanceSection;
