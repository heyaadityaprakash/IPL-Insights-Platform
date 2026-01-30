import { useEffect, useState } from 'react';
import api from '../api/client';

export default function Standings() {
  const [data, setData] = useState([]);
  const [season, setSeason] = useState(2022);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    api
      .get(`/standings?season=${season}`)
      .then((res) => setData(res.data.data))
      .finally(() => setLoading(false));
  }, [season]);

  if (loading) {
    return <div className="text-center mt-10">Loading standings…</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <h1 className="text-3xl font-bold">
          IPL Standings
        </h1>

      </div>

      {/* TABLE CARD */}
      <div className="bg-white rounded-2xl shadow overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="p-3 text-left w-12">#</th>
              <th className="p-3 text-left">Team</th>
              <th className="p-3 text-center">Played</th>
              <th className="p-3 text-center">Won</th>
              <th className="p-3 text-center">Lost</th>
              <th className="p-3 text-center">Points</th>
              <th className="p-3 text-center">NRR</th>
            </tr>
          </thead>

          <tbody>
            {data.map((row, index) => (
              <tr
                key={row.id}
                className={`
                  border-t
                  ${index < 3 ? 'bg-blue-50 font-medium' : 'hover:bg-gray-50'}
                `}
              >
                {/* RANK */}
                <td className="p-3 text-gray-500">
                  {index + 1}
                </td>

                {/* TEAM */}
                <td className="p-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={row.team.logoUrl}
                      alt={row.team.name}
                      className="h-5 w-5 object-contain"
                    />
                    <span className="whitespace-nowrap">
                      {row.team.name}
                    </span>
                  </div>
                </td>

                <td className="text-center">{row.played}</td>
                <td className="text-center">{row.wins}</td>
                <td className="text-center">{row.losses}</td>

                {/* POINTS HIGHLIGHT */}
                <td className="text-center font-semibold text-blue-700">
                  {row.points}
                </td>

                <td className="text-center">
                  {row.netRunRate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
