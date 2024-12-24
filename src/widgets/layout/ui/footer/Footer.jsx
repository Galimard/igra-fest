import { Logo } from '@widgets/logo';
import classes from '../../styles.module.scss';

export function Footer() {
  return(
    <>
      <footer className={classes.footer}>
        <div className="container">
          <div className={classes.footerTop}>
            <Logo />
            <div>
              <p className='typography-body3'>По общим вопросам:</p>
              <p className='typography-body3'><a href="mailto:info@redarena.ru">info@redarena.ru</a></p>
            </div>
            <div>
              <p className='typography-body3'>Стать партнёром:</p>
              <p className='typography-body3'><a href="mailto:marketing@do-mein.ru">marketing@do-mein.ru</a></p>
            </div>
          </div>
          <div className={classes.footerBottom}>
            <p className='typography-body3' style={{maxWidth: 600}}>Россия, краснодарский край, г. Сочи с. Эстосадок, ул. Эстонская, 51
            Организатор: ООО «Арена Центр» ОГРН 1152367006000</p>
            <p className={classes.footerAge}>18+</p>
          </div>
        </div>
      </footer>
    </>
  );
}