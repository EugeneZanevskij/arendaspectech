import styled, { css } from "styled-components";

export const SliderWrap = styled.div<{ dots?: boolean; arrows?: boolean }>`
  position: relative;
  .swiper {
    width: 100%;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem 3rem;
    background: ${({ theme }) => theme.white};
  }
  ${({ arrows }) =>
    arrows &&
    css`
      .swiper-button {
        &-next,
        &-prev {
          top: 50%;
          z-index: 9;
          width: 40px;
          height: 40px;
          margin: auto;
          line-height: 40px;
          position: absolute;
          visibility: hidden;
          text-align: center;
          transform: translateY(-50%);
          color: ${({ theme }) => theme.white};
          transition: all 0.4s ease 0s;
          border-radius: 50%;
          background-color: ${({ theme }) => theme.blackTextColor};
          &:hover {
            background-color: ${({ theme }) => theme.orange};
          }
          &:after {
            font-size: 1rem;
          }
        }
        &-prev {
          outline: 0;
          right: auto;
          left: -40px;
          &:after {
            margin-right: 3px;
          }
        }
        &-next {
          outline: 0;
          left: auto;
          right: -40px;
          &:after {
            margin-left: 3px;
          }
        }
      }
      &:hover {
        .swiper-button {
          &-prev,
          &-next {
            visibility: visible;
          }
          &-prev {
            left: 10px;
          }
          &-next {
            right: 10px;
          }
        }
      }
    `}
  ${({ dots }) =>
    dots &&
    css`
      .swiper-pagination {
        &-bullet {
          cursor: pointer;
          width: 10px;
          height: 10px;
          display: inline-block;
          border-radius: 50%;
          background: ${({ theme }) => theme.orange};
          opacity: 0.2;
          border: 1px solid ${({ theme }) => theme.blackTextColor};
          margin: 0 5px;
          box-shadow: none;
          transition: all 0.4s ease 0s;
          transform: scale(0.8);
          &:hover,
          &-active {
            transform: scale(1);
            opacity: 1;
          }
        }
      }
    `};
`;
