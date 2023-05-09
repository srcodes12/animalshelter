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




const AnimatedDisplayCard = ({ item }) => {
  const { image, name, description } = item;
  const [toggle, setToggle] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const items = [
    {
      id: 1,
      image: {image},
      altText: {name},
      caption: {description},
    },
    {
      id: 2,
      altText: {name},
      caption: {description},
    },
    {
      id: 3,
      altText: {name},
      caption: {description},
    },
  ];
  
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

  
  const animatedStyle = useSpring({
    opacity: toggle ? 1 : 0,
    transform: toggle? 'scale(1,1)' : 'scale(0,0)',
    config: { duration: 500 }
  });

  
  useEffect(() => {
    setToggle(true);
  }, []);
  
  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <CarouselCaption
          className="text-danger"
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });
  
  return (
    <div>
      <style>
        {`.custom-tag {
              max-width: 100%;
              height: 500px;
              background: black;
            }`}
      </style>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
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
    </div>
  );
}

export default AnimatedDisplayCard;