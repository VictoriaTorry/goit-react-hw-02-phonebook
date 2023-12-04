import css from './ContactList.module.css';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={css.contactList}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={css.contactItem}>
            <p className={css.contactName}>
              {name}: {number}
            </p>
            <button
              onClick={() => onDelete(id)}
              type="button"
              className={css.contactBtn}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
