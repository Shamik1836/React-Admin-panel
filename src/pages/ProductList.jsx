import React, { useState } from "react";
import styled from "styled-components";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { productRows } from "../dummyData";
import { Link } from "react-router-dom";
const ProductList = () => {
  const [data, setData] = useState(productRows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "name",
      headerName: "Name",
      width: 130,
      renderCell: (params) => {
        return (
          <ProductListProduct>
            <img src={params.row.img} alt="" />
            {params.row.name}
          </ProductListProduct>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 130 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <ProductListEditButton>Edit</ProductListEditButton>
            </Link>

            <DeleteOutlineIcon1 onClick={() => handleDelete(params.row.id)} />
          </>
        );
      },
    },
  ];
  return (
    <ProductListContainer>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        // rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </ProductListContainer>
  );
};

export default ProductList;
const ProductListContainer = styled.div`
  flex: 4;
`;
const ProductListProduct = styled.div`
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
const ProductListEditButton = styled.button`
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
