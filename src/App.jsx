   import React from 'react';
   import Navbar from "./components/Navbar";
   import BalanceSection from "./components/BalanceSection";
   import ExpenseSection from "./components/ExpenseSection";
   import ListGroup from './components/ListGroup';


  const App = () => {
     return (
      <>
     <Navbar/>
     <div className="container">
      <BalanceSection/>
      <ExpenseSection/>
      <ListGroup/>  
     </div>

       </>
     );
   }
   
   export default App;
   