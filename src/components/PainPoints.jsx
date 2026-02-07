import { useState } from 'react';

export default function PainPoints() {
  const [flipped, setFlipped] = useState([false, false, false, false]);

  const painPoints = [
    {
      emoji: '💰',
      front: 'Rating tiba-tiba turun?',
      back: 'Akun jadi anyep, order sepi, padahal butuh cepet dapat duit'
    },
    {
      emoji: '🗺️',
      front: 'Muter-muter cari order?',
      back: 'Bensin habis, tenaga kebuang, eh ternyata zonk sepi orderan'
    },
    {
      emoji: '📊',
      front: 'Bingung uang ke mana?',
      back: 'Udah cape seharian, tapi duit nggak ketahuan benerannya berapa'
    },
    {
      emoji: '🚨',
      front: 'Takut situasi genting?',
      back: 'Kalau ada masalah, susah minta bantuan cepat'
    }
  ];

  const handleFlip = (index) => {
    const newFlipped = [...flipped];
    newFlipped[index] = !newFlipped[index];
    setFlipped(newFlipped);
  };

  return (
    <section id="pain-points" className="py-20 bg-ui-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl sm:text-4xl font-display font-bold text-ui-text mb-4">
            Masalah Yang Sering Dialami Driver
          </h3>
          <p className="text-lg text-ui-text-muted max-w-2xl mx-auto mb-2">
            Narik di Bandung emang nggak gampang. Ini masalah yang paling sering bikin pusing:
          </p>
          <p className="text-sm text-ui-primary font-medium">
            💡 Tap kartu untuk lihat detail
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {painPoints.map((pain, index) => (
            <div
              key={index}
              className="flip-card h-64 cursor-pointer"
              onClick={() => handleFlip(index)}
            >
              <div className={`flip-card-inner ${flipped[index] ? 'flipped' : ''}`}>
                {/* Front */}
                <div className="flip-card-front bg-ui-background border-2 border-ui-border rounded-ui-2xl p-8 flex flex-col items-center justify-center text-center shadow-ui-md hover:shadow-ui-lg transition-shadow">
                  <div className="text-5xl mb-4">{pain.emoji}</div>
                  <h4 className="text-xl font-bold text-ui-text mb-2">
                    {pain.front}
                  </h4>
                  <p className="text-sm text-ui-text-muted mt-4 opacity-60">
                    Tap untuk flip →
                  </p>
                </div>

                {/* Back */}
                <div className="flip-card-back bg-gradient-to-br from-ui-primary/20 to-ui-primary/5 border-2 border-ui-primary rounded-ui-2xl p-8 flex flex-col items-center justify-center text-center shadow-ui-md">
                  <div className="text-4xl mb-4">{pain.emoji}</div>
                  <p className="text-lg text-ui-text leading-relaxed font-medium">
                    {pain.back}
                  </p>
                  <p className="text-sm text-ui-primary mt-4 opacity-75">
                    Tap lagi untuk balik ←
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .flip-card {
          perspective: 1000px;
        }

        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }

        .flip-card-inner.flipped {
          transform: rotateY(180deg);
        }

        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        .flip-card-back {
          transform: rotateY(180deg);
        }

        /* Touch-friendly tap targets */
        @media (hover: none) {
          .flip-card {
            -webkit-tap-highlight-color: transparent;
          }
        }
      `}</style>
    </section>
  );
}
