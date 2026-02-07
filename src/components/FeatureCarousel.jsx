import { useState } from 'react';

export default function FeatureCarousel() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const features = [
    {
      icon: '🎯',
      title: 'AI Hotspot Cerdas',
      headline: 'Nggak Usah Keliling Cari Hotspot Ramai',
      benefits: [
        'Peta AI prediksi demand real-time dengan heatmap',
        'Lihat area panas order (demand density)',
        'Rekomendasi rute berdasarkan history',
        'Offline-capable - bisa dipake tanpa internet',
        'AI scoring 520-point algorithm'
      ]
    },
    {
      icon: '📊',
      title: 'Tracker Keuangan Harian',
      headline: 'Tau Persis Berapa Duit Masuk & Keluar',
      benefits: [
        'Input order & pengeluaran cepat (tap-tap aja)',
        'Otomatis hitung net income (gross - commission - expenses)',
        'Rekap harian, mingguan, bulanan',
        'Deteksi gap income (order yang lupa dicatat)',
        'Export laporan buat share'
      ]
    },
    {
      icon: '⚡',
      title: 'Monitor Kesehatan Akun',
      headline: 'Jaga Akun Tetep Sehat, Rating Tetep Gacor',
      benefits: [
        'Pantau rating & acceptance rate real-time',
        'Notifikasi kalau performa turun',
        'Tips actionable untuk naikin rating',
        'Target harian (order, rating, earnings)',
        'Dashboard performa lengkap'
      ]
    },
    {
      icon: '🚨',
      title: 'Tombol Darurat GPS',
      headline: 'Situasi Genting? Langsung Kirim Lokasi',
      benefits: [
        'Satu tap langsung share lokasi GPS ke WhatsApp',
        'Info safety tips berdasarkan area',
        'Emergency contacts tersimpan',
        'Panic button always accessible'
      ]
    },
    {
      icon: '⭐',
      title: 'Tips Bintang 5',
      headline: 'Template Chat Siap Pakai Buat Jaga Rating',
      benefits: [
        'Copy-paste chat template profesional',
        'Checklist service quality',
        'Reminder courtesy (salam, konfirmasi, minta rating)',
        'Gamified checklist'
      ]
    }
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-ui-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl sm:text-4xl font-display font-bold text-ui-text mb-4">
            Solusi Lengkap untuk Driver Bandung
          </h3>
          <p className="text-lg text-ui-text-muted max-w-2xl mx-auto mb-2">
            Fitur-fitur yang dirancang khusus untuk bantu Akang narik lebih tenang
          </p>
          <p className="text-sm text-ui-primary font-medium">
            👉 Swipe atau scroll untuk lihat semua fitur
          </p>
        </div>

        {/* Horizontal scrollable container */}
        <div className="relative">
          <div className="overflow-x-auto pb-6 -mx-4 px-4 hide-scrollbar">
            <div className="flex gap-6 snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-3 md:snap-none">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[85vw] sm:w-96 md:w-auto snap-start"
                >
                  <div className="h-full bg-ui-surface border-2 border-ui-border rounded-ui-2xl p-6 shadow-ui-md hover:shadow-ui-lg transition-all duration-300 hover:-translate-y-1">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-4xl">{feature.icon}</div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-ui-text mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-ui-primary font-medium">
                          {feature.headline}
                        </p>
                      </div>
                    </div>

                    {/* Expandable benefits */}
                    <div className={`overflow-hidden transition-all duration-300 ${expandedIndex === index ? 'max-h-96' : 'max-h-24'}`}>
                      <ul className="space-y-2 text-sm text-ui-text-muted">
                        {feature.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <svg className="w-4 h-4 text-ui-success mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Toggle button */}
                    <button
                      onClick={() => toggleExpand(index)}
                      className="mt-4 w-full text-center text-sm text-ui-primary hover:text-ui-primary-hover font-medium transition-colors"
                    >
                      {expandedIndex === index ? '↑ Sembunyikan' : '↓ Lihat detail'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll indicator dots - only on mobile */}
          <div className="flex justify-center gap-2 mt-4 md:hidden">
            {features.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-ui-border"
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .hide-scrollbar {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE and Edge */
        }
        
        .hide-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
      `}</style>
    </section>
  );
}
