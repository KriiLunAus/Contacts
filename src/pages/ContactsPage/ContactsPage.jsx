import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operation";
import { selectContacts } from "../../redux/selectors";
import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import DeleteModal from "../../components/DeleteModal/DeleteModal";
import { selectModalIsOpen } from "../../redux/contacts/selectors";
import css from "./ContactsPage.module.css";

export default function () {
  const dispatch = useDispatch();

  const modalIsOpen = useSelector(selectModalIsOpen);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const { isLoading, error } = useSelector(selectContacts);
  return (
    <div className="app">
      <h1>List of your contacts</h1>
      <ContactForm />
      <SearchBox />
      {modalIsOpen && <DeleteModal />}
      {isLoading && <p>Loading, please wait...</p>}
      {error && <p>{error}</p>}

      <ContactList />
    </div>
  );
}
