import { PhonebookList } from './PhonebookList';
import { Form } from './Form';
import { Filter } from './Filter';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

export function Phonebook() {
  const contacts = useSelector(getContacts);

  // const UpdateContacs = data => {
  //   data.id = nanoid();
  //   if (contacts.some(item => item.number === data.number)) {
  //     return;
  //   }
  //   setContacts(prev => [data, ...prev]);
  // };

  return (
    <>
      <Form />
      {contacts.length > 0 && <Filter />}
      <PhonebookList />
    </>
  );
}
