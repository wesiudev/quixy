"use client";
import Link from "next/link";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  PieChart,
  Pie,
} from "recharts";

const data = [
  {
    name: "Jan",
    uv: Math.floor(Math.random() * 1000),
    pv: Math.floor(Math.random() * 1000),
    amt: Math.floor(Math.random() * 1000),
  },
  {
    name: "Feb",
    uv: Math.floor(Math.random() * 1000),
    pv: Math.floor(Math.random() * 1000),
    amt: Math.floor(Math.random() * 1000),
  },
  {
    name: "Mar",
    uv: Math.floor(Math.random() * 1000),
    pv: Math.floor(Math.random() * 1000),
    amt: Math.floor(Math.random() * 1000),
  },
  {
    name: "Apr",
    uv: Math.floor(Math.random() * 1000),
    pv: Math.floor(Math.random() * 1000),
    amt: Math.floor(Math.random() * 1000),
  },
  {
    name: "May",
    uv: Math.floor(Math.random() * 1000),
    pv: Math.floor(Math.random() * 1000),
    amt: Math.floor(Math.random() * 1000),
  },
  {
    name: "Jun",
    uv: Math.floor(Math.random() * 1000),
    pv: Math.floor(Math.random() * 1000),
    amt: Math.floor(Math.random() * 1000),
  },
  {
    name: "Jul",
    uv: Math.floor(Math.random() * 1000),
    pv: Math.floor(Math.random() * 1000),
    amt: Math.floor(Math.random() * 1000),
  },
  {
    name: "Aug",
    uv: Math.floor(Math.random() * 1000),
    pv: Math.floor(Math.random() * 1000),
    amt: Math.floor(Math.random() * 1000),
  },
  {
    name: "Sep",
    uv: Math.floor(Math.random() * 1000),
    pv: Math.floor(Math.random() * 1000),
    amt: Math.floor(Math.random() * 1000),
  },
  {
    name: "Oct",
    uv: Math.floor(Math.random() * 1000),
    pv: Math.floor(Math.random() * 1000),
    amt: Math.floor(Math.random() * 1000),
  },
  {
    name: "Nov",
    uv: Math.floor(Math.random() * 1000),
    pv: Math.floor(Math.random() * 1000),
    amt: Math.floor(Math.random() * 1000),
  },
  {
    name: "Dec",
    uv: Math.floor(Math.random() * 1000),
    pv: Math.floor(Math.random() * 1000),
    amt: Math.floor(Math.random() * 1000),
  },
];

export default function Page() {
  return (
    <div className="font-coco text-white p-12 grid-cols-2 grid">
      <div className="flex flex-col">
        <h2 className="text-2xl mb-3">Ruch na stronie</h2>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </div>{" "}
      <div className="flex flex-col">
        <h2 className="text-2xl mb-3">Najlepsze strony</h2>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </div>{" "}
      <div className="flex flex-col">
        <h2 className="text-2xl mb-3">Wiek użytkowników</h2>
        <PieChart width={1000} height={500}>
          <Pie
            dataKey="amt"
            isAnimationActive={false}
            data={data}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Pie
            dataKey="amt"
            data={data}
            cx={500}
            cy={200}
            innerRadius={40}
            outerRadius={80}
            fill="#82ca9d"
          />
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
}
