import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/client';

export default function Teams() {
  const [teams, setTeams] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.get('/teams').then(res => setTeams(res.data.data));
  }, []);

  return (
    <div className="min-h-[calc(100vh-56px)] flex items-center">
      {/* CENTER CONTAINER */}
      <div className="w-full max-w-7xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-center mb-10">
          IPL Teams
        </h1>

        {/* GRID */}
        <div
          className="
            grid
            grid-cols-2
            lg:grid-cols-5
            gap-6
            place-items-center
          "
        >
          {teams.map(team => (
            <div
              key={team.id}
              onClick={() => navigate(`/teams/${team.id}`)}
              className="
                cursor-pointer
                w-full
                max-w-[180px]
                aspect-square
                rounded-2xl
                bg-white
                shadow
                hover:shadow-xl
                hover:-translate-y-1
                transition
                flex
                flex-col
                items-center
                justify-center
                p-4
              "
            >
              {/* LOGO */}
              <img
                src={team.logoUrl}
                alt={team.name}
                className="h-16 w-16 object-contain mb-4"
              />

              {/* NAME */}
              <div className="text-center font-semibold text-sm leading-tight">
                {team.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
