import React from 'react';
import Card from './Card'; // Import your Card component
import './Cardgrid.css'; // Import your CSS file


const CardGrid = () => {
  // Create an array of card data (you can replace this with your actual data)
  const cardData = [

    { title: 'Presentation Design', content: 'Lorem ipsum dolor sit amet nj hg gy yguyfv ytft yftdysy ysdfca7c a7a ssyugsad dytsf.'  ,imageSrc:'./img22.png'},
    { title: 'Audio Video-Production', content: 'Consectetur adipiscing elit sit amet nj hg gy yguyfv ytft yftdysy ysdfca7c a7a ssyugsad dytsf..' ,imageSrc:'./img2.png' },
    { title: 'Translation Services', content: 'Lorem ipsum dolor sit amet sit amet nj hg gy yguyfv ytft yftdysy ysdfca7c a7a ssyugsad dytsf..' },
    { title: 'Graphic Design', content: 'Consectetur adipiscing elit sit amet nj hg gy yguyfv ytft yftdysy ysdfca7c a7a ssyugsad dytsf..' },
    { title: 'Research & Analytics', content: 'Lorem ipsum dolor sit amet sit amet nj hg gy yguyfv ytft yftdysy ysdfca7c a7a ssyugsad dytsf..' },
    { title: 'Data Processing', content: 'Consectetur adipiscing elit sit amet nj hg gy yguyfv ytft yftdysy ysdfca7c a7a ssyugsad dytsf..' }
    // Add more card data as needed
  ];

  return (
    <div className="card-grid-container ">
      <div className="card-grid">
        {cardData.map((card, index) => (
          <Card key={index} title={card.title} content={card.content} imageSrc={card.imageSrc} />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
