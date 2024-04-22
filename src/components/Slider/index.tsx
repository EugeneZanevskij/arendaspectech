import { SliderWrap } from "./styled";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation, Pagination } from "swiper/modules";

SwiperCore.use([Navigation, Pagination]);

interface SliderProps {
  settings?: object;
  children?: JSX.Element[];
}

const Slider = ({ children, settings }: SliderProps) => {
  const sliderOptions = {
    slidesPerView: 1,
    pagination: true,
    navigation: true,
    loop: true,
    ...settings,
  };

  return (
    <SliderWrap
      dots={sliderOptions?.pagination}
      arrows={sliderOptions?.navigation}
    >
      <Swiper {...sliderOptions}>{children}</Swiper>
    </SliderWrap>
  );
};

export { SwiperSlide as Slide };
export default Slider;
