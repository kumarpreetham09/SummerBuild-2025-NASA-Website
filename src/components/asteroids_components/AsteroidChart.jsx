import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

function AsteroidChart({ data, getDangerLevel, sortMode }) {
  return (
    <div className="asteroid_chart">
      <ResponsiveContainer width="100%" height={400}>
        <BarChart 
          data={data}
          margin={{ top: 10, right: 10, bottom: 70, left: 40 }}
        >
          <XAxis 
            dataKey="name"
            interval={0}
            angle={-60}
            textAnchor="end"
            label={{ 
              value: "Asteroid Name", 
              position: "insideBottom", 
              offset: -65, 
              fill: 'white', 
              fontSize: 14 
            }}
            tick={{ fill: 'white', fontSize: 10 }}
          />
          <YAxis 
            label={{ 
              value: sortMode === "size" ? "Diameter (meters)" : "Distance (km)", 
              angle: -90, 
              position: "insideLeft", 
              offset: -30, 
              fill: 'white', 
              fontSize: 14 
            }}
            tick={{ fill: 'white', fontSize: 12 }}
          />
          <Tooltip 
            formatter={(value) => sortMode === "size" 
              ? [`${value.toFixed(1)} m`, "Diameter"] 
              : [`${parseFloat(value).toLocaleString()} km`, "Distance"]} 
          />
          <Bar dataKey="value">
            {data.map((entry, index) => {
              const { color } = getDangerLevel(entry.size);
              return <Cell key={index} fill={color} />;
            })}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AsteroidChart;
