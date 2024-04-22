import { TESTIMONIALS_DATA } from "../../constants/testimonials";
import { SectionContainer } from "../SectionContainer";
import { SectionHeading } from "../SectionHeading";
import Slider, { Slide } from "../Slider";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { TestimonialItem } from "./TestimonialItem";

const sectionHeading = {
  title: "Отзывы наших клиентов",
  subtitle: "Что говорят клиенты о ИП Колонтай",
};
export const TestimonialsSection = () => {
  return (
    <SectionContainer background={"black"}>
      <>
        <SectionHeading {...sectionHeading} />
        <Slider
          settings={{
            navigation: true,
          }}
        >
          {TESTIMONIALS_DATA.map((testimonial) => (
            <Slide key={testimonial.id}>
              <TestimonialItem {...testimonial} />
            </Slide>
          ))}
        </Slider>
      </>
    </SectionContainer>
  );
};
