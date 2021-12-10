import './App.css';
import Profile from "./Component/Profile";
import firas from './DSC_1073.JPG'

function App() {
  const handleName = (name) => {
    alert('name: ' + name);

  };
  return (
    <div className="App">
      <header className="App-header">
        <Profile fullName='FirasHaj' bio='bio' profession='Ui/Ux Designer' image={firas} handleName={handleName} />
      </header>
    </div>
  );
}

export default App;