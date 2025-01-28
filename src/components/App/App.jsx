import "./App.css";
import ContactList from "../ContactList/ContactList";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/operations";
import { selectIsError, selectIsloading } from "../../redux/contactsSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  // const isError = useSelector(selectIsError);
  const isLoading = useSelector(selectIsloading);

  console.log(isLoading);
  return (
    <div>
      <h1>Phonebook</h1>

      <ContactForm />
      <SearchBox />
      <ContactList />
      {isLoading && <h2>Loading .....</h2>}
    </div>
  );
}

export default App;
