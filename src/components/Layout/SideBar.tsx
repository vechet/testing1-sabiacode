import { Drawer, Typography, Stack } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MENUS } from "./utils";
import HeaderDrawer from "./HeaderDrawer";

const SideBar = React.memo(() => {
  const [selected, setSelected] = useState("/home");
  const router = useRouter();
  const { pathname } = router;

  const handleClick = (page: string) => {
    router.push(page);
  };

  useEffect(() => {
    setSelected(pathname);
  }, []);

  return (
    <>
      <Drawer variant="persistent" anchor="left" open={true}>
        <HeaderDrawer />
        <Stack>
          {MENUS.map((menu, index) => (
            <React.Fragment key={index}>
              {index === 4 && (
                <Stack py={2} px={4}>
                  <StyledTypography>YOUR LIBRARY</StyledTypography>
                </Stack>
              )}
              <StyledMenu
                px={4}
                direction="row"
                alignItems="center"
                spacing={1}
                onClick={() => handleClick(menu.value)}
                selected={menu.value === selected}
              >
                {menu.icon}
                <Typography className="menu">{menu.label}</Typography>
              </StyledMenu>
            </React.Fragment>
          ))}
        </Stack>
      </Drawer>
    </>
  );
});

const StyledMenu: any = styled(Stack)`
  min-width: 290px;
  height: 50px;
  color: ${(props) => (props.selected ? "#1d1b1a" : "#949494")};
  &:hover {
    cursor: pointer;
  }
  .menu {
    font-weight: 500;
  }
`;

const StyledTypography = styled(Typography)`
  font-weight: 600;
  color: #949494;
  font-size: 14px;
`;

export default SideBar;
