// src/ParentComponent.js
import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import axios from 'axios';

const ParentComponent = () => {
  const [monthlyRevenueData, setMonthlyRevenueData] = useState([]);
  const [topProductsData, setTopProductsData] = useState([]);
  const [userActivityData, setUserActivityData] = useState([]);

  useEffect(() => {
    // Fetch monthly revenue data
    axios.get('http://your-api-url/monthly-revenue')
      .then((response) => {
        setMonthlyRevenueData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    // Fetch top products data
    axios.get('http://localhost:3000/product')
      .then((response) => {
        setTopProductsData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    // Fetch user activity data
    axios.get('http://your-api-url/user-activity')
      .then((response) => {
        setUserActivityData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <Cards monthlyRevenueData={monthlyRevenueData} topProductsData={topProductsData} userActivityData={userActivityData} />
    </div>
  );
};

export default ParentComponent;
