import { useState, useEffect, useRef } from 'react';

export default function ProofSection() {
  const [stats, setStats] = useState({ drivers: 0, orders: 0, rating: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);
  const [currentTestimoni, setCurrentTestimoni] = useState(0);

  const targetStats = {
    drivers: 500,
    orders: 10000,
    rating: 4.8
  };

  const testimonials = [
    {
      text: 'Sejak pake app ini, akun gw jadi lebih sehat. Nggak keliling zonk lagi.',
      author: 'Bang Asep',
      location: 'Driver Dago'
    },
    {
      text: 'Fitur tracker keuangan bikin gw tau persis kemana duit. Mantap!',
      author: 'Kang Dedi',
      location: 'Driver Cihampelas'
    },
    {
      text: 'Hotspot AI-nya akurat banget. Langsung tau mana area yang lagi rame.',
      author: 'Aa Yusuf',
      location: 'Driver Cicadas'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          animateStats();
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateStats = () => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setStats({
        drivers: Math.floor(targetStats.drivers * progress),
        orders: Math.floor(targetStats.orders * progress),
        rating: parseFloat((targetStats.rating * progress).toFixed(1))
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        setStats(targetStats);
      }
    }, stepDuration);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimoni((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToTestimoni = (index) => {
    setCurrentTestimoni(index);
  };

  return (
    <section ref={sectionRef} className="py-20 bg-ui-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl sm:text-4xl font-display font-bold text-ui-text mb-4">
            Dipercaya Driver Bandung
          </h3>
          <p className="text-lg text-ui-text-muted max-w-2xl mx-auto">
            Bergabung dengan ratusan driver yang sudah narik lebih tenang
          </p>
        </div>

        {/* Stats Counter */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-ui-background rounded-ui-2xl border border-ui-border">
            <div className="text-4xl sm:text-5xl font-display font-bold text-ui-primary mb-2">
              {stats.drivers}+
            </div>
            <div className="text-ui-text font-medium">Driver Aktif</div>
          </div>

          <div className="text-center p-6 bg-ui-background rounded-ui-2xl border border-ui-border">
            <div className="text-4xl sm:text-5xl font-display font-bold text-ui-primary mb-2">
              {stats.orders.toLocaleString()}+
            </div>
            <div className="text-ui-text font-medium">Order Ditrack</div>
          </div>

          <div className="text-center p-6 bg-ui-background rounded-ui-2xl border border-ui-border">
            <div className="text-4xl sm:text-5xl font-display font-bold text-ui-primary mb-2">
              {stats.rating}★
            </div>
            <div className="text-ui-text font-medium">Rating App</div>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-ui-background border-2 border-ui-primary/20 rounded-ui-2xl p-8 sm:p-12 shadow-ui-lg overflow-hidden">
            {/* Quote icon */}
            <div className="absolute top-6 left-6 text-ui-primary/20 text-6xl font-serif">"</div>

            {/* Testimonial content */}
            <div className="relative z-10 min-h-[120px] flex items-center justify-center">
              <div className="text-center animate-fade-in" key={currentTestimoni}>
                <p className="text-lg sm:text-xl text-ui-text mb-6 italic leading-relaxed">
                  "{testimonials[currentTestimoni].text}"
                </p>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-10 h-10 bg-ui-primary rounded-full flex items-center justify-center text-gray-900 font-bold text-lg">
                    {testimonials[currentTestimoni].author.charAt(0)}
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-ui-text">
                      {testimonials[currentTestimoni].author}
                    </div>
                    <div className="text-sm text-ui-text-muted">
                      {testimonials[currentTestimoni].location}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimoni(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimoni
                      ? 'bg-ui-primary w-8'
                      : 'bg-ui-border hover:bg-ui-primary/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
