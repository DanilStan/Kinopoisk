import css from './Section.module.css';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <>
      <section className={css.container}>
        <h1 className={css.header}>{title}</h1>
        {children}
      </section>
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
