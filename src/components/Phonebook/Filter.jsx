import css from './Phonebook.module.css';

export function Filter({ onFilter, filter }) {
  return (
    <div className={css.filter}>
      <h2>Contacts</h2>
      <label className={css.label} htmlFor="">
        Find contacts by name
        <input
          className={css.input}
          onInput={e => {
            onFilter(e.target.value);
          }}
          name="text"
          type="text"
          value={filter}
        />
      </label>
    </div>
  );
}
