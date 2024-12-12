import PropTypes from 'prop-types';
// import classes from './styles.module.scss';

export function Layout({ children }) {
  return(
    <>
      <header>header</header>
      <main>{ children }</main>
      <footer>footer</footer>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.func.isRequired
}