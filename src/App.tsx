import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';

function App() {

  //bject
  const personName = {
    first:'Trigo',
    last:'Yodila' 
  }

  //Array
  const nameList = [
    {
      first: "Trigo",
      last: "Yodila",
    },
    {
      first: "Gatena",
      last: "Tuto",
    },
    {
      first: "Glody",
      last: "Yuku",
    },
  ];

  return (
    <div className="App">
      <Greet name="Trigo" messageCount={20} isLoggedIn={true}/>
      <Person name={personName}/>
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
