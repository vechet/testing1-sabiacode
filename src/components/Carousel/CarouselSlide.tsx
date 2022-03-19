import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styled from "styled-components";
import { slideDatas } from "../../view/home/components/utils";
import CardItem from "../CardItem";
import SeeAllButton from "../SeeAllButton";

interface IProps {
  topTitle: any;
  topDescription: any;
  showSeeMoreBtn?: any;
  pageName?: any;
}

const CarouselSlide = React.memo((props: IProps) => {
  const { topTitle, topDescription, showSeeMoreBtn, pageName } = props;

  return (
    <StyledWrapper>
      <Typography className="title">{topTitle}</Typography>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        pt={1}
        pb={4}
      >
        <Typography className="description">{topDescription}</Typography>
        {showSeeMoreBtn && <SeeAllButton pageName={pageName} />}
      </Stack>
      <Carousel
        showArrows={false}
        showIndicators={true}
        showThumbs={false}
        swipeable={true}
        autoPlay={false}
        showStatus={false}
        emulateTouch={true}
        interval={6000}
        infiniteLoop={true}
      >
        <div>
          <Stack direction="row" alignItems="start" spacing={2.2} mr={2}>
            {slideDatas.map((data: any, index: number) => {
              return (
                <CardItem
                  key={index}
                  title={data.title}
                  description={data.description}
                  imageUrl={data.imageUrl}
                />
              );
            })}
          </Stack>
        </div>
        <div>
          <Stack direction="row" alignItems="start" spacing={2.2} mr={2}>
            {slideDatas.map((data: any, index: number) => {
              return (
                <CardItem
                  key={index}
                  title={data.title}
                  description={data.description}
                  imageUrl={data.imageUrl}
                />
              );
            })}
          </Stack>
        </div>
      </Carousel>
    </StyledWrapper>
  );
});

const StyledWrapper = styled(Stack)`
  .title {
    font-weight: 500;
    font-size: 16px;
    color: #949494;
  }
  .description {
    font-weight: 600;
    font-size: 25px;
    color: #1d1b1a;
  }
  .carousel .slider-wrapper {
    height: 360px;
  }
  .carousel .control-dots .dot {
    width: 5px;
    height: 5px;
    box-shadow: none;
    background-color: gray;
  }
  .carousel .control-dots .dot.selected {
    width: 5px;
    height: 5px;
    background-color: #000 !important;
    box-shadow: none;
  }
`;

export default CarouselSlide;
