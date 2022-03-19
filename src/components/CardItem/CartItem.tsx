import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import styled from "styled-components";

interface IProps {
  title: any;
  description: any;
  imageUrl: any;
}

const CardItem = React.memo((props: IProps) => {
  const { title, description, imageUrl } = props;

  return (
    <StyledCard>
      <CardMedia component="img" image={imageUrl} alt="green iguana" />
      <CardContent>
        <Typography
          variant="body1"
          color="text.secondary"
          className="card-title"
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          className="card-description"
        >
          {description}
        </Typography>
      </CardContent>
    </StyledCard>
  );
});

const StyledCard = styled(Card)`
  && {
    min-width: 227px;
    box-shadow: none;
    border-radius: 0px;
    .MuiCardContent-root {
      padding: 16px 0px;
    }
    .MuiCardMedia-root {
      min-height: 227px;
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
  }
`;
export default CardItem;
