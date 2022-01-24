import React, { useState } from "react";
import styled from "styled-components";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Button } from "@mui/material";
import { useRouter } from "next/router";

interface IProps {
  pageName?: any;
}

const SeeAllButton = React.memo((props: IProps) => {
  const { pageName } = props;
  const router = useRouter();
  const [state, setState] = useState(pageName);

  const handleClick = () => {
    router.push(pageName);
  };

  return (
    <StyledButton
      variant="text"
      disableRipple={true}
      endIcon={<ArrowForwardIcon />}
      onClick={() => {
        handleClick();
        console.log("click");
      }}
    >
      see all
    </StyledButton>
  );
});

const StyledButton = styled(Button)`
  color: #949494;
  text-transform: none;
  font-size: 16px;
  &:hover {
    background: none;
  }
`;

export default SeeAllButton;
