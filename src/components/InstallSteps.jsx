export default function InstallSteps() {
  return (
    <section id="install" className="py-20 bg-ui-background scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-3xl sm:text-4xl font-display font-bold text-ui-text mb-4">
            Cara Install MAXIMUS
          </h3>
          <p className="text-lg text-ui-muted max-w-2xl mx-auto">
            Install MAXIMUS sebagai aplikasi di HP Anda untuk pengalaman terbaik
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Android Chrome */}
          <div className="bg-ui-surface border border-ui-border rounded-ui-xl p-8 shadow-ui-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-ui-lg bg-ui-success-soft text-ui-success flex items-center justify-center">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.523 15.341c-.766-.746-1.39-1.098-1.39-3.063 0-1.965.624-3.193 1.39-3.94.766-.746.955-1.25.955-2.42 0-1.17-.189-1.674-.955-2.42C16.757 2.752 16.133 2.4 16.133.435h-2.276c0 1.965-.624 3.193-1.39 3.94-.766.746-.955 1.25-.955 2.42 0 1.17.189 1.674.955 2.42.766.746 1.39 1.975 1.39 3.94 0 1.965-.624 3.317-1.39 4.063-.766.746-.955 1.25-.955 2.42v.01h2.276c0-1.965.624-3.193 1.39-3.94.766-.746.955-1.25.955-2.42 0-1.17-.189-1.674-.955-2.42z"/>
                </svg>
              </div>
              <h4 className="text-2xl font-display font-bold text-ui-text">
                Android (Chrome)
              </h4>
            </div>
            <ol className="space-y-4 text-ui-text">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-ui-primary text-white flex items-center justify-center text-sm font-semibold">1</span>
                <span>Buka <strong>https://maximus-beta.vercel.app/</strong> di Chrome</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-ui-primary text-white flex items-center justify-center text-sm font-semibold">2</span>
                <span>Tap ikon <strong>⋮</strong> (tiga titik) di pojok kanan atas</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-ui-primary text-white flex items-center justify-center text-sm font-semibold">3</span>
                <span>Pilih <strong>"Install app"</strong> atau <strong>"Tambahkan ke layar utama"</strong></span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-ui-primary text-white flex items-center justify-center text-sm font-semibold">4</span>
                <span>Konfirmasi, ikon MAXIMUS akan muncul di home screen</span>
              </li>
            </ol>
          </div>

          {/* iPhone Safari */}
          <div className="bg-ui-surface border border-ui-border rounded-ui-xl p-8 shadow-ui-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-ui-lg bg-ui-info-soft text-ui-info flex items-center justify-center">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                </svg>
              </div>
              <h4 className="text-2xl font-display font-bold text-ui-text">
                iPhone (Safari)
              </h4>
            </div>
            <ol className="space-y-4 text-ui-text">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-ui-primary text-white flex items-center justify-center text-sm font-semibold">1</span>
                <span>Buka <strong>https://maximus-beta.vercel.app/</strong> di Safari</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-ui-primary text-white flex items-center justify-center text-sm font-semibold">2</span>
                <span>Tap ikon <strong>Share</strong> (kotak dengan panah ke atas) di bawah</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-ui-primary text-white flex items-center justify-center text-sm font-semibold">3</span>
                <span>Scroll ke bawah, pilih <strong>"Add to Home Screen"</strong></span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-ui-primary text-white flex items-center justify-center text-sm font-semibold">4</span>
                <span>Tap <strong>"Add"</strong>, ikon MAXIMUS siap digunakan</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
