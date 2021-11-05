import React from "react";
import styled from "styled-components";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import PublishIcon from "@mui/icons-material/Publish";
import { Link } from "react-router-dom";
const User = () => {
  return (
    <UserContainer>
      <UserTitleContainer>
        <UserTitle>Edit User</UserTitle>
        <Link to="/newuser">
          <UserAddButton>Create</UserAddButton>
        </Link>
      </UserTitleContainer>
      <UserContainer1>
        <UserShow>
          <UserShowTop>
            <UserShowImg src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"></UserShowImg>
            <UserShowTopTitle>
              <UserShowUsername>Anna Becker</UserShowUsername>
              <UserShowUserTitle>Software Engineer</UserShowUserTitle>
            </UserShowTopTitle>
          </UserShowTop>
          <UserShowBottom>
            <UserShowTitle>Account Details</UserShowTitle>
            <UserShowInfo>
              <Perm />
              <UserShowInfoTitle>annabeck99</UserShowInfoTitle>
            </UserShowInfo>
            <UserShowTitle>Contact Details</UserShowTitle>
            <UserShowInfo>
              <CalendarTodayIcon />
              <UserShowInfoTitle>10.12.1999</UserShowInfoTitle>
            </UserShowInfo>
            <UserShowInfo>
              <PhoneAndroidIcon />
              <UserShowInfoTitle>+91-12345667</UserShowInfoTitle>
            </UserShowInfo>
            <UserShowInfo>
              <MailOutlineIcon />
              <UserShowInfoTitle>annabeck99@gmail.com</UserShowInfoTitle>
            </UserShowInfo>
            <UserShowInfo>
              <LocationSearchingIcon />
              <UserShowInfoTitle>Mumbai | India</UserShowInfoTitle>
            </UserShowInfo>
          </UserShowBottom>
        </UserShow>
        <UserUpdate>
          <UserUpdateTitle>Edit</UserUpdateTitle>
          <UserUpdateForm>
            <UserUpdateLeft>
              <UserUpdateItem>
                <label>UserName</label>
                <input type="text" placeholder="annabeck99" />
              </UserUpdateItem>
              <UserUpdateItem>
                <label>Full Name</label>
                <input type="text" placeholder="Anna Becker" />
              </UserUpdateItem>
              <UserUpdateItem>
                <label>Email</label>
                <input type="text" placeholder="annabeck99@gmail.com" />
              </UserUpdateItem>
              <UserUpdateItem>
                <label>Phone Number</label>
                <input type="text" placeholder="+91-12345667" />
              </UserUpdateItem>
              <UserUpdateItem>
                <label>Address</label>
                <input type="text" placeholder="Mumbai | India" />
              </UserUpdateItem>
            </UserUpdateLeft>
            <UserUpdateRight>
              <UserUpdateUpload>
                <UserUpdateImg src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                <label htmlFor="file">
                  <PublishIcon />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </UserUpdateUpload>
              <button>Update</button>
            </UserUpdateRight>
          </UserUpdateForm>
        </UserUpdate>
      </UserContainer1>
    </UserContainer>
  );
};

export default User;
const UserContainer = styled.div`
  flex: 4;
  padding: 20px;
`;
const UserTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const UserTitle = styled.h1``;
const UserAddButton = styled.button`
  width: 80px;
  border: none;
  padding: 5px;
  border-radius: 5px;
  background-color: teal;
  cursor: pointer;
  color: white;
  font-size: 16px;
`;
const UserContainer1 = styled.div`
  display: flex;
`;
const UserShow = styled.div`
  flex: 1;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  margin-top: 20px;
`;
const UserUpdate = styled.div`
  flex: 2;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  margin-left: 20px;
`;
const UserShowTop = styled.div`
  display: flex;
  align-items: center;
`;
const UserShowBottom = styled.div`
  margin-top: 20px;
`;
const UserShowImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;
const UserShowTopTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;
const UserShowUsername = styled.span`
  font-weight: 600;
`;
const UserShowUserTitle = styled.span`
  font-weight: 300;
`;
const UserShowTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: rgb(175, 170, 170);
`;
const UserShowInfoTitle = styled.span`
  margin-left: 10px;
`;
const UserShowInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0px;
  color: #444;
`;
const Perm = styled(PermIdentityIcon)``;
const UserUpdateTitle = styled.span`
  font-size: 24px;
  font-weight: 600;
`;
const UserUpdateForm = styled.form`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
const UserUpdateLeft = styled.div``;
const UserUpdateRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & > button {
    border-radius: 5px;
    border: none;
    padding: 5px;
    cursor: pointer;
    background-color: darkblue;
    color: white;
    font-weight: 600;
  }
`;
const UserUpdateItem = styled.div`
  display: flex;
  flex-direction: column;
  & > label {
    margin-bottom: 5px;
    font-size: 14px;
  }
  & > input {
    border: none;
    width: 250px;
    border-bottom: 1px solid gray;
    height: 30px;
  }
`;
const UserUpdateUpload = styled.div``;
const UserUpdateImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  object-fit: cover;
  margin-right: 20px;
`;
