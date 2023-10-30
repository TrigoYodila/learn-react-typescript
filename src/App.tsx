import './App.css';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Box } from './components/context/Box';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { UserContextProvider } from './components/context/UserContext';
import { List } from './components/generics/List';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { CustomButton } from './components/html/Button';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { RandomNumber } from './components/restriction/RandomNumber';
import { User } from './components/state/User';
import { Status } from './components/Status';
import { Toast } from './components/templateliterals/Toast';

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

      {/* <UserContextProvider>
        <User />
      </UserContextProvider> */}

      {/* <Private isLoggedIn={true} component={Profile}/> */}

      {/* <List
        items={["Batman", "Superman", "Wonder Woman"]}
        onClick={(item) => console.log(item)}
      />
      <List items={[1, 2, 3]} onClick={(item) => console.log(item)} />
      <List
        items={[
          { first: "Bruce", last: "Wayne" },
          { first: "Trigo", last: "Yodila" },
          { first: "Princess", last: "Diana" },
        ]}
        onClick={(item) => console.log(item)}
      /> */}

      {/* <RandomNumber value={10} isPositive  /> */}

      {/* <Toast position='left-bottom'/>
      <Toast position='center'/> */}

      <CustomButton variant="primary" onClick={() => console.log("clicked")}>Button 1</CustomButton>

    </div>
  );
}

export default App;
