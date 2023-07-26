// src/AnalyticsPage.js
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { FaChartLine, FaDollarSign, FaShoppingBag } from 'react-icons/fa';
import { monthlyRevenueData, topProductsData, userActivityData } from "../Data/Data"

const Cards = () => {
  return (
    <div className="analytics-container">
      <div className="chart-section">
        <h2 className="section-heading">Monthly Revenue</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={monthlyRevenueData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="revenue" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-section">
        <h2 className="section-heading">Top Selling Products</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={topProductsData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sales" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-section">
        <h2 className="section-heading">User Activity</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={userActivityData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="visits" fill="#ffc658" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Cards;
