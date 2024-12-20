import PropTypes from 'prop-types';
import { Menu } from '@widgets/menu';
import { BackLink } from '@widgets/back-link';
import classes from '../../styles.module.scss';
import { Burger } from '../burger';
import { useState } from 'react';
import { BurgerMenu } from '@widgets/layout/ui/burger-menu';
export function Header({ menu, activeSection }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className={classes.header}>      
        <div className={classes.headerWrap}>        
          <div className="container">            
            <BackLink className={classes.headerBack} />
            <div className={classes.headerMenuDesktop}>
              <Menu data={ menu } activeSection={activeSection} />
            </div>
            
            <div className={classes.headerMob}>
              <div className={classes.headerLogoMob}>igra 2.0</div>
              
              <div className={classes.headerMenu}>
                <BackLink className={open ? classes.menuBack + ' ' + classes.menuBackClose : classes.menuBack} />
                <Burger open={open} setOpen={setOpen} />              
              </div>
            </div>   
                    
          </div>
        </div>      
      </header>
      <BurgerMenu open={open} setOpen={setOpen} data={ menu } />
    </>
    
  );
}

Header.propTypes = {
  menu: PropTypes.array.isRequired,
  activeSection: PropTypes.string,
}