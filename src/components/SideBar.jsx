import React from "react";
import styled from "styled-components";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AssessmentIcon from "@mui/icons-material/Assessment";
import MailIcon from "@mui/icons-material/Mail";
import FeedbackIcon from "@mui/icons-material/Feedback";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import ErrorIcon from "@mui/icons-material/Error";
import { Link } from "react-router-dom";
function SideBar() {
  return (
    <SidebarContainer>
      <SideBarWrapper>
        <SidebarMenu>
          <SidebarTitle>Dashboard</SidebarTitle>
          <SideBarList>
            <SideBarListItem>
              <LineStyleIcon />
              Home
            </SideBarListItem>
            <SideBarListItem>
              <TimelineIcon />
              Analytics
            </SideBarListItem>
            <SideBarListItem>
              <TrendingUpIcon />
              Sales
            </SideBarListItem>
          </SideBarList>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarTitle>Quick Menu</SidebarTitle>
          <SideBarList>
            <Link to="/users" className="link">
              <SideBarListItem>
                <PermIdentityIcon />
                Users
              </SideBarListItem>
            </Link>
            <Link to="/products" className="link">
              <SideBarListItem>
                <StorefrontIcon />
                Products
              </SideBarListItem>
            </Link>

            <SideBarListItem>
              <AttachMoneyIcon />
              Transactions
            </SideBarListItem>
            <SideBarListItem>
              <AssessmentIcon />
              Reports
            </SideBarListItem>
          </SideBarList>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarTitle>Notifications</SidebarTitle>
          <SideBarList>
            <SideBarListItem>
              <MailIcon />
              Mail
            </SideBarListItem>
            <SideBarListItem>
              <FeedbackIcon />
              Feedback
            </SideBarListItem>
            <SideBarListItem>
              <ChatBubbleOutlineIcon />
              Messages
            </SideBarListItem>
          </SideBarList>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarTitle>Staff</SidebarTitle>
          <SideBarList>
            <SideBarListItem>
              <WorkOutlineIcon />
              Manage
            </SideBarListItem>
            <SideBarListItem>
              <TimelineIcon />
              Analytics
            </SideBarListItem>
            <SideBarListItem>
              <ErrorIcon />
              Reports
            </SideBarListItem>
          </SideBarList>
        </SidebarMenu>
      </SideBarWrapper>
    </SidebarContainer>
  );
}

export default SideBar;
const SidebarContainer = styled.div`
  flex: 1;
  height: calc(100vh-50px);
  position: sticky;
  top: 50px;
  background-color: rgb(251, 251, 255);
`;
const SideBarWrapper = styled.div`
  padding: 20px;
  color: #555;
`;
const SidebarMenu = styled.div`
  margin-bottom: 10px;
`;
const SidebarTitle = styled.h3`
  font-size: 13px;
  color: rgb(187, 186, 186);
`;
const SideBarList = styled.ul`
  list-style: none;
  padding: 5px;
`;
const SideBarListItem = styled.li`
  padding: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 10px;
  &:active,
  &:hover {
    background-color: rgb(228, 228, 250);
  }
`;
