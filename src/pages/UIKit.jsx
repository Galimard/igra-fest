import { BackLink } from '@widgets/back-link';
import { Button } from '@widgets/button';
import { Logo } from '@widgets/logo';
import { Menu } from '@widgets/menu';
import { RunningLine } from '@widgets/running-line';

export default function UIKit() {
  const menu = [
    {text: 'О фестивале', url: 'about'}, 
    {text: 'Line up', url: 'line-up'}, 
    {text: 'Билеты', url: 'tickets'}, 
    {text: 'дресс-код', url: 'dresscode'}
  ];

  const runnigLineData = {
    text: 'Играем роль, мы все – актеры. Так принято, что жизнь – IGRA!',
    date: '25/01 '
  }

  return (
      <>
        <div style={{marginBottom: 40}}>
          <h1>Типографика</h1>
          <br />
          <h1 className='typography-h1 pink'>О фестивале</h1>
          <h2 className='typography-h2'>25 января отправимся в чарующий мир, где фантазии воплощаются!</h2>
          <p className='typography-body1'>Спешите приобрести билеты на главное событие января!</p>
          <p className='typography-body2'>Вашему вниманию предлагаются 3 категории билетов, внимательно ознакомьтесь с ними и решите какой ритм вам по душе!</p>
          <p className='typography-body2 bold'>Вашему вниманию предлагаются 3 категории билетов, внимательно ознакомьтесь с ними и решите какой ритм вам по душе!</p>
          <p className='typography-body3'>Спешите приобрести билеты на главное событие января!</p>
          <p className='typography-menu'>Menu item</p>
          <p className='typography-body3 uppercase'>Text Uppercase</p>
        </div>

        <div style={{marginBottom: 40}}>
          <h1>Кнопки</h1>
          <br />
          <Button
            text='купить билет'
            url='https://dzen.ru/'
            color='pink'
          />
          <Button 
            text='купить билет 2' 
            url='https://dzen.ru/' 
            color='black' 
          />
          <Button 
            text='купить билет 3' 
            url='https://dzen.ru/' 
            color='white' 
          />
        </div>

        <div style={{marginBottom: 40}}>
          <h1>Меню</h1>

          <Menu data={ menu } />
        </div>

        <div style={{marginBottom: 40}}>
          <h1>Кнопка назад</h1>

          <BackLink />
        </div>

        <div style={{marginBottom: 40, background: '#E81684'}}>
          <h1>Логотип</h1>

          <Logo />
        </div>

        <div style={{marginBottom: 40}}>
          <h1>Бегущая строка</h1>

          <RunningLine data={ runnigLineData } />
        </div>
      </>
  )
}