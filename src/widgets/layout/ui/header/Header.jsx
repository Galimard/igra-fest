// import PropTypes from 'prop-types';
import { Menu } from '@widgets/menu';
import classes from '../../styles.module.scss';
import { BackLink } from '@widgets/back-link';

export function Header() {
  const menu = [
    {text: 'О фестивале', url: 'about'}, 
    {text: 'Line up', url: 'line-up'}, 
    {text: 'Билеты', url: 'tickets'}, 
    {text: 'дресс-код', url: 'dresscode'}
  ];

  return(
    <header className={classes.header}>
      <div className={classes.headerWrap}>
        <div className="container">
          <div className={classes.headerInner}>
            <BackLink className={classes.headerBack} />
            <Menu data={ menu } />
          </div>
        </div>
      </div>      
    </header>
  );
}

// Layout.propTypes = {
//   children: PropTypes.func.isRequired
// }