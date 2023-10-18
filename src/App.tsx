import './App.css';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Box } from './components/context/Box';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { UserContextProvider } from './components/context/UserContext';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { User } from './components/state/User';
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

      {/* <Status status="loading" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to leonardo Dicpario!</Heading>
      </Oscar>
      <Greet name="Trigo" isLoggedIn={true} /> */}

      {/* <Button handleClick={(event, id) => {
        console.log("Bonjour",event, id)
      }}/>
      <Input value='' handleChange={(event) => console.log(event)}/> */}

      {/* <Container styles={{ border: "1px solid black", padding: "1rem" }} /> */}

      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}

      <UserContextProvider>
        <User />
      </UserContextProvider>
      
    </div>
  );
}

export default App;
