import { SportLocation } from "@features/sport-location";
import { SportMapFest } from "@features/sport-map-fest/SportMapFest";
import { SportTickets } from "@features/sport-tickets";
import { SportFaq } from "@features/sport-faq";
import { About } from "@widgets/about";
import { Banner } from "@widgets/banner";
import img1 from '../assets/images/faq1.jpg';
import img2 from '../assets/images/faq2.jpg';
import slide1 from '../assets/images/slide1.jpg';
import slide2 from '../assets/images/slide2.jpg';
import slide3 from '../assets/images/slide3.jpg';
import slide4 from '../assets/images/slide4.jpg';
import slide5 from '../assets/images/slide5.jpg';
import slide6 from '../assets/images/slide6.jpg';

export default function SportFest() {
  const runnigLineData = {
    text: 'Играем роль, мы все – актеры. Так принято, что жизнь – IGRA!',
    date: '20–25 января'
  }
  
  const aboutData = {
    title: 'О фестивале',
    subTitle: '20–25 января пройдет СПОРТИВНО-МУЗЫКАЛЬНЫЙ ФЕСТИВАЛЬ IGRA',
    description: 'в игорной зоне и на Курорте Красная Поляна состоится масштабный спортивно-музыкальный фестиваль IGRA — гостей ждут зрелищные соревнования, вечеринки на горнолыжных склонах и шоу электронной музыки в RED ARENA.',
    subTitleFooter: 'Играем по-крупному!'
  }

  const mapFestData = {
    title: 'карта феста',
    days: [
      {
        id: 1,
        date: '20 января',
        schedule: [
          {
            id: 1,
            place: 'snow park 960',
            color: 'blue',
            name: 'Свободное катание в сноупарке IGRA',
            time: '09:00 - 16:30'
          },
          {
            id: 2,
            place: 'Apres ski 960',
            color: 'violet',
            name: 'DJ-сет IGRA FEST',
            time: '18:00 - 22:00'
          }
        ]
      },
      {
        id: 2,
        date: '21 января',
        schedule: [
          {
            id: 1,
            place: '',
            name: 'Мастер-классы для детей',
            time: '13:00 - 15:30'
          },
          {
            id: 2,
            place: 'snow park 960',
            color: 'blue',
            name: 'Фанкросс — открытые заезды на время — лыжи / сноуборд',
            time: '09:00 - 16:30'
          },
          {
            id: 3,
            place: 'Apres ski 960',
            color: 'violet',
            name: 'DJ-сет APRES SKI IGRA FEST',
            time: '18:00 - 22:00'
          }
        ]
      },
      {
        id: 3,
        date: '22 января',
        schedule: [
          {
            id: 1,
            place: '',
            name: 'Мастер-классы от звезд-лыжников',
            time: '13:00 - 15:00'
          },
          {
            id: 2,
            place: 'snow park 960',
            color: 'blue',
            name: 'Открытые соревнования по слалому — лыжи / сноуборд',
            time: '16:00'
          },
          {
            id: 3,
            place: 'Apres ski 960',
            color: 'violet',
            name: 'DJ-сет APRES SKI IGRA FEST',
            time: '18:00 - 22:00'
          },
          {
            id: 4,
            place: 'птицы захмелели 960',
            color: 'yellow',
            name: 'DJ-сет Птицы захмелели',
            time: '19:00'
          }
        ]
      },
      {
        id: 4,
        date: '23 января',
        schedule: [
          {
            id: 1,
            place: '',
            name: 'Мастер-классы от звезд сноубордистов',
            time: '13:00 - 15:00'
          },
          {
            id: 2,
            place: 'snow park 960',
            color: 'blue',
            name: 'Свободное катание в сноупарке IGRA',
            time: '09:00 - 16:30'
          },
          {
            id: 3,
            place: 'Apres ski 960',
            color: 'violet',
            name: 'DJ-сет APRES SKI IGRA FEST',
            time: '18:00 - 22:00'
          }
        ]
      },
      {
        id: 5,
        date: '24 января',
        schedule: [
          {
            id: 1,
            place: 'snow park 960',
            color: 'blue',
            name: 'IGRA в джиббинг на лыжах среди приглашенных райдеров',
            time: '16:00'
          },
          {
            id: 2,
            place: 'цирк 2200',
            color: 'violet',
            name: 'DJ-сет IGRA FEST',
            time: '12:00 - 15:00'
          },
          {
            id: 3,
            place: 'Высота 1460 (сугроб)',
            color: 'violet',
            name: 'DJ-сет IGRA FEST',
            time: '13:00 - 15:00'
          },
          {
            id: 4,
            place: 'Apres ski 960',
            color: 'violet',
            name: 'DJ-сет IGRA FEST',
            time: '18:00'
          },
          {
            id: 5,
            place: 'птицы захмелели 960',
            color: 'yellow',
            name: 'DJ-сет и гастро-вечеринка DJ GROOVE',
            time: '19:00 - 23:00'
          }
        ]
      },
      {
        id: 6,
        date: '25 января',
        schedule: [
          {
            id: 1,
            place: 'snow park 960',
            color: 'blue',
            name: 'IGRA Дениса Бонуса среди приглашенных сноубордистов',
            time: '14:00 - 15:40'
          },
          {
            id: 2,
            place: 'цирк 2200',
            color: 'violet',
            name: 'DJ-сет IGRA FEST',
            time: '12:00 - 15:00'
          },
          {
            id: 3,
            place: 'Высота 1460 (сугроб)',
            color: 'violet',
            name: 'DJ-сет IGRA FEST',
            time: '13:00 - 15:00'
          },
          {
            id: 4,
            place: 'Apres ski 960',
            color: 'violet',
            name: 'DJ-сет IGRA FEST',
            time: '18:00'
          },
          {
            id: 5,
            place: 'птицы захмелели 960',
            color: 'yellow',
            name: 'DJ-сет и гастро-вечеринка DJ GROOVE',
            time: '19:00 - 23:00'
          }
        ]
      },
    ]
  }

  const ticketsData = {
    title: 'катаем',
    subTitle: 'Спешите приобрести билеты на главное событие января!',
    description: 'Вашему вниманию предлагаются 2 категории билетов, внимательно ознакомьтесь с ними и решите, какой ритм вам по душе!',
    tickets: [
      {
        id: 1,
        title: 'igra comfort',
        subtitle: 'Проживание, билет в RED ARENA, ски-пасс на все дни проживания.',
        text: `
          <p>Дополнительные услуги от казино:</p>
          <ul>
            <li>Школа казино в «Бумеранге»;</li>
            <li>Школа покера в «Покерном клубе Сочи»;</li>
            <li>Коктейль «Игра» в баре Роял в «Казино Сочи»;</li>
            <li>Скидка в ресторанах «Брунелло», «Баффет», «Птицы Захмелели» — 10%;</li>
            <li>Специальные предложения от партнеров.</li>
          </ul>
        `,
        colorCard: 'pink-card',
        url: 'https://krasnayapolyanaresort.ru/sportivno_muzyikalnyij_festival?adults=2&date=2025-01-20&date_out=2025-01-26&min_stay=6'
      },
      {
        id: 2,
        title: 'igra lite',
        subtitle: 'Ски-пасс на все дни фестиваля, билет в RED ARENA.',
        text: `
          <p>Дополнительные услуги от казино:</p>
          <ul>
            <li>Школа казино в «Бумеранге»;</li>
            <li>Школа покера в «Покерном клубе Сочи»;</li>
            <li>Коктейль «Игра» в баре Роял в «Казино Сочи»;</li>
            <li>Скидка в ресторанах «Брунелло», «Баффет», «Птицы Захмелели» — 10%;</li>
            <li>Специальные предложения от партнеров.</li>
          </ul>
        `,
        colorCard: 'blue-card',
        url: 'https://shop.krasnayapolyanaresort.ru/festival_igra'
      }
    ],
    images: [slide1, slide2, slide3, slide4, slide5, slide6]
  }  
  
  const locationData = {
    title: 'локации',
    subTitle: 'курорт красная поляна — сердце горнолыжного туризма!',
    description: `30 километров горнолыжных трасс разного уровня сложности, освещаемые трассы для вечернего катания, сноупарк.`,
    coords: [55.75, 37.57]
  }

  const faq = {
    title: 'faq',
    blocks: [
      {
        id: 1,
        title: 'Для новичков и тех, кто <br> никогда не катался',
        text: `
          <p>Не стоит беспокоиться за свой уровень подготовки, с инструкторами школы Курорта можно быстро освоить базовые элементы для комфортного катания на горнолыжных трассах Курорта Красная Поляна. <br> Подробнее здесь: <a href="https://krasnayapolyanaresort.ru/kurort/uslugi/instructors/" target="_blank">https://krasnayapolyanaresort.ru/kurort/uslugi/instructors/</a></p><br>
          <p>Аренда оборудования в шаговой доступности от подъемника. <br>
          Подробнее здесь: <a href="https://prokat.krasnayapolyanaresort.ru/" target="_blank">https://prokat.krasnayapolyanaresort.ru/</a></p><br>
          <p>Для ваших детей есть готовые программы от школы катания «Три вершины». <br>
          Подробнее здесь: <a href="https://krasnayapolyanaresort.ru/kids_klub/" target="_blank">https://krasnayapolyanaresort.ru/kids_klub/</a></p>
        `
      },
      {
        id: 2,
        title: 'Для прогрессирущих <br> и продвинутых райдеров',
        text: `
          <p>Зрелищные соревнования среди профессионалов в дисциплине джиббинг — более 30 лучших спортсменов из разных регионов России продемонстрируют своё мастерство на специальной фигуре в сноупарке на Поляне 960, построенной командой шейперов Курорта  «Красная Поляна» и Денисом Бонусом.</p>
          <div><img src="${img1}" title="" /></div>
          <p>Соревнования в этой дисциплине пройдут впервые, что придаст им особую уникальность. Пешие зрители смогут спокойно добраться до места проведения и насладиться зрелищем.</p>
        `
      },
      {
        id: 3,
        title: 'Мастер-классы и клининги',
        text: `
          <p>Приглашенные райдеры и лучшие инструкторы Курорта проведут мастер-классы по всем аспектам катания на горных лыжах и сноуборде (карвинг, трамплины, джиббинг, могул, фрирайд), разберут ваши ошибки и подскажут точки роста. <br><br>
          Для любителей скоростных дисциплин пройдут соревнования по слалому-бонне с открытой регистрацией. <br><br>
          Профессиональная система хронометража и команда маршалов с многолетним опытом работы обеспечат комфортные условия для всех участников и помогут каждому почувствовать себя настоящей звездой.</p>
          <div><img src="${img2}" title="" /></div>
        `
      }
    ],
  }

  return (
    <>
      <Banner data={ runnigLineData } />
      <About data={ aboutData } />
      <SportMapFest data={ mapFestData } />
      <SportTickets data={ ticketsData } />
      <SportLocation data={ locationData } line={ runnigLineData } />
      <SportFaq data={ faq } />
    </>
  )
}