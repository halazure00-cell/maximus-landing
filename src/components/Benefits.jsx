export default function Benefits() {
  const benefits = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Kerja Lebih Efisien',
      description: 'Hemat waktu dan bensin dengan peta hotspot dan template chat yang praktis'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Akun Tetap Sehat',
      description: 'Pantau kesehatan akun real-time, dapat notifikasi kalau performa mulai turun'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: 'Keamanan Terjamin',
      description: 'Fitur tombol darurat untuk situasi genting, keluarga langsung tahu lokasi Akang'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: 'Support 24/7',
      description: 'Admin siap bantu via WhatsApp kapan aja, ada masalah langsung direspon'
    }
  ];

  return (
    <section className="py-20 bg-ui-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-3xl sm:text-4xl font-display font-bold text-ui-text mb-4">
            Kenapa Harus MAXXIS?
          </h3>
          <p className="text-lg text-ui-text-muted max-w-2xl mx-auto">
            Lebih dari sekedar aplikasi, ini mitra setia Akang di jalan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-ui-xl bg-ui-background border border-ui-border hover:border-ui-primary transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-ui-lg bg-ui-primary text-gray-900 flex items-center justify-center">
                {benefit.icon}
              </div>
              <h4 className="text-lg font-bold text-ui-text mb-2">
                {benefit.title}
              </h4>
              <p className="text-sm text-ui-text-muted leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
