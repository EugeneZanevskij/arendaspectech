import { ITestimonial } from "../../../types";
import {
  TestimonialContainer,
  TestimonialImage,
  TestimonialTextContainer,
  TestimonialTextDescription,
  TestimonialTextDivider,
  TestimonialTextTitle,
} from "./styled";

export const TestimonialItem = ({ title, text, image }: ITestimonial) => {
  return (
    <TestimonialContainer>
      <TestimonialTextContainer>
        <TestimonialTextTitle>{title}</TestimonialTextTitle>
        <TestimonialTextDivider />
        {text.map((item, index) => (
          <TestimonialTextDescription key={index}>
            {item}
          </TestimonialTextDescription>
        ))}
      </TestimonialTextContainer>
      <TestimonialImage src={image} />
    </TestimonialContainer>
  );
};
