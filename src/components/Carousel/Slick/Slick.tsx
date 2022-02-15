import { useMemo } from 'react';
import styled from 'styled-components';
import Slider, { Settings } from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlideWrapper = styled.section `
  position: relative;
;`

interface sliderProps {
  children: React.ReactNode;
  className?: String;
  autoplay?: boolean | Number;
  speed?: Number;
  loop?: Boolean;
}

const Slick = ({
  children,
  autoplay = true,
  speed = 300,
  loop = true
}: sliderProps) => {
  const settings = useMemo<Settings>(
    () => ({
      dots: true,
      infinite: Boolean(loop),
      speed: Number(speed),
      slidersToShow: 1,
      autoplay: Boolean(autoplay),
      autoplaySpeed: typeof autoplay === 'boolean' ? 3000 : Number(autoplay)
    }),
    [autoplay, loop, speed]
  );
  return (
    <SlideWrapper>
      <Slider {...settings}>
        {children}
      </Slider>
    </SlideWrapper>
  )
}

export default Slick;