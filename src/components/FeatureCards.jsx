export default function FeatureCards() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
      emoji: '🗺️',
      title: 'Anti Kukurilingan Teu Puguh',
      description: 'Pernah nggak, Kang? Udah melipir jauh dari Cibiru ke tengah kota, eh ternyata zonk sepi orderan? Bensin abis, tenaga kebuang. Di aplikasi ini ada fitur **Peta Hotspot**. Canggihnya, ini bisa dipake biarpun sinyal lagi bapuk atau kuota lagi sekarat (offline). Jadi Akang tau kudu ngetem di mana tanpa harus buang bensin muter-muter nggak jelas.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      emoji: '⭐',
      title: 'Jaga Akun Biar Tetep "Gacor"',
      description: 'Urusan rating mah sensitif pisan, Kang. Salah dikit, anyepnya bisa berhari-hari. Di sini Akang bisa pantau **Kesehatan Akun** secara *real-time*. Kalau performa mulai turun, aplikasinya bakal ngasih tau kudu ngapain biar balik lagi jadi akun "Prioritas". Biar dapur tetep ngebul, Kang.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
      emoji: '💬',
      title: 'Template Chat Sat-Set Wat-Wet',
      description: 'Lagi ribet pake sarung tangan atau lagi neduh pas hujan, males banget kan kalau kudu ngetik panjang lebar? Saya siapin **Script Chat Template**. Tinggal klik *copy*, terus kirim. Isinya udah diset sopan kayak "Ditunggu sesuai titik ya Teh/A". Praktis, *customer* senang, Akang juga tenang.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      emoji: '🚨',
      title: 'Tombol Darurat (Amit-Amit Jabang Bayi)',
      description: 'Kita tau Bandung kalau udah malem kadang suka rawan. Keamanan Akang itu nomor satu. Saya pasang fitur **Emergency Contact**. Kalau (amit-amit) ada kejadian nggak enak di jalan, tinggal satu klik buat ngubungin keluarga atau kawan basecamp terdekat.'
    }
  ];

  return (
    <section className="py-20 bg-ui-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-3xl sm:text-4xl font-display font-bold text-ui-text mb-4">
            Fitur Andalan
          </h3>
          <p className="text-lg text-ui-text-muted max-w-2xl mx-auto">
            Dirancang khusus buat nemenin Akang di jalan, biar narik lebih tenang
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-ui-surface border border-ui-border rounded-ui-2xl p-8 shadow-ui-sm hover:shadow-ui-lg transition-all duration-300 hover:-translate-y-1"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-ui-lg bg-ui-primary-soft text-ui-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <span className="text-3xl" role="img" aria-label={feature.title}>
                  {feature.emoji}
                </span>
              </div>
              <h4 className="text-xl font-bold text-ui-text mb-3">
                {feature.title}
              </h4>
              <p className="text-ui-text-muted leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
