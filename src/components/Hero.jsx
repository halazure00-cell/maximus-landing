export default function Hero() {
  const whatsappUrl = "https://wa.me/6285953937946?text=Halo%20Admin%2C%20saya%20tertarik%20dengan%20aplikasi%20MAXXIS.%20Boleh%20minta%20info%20lebih%20lanjut%3F";

  return (
    <section className="relative bg-gradient-to-b from-ui-surface to-ui-background py-16 sm:py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left space-y-6 animate-fade-in">
          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-ui-text leading-tight">
            <span className="text-ui-primary">Sampurasun, Kang!</span> Kumaha, orderan lancar jaya hari ini? ☕
          </h2>

          {/* Story Content */}
          <div className="space-y-4 text-base sm:text-lg text-ui-text-muted leading-relaxed">
            <p>
              Saya mau cerita dikit, <em>sharing</em> sesama pejuang aspal. Kita sama-sama tau, narik di Bandung mah tantangannya ada-ada aja. Mulai dari macetnya lampu merah Kircon yang kayak nunggu jodoh, hujan yang turun tiba-tiba, sampe yang paling bikin pusing: <strong className="text-ui-text">akun yang tiba-tiba "tiris" alias anyep.</strong>
            </p>
            <p>
              Nah, daripada bingung, saya bikin aplikasi ini khusus buat nemenin Akang di jalan. Anggap aja ini <em>kenek</em> digital biar Akang kerjanya lebih enteng.
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-ui-lg bg-ui-primary hover:bg-ui-primary-hover text-gray-900 text-lg font-semibold shadow-ui-md transition-all hover:shadow-ui-lg hover:-translate-y-0.5"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat Admin Sekarang
            </a>
          </div>

          {/* Trust Badge */}
          <div className="pt-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-ui-xl bg-ui-success-soft text-ui-success text-sm font-medium border border-ui-success/20">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Support 24/7 via WhatsApp • Dibuat Khusus untuk Driver Bandung
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
