import PropTypes from 'prop-types';
import classes from './styles.module.scss';
import { MenuItem } from '@widgets/menu/ui/menu-item';

export function Menu({ data, activeSection }) { 
  return (
    <ul className={classes.menu}>
      {data ? data.map(item => {
        return (
          <MenuItem key={item.text} data={item} activeSection={activeSection} />
        );
      }) : null}
    </ul>    
  );
}

Menu.propTypes = {
  data: PropTypes.array.isRequired,
  activeSection: PropTypes.string,
}