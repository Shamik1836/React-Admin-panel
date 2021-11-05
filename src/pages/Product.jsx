import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Chart from "../components/chart/Chart";
import { productData } from "../dummyData";
import PublishIcon from "@mui/icons-material/Publish";
const Product = () => {
  return (
    <ProductContainer>
      <ProductTitleContainer>
        <h1>Product</h1>
        <Link to="/newproduct">
          <button>Create</button>
        </Link>
      </ProductTitleContainer>
      <ProductTop>
        <ProductTopLeft>
          <Chart data={productData} dataKey="Sales" title="Sales Performance" />
        </ProductTopLeft>
        <ProductTopRight>
          <ProductInfoTop>
            <img
              src="data:image/webp;base64,UklGRlQFAABXRUJQVlA4IEgFAADwHQCdASp+AH4APj0aikOiIaEWCq1kIAPEtIHYDzRgdcwB6ETkz9mc14uY9PybFWgc/gZd0e/Vnow/8TgIP1uPeq/YP5fOXI5pF3mBkdkOFtlCapSBVq+oIvmE/jlqyHGgaTf2WR7VRcUp4CP8oCevDqleOAuS1G9T24TN7IID8eF7fLiq/cqw0uLmpFs9L7mAA5vtHFHqPTUlJod+tunZakDU33Oaq7O4a2NcDxAMA6KFOKLaRnryJUKKbkP4ZdRnurKju+nOY2ByuveUdpMHwN/DU9pVSnYEXrWy2+tnOOznChwaV3MQTnEkdym9C4y/T20UbTZWgAD+/rQyQ8i/ikQgSR1RMbgIEdw3f2OxTg68PEHS+69fXkcEcCwxtJI692wbeLZ+KG6cuNWskmaoIAoit+hLiDAOlU1RobS3ZLEZqnCgnh1hFIKIkfLNTphhD0sthq0H2zkQ4QDWa//H7DE43Hk3rtz+xbVocABDDyntwjJXk3qNDXtfng4jg/JdzXqW0j2Q5D9CzMeuQ5gOUN4f8ap5gEDCLZqrz6Mkqc+oY8jgw6rnYokIMXzAFjWy1lkwv2fc3z6wB59pWk2cuk+kHZtGQxphXmGSxuKv29NW+FjXmBqdpK9OhVqFKxRiplYO67/RjSVebZ851T0UTMSyyuTXe30eXgQc4mWOk/SsgwGJtaK2JrdKg+cEUX/f8LXHQHyGuXu+uzcLcaGG+xgkay+H0/sDdCumxU+uZy6xz1nHq+hXJjQO3ZCbIe8t4ptOXhH7lf/L0sNF4psD/EmaOORKSXdU/5pf7cVuc+hn+GXO5W/iL4yhvjx+f5jx/vK/uZ7/GM+GFVvBatet8RhcacjKnQiAmUhEUfvKb81MfT4i2WTNEnMyy2PNI60OLityTt+ltMovCeUBLfmVMuWaQwsJib72djY///DlZmfExLUhuu/37yFYIzAn7ip6g/ke/3x7msfZYYVPKhF8dYm235IlK6apnxglBmm/dBfv1/rsn2A2e+nPxA4l/9mu0f8vT/P3iTdvpG8Mf5weTpAog20VoyiDZhF5CQjFQFcoRtkbb8Dm7adRhnXsLTtSPeHLZgDamTp6Tm6RzAnJnsovlE8ftTta9KQFnhdcO7+OwOZlJDBe5Ok4Nn+WfTr84rDLX0LDiEtOHZkgu3mjm1I2EWU+EUr8ZFD+BO21VC4Pcx7Eqh3/fIX99+bz8Y5r77gKy80VS8QvIVw4FStrhrRujM4v+8mGXU9zMpkwv5/FdQQC+09pNzARGFXcRIHIyQoQnDTyJLhnJ59TuNKVdoaY/65dFPjP8X/yRuAjo8dcosWc4JASKWAbrnQB51umQpjloxBQpWC+XYN/pWvX7qF+TO9DiD2WvE/S7Pf/8Tp0ijq7/FwqP7HIxSF6QA/6VS1hgGWpvKQdQDnXBpMbxwH9BxaSs/HQGLYJRrkkSZGuF23ZJv6sG9dNwG6ZIPWDxqW8tdWpSB9PB0DTU3g1KJ8AF5idpOczikJURi69D+bDIefvLTLyEFQWFxyOxhEnrAIxsIDpfF5/RemeGKWT4UUw++keSoGHSRVEYkdUWwKD703LsTh+9nQH4EzCPrHtIApi4gZ7b+to2skwAcbp5lJHcebT9QGMnAhcnb63niw2mbrV/NiZ1W784Z3LW7LhIPi499y4u64f1fP5UGSnag2BgMEaJCNz6lnKsWcaos/kYHsYII1RSuOIfZJ5LtNfnLmK0sk8HJcY71WPSQh5jZ7XEtxJ50lGnhY3u+05ldUK/1ZOH+j8m0w70Qym3sagmVQrpRwAAA=="
              alt=""
            />
            <span>Apple Airpods</span>
          </ProductInfoTop>
          <ProductInfoBottom>
            <ProductInfoItem>
              <ProductInfoKey>id:</ProductInfoKey>
              <ProductInfoValue>123</ProductInfoValue>
            </ProductInfoItem>
            <ProductInfoItem>
              <ProductInfoKey>sales:</ProductInfoKey>
              <ProductInfoValue>5123</ProductInfoValue>
            </ProductInfoItem>
            <ProductInfoItem>
              <ProductInfoKey>active:</ProductInfoKey>
              <ProductInfoValue>yes</ProductInfoValue>
            </ProductInfoItem>
            <ProductInfoItem>
              <ProductInfoKey>in stock:</ProductInfoKey>
              <ProductInfoValue>no</ProductInfoValue>
            </ProductInfoItem>
          </ProductInfoBottom>
        </ProductTopRight>
      </ProductTop>
      <ProductBottom>
        <form>
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder="Apple Airpod" />
            <label>In Stock</label>
            <select name="inStock" id="inStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src="data:image/webp;base64,UklGRlQFAABXRUJQVlA4IEgFAADwHQCdASp+AH4APj0aikOiIaEWCq1kIAPEtIHYDzRgdcwB6ETkz9mc14uY9PybFWgc/gZd0e/Vnow/8TgIP1uPeq/YP5fOXI5pF3mBkdkOFtlCapSBVq+oIvmE/jlqyHGgaTf2WR7VRcUp4CP8oCevDqleOAuS1G9T24TN7IID8eF7fLiq/cqw0uLmpFs9L7mAA5vtHFHqPTUlJod+tunZakDU33Oaq7O4a2NcDxAMA6KFOKLaRnryJUKKbkP4ZdRnurKju+nOY2ByuveUdpMHwN/DU9pVSnYEXrWy2+tnOOznChwaV3MQTnEkdym9C4y/T20UbTZWgAD+/rQyQ8i/ikQgSR1RMbgIEdw3f2OxTg68PEHS+69fXkcEcCwxtJI692wbeLZ+KG6cuNWskmaoIAoit+hLiDAOlU1RobS3ZLEZqnCgnh1hFIKIkfLNTphhD0sthq0H2zkQ4QDWa//H7DE43Hk3rtz+xbVocABDDyntwjJXk3qNDXtfng4jg/JdzXqW0j2Q5D9CzMeuQ5gOUN4f8ap5gEDCLZqrz6Mkqc+oY8jgw6rnYokIMXzAFjWy1lkwv2fc3z6wB59pWk2cuk+kHZtGQxphXmGSxuKv29NW+FjXmBqdpK9OhVqFKxRiplYO67/RjSVebZ851T0UTMSyyuTXe30eXgQc4mWOk/SsgwGJtaK2JrdKg+cEUX/f8LXHQHyGuXu+uzcLcaGG+xgkay+H0/sDdCumxU+uZy6xz1nHq+hXJjQO3ZCbIe8t4ptOXhH7lf/L0sNF4psD/EmaOORKSXdU/5pf7cVuc+hn+GXO5W/iL4yhvjx+f5jx/vK/uZ7/GM+GFVvBatet8RhcacjKnQiAmUhEUfvKb81MfT4i2WTNEnMyy2PNI60OLityTt+ltMovCeUBLfmVMuWaQwsJib72djY///DlZmfExLUhuu/37yFYIzAn7ip6g/ke/3x7msfZYYVPKhF8dYm235IlK6apnxglBmm/dBfv1/rsn2A2e+nPxA4l/9mu0f8vT/P3iTdvpG8Mf5weTpAog20VoyiDZhF5CQjFQFcoRtkbb8Dm7adRhnXsLTtSPeHLZgDamTp6Tm6RzAnJnsovlE8ftTta9KQFnhdcO7+OwOZlJDBe5Ok4Nn+WfTr84rDLX0LDiEtOHZkgu3mjm1I2EWU+EUr8ZFD+BO21VC4Pcx7Eqh3/fIX99+bz8Y5r77gKy80VS8QvIVw4FStrhrRujM4v+8mGXU9zMpkwv5/FdQQC+09pNzARGFXcRIHIyQoQnDTyJLhnJ59TuNKVdoaY/65dFPjP8X/yRuAjo8dcosWc4JASKWAbrnQB51umQpjloxBQpWC+XYN/pWvX7qF+TO9DiD2WvE/S7Pf/8Tp0ijq7/FwqP7HIxSF6QA/6VS1hgGWpvKQdQDnXBpMbxwH9BxaSs/HQGLYJRrkkSZGuF23ZJv6sG9dNwG6ZIPWDxqW8tdWpSB9PB0DTU3g1KJ8AF5idpOczikJURi69D+bDIefvLTLyEFQWFxyOxhEnrAIxsIDpfF5/RemeGKWT4UUw++keSoGHSRVEYkdUWwKD703LsTh+9nQH4EzCPrHtIApi4gZ7b+to2skwAcbp5lJHcebT9QGMnAhcnb63niw2mbrV/NiZ1W784Z3LW7LhIPi499y4u64f1fP5UGSnag2BgMEaJCNz6lnKsWcaos/kYHsYII1RSuOIfZJ5LtNfnLmK0sk8HJcY71WPSQh5jZ7XEtxJ50lGnhY3u+05ldUK/1ZOH+j8m0w70Qym3sagmVQrpRwAAA=="
                alt=""
              />
              <label for="file">
                <PublishIcon />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button>Update</button>
          </div>
        </form>
      </ProductBottom>
    </ProductContainer>
  );
};

export default Product;
const ProductContainer = styled.div`
  flex: 4;
  padding: 20px;
`;
const ProductTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    width: 80px;
    border: none;
    padding: 5px;
    background-color: teal;
    color: whitesmoke;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
  }
`;
const ProductTop = styled.div`
  display: flex;
`;
const ProductBottom = styled.div`
  flex: 1;
  padding: 20px;
  margin: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  form {
    display: flex;
    justify-content: space-between;
  }
  .productFormLeft {
    display: flex;
    flex-direction: column;
  }
  .productFormLeft > label {
    margin-bottom: 10px;
    color: gray;
  }
  .productFormLeft > input {
    margin-bottom: 10px;
    border: none;
    padding: 5px;
    border-bottom: 1px solid gray;
  }
  .productFormLeft > select {
    margin-bottom: 10px;
  }
  .productUpload > img {
    width: 100px;
    height: 100px;
    border-radius: 10px;
    object-fit: cover;
    margin-right: 20px;
  }
  .productFormRight {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .productUpload {
    display: flex;
    align-items: center;
  }
  .productFormRight > button {
    border: none;
    padding: 5px;
    border-radius: 5px;
    background-color: darkblue;
    color: white;
    font-weight: 600;
  }
`;
const ProductTopLeft = styled.div`
  flex: 1;
`;
const ProductTopRight = styled.div`
  flex: 1;
  padding: 20px;
  margin: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
const ProductInfoTop = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 20px;
  }
  span {
    font-weight: 600;
  }
`;
const ProductInfoBottom = styled.div`
  margin-top: 10px;
`;
const ProductInfoItem = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
`;
const ProductInfoKey = styled.span``;
const ProductInfoValue = styled.span`
  font-weight: 300;
`;
