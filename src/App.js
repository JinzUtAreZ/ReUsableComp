import React from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';
import TestFrom from './components/Pages/TestForm';
import InputForm from './components/Pages/InputForm';

function App() {
  // const btnDisable = () => {
  //   const { paramCode, paramDesc, paramValue } = this.state.row;
  //   return this.state.row && paramCode && paramDesc && paramValue;
  // };

  // const [inputData, setInputData] = useState('');

  return (
    <div className="App">
      <TestFrom />
      <InputForm />

      <Card className="divTae" style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="divIhi" style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
