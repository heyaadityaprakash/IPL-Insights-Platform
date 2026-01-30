import { useEffect, useState } from 'react';
import api from '../api/client';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export default function Stats() {
  const [batting, setBatting] = useState([]);
  const [season, setSeason] = useState(2022);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    api
      .get(`/stats/batting/top?season=${season}&limit=10`)
      .then((res) => setBatting(res.data.data))
      .finally(() => setLoading(false));
  }, [season]);

  if (loading) {
    return <div className="text-center mt-10">Loading stats…</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <h1 className="text-3xl font-bold">
          IPL Batting Insights
        </h1>


       
      </div>

      {/* CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* LEFT: TABLE */}
        <div className="bg-white rounded-2xl shadow overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="p-3 text-left w-12"></th>
                <th className="p-3 text-left">Player</th>
                <th className="p-3 text-center">Runs</th>
                <th className="p-3 text-center">Avg</th>
                <th className="p-3 text-center">SR</th>
              </tr>
            </thead>

            <tbody>
              {batting.map((row, index) => (
                <tr
                  key={row.id}
                  className={`
                    border-t
                    ${index === 0 ? 'bg-blue-50 font-semibold' : 'hover:bg-gray-50'}
                  `}
                >
                  {/* RANK */}
                  <td className="p-3 text-gray-500">
                    {index + 1}
                  </td>

                  {/* PLAYER + LOGO */}
                  <td className="p-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={row.team?.logoUrl}
                        alt=""
                        className="h-6 w-6 object-contain"
                      />
                      <span className="whitespace-nowrap">
                        {row.player.name}
                      </span>
                    </div>
                  </td>

                  <td className="text-center">{row.runs}</td>
                  <td className="text-center">{row.average}</td>
                  <td className="text-center">{row.strikeRate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* RIGHT: CHART */}
        <div className="bg-white rounded-2xl shadow p-4 flex flex-col items-center">
          <h2 className="text-lg font-semibold mb-4">
            Runs Distribution
          </h2>

          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={batting}>
              <XAxis hide />
              <YAxis />
              <Tooltip />
              <Bar
                dataKey="runs"
                fill="#1e3a8a"
                radius={[6, 6, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
