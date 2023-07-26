import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Card, CardImg, CardText, CardBody, CardTitle
} from 'reactstrap';
import maxImg from '../../app/assets/img/Max.jpg';
import rascalImg from '../../app/assets/img/RascalPuppy.jpg';
import starBurstImg from '../../app/assets/img/StarburstCat.jpg';
import tabbyCatJoeImg from '../../app/assets/img/TabbyCatJoe.jpg';

const imageMap = {
  maxImg: maxImg,
  rascalImg: rascalImg,
  starBurstImg: starBurstImg,
  tabbyCatJoeImg: tabbyCatJoeImg,
};



function AnimatedDisplayCard(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/animals')
      .then(response => response.json())
      .then(data => {
        const newItems = data.map(animal => {
          return {
            src: imageMap[animal.image],
            altText: animal.name,
            caption: animal.description,
            key: animal.id
          };
        });
        setItems(newItems);
      });
}, []);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} style={{width: '100%', height: '500px', borderRadius: '15px'}} />
        <CarouselCaption
          captionText={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default AnimatedDisplayCard;