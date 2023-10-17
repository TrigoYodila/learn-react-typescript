import './App.css';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';

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
      {/* <Greet name="Trigo" messageCount={20} isLoggedIn={true}/>
      <Person name={personName}/>
      <PersonList names={nameList} /> */}

      <Status status="loading" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to leonardo Dicpario!</Heading>
      </Oscar>
      <Greet name="Trigo" isLoggedIn={true} />
    </div>
  );
}

export default App;
