import { MusicPartners } from "@features/music-partners";
import { MusicTickets } from "@features/music-tickets";
import { About } from "@widgets/about";
import { Banner } from "@widgets/banner";


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

  const ticketsData = {
    title: 'билеты',
    subTitle: 'Спешите приобрести билеты на главное событие января!',
    description: 'Вашему вниманию предлагаются 3 категории билетов, внимательно ознакомьтесь с ними и решите какой ритм вам по душе!',
    description2: `
    — Оказаться в центре событий на «Танцполе» \n
    — Комфортные места на трибуне «Закулисье» \n
    — VIP места на трибуне «Балкон»`, 
    subTitleFooter: 'лучшие места, достаются первым, не упустите свой шанс!'
  }

  const partnersData = {
    title: 'Партнёры',
  }

  return (
    <>
      <Banner data={ runnigLineData } />
      <About data={ aboutData } />
      <MusicTickets data={ ticketsData } />
      <MusicPartners data={ partnersData } />
    </>
  )
}