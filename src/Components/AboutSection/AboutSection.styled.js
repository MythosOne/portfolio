import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

export const Section = styled.section`
  max-width: 440px;
  width: 100%;

  display: flex;
  flex-direction: column;
  background-size: cover;
  background-color: transparent;

  margin-top: 80px;

  @media screen and (min-width: 768px) {
    max-width: none;
    width: 708px;

    padding: 0 20px;

    align-items: flex-start;
  }

  @media screen and (min-width: 1279px) {
    width: 1240px;
  }
`;

export const TitleSection = styled.h2``;

export const AboutList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  margin-top: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    box-sizing: border-box;
    padding: 10px;
    align-items: flex-start;
    border-radius: 10px;

    height: 245px;

    background-image: url(${require('../../assets/images/about-background-1440.jpg')});

    background-size: cover;
    background-position: right;
    background-repeat: no-repeat;

    background-color: #2196f3;
  }

  @media screen and (min-width: 1279px) {
    height: 345px;

    padding: 20px;

    gap: 100px;
  }
`;

export const AboutItem = styled.li`
  position: relative;
`;

const borderBlock = keyframes`
    0% {
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }

    50% {
      border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
    }

    100% {
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }
`;

export const BlockColor = styled.div`
  width: 350px;
  height: 360px;
  background: #2196f3;
  /* border: 8px solid gray; */

  @media screen and (min-width: 768px) {
    width: 200px;
    height: 200px;
  }

  @media screen and (min-width: 1279px) {
    width: 300px;
    height: 300px;
  }

  animation: ${borderBlock} 18s ease-in-out infinite 1s;
  opacity: 0.85;
`;

export const Picture = styled.picture`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
`;

const border = keyframes`
    0% {
      border-color: #fff;
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }

    50% {
      border-color: #2196f3;
      border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
    }

    100% {
      border-color: #fff;
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }
`;

export const AboutImage = styled.img`
  background-size: cover;
  width: 340px;
  height: 350px;
  border: 8px solid gray;

  @media screen and (min-width: 768px) {
    width: 200px;
    height: 210px;
  }

  @media screen and (min-width: 1279px) {
    width: 300px;
    height: 300px;
  }

  animation: ${border} 8s ease-in-out infinite 1s;
  opacity: 0.95;
`;

export const Description = styled.p`
  text-indent: 1.4em;
  text-align: justify;
  font-size: 16px;
  line-height: 1.4em;

  @media screen and (min-width: 768px) {
    color: #fff;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  }

  @media screen and (min-width: 1279px) {
    font-size: 20px;
    line-height: 1.6em;
  }
`;
