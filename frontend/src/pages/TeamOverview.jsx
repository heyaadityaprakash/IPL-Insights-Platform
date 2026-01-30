import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api/client';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export default function TeamOverview() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get(`/teams/${id}/overview`)
      .then(res => setData(res.data))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="text-center mt-10">Loading…</div>;
  if (!data) return <div className="text-center mt-10">No data found</div>;

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* HEADER */}
      <div className="flex items-center gap-5 mb-10">
        <img
          src={data.team.logoUrl}
          alt={data.team.name}
          className="h-16 w-16 object-contain"
        />
        <div>
          <h1 className="text-3xl font-bold leading-tight">
            {data.team.name}
          </h1>
          <p className="text-sm text-gray-500">
            Team performance overview
          </p>
        </div>
      </div>

      {/* CHARTS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* TOP RUN SCORERS */}
        <div className="bg-white rounded-2xl shadow p-4">
          <h2 className="text-lg font-semibold mb-3 text-center">
            Top Run Scorers
          </h2>
          <div className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data.battingLeaders}>
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

        {/* TOP WICKET TAKERS */}
        <div className="bg-white rounded-2xl shadow p-4">
          <h2 className="text-lg font-semibold mb-3 text-center">
            Top Wicket Takers
          </h2>
          <div className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data.bowlingLeaders}>
                <XAxis hide />
                <YAxis />
                <Tooltip />
                <Bar
                  dataKey="wickets"
                  fill="#1e3a8a"
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* STRIKE RATE */}
        <div className="bg-white rounded-2xl shadow p-4">
          <h2 className="text-lg font-semibold mb-3 text-center">
            Strike Rate
          </h2>
          <div className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data.battingLeaders}>
                <XAxis hide />
                <YAxis />
                <Tooltip />
                <Bar
                  dataKey="strikeRate"
                  fill="#1e3a8a"
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* ECONOMY */}
        <div className="bg-white rounded-2xl shadow p-4">
          <h2 className="text-lg font-semibold mb-3 text-center">
            Economy Rate
          </h2>
          <div className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data.bowlingLeaders}>
                <XAxis hide />
                <YAxis />
                <Tooltip />
                <Bar
                  dataKey="economy"
                  fill="#1e3a8a"
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
