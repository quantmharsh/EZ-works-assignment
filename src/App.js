import logo from './logo.svg';
import './App.css';
import EmailForm from './EmailForm';
import Card from './Card';
import Cardgrid from './Cardgrid';

function App() {
  return (
    // <div className="App">
      <div className='container'>
       <div className="left-container">
        <EmailForm /> {/* EmailForm component on the left */}
      </div>
      <div className="right-container">
        <Cardgrid /> {/* CardGrid component on the right */}
      </div>
      {/* </div> */}
     
    </div>
  );
}

export default App;
