import { PieChart, Pie, Label, Cell, Tooltip } from "recharts";

const Chart = ({ monthlyPayment, totalInterest }) => {
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  const data = [
    { name: "Monthly Payment", students: monthlyPayment },
    { name: "Total Interest", students: totalInterest },
  ];

  return (
    <PieChart width={300} height={300}>
      <Pie
        data={data}
        dataKey="students"
        outerRadius={150}
        innerRadius={90}
        fill="rgba(59,130,246,1)"
      >
        <Label
          value={Math.round(totalInterest).toLocaleString()}
          position="centerBottom"
          className="label-top"
          fontSize="27px"
        />
        <Label value="Total Interest" position="centerTop" className="label" />
        {data.map((entry, index) => (
          <Cell key={entry + index} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};
export default Chart;
