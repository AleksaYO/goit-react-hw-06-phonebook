import { filteredContacts } from 'redux/slice';
import { useDispatch } from 'react-redux';
import css from './Phonebook.module.css';

export function Filter({ filter }) {
  const dispatch = useDispatch();
  return (
    <div className={css.filter}>
      <h2>Contacts</h2>
      <label className={css.label} htmlFor="">
        Find contacts by name
        <input
          className={css.input}
          onInput={e => dispatch(filteredContacts(e.target.value))}
          name="text"
          type="text"
          value={filter}
        />
      </label>
    </div>
  );
}
