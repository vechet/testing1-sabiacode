import { ListItemIcon, Typography } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styled from "styled-components";
import { MENUS_ONE, MENUS_TWO } from "./utils";
import HeaderDrawer from "./HeaderDrawer";

const SideBar = React.memo(() => {
  const [selected, setSelected] = useState("");
  const router = useRouter();

  const handleClick = (page: string) => {
    setSelected(page);
    router.push(page);
  };

  return (
    <>
      <Drawer variant="persistent" anchor="left" open={true}>
        <HeaderDrawer />
        <StyledWrapper>
          <StyledList>
            {MENUS_ONE.map((menu, index) => (
              <ListItem
                button
                key={index}
                onClick={() => handleClick(menu.value)}
                selected={menu.value === selected}
              >
                <StyledListItemIcon
                  style={{
                    color: menu.value === selected ? "#1d1b1a" : "#949494",
                  }}
                >
                  {menu.icon}
                </StyledListItemIcon>
                <ListItemText
                  style={{
                    color: menu.value === selected ? "#1d1b1a" : "#949494",
                  }}
                  primary={menu.label}
                />
              </ListItem>
            ))}

            <StyledTypography>YOUR LIBRARY</StyledTypography>

            {MENUS_TWO.map((menu, index) => (
              <ListItem
                button
                key={index}
                onClick={() => handleClick(menu.value)}
                selected={menu.value === selected}
              >
                <StyledListItemIcon
                  style={{
                    color: menu.value === selected ? "#1d1b1a" : "#949494",
                  }}
                >
                  {menu.icon}
                </StyledListItemIcon>
                <ListItemText
                  style={{
                    color: menu.value === selected ? "#1d1b1a" : "#949494",
                  }}
                  primary={menu.label}
                />
              </ListItem>
            ))}
          </StyledList>
        </StyledWrapper>
      </Drawer>
    </>
  );
});

const StyledWrapper = styled.div`
  width: 292px;
  border-right: 1px solid #efefef;
`;

const StyledList = styled(List)`
  padding: 0px 16px 16px 16px;
  color: #949494;
`;

const StyledListItemIcon = styled(ListItemIcon)`
  min-width: 35px;
  color: #949494;
`;

const StyledTypography = styled(Typography)`
  font-weight: 600;
  font-size: 13px;
  padding: 24px 16px;
`;

export default SideBar;
