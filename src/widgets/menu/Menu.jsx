import PropTypes from 'prop-types';
import classes from './styles.module.scss';
import { MenuItem } from '@widgets/menu/ui/menu-item';

export function Menu({ data }) { 
  return (
    <ul className={classes.menu}>
      {data.map(item => {
        return (
          <MenuItem key={item.text} data={item} />
        );
      })}
    </ul>    
  );
}

Menu.propTypes = {
  data: PropTypes.array.isRequired,
}