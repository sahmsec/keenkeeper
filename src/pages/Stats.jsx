import { useTimeline } from "../context/TimelineContext"; // ✅ FIXED PATH
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Stats = () => {
  const { timeline } = useTimeline();

  const callCount = timeline.filter(t => t.type === "call").length;
  const textCount = timeline.filter(t => t.type === "text").length;
  const videoCount = timeline.filter(t => t.type === "video").length;

  const data = [
    { name: "Text", value: textCount },
    { name: "Call", value: callCount },
    { name: "Video", value: videoCount },
  ];

  const COLORS = ["#7C3AED", "#244D3F", "#22C55E"];

  return (
    <div className="p-6 w-full">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl font-bold mb-6">
          Friendship Analytics
        </h1>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          
          <h2 className="text-left text-gray-600 mb-4 font-bold">
            By Interaction Type
          </h2>

          <div className="flex justify-center">
            <ResponsiveContainer width={300} height={300}>
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  innerRadius={70}
                  outerRadius={100}
                  paddingAngle={5}
                >
                  {data.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index]} />
                  ))}
                </Pie>

                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="flex justify-center gap-6 mt-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#7C3AED]"></span>
              Text
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#244D3F]"></span>
              Call
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#22C55E]"></span>
              Video
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Stats;