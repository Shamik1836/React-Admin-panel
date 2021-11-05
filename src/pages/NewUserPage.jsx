import React from "react";
import styled from "styled-components";

const NewUserPage = () => {
  return (
    <NewUser>
      <NewUserTitle>New User</NewUserTitle>
      <NewUserForm>
        <NewUserItem>
          <label>Username</label>
          <input type="text" placeholder="john" />
        </NewUserItem>
        <NewUserItem>
          <label>Full Name</label>
          <input type="text" placeholder="John Doe" />
        </NewUserItem>
        <NewUserItem>
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com" />
        </NewUserItem>
        <NewUserItem>
          <label>Password</label>
          <input type="password" placeholder="password" />
        </NewUserItem>
        <NewUserItem>
          <label>Addres</label>
          <input type="text" placeholder="address" />
        </NewUserItem>
        <NewUserItem>
          <label>Phone</label>
          <input type="text" placeholder="+91 99999902" />
        </NewUserItem>
        <NewUserItem>
          <label>Gender</label>
          <div>
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="others" value="others" />
            <label for="others">Others</label>
          </div>
        </NewUserItem>
        <NewUserItem>
          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </NewUserItem>
        <button>Create</button>
      </NewUserForm>
    </NewUser>
  );
};

export default NewUserPage;
const NewUser = styled.div`
  flex: 4;
`;
const NewUserTitle = styled.h1``;
const NewUserForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  button {
    width: 200px;
    border: none;
    background-color: darkblue;
    color: white;
    padding: 7px 10px;
    border-radius: 10px;
    margin-top: 30px;
    cursor: pointer;
    font-weight: 600;
  }
`;
const NewUserItem = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-right: 20px;
  & > label {
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: 600;
    color: rgb(151, 150, 150);
  }
  & > input {
    height: 20px;
    padding: 10px;
    border: 1px solid gray;
    border-radius: 5px;
  }
  & > div > input {
    margin-top: 15px;
  }
  & > div > label {
    margin: 10px;
    font-size: 18px;
    color: #555;
  }
  & > select {
    height: 40px;
    border-radius: 5px;
  }
`;
