export default function HeroNew() {
  const scrollToPainPoints = () => {
    const painPointsSection = document.getElementById('pain-points');
    if (painPointsSection) {
      painPointsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-ui-surface to-ui-background py-16 sm:py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left space-y-6 animate-fade-in">
          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-ui-text leading-tight">
            <span className="text-ui-primary">Sampurasun, Kang!</span> Kumaha, orderan lancar jaya hari ini? ☕
          </h2>

          {/* Subhead */}
          <p className="text-base sm:text-lg text-ui-text-muted leading-relaxed">
            Narik di Bandung emang penuh tantangan. Dari macet Kircon sampe akun yang tiba-tiba <strong className="text-ui-text">"tiris"</strong> alias anyep.
          </p>

          {/* Tap to scroll CTA */}
          <div className="pt-4">
            <button
              onClick={scrollToPainPoints}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-ui-lg bg-ui-primary/10 hover:bg-ui-primary/20 text-ui-primary border-2 border-ui-primary/30 hover:border-ui-primary transition-all hover:-translate-y-0.5 group"
            >
              <span className="font-medium">Tap untuk lanjut</span>
              <svg className="w-5 h-5 transform group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
