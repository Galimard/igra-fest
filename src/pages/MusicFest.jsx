import { MusicDresscode } from "@features/music-dresscode";
import { MusicPartners } from "@features/music-partners";
import { MusicTickets } from "@features/music-tickets";
import { About } from "@widgets/about";
import { Banner } from "@widgets/banner";
import { MusicLineUp } from "@features/music-line-up";
import imgart1 from '../assets/images/art1.jpg';
import imgart2 from '../assets/images/art2.jpg';
import imgart3 from '../assets/images/art3.jpg';
import imgart4 from '../assets/images/art4.jpg';
import imgart5 from '../assets/images/art5.jpg';
import slide1 from '../assets/images/slide1.jpg';
import slide2 from '../assets/images/slide2.jpg';
import slide3 from '../assets/images/slide3.jpg';
import slide4 from '../assets/images/slide4.jpg';
import slide5 from '../assets/images/slide5.jpg';
import slide6 from '../assets/images/slide6.jpg';


export default function MusicFest() {
  const runnigLineData = {
    text: 'Играем роль, мы все – актеры. Так принято, что жизнь – IGRA!',
    date: '25/01 '
  }

  const aboutData = {
    title: 'О фестивале',
    subTitle: '25 января отправимся в чарующий мир, где фантазии воплощаются!',
    description: 'Шоу электронной музыки IGRA 2.0 – это 6 часов качественной электронной музыки от мировых DJ, потрясающее шоу, световой перфоманс от команды Dreamlaser и Live- выступления.',
    subTitleFooter: 'Вся наша жизнь — ИГРА!'
  }

  const lineUpData = {
    title: 'line up',
    artists: [
      {
        img: imgart1,
        name: 'm.e.g',
        text: 'Музыкант, диджей, продюсер и профессиональный хореограф, чьё имя стало синонимом инноваций в мире электронной музыки. Автор культовых треков: Самурай (ft Timati), Mindfields, Lost without you и других.'
      },
      {
        img: imgart2,
        name: 'SOCKO',
        text: 'Его треки сочетают в себе армянские и грузинские этнические композиции с собственным видением и интерпретацией. Его миссия — рассказать миру о наследии, которым обладают его страны.'
      },
      {
        img: imgart3,
        name: 'GUMA',
        text: 'Live исполнение, яркая исполнительница фолк с электронным звучанием. Её треки «Стеклянная», «Народная» не покидают топы чатов! Певица сочетает в себе харизму, яркое выступление и уникальный вокал.'
      },
      {
        img: imgart4,
        name: 'Aiwaska',
        text: 'Проект таинственного продюсера, который виртуозно сочетает мелодиктехно саунд с элементами органических звуков. Ваш мистический проводником на танцполе в те самые миры, откуда музыкант берет свой гипнотический саунд. Aiwaksa выступает в маске, как и перуанские шаманы, переходя от одного измерения к другому.'
      },
      {
        img: imgart5,
        name: 'AZARRO',
        text: 'Диджей, музыкант, ремиксмейкер. За время своей карьеры она выступал на известных и масштабных фестивалях вместе с такими артистами, как Goom Gum, Joezi, Lizwi, Novak, Tayllor, Aaron Sevilla и другие.'
      }
    ]
  }

  const ticketsData = {
    title: 'билеты',
    subTitle: 'Спешите приобрести билеты на главное событие января!',
    description: 'Вашему вниманию предлагаются 3 категории билетов, внимательно ознакомьтесь с ними и решите какой ритм вам по душе!',
    description2: '— Оказаться в центре событий на «Танцполе» \n ' +
    '— Комфортные места на трибуне «Закулисье» \n'+
    '— VIP места на трибуне «Балкон»', 
    subTitleFooter: 'лучшие места, достаются первым, не упустите свой шанс!'
  }

  const dresscodeData = {
    title: 'дресс код',
    subTitle: 'только тебе решать, кем ты будешь сегодня!',
    description: `<p>Главным героем сцены, таинственным гостем закулисья или ярким зрителем игры. <br>
  Самые оригинальные образы, неожиданные сочетания, эпатаж - рейв приветствует смелых и свободных!</p>`,
    images: [slide1, slide2, slide3, slide4, slide5, slide6]
  }

  const partnersData = {
    title: 'Партнёры',
  }

  return (
    <>
      <Banner data={ runnigLineData } />
      <About data={ aboutData } />
      <MusicLineUp data={ lineUpData } />
      <MusicTickets data={ ticketsData } />
      <MusicDresscode data={ dresscodeData } line={ runnigLineData } />
      <MusicPartners data={ partnersData } />
    </>
  )
}