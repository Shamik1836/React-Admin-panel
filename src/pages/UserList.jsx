import React, { useState } from "react";
import styled from "styled-components";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { userRows } from "../dummyData";
import { Link } from "react-router-dom";
const UserList = () => {
  const [data, setData] = useState(userRows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "userName",
      headerName: "User Name",
      width: 130,
      renderCell: (params) => {
        return (
          <UserListUser>
            <img src={params.row.avatar} alt="" />
            {params.row.userName}
          </UserListUser>
        );
      },
    },
    { field: "email", headerName: "Email", width: 130 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <UserListEditButton>Edit</UserListEditButton>
            </Link>

            <DeleteOutlineIcon1 onClick={() => handleDelete(params.row.id)} />
          </>
        );
      },
    },
  ];

  return (
    <UserListContainer>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        // rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </UserListContainer>
  );
};

export default UserList;
const UserListContainer = styled.div`
  flex: 4;
`;
const UserListUser = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
  }
`;
const UserListEditButton = styled.button`
  border: none;
  border-radius: 10px;
  padding: 5px 10px;
  background-color: #3bb077;
  color: white;
  cursor: pointer;
  margin: 20px;
`;
const DeleteOutlineIcon1 = styled(DeleteOutlineIcon)`
  cursor: pointer;
  color: red;
`;
