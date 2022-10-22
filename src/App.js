import Cards from './components/Cards';
import contacts from './contacts';
import './App.css';
import Login from './components/Login';

function App() {
  // const creatF = (contacts) => {
  //   return (
  //   <Cards
  //   key= {contacts.id}
  //   name={contacts.name}
  //   img={contacts.img_url}
  //   phone={contacts.phone}
  //   email={contacts.email}
  // />
  //   )
  // }

  return (
    <>

<Login />

      {/* {contacts.map((contacts) => {
        return (
          <Cards
            key={contacts.id}
            name={contacts.name}
            img={contacts.img_url}
            phone={contacts.phone}
            email={contacts.email}
          />
        )

      })} */}


      {/* <Cards
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
      /> */}

      {/* <Cards
        name="Name: Faiz"
        img_url="https://www.thenews.com.pk/assets/uploads/akhbar/2022-08-09/980792_5962407_faiz_akhbar.jpg"
        phone="Phone: 0123456789"
        email="Email: abc@gmail"
      /> */}


    </>
  );
}

export default App;
