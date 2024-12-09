/*REACT*/
import React from 'react';
import Button from '../assets/components/common/Button';

export default function UIKit() {
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

        <div>
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
      </>
  )
}