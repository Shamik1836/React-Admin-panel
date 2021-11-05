import styled from "styled-components";
import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
function FeaturedInfo() {
  return (
    <FeaturedInfoContainer>
      <FeaturedItem>
        <FeaturedTitle>Revenue</FeaturedTitle>
        <FeaturedMoneyContainer>
          <FeaturedMoney>$2,415</FeaturedMoney>
          <FeaturedRate>
            -11.4 <ArrowDownwardIcon />
          </FeaturedRate>
        </FeaturedMoneyContainer>
        <FeaturedSub>Compared to last month</FeaturedSub>
      </FeaturedItem>
      <FeaturedItem>
        <FeaturedTitle>Sales</FeaturedTitle>
        <FeaturedMoneyContainer>
          <FeaturedMoney>$4,415</FeaturedMoney>
          <FeaturedRate>
            -1.4 <ArrowDownwardIcon />
          </FeaturedRate>
        </FeaturedMoneyContainer>
        <FeaturedSub>Compared to last month</FeaturedSub>
      </FeaturedItem>
      <FeaturedItem>
        <FeaturedTitle>Cost</FeaturedTitle>
        <FeaturedMoneyContainer>
          <FeaturedMoney>$2,215</FeaturedMoney>
          <FeaturedRate>
            +2.4 <ArrowUpwardIcon />
          </FeaturedRate>
        </FeaturedMoneyContainer>
        <FeaturedSub>Compared to last month</FeaturedSub>
      </FeaturedItem>
    </FeaturedInfoContainer>
  );
}

export default FeaturedInfo;
const FeaturedInfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const FeaturedItem = styled.div`
  flex: 1;
  margin: 0px 20px;
  padding: 30px;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  cursor: pointer;
`;
const FeaturedTitle = styled.span`
  font-size: 20px;
`;
const FeaturedMoneyContainer = styled.div`
  margin: 10px 0px;
  display: flex;
  align-items: center;
`;
const FeaturedMoney = styled.span`
  font-size: 30px;
  font-weight: 600;
`;
const FeaturedRate = styled.span`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

const FeaturedSub = styled.span`
  font-size: 15px;
  color: grey;
`;
