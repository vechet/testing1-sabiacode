import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styled from "styled-components";
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

  const datas = [
    {
      title: "Colors (Deluxe)",
      description: "YoungBoy Never Broke Again",
      imageUrl:
        "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
    },
    {
      title: "Light Switch",
      description: "Charlie Puth",
      imageUrl:
        "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
    },
    {
      title: "Country Stuff The Album",
      description: "Walker Hayes",
      imageUrl:
        "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
    },
    {
      title: "Watercolor Eyes (From “Euphoria” An HBO Original Series)",
      description: "Lana Del Rey",
      imageUrl:
        "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
    },
  ];

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
      <StyledCarousel
        showArrows={false}
        showIndicators={true}
        showThumbs={false}
        swipeable={true}
        autoPlay={false}
        showStatus={false}
        emulateTouch={true}
        interval={6000}
      >
        <div style={{ height: "100%" }}>
          <Stack direction="row" alignItems="start" spacing={2.2}>
            {datas.map((data) => {
              return (
                <CardItem
                  title={data.title}
                  description={data.description}
                  imageUrl={data.imageUrl}
                />
              );
            })}
          </Stack>
        </div>
        <div>
          <Stack direction="row" alignItems="start" spacing={2.2}>
            {datas.map((data) => {
              return (
                <CardItem
                  title={data.title}
                  description={data.description}
                  imageUrl={data.imageUrl}
                />
              );
            })}
          </Stack>
        </div>
        <div>
          <Stack direction="row" alignItems="start" spacing={2.2}>
            {datas.map((data) => {
              return (
                <CardItem
                  title={data.title}
                  description={data.description}
                  imageUrl={data.imageUrl}
                />
              );
            })}
          </Stack>
        </div>
        <div>
          <Stack direction="row" alignItems="start" spacing={2.2}>
            {datas.map((data) => {
              return (
                <CardItem
                  title={data.title}
                  description={data.description}
                  imageUrl={data.imageUrl}
                />
              );
            })}
          </Stack>
        </div>
        <div>
          <Stack direction="row" alignItems="start" spacing={2.2}>
            {datas.map((data) => {
              return (
                <CardItem
                  title={data.title}
                  description={data.description}
                  imageUrl={data.imageUrl}
                />
              );
            })}
          </Stack>
        </div>
      </StyledCarousel>
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
`;

const StyledCarousel = styled(Carousel)`
  .carousel .slider-wrapper {
    height: 360px;
  }
  .carousel .control-dots .dot {
    box-shadow: none;
    width: 5px;
    height: 5px;
    margin: 0px 13px;
  }
`;

export default CarouselSlide;
