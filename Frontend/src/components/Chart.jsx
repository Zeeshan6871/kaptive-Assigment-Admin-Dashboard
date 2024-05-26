import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export const Chart = ({ data }) => {
  const processedData = data.map((entry) => ({
    name: entry.Overhead,
    Jan: entry.Jan,
    Feb: entry.Feb,
    March: entry.March,
    April: entry.April,
    May: entry.May,
    June: entry.June,
    July: entry.July,
    August: entry.August,
    September: entry.September,
    October: entry.October,
    November: entry.November,
    December: entry.December,
  }));

  return (
    <BarChart width={600} height={300} data={processedData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Jan" fill="#8884d8" />
      <Bar dataKey="Feb" fill="#82ca9d" />
      <Bar dataKey="March" fill="#ffc658" />
      <Bar dataKey="April" fill="#ff7300" />
      <Bar dataKey="May" fill="#d0ed57" />
      <Bar dataKey="June" fill="#a4de6c" />
      <Bar dataKey="July" fill="#82ca9d" />
      <Bar dataKey="August" fill="#8884d8" />
      <Bar dataKey="September" fill="#ffc658" />
      <Bar dataKey="October" fill="#ff7300" />
      <Bar dataKey="November" fill="#d0ed57" />
      <Bar dataKey="December" fill="#a4de6c" />
    </BarChart>
  );
};
