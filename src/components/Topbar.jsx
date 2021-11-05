import React from "react";
import styled from "styled-components";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
function Topbar() {
  return (
    <TopBarComponent>
      <TopBarWrapper>
        <TopLeft>
          <Logo>DasAdmin</Logo>
        </TopLeft>
        <TopRight>
          <TopBarIcons>
            <NotificationsNoneIcon />
            <TopIconBadge>2</TopIconBadge>
          </TopBarIcons>
          <TopBarIcons>
            <LanguageIcon />
          </TopBarIcons>
          <TopBarIcons>
            <SettingsIcon />
            <TopIconBadge>2</TopIconBadge>
          </TopBarIcons>
          <TopBarIcons>
            <AvatarImg src="/images/profile.jpg" alt="" />
          </TopBarIcons>
        </TopRight>
      </TopBarWrapper>
    </TopBarComponent>
  );
}

export default Topbar;

const TopBarComponent = styled.div`
  width: 100%;
  height: 50%;
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 999;
`;
const TopBarWrapper = styled.div`
  height: 100%;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const TopLeft = styled.div``;
const TopRight = styled.div`
  display: flex;
  justify-content: center;
`;
const Logo = styled.span`
  font-weight: bold;
  font-size: 30px;
  color: darkblue;
  cursor: pointer;
`;
const TopBarIcons = styled.div`
  position: relative;
  cursor: pointer;
  margin-right: 10px;
  color: #555;
`;
const TopIconBadge = styled.span`
  position: absolute;
  top: -5px;
  right: 0px;
  background-color: red;
  color: white;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
`;
const AvatarImg = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  cursor: pointer;
`;
