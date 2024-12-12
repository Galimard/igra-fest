import PropTypes from 'prop-types';
import { Header } from './ui/header';

export function Layout({ children }) {
  return(
    <>
      <Header />
      <main>{ children }</main>
      <footer>footer</footer>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.func
}