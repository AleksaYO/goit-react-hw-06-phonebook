import css from './Phonebook.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'components/redux/selectors';
import { deleteContact } from 'components/redux/slice';

export function PhonebookList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const newArr = contacts.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <ul className={css.list}>
        {newArr.map(({ name, number, id }) => {
          return (
            <li id={id} key={id}>
              {name}: {number}
              <button onClick={() => dispatch(deleteContact(id))}>
                Удалить
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
