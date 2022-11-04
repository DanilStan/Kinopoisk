// import PropTypes from 'prop-types';
// import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options }) => {
  const optionsMod = Object.keys(options);
  return (
    <ul>
      {optionsMod.map(options)}
      <li>
        <button>Good</button>
      </li>
      <li>
        <button>Bad</button>
      </li>
      <li>
        <button>Neutral</button>
      </li>
    </ul>
  );
};
