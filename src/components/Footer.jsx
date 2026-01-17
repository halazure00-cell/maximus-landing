export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ui-surface border-t border-ui-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-display font-bold text-ui-primary mb-3">
              MAXIMUS
            </h3>
            <p className="text-ui-muted text-sm leading-relaxed">
              Aplikasi keuangan offline-first untuk driver. Kelola pendapatan dan pengeluaran dengan mudah.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-ui-text mb-3">
              Tautan Cepat
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://maximus-beta.vercel.app/" className="text-ui-muted hover:text-ui-primary transition-colors">
                  Buka Aplikasi
                </a>
              </li>
              <li>
                <a href="#install" className="text-ui-muted hover:text-ui-primary transition-colors">
                  Cara Install
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-ui-text mb-3">
              Kontak
            </h4>
            <p className="text-ui-muted text-sm">
              <a
                href="https://wa.me/6285953937946?text=Halo%20MAXIMUS%2C%20saya%20butuh%20bantuan.%20%0A%0A%28Tulis%20kendala%20Anda%20di%20sini%29"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ui-primary transition-colors"
              >
                WhatsApp Support
              </a>
            </p>
            <p className="text-ui-muted text-sm mt-2">
              Versi: v1.1.0
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-ui-border pt-8 text-center text-sm text-ui-muted">
          <p>© {currentYear} MAXIMUS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
