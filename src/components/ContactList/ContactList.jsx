// import PropTypes from 'prop-types';
import './ContactList.module.css';

export const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <p>
              {name}: {number}
            </p>
            <button type="button">Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

// ContactList.propTypes = {
//   name: PropTypes.string,
//   number: PropTypes.string,
//   id: PropTypes.string,
//   deleteContact: PropTypes.func,
// };
