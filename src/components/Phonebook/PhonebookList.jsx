import css from './Phonebook.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'components/redux/selectors';
import { deleteContact } from 'components/redux/slice';

export function PhonebookList({ filter, onDelete }) {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  // const newArr = contacts.filter(
  //   item =>
  //     item.name.toLowerCase().includes(filter.toLowerCase()) ||
  //     item.number.includes(filter)
  // );

  return (
    <>
      <ul className={css.list}>
        {contacts.map(({ name, number, id }) => {
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
