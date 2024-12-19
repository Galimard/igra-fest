import PropTypes from 'prop-types';
import classes from '../../styles.module.scss';
import { MenuItem } from '@widgets/menu/ui/menu-item';

export function BurgerMenu({ data, open, setOpen }) { 
  return (
    <div className={open ? classes.burgerMenuOpen : classes.burgerMenuOpen + ' ' + classes.burgerMenuClose}>      
      <ul className={classes.menu}>
        {data ? data.map(item => {
          return (
            <MenuItem key={item.text} data={item} open={open} setOpen={setOpen}/>
          );
        }) : null}
      </ul> 
    </div>
  );
}

BurgerMenu.propTypes = {
  data: PropTypes.array.isRequired,
  open: PropTypes.bool,
  setOpen: PropTypes.func,
}