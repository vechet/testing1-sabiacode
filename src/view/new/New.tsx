import React from "react";
import { Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import styled from "styled-components";
import CardItem from "../../components/CardItem";

const New = React.memo(() => {
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
      <Typography className="description">New Releases</Typography>
      <Grid container spacing={2.5}>
        {datas.map((data, index) => {
          return (
            <Grid item xs={3}>
              <CardItem
                title={data.title}
                description={data.description}
                imageUrl={data.imageUrl}
              />
            </Grid>
          );
        })}
      </Grid>
    </StyledWrapper>
  );
});

const StyledWrapper = styled(Stack)`
  .description {
    font-weight: 600;
    font-size: 25px;
    color: #1d1b1a;
    margin-bottom: 30px;
  }
  /* && {
    overflow-y: auto;
    max-height: calc(100vh - 240px);
    min-height: calc(100vh - 240px);
  } */
`;
export default New;
