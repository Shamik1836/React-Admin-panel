import React from "react";
import styled from "styled-components";
import VisibilityIcon from "@mui/icons-material/Visibility";
const WidgetSm = () => {
  return (
    <WidgetSmall>
      <WidgetSmTitle>New Join Members</WidgetSmTitle>
      <WidgetSmList>
        <WidgetSmListItem>
          <WidgetSmImage src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"></WidgetSmImage>
          <WidgetSmUser>
            <WidgetSmUserName>Anna Keller</WidgetSmUserName>
            <WidgetSmJobTitle>Software Engineer</WidgetSmJobTitle>
          </WidgetSmUser>
          <WidgetSmButton>
            <VisibilityIcon />
            Display
          </WidgetSmButton>
        </WidgetSmListItem>
        <WidgetSmListItem>
          <WidgetSmImage src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"></WidgetSmImage>
          <WidgetSmUser>
            <WidgetSmUserName>Anna Keller</WidgetSmUserName>
            <WidgetSmJobTitle>Software Engineer</WidgetSmJobTitle>
          </WidgetSmUser>
          <WidgetSmButton>
            <VisibilityIcon />
            Display
          </WidgetSmButton>
        </WidgetSmListItem>
        <WidgetSmListItem>
          <WidgetSmImage src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"></WidgetSmImage>
          <WidgetSmUser>
            <WidgetSmUserName>Anna Keller</WidgetSmUserName>
            <WidgetSmJobTitle>Software Engineer</WidgetSmJobTitle>
          </WidgetSmUser>
          <WidgetSmButton>
            <VisibilityIcon />
            Display
          </WidgetSmButton>
        </WidgetSmListItem>
        <WidgetSmListItem>
          <WidgetSmImage src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"></WidgetSmImage>
          <WidgetSmUser>
            <WidgetSmUserName>Anna Keller</WidgetSmUserName>
            <WidgetSmJobTitle>Software Engineer</WidgetSmJobTitle>
          </WidgetSmUser>
          <WidgetSmButton>
            <VisibilityIcon />
            Display
          </WidgetSmButton>
        </WidgetSmListItem>
        <WidgetSmListItem>
          <WidgetSmImage src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"></WidgetSmImage>
          <WidgetSmUser>
            <WidgetSmUserName>Anna Keller</WidgetSmUserName>
            <WidgetSmJobTitle>Software Engineer</WidgetSmJobTitle>
          </WidgetSmUser>
          <WidgetSmButton>
            <VisibilityIcon />
            Display
          </WidgetSmButton>
        </WidgetSmListItem>
      </WidgetSmList>
    </WidgetSmall>
  );
};

export default WidgetSm;
const WidgetSmall = styled.div`
  flex: 1;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  padding: 20px;
  margin-right: 20px;
`;
const WidgetSmTitle = styled.span`
  font-size: 22px;
  font-weight: 600;
`;
const WidgetSmList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
const WidgetSmListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0px;
`;
const WidgetSmImage = styled.img`
  font: 40px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;
const WidgetSmUser = styled.div`
  display: flex;
  flex-direction: column;
`;
const WidgetSmUserName = styled.span`
  font-weight: 600;
`;
const WidgetSmJobTitle = styled.span`
  font-weight: 300;
`;
const WidgetSmButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  border-radius: 10px;
  padding: 7px 10px;
  background-color: #eeeef7;
  color: #555;
  cursor: pointer;
`;
