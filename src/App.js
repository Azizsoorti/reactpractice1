import Cards from './components/Cards';
import contacts from './contacts';
import './App.css';

function App() {
  return (
    <>
      <Cards
        name={contacts[0].name}
        img={contacts[0].img_url}
        phone={contacts[0].phone}
        email={contacts[0].email}
      />

<Cards
     name={contacts[1].name}
     img={contacts[1].img_url}
     phone={contacts[1].phone}
     email={contacts[1].email}
      />

<Cards
      name={contacts[2].name}
      img={contacts[2].img_url}
      phone={contacts[2].phone}
      email={contacts[2].email}
      />
    </>
  );
}

export default App;
