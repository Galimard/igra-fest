import PropTypes from 'prop-types';
import classes from './styles.module.scss';
import imgArena from '../../assets/images/arena.png';
import imgArenaMob from '../../assets/images/arena-mob.png';
import imgPayments from '../../assets/images/payments.png';
import { Button } from '@widgets/button';
import parse from 'html-react-parser';

export function MusicTickets({ data }) {   
  return (
    <section id='tickets' className={classes.tickets} data-section>
      <div className="container">
        <div className="container-inner">
          <h1 className={`${classes.ticketsTitle} typography-h1 pink`}>{ parse(data.title) }</h1>
          <h2 className={`${classes.ticketsSubtitle} typography-h2`}>{ parse(data.subTitle) }</h2>
          <div className={`${classes.ticketsDescription} typography-body1`}>{ parse(data.description) }</div>
          <div className='typography-body1 bold'>{ parse(data.description2) }</div>
          <img src={imgArena} alt="" className={classes.ticketsImg} />
          <img src={imgArenaMob} alt="" className={classes.ticketsImgMob} />
          <div className={classes.ticketsBottom}>
            <div className={classes.ticketsFlex}>
              <Button
                text='купить билет'
                url={data.url}
                color='pink'
                className={classes.ticketsButton}
                target='_blank'
              />
              <img src={imgPayments} alt="" />
            </div>          
            <h2 className="typography-h2">{ parse(data.subTitleFooter) }</h2>
          </div>          
        </div>          
      </div>
    </section>      
  );
}

MusicTickets.propTypes = {
  data: PropTypes.object.isRequired,
}