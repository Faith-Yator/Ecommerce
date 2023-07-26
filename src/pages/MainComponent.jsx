import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from './Cards';

const MainComponent = () => {
  // State variable to store the trends data
  const [trendsData, setTrendsData] = useState([]);

  useEffect(() => {
    // Fetch trends data from the database
    axios.get('http://localhost:3000/Payment')
      .then((response) => {
        setTrendsData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching trends data:', error);
      });
  }, []);

  return (
    <div>
      <Cards trendData={trendsData} />
    </div>
  );
};

export default MainComponent;
