import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const cards = [
    {
      title: 'Teams',
      description: 'Explore all IPL teams',
      path: '/teams',
      icon: '🏏',
      bg: 'from-blue-500 to-blue-700',
    },
    {
      title: 'Standings',
      description: 'Points table & rankings',
      path: '/standings',
      icon: '📊',
      bg: 'from-emerald-500 to-emerald-700',
    },
    {
      title: 'Stats',
      description: 'Batting & bowling insights',
      path: '/stats',
      icon: '📈',
      bg: 'from-purple-500 to-purple-700',
    },
  ];

  return (
    <div className="min-h-[calc(100vh-56px)] flex items-center justify-center bg-gray-50">
      <div className="max-w-6xl w-full px-6">
        {/* HERO */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-3">
            IPL Insights
          </h1>
          <p className="text-gray-600">
            Explore teams, standings, and in-depth IPL analytics
          </p>
        </div>

        {/* NAVIGATION CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.title}
              onClick={() => navigate(card.path)}
              className={`
                cursor-pointer
                rounded-2xl
                p-6
                text-white
                bg-gradient-to-br ${card.bg}
                shadow-lg
                transform
                hover:-translate-y-1
                hover:shadow-2xl
                transition
                flex
                flex-col
                justify-between
                min-h-[200px]
              `}
            >
              <div className="text-5xl">
                {card.icon}
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-1">
                  {card.title}
                </h2>
                <p className="text-sm opacity-90">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
