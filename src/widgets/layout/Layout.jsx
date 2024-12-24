import PropTypes from 'prop-types';
import { Header } from './ui/header';
import { Footer } from './ui/footer';
import { useLocation } from 'react-router';
import { useEffect, useState } from 'react';

export function Layout({ children, menu }) {
  let location = useLocation();
  const layout = location.pathname === '/' ? false : true;
  const [activeSection, setActiveSection] = useState('');

  const handleScroll = () => {
    const scrollPosition = window.scrollY + 150; 
    let newActiveSection = '';

    menu.forEach((section) => {
      const element = document.getElementById(section.url);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          newActiveSection = section.url;          
        }
      }
    });

    setActiveSection(newActiveSection);
  };

  useEffect(() => {  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);  

  return(
    <>
      {layout && (
        <Header
          menu={ menu } 
          activeSection={activeSection}
        />
      )}
      <main>{ children }</main>
      {layout && <Footer />}
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.object,
  menu: PropTypes.array,
}