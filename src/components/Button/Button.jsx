import css from '../../styles.module.css';

const Button = ({ children }) => {
  return (
    <button
      className={css.Button}
      onClick={() => {
        searchLoadMore();
      }}
    >
      {children}
    </button>
  );
};

export default Button;
