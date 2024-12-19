import { MainCard } from "@features/main-card";
import img1 from '../assets/images/main1.jpg';
import img2 from '../assets/images/main2.jpg';

export default function Main() {
  const data = [
    {
      id: 1,
      title: 'Спортивный фестиваль в горах',
      date: '20-25 января',
      img: img1,
      url: '/sport'
    },
    {
      id: 2,
      title: 'фестиваль электронной музыки',
      date: '25 января',
      img: img2,
      url: '/music'
    }
  ];

  return (
      <>
        <div className="container">
          <div className="main-wrap">
            <div className="main-cards">
              {(data && data.length > 0) && data.map(item => {
                return <MainCard key={item.id} data={item} />
              })}
            </div> 
          </div>                   
        </div>
      </>
  )
}