import Button from "../../components/Button/Button";
import Alert from "../../components/Alert/Alert";
import Question from "../../components/Question-Container/Question";
import UserLogin from "../../components/User-Login/UserLogin";
import Table from "../../components/Table/Table";
import "./Test.css";
import {useState } from "react";

function App() {
  //Alert Visibility set to false
  const [alertVisible, setAlertVisibility] = useState(false);

  
  
  return (
    <div className="test-container">
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}> Submitted! </Alert>
      )}

      <Question />
      
      <div className="button">
        <Button color="primary" onClick={() => setAlertVisibility(true)}>
          Submit
        </Button>
      </div>

      <UserLogin/>
      <Table/>

    <div>
      
    </div>


    </div>
  );
}

export default App;
