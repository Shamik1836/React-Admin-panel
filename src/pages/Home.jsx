import React from "react";
import styled from "styled-components";
import Chart from "../components/chart/Chart";
import FeaturedInfo from "../featuredInfo/FeaturedInfo";
import { userData } from "../dummyData";
import WidgetSm from "../widgetsm/WidgetSm";
import WidgetLg from "../widgetlarge/WidgetLg";
const Home = () => {
  return (
    <HomePage>
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <HomeWidgets>
        <WidgetSm />
        <WidgetLg />
      </HomeWidgets>
    </HomePage>
  );
};

export default Home;
const HomePage = styled.div`
  flex: 4;
`;
const HomeWidgets = styled.div`
  display: flex;
  margin: 20px;
`;
