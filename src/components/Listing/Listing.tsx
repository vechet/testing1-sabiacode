import { Typography, Stack } from "@mui/material";
import React from "react";
import styled from "styled-components";

interface IProps {
  topTitle: any;
  topDescription: any;
  showSeeMoreBtn?: any;
}

const Listing = React.memo((props: IProps) => {
  const { topTitle, topDescription, showSeeMoreBtn } = props;

  const datas = [
    {
      title: "abcdefu",
      description: "GAYLE",
      imageUrl:
        "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",

      duration: "2:48",
    },
    {
      title: "abcdefu",
      description: "GAYLE",
      imageUrl:
        "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",

      duration: "2:48",
    },
    {
      title: "abcdefu",
      description: "GAYLE",
      imageUrl:
        "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",

      duration: "2:48",
    },
    {
      title: "abcdefu",
      description: "GAYLE",
      imageUrl:
        "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",

      duration: "2:48",
    },
    {
      title: "abcdefu",
      description: "GAYLE",
      imageUrl:
        "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",

      duration: "2:48",
    },
    {
      title: "abcdefu",
      description: "GAYLE",
      imageUrl:
        "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",

      duration: "2:48",
    },
    {
      title: "abcdefu",
      description: "GAYLE",
      imageUrl:
        "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",

      duration: "2:48",
    },
    {
      title: "abcdefu",
      description: "GAYLE",
      imageUrl:
        "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",

      duration: "2:48",
    },
    {
      title: "abcdefu",
      description: "GAYLE",
      imageUrl:
        "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",

      duration: "2:48",
    },
    {
      title: "abcdefu",
      description: "GAYLE",
      imageUrl:
        "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",

      duration: "2:48",
    },
    {
      title: "abcdefu",
      description: "GAYLE",
      imageUrl:
        "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",

      duration: "2:48",
    },
    {
      title: "abcdefu",
      description: "GAYLE",
      imageUrl:
        "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",

      duration: "2:48",
    },
    {
      title: "abcdefu",
      description: "GAYLE",
      imageUrl:
        "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",

      duration: "2:48",
    },
    {
      title: "abcdefu",
      description: "GAYLE",
      imageUrl:
        "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",

      duration: "2:48",
    },
    {
      title: "abcdefu",
      description: "GAYLE",
      imageUrl:
        "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",

      duration: "2:48",
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
      </Stack>
      <StyledList>
        {datas.map((data, index) => {
          return (
            <Stack
              key={index}
              direction="row"
              justifyContent="space-between"
              className="card"
            >
              <Stack direction="row" alignItems="center">
                <img
                  src={data.imageUrl}
                  width="60"
                  height="60"
                  className="image"
                />
                <div>
                  <Typography className="card-title">{data.title}</Typography>
                  <Typography className="card-description">
                    {data.description}
                  </Typography>
                </div>
              </Stack>
              <Typography className="card-duration">{data.duration}</Typography>
            </Stack>
          );
        })}
      </StyledList>
    </StyledWrapper>
  );
});

const StyledWrapper = styled(Stack)`
  width: 526px;
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

const StyledList = styled(Stack)`
  && {
    overflow-y: auto;
    max-height: calc(100vh - 240px);
    min-height: calc(100vh - 240px);
    padding-right: 20px;
  }
  .card {
    margin-bottom: 25px;
  }
  .image {
    margin-right: 15px;
    border-radius: 5px;
  }
  .card-title {
    font-size: 14px;
    font-weight: 500;
    color: #1d1b1a;
    margin-bottom: 2px;
    text-align: left;
  }
  .card-description {
    font-weight: 500;
    font-size: 13px;
    color: #949494;
    word-break: break-word;
    text-align: left;
  }
  .card-duration {
    color: #949494;
    font-size: 14px;
  }
`;

export default Listing;
