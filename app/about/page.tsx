"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";

/* ─── Data ─────────────────────────────────────────────── */

const stats = [
  { value: "15+", label: "Years of Excellence", suffix: "" },
  { value: "50K+", label: "Farmers Served", suffix: "" },
  { value: "3", label: "Product Categories", suffix: "" },
  { value: "100%", label: "Quality Assured", suffix: "" },
];

const values = [
  {
    icon: "🌾",
    title: "Quality First",
    body: "Every batch is lab-tested against strict nutritional benchmarks before it reaches your farm.",
    accent: "#d4a843",
  },
  {
    icon: "🔬",
    title: "Science-Backed",
    body: "Our formulations are developed by veterinary nutritionists using the latest livestock research.",
    accent: "#c0392b",
  },
  {
    icon: "🤝",
    title: "Farmer-Centric",
    body: "We work alongside farmers, listening to field realities and adapting our products accordingly.",
    accent: "#d4a843",
  },
  {
    icon: "🌱",
    title: "Sustainable",
    body: "Responsible sourcing and eco-conscious manufacturing guide every decision we make.",
    accent: "#c0392b",
  },
];

const timeline = [
  {
    year: "2009",
    event: "Founded in Dhaka with a single poultry feed line.",
    icon: "🏭",
  },
  {
    year: "2013",
    event: "Expanded into cattle nutrition; opened second plant.",
    icon: "🐄",
  },
  {
    year: "2017",
    event: "Launched aquaculture feed range for fish farmers.",
    icon: "🐟",
  },
  {
    year: "2021",
    event: "Achieved ISO 22000 food-safety certification.",
    icon: "🏆",
  },
  {
    year: "2024",
    event: "Serving 50,000+ farms across Bangladesh.",
    icon: "🌾",
  },
];

/* ─── Animated Counter ──────────────────────────────────── */
function AnimatedCounter({ value }: { value: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;
    const num = parseInt(value.replace(/\D/g, ""));
    const suffix = value.replace(/[0-9]/g, "");
    let start = 0;
    const duration = 1800;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * num) + suffix);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, value]);

  return <span ref={ref}>{display}</span>;
}

/* ─── Reveal wrapper ───────────────────────────────────── */
function Reveal({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right";
}) {
  const variants = {
    up: { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } },
    left: { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } },
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      variants={variants[direction]}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Main Page ─────────────────────────────────────────── */
export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <main
      style={{
        fontFamily: "'Playfair Display', Georgia, serif",
        background: "#0d0a07",
      }}
      className="overflow-x-hidden"
    >
      {/* ── Fonts & Global Styles ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,700&family=Outfit:wght@200;300;400;500;600&display=swap');

        :root {
          --gold: #d4a843;
          --red: #c0392b;
          --red-light: #e05040;
          --cream: #f5ede0;
          --dark: #0d0a07;
          --dark-2: #1a1108;
          --dark-3: #251808;
        }

        .outfit { font-family: 'Outfit', sans-serif; }

        .noise-bg::before {
          content: '';
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 9999;
          opacity: 0.028;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 160px;
        }

        .gold-text { color: var(--gold); }
        .red-text { color: var(--red); }

        .stat-card:hover .stat-line { width: 100%; }

        .value-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: radial-gradient(circle at 50% 0%, rgba(212,168,67,0.08), transparent 70%);
          opacity: 0;
          transition: opacity 0.5s;
        }
        .value-card:hover::before { opacity: 1; }

        .timeline-line {
          background: linear-gradient(180deg, transparent, var(--gold) 20%, var(--gold) 80%, transparent);
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-14px) rotate(2deg); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .shimmer-text {
          background: linear-gradient(90deg, var(--gold) 0%, #fff8e7 40%, var(--gold) 60%, #fff 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 4s linear infinite;
        }
        .float-slow { animation: float 7s ease-in-out infinite; }
        .float-mid { animation: float 5s ease-in-out infinite 1s; }

        .hero-grid {
          background-image:
            linear-gradient(rgba(212,168,67,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212,168,67,0.06) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        .chairman-img-wrap::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: linear-gradient(160deg, transparent 50%, rgba(192,57,43,0.5) 100%);
        }

        .section-divider {
          background: linear-gradient(90deg, transparent, var(--gold), transparent);
          height: 1px;
          width: 100%;
          opacity: 0.25;
        }
      `}</style>

      <div className="noise-bg" />

      {/* ══════════════════════════════════════
          HERO  — Full-bleed cinematic
      ══════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden bg-[#0d0a07]"
      >
        {/* Background layers */}
        <motion.div
          className="absolute inset-0"
          style={{ y: heroY, scale: heroScale }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#2a1505] via-[#1a0d03] to-[#0d0a07]" />
          <div className="absolute inset-0 hero-grid opacity-100" />
          {/* Orbs */}
          <div
            className="absolute top-[15%] left-[10%] w-[500px] h-[500px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(192,57,43,0.18) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
          <div
            className="absolute bottom-[10%] right-[5%] w-[600px] h-[600px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(212,168,67,0.12) 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />
          <div
            className="absolute top-[40%] right-[30%] w-[300px] h-[300px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(192,57,43,0.1) 0%, transparent 70%)",
              filter: "blur(50px)",
            }}
          />
        </motion.div>

        {/* Diagonal accent line */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute -left-20 top-0 bottom-0 w-1 opacity-20"
            style={{
              background:
                "linear-gradient(180deg, transparent, var(--gold) 30%, var(--gold) 70%, transparent)",
              transform: "rotate(8deg) translateX(180px)",
            }}
          />
          <div
            className="absolute -left-20 top-0 bottom-0 w-px opacity-10"
            style={{
              background:
                "linear-gradient(180deg, transparent, var(--gold) 30%, var(--gold) 70%, transparent)",
              transform: "rotate(8deg) translateX(250px)",
            }}
          />
        </div>

        <motion.div
          className="relative z-10 w-full max-w-7xl mx-auto px-8 py-32 pt-40"
          style={{ opacity: heroOpacity }}
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="flex items-center gap-3 mb-8"
              >
                <div className="h-px w-10 bg-[var(--gold)]" />
                <span className="outfit text-[var(--gold)] text-[11px] tracking-[0.4em] uppercase font-medium">
                  Est. 2009 · Dhaka, Bangladesh
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.35,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-white text-6xl lg:text-8xl font-black leading-[0.95] tracking-tight"
              >
                Nourishing
                <br />
                <span className="shimmer-text">Farms,</span>
                <br />
                <span className="italic font-normal text-5xl lg:text-7xl text-white/70">
                  Building{" "}
                </span>
                <span className="text-[var(--red-light)] italic font-normal text-5xl lg:text-7xl">
                  Bangladesh.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="outfit mt-8 text-white/50 text-base max-w-lg leading-relaxed font-light"
              >
                SA Agro Feed is a trusted manufacturer of premium livestock and
                aquaculture nutrition — helping farmers across Bangladesh raise
                healthier animals and build more profitable farms.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.1 }}
                className="mt-10 flex gap-4 flex-wrap"
              >
                <a
                  href="/products"
                  className="outfit inline-flex items-center gap-2 bg-[var(--red)] hover:bg-[var(--red-light)] text-white text-sm font-semibold px-7 py-4 transition-all duration-300 hover:gap-4 hover:shadow-[0_0_40px_rgba(192,57,43,0.4)]"
                >
                  Explore Products <span>→</span>
                </a>
                <a
                  href="/contact"
                  className="outfit inline-flex items-center gap-2 border border-white/15 hover:border-[var(--gold)]/50 text-white/70 hover:text-[var(--gold)] text-sm font-medium px-7 py-4 transition-all duration-300"
                >
                  Contact Us
                </a>
              </motion.div>
            </div>

            {/* Right: floating badge composition */}
            <div className="relative h-[480px] hidden lg:block">
              {/* Central monogram */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="relative w-64 h-64">
                  {/* Rotating ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 rounded-full border border-[var(--gold)]/20"
                    style={{ borderStyle: "dashed" }}
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-4 rounded-full border border-[var(--red)]/15"
                    style={{ borderStyle: "dashed" }}
                  />
                  {/* Core */}
                  <div className="absolute inset-8 rounded-full bg-gradient-to-br from-[#2a1505] to-[#1a0d03] border border-[var(--gold)]/20 flex items-center justify-center shadow-[0_0_60px_rgba(212,168,67,0.15)] overflow-hidden">
                    <img
                      src="/images.jpg"
                      alt="SA Agro Feed"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Floating cards */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="float-slow absolute top-12 right-0 bg-[#1a1108]/90 backdrop-blur-sm border border-[var(--gold)]/20 rounded-2xl p-5 w-44"
              >
                <p className="outfit text-[var(--gold)] text-3xl font-bold">
                  50K+
                </p>
                <p className="outfit text-white/50 text-xs mt-1 leading-tight">
                  Farmers Across Bangladesh
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1, duration: 0.8 }}
                className="float-mid absolute bottom-20 left-0 bg-[var(--red)]/90 backdrop-blur-sm rounded-2xl p-5 w-40"
              >
                <p className="outfit text-white text-3xl font-bold">ISO</p>
                <p className="outfit text-white/70 text-xs mt-1">
                  22000 Certified
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="float-slow absolute bottom-4 right-8 bg-[#1a1108]/90 backdrop-blur-sm border border-white/10 rounded-2xl p-5 w-48"
              >
                <p className="outfit text-white/40 text-[10px] uppercase tracking-widest mb-2">
                  Est.
                </p>
                <p className="text-3xl font-black text-white">2009</p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center pt-2"
          >
            <div className="w-1 h-2 bg-[var(--gold)] rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════
          STATS BAR
      ══════════════════════════════════════ */}
      <section className="relative bg-[var(--dark-2)] py-16 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(192,57,43,0.15) 50%, transparent)",
          }}
        />
        <div className="absolute top-0 left-0 right-0 section-divider" />
        <div className="absolute bottom-0 left-0 right-0 section-divider" />

        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.1}>
                <div className="stat-card relative text-center py-8 px-6 group">
                  {/* Vertical divider */}
                  {i < 3 && (
                    <div className="hidden md:block absolute right-0 top-6 bottom-6 w-px bg-white/8" />
                  )}

                  <p
                    className="text-5xl font-black text-white mb-2"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    <AnimatedCounter value={s.value} />
                  </p>
                  <p className="outfit text-white/40 text-xs tracking-[0.2em] uppercase font-medium">
                    {s.label}
                  </p>
                  <div className="stat-line mt-4 h-0.5 w-0 bg-gradient-to-r from-[var(--red)] to-[var(--gold)] mx-auto transition-all duration-700 ease-out" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CHAIRMAN MESSAGE
      ══════════════════════════════════════ */}
      <section className="py-32 bg-[#0d0a07] relative overflow-hidden">
        {/* Background orbs */}
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, var(--gold), transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        <div className="max-w-6xl mx-auto px-8">
          {/* Section label */}
          <Reveal>
            <div className="flex items-center gap-4 mb-16">
              <div className="h-px flex-1 max-w-16 bg-[var(--gold)]/30" />
              <span className="outfit text-[var(--gold)] text-[11px] tracking-[0.35em] uppercase font-medium">
                Chairman's Message
              </span>
              <div className="h-px flex-1 bg-[var(--gold)]/30" />
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-5 gap-16 items-center">
            {/* Image — 2 cols */}
            <Reveal direction="left" className="lg:col-span-2">
              <div className="relative">
                {/* Decorative frame */}
                <div className="absolute -top-4 -left-4 w-full h-full border border-[var(--gold)]/20 rounded-2xl" />
                <div className="absolute -bottom-4 -right-4 w-full h-full border border-[var(--red)]/20 rounded-2xl" />

                <div className="chairman-img-wrap relative rounded-2xl overflow-hidden aspect-[3/4]">
                  <img
                    src="/chairman1.webp"
                    alt="MD. Salahuddin Ahmed"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback if image doesn't load
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      const parent = target.parentElement!;
                      parent.style.background =
                        "linear-gradient(135deg, #2a1505, #1a0d03)";
                      parent.innerHTML =
                        '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;"><span style="font-size:80px;font-weight:900;color:rgba(212,168,67,0.3)">MD</span></div>';
                    }}
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0a07]/80 via-transparent to-transparent" />
                </div>

                {/* Name badge */}
                <div className="absolute -bottom-6 -right-4 bg-[var(--dark-2)] border border-[var(--gold)]/20 rounded-xl p-4 shadow-2xl">
                  <p className="outfit text-[var(--gold)] text-xs uppercase tracking-widest font-semibold">
                    Founder & Chairman
                  </p>
                  <p className="text-white font-bold text-sm mt-0.5">
                    MD. Salahuddin Ahmed
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Content — 3 cols */}
            <Reveal direction="right" delay={0.15} className="lg:col-span-3">
              <div className="space-y-8">
                {/* Giant quote mark */}
                <div
                  className="text-[var(--gold)]/15 leading-none select-none"
                  style={{
                    fontSize: "120px",
                    fontFamily: "Georgia, serif",
                    lineHeight: 0.8,
                    marginBottom: "0px",
                  }}
                >
                  "
                </div>

                <blockquote
                  className="text-2xl lg:text-3xl font-semibold text-white/90 leading-snug italic"
                  style={{ marginTop: 0 }}
                >
                  Our journey began with a simple mission: to bridge the gap
                  between farmers and quality nutrition with trust. Today, SA
                  Agro Feed stands as a symbol of reliability.
                </blockquote>

                <p className="outfit text-white/40 text-base leading-relaxed font-light">
                  In an era of rapid agricultural advancement, we are constantly
                  evolving our science-backed formulations. Our commitment
                  remains the same — to deliver not just feed, but promises that
                  every farmer can count on.
                </p>

                {/* Signature area */}
                <div className="pt-8 border-t border-white/8 flex items-center gap-6">
                  <div>
                    <p className="text-xl font-bold text-[var(--gold)] tracking-wide uppercase">
                      MD. Salahuddin Ahmed
                    </p>
                    <p className="outfit text-white/35 text-xs tracking-[0.2em] uppercase font-medium mt-1">
                      Founder & Chairman, SA Agro Feed
                    </p>
                  </div>
                  <div className="flex-1 h-px bg-gradient-to-r from-[var(--gold)]/20 to-transparent" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          WHO WE ARE
      ══════════════════════════════════════ */}
      <section className="py-32 bg-[var(--dark-2)] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 section-divider" />
        {/* Texture dots */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, var(--gold) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left */}
            <Reveal direction="left">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-8 bg-[var(--gold)]" />
                  <span className="outfit text-[var(--gold)] text-[11px] tracking-[0.3em] uppercase font-medium">
                    Who We Are
                  </span>
                </div>
                <h2 className="text-5xl lg:text-6xl font-black text-white leading-[0.95] tracking-tight">
                  More Than Feed.
                  <br />
                  <span className="italic text-[var(--red-light)] font-normal text-4xl lg:text-5xl">
                    A Farming Partner.
                  </span>
                </h2>

                <div className="mt-8 space-y-5 outfit">
                  <p className="text-white/50 leading-relaxed font-light text-[15px]">
                    Founded in 2009 in Dhaka, SA Agro Feed began with a single
                    conviction: Bangladesh's farmers deserved access to
                    scientifically formulated animal nutrition — homegrown
                    expertise tailored to local conditions.
                  </p>
                  <p className="text-white/50 leading-relaxed font-light text-[15px]">
                    Over fifteen years we've grown into one of the region's most
                    trusted agro-feed manufacturers, supplying poultry, cattle,
                    and fish farmers with feed that genuinely performs.
                  </p>
                </div>

                {/* Pull quote */}
                <div className="mt-10 relative pl-6">
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--gold)] to-[var(--red)]" />
                  <p className="text-lg font-semibold text-white italic leading-snug">
                    "When the farmer wins, Bangladesh wins."
                  </p>
                  <p className="outfit text-white/30 text-sm mt-2 font-light">
                    — Founder, SA Agro Feed
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Right: Feature grid */}
            <Reveal direction="right" delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: "🏭",
                    label: "2 Manufacturing Plants",
                    desc: "State-of-the-art production",
                  },
                  {
                    icon: "🧪",
                    label: "In-house Lab Testing",
                    desc: "Every batch verified",
                  },
                  {
                    icon: "📦",
                    label: "3 Product Lines",
                    desc: "Poultry, Cattle, Aqua",
                  },
                  {
                    icon: "🏆",
                    label: "ISO 22000 Certified",
                    desc: "International standards",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.3, duration: 0.6 }}
                    whileHover={{ y: -4, borderColor: "rgba(212,168,67,0.4)" }}
                    className="bg-[#0d0a07]/80 border border-white/8 rounded-2xl p-6 cursor-default transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
                  >
                    <span className="text-3xl">{item.icon}</span>
                    <p className="text-white font-bold text-sm mt-4 mb-1">
                      {item.label}
                    </p>
                    <p className="outfit text-white/35 text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CORE VALUES
      ══════════════════════════════════════ */}
      <section className="py-32 bg-[#0d0a07] relative overflow-hidden">
        {/* Ambient glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-8"
          style={{
            background:
              "radial-gradient(ellipse, rgba(192,57,43,0.2), transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        <div className="max-w-7xl mx-auto px-8">
          <Reveal className="text-center mb-20">
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="h-px w-12 bg-[var(--gold)]/40" />
              <span className="outfit text-[var(--gold)] text-[11px] tracking-[0.35em] uppercase font-medium">
                What Drives Us
              </span>
              <div className="h-px w-12 bg-[var(--gold)]/40" />
            </div>
            <h2 className="text-5xl font-black text-white tracking-tight">
              Our Core Values
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="value-card relative bg-gradient-to-b from-white/[0.05] to-white/[0.02] border border-white/8 hover:border-[var(--gold)]/30 rounded-3xl p-8 overflow-hidden transition-colors duration-400 cursor-default"
                >
                  {/* Top accent line */}
                  <div
                    className="absolute top-0 left-6 right-6 h-px"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${v.accent}40, transparent)`,
                    }}
                  />

                  <div className="text-4xl mb-6">{v.icon}</div>
                  <h3 className="text-white font-bold text-lg mb-3 tracking-tight">
                    {v.title}
                  </h3>
                  <p className="outfit text-white/40 text-sm leading-relaxed font-light">
                    {v.body}
                  </p>

                  {/* Bottom hover line */}
                  <div
                    className="mt-8 h-px w-0 group-hover:w-full transition-all duration-700"
                    style={{
                      background: `linear-gradient(90deg, ${v.accent}, transparent)`,
                    }}
                  />
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TIMELINE — Redesigned
      ══════════════════════════════════════ */}
      <section className="py-32 bg-[var(--dark-2)] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 section-divider" />

        <div className="max-w-4xl mx-auto px-8">
          <Reveal className="text-center mb-20">
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="h-px w-12 bg-[var(--gold)]/40" />
              <span className="outfit text-[var(--gold)] text-[11px] tracking-[0.35em] uppercase font-medium">
                Our Journey
              </span>
              <div className="h-px w-12 bg-[var(--gold)]/40" />
            </div>
            <h2 className="text-5xl font-black text-white tracking-tight">
              15 Years of Growth
            </h2>
          </Reveal>

          <div className="relative">
            {/* Central vertical line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px timeline-line" />

            <div className="space-y-0">
              {timeline.map((t, i) => (
                <Reveal key={t.year} delay={i * 0.1}>
                  <div
                    className={`relative flex items-center gap-8 ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"} mb-0`}
                  >
                    {/* Content card */}
                    <motion.div
                      whileHover={{
                        scale: 1.02,
                        borderColor: "rgba(212,168,67,0.4)",
                      }}
                      transition={{ duration: 0.25 }}
                      className={`flex-1 bg-[#0d0a07] border border-white/8 rounded-2xl p-6 ${i % 2 === 0 ? "text-right" : "text-left"} mb-10 cursor-default transition-colors duration-300`}
                    >
                      <div
                        className={`flex items-center gap-3 mb-3 ${i % 2 === 0 ? "justify-end" : "justify-start"}`}
                      >
                        <span className="text-xl">{t.icon}</span>
                        <span className="outfit text-[var(--gold)] font-bold text-sm tracking-widest">
                          {t.year}
                        </span>
                      </div>
                      <p className="outfit text-white/60 text-sm leading-relaxed font-light">
                        {t.event}
                      </p>
                    </motion.div>

                    {/* Center dot */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-5 h-5 rounded-full bg-[var(--dark-2)] border-2 border-[var(--gold)] shadow-[0_0_20px_rgba(212,168,67,0.3)]" />
                    </div>

                    {/* Spacer */}
                    <div className="flex-1 mb-10" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA BANNER — Premium redesign
      ══════════════════════════════════════ */}
      <section className="relative py-32 overflow-hidden bg-[#0d0a07]">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--red)]/90 via-[#8b1a13] to-[#3a0a07]" />
        <div className="absolute inset-0 hero-grid opacity-20" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 100%)",
          }}
        />

        {/* Floating orbs */}
        <div
          className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, var(--gold), transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, white, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
          <Reveal>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-12 bg-white/30" />
              <span className="outfit text-white/60 text-[11px] tracking-[0.35em] uppercase font-medium">
                Get Started
              </span>
              <div className="h-px w-12 bg-white/30" />
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-white leading-[0.95] tracking-tight mb-6">
              Ready to Grow with
              <br />
              <span className="text-[var(--gold)]">SA Agro Feed?</span>
            </h2>
            <p className="outfit mt-4 text-white/60 text-base font-light max-w-xl mx-auto leading-relaxed">
              Explore our full range of poultry, cattle, and fish feed — or get
              in touch for a consultation tailored to your farm.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/products"
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 40px rgba(255,255,255,0.2)",
                }}
                whileTap={{ scale: 0.98 }}
                className="outfit inline-flex items-center justify-center gap-2 bg-white text-[var(--red)] font-bold text-sm px-10 py-4 transition-all duration-300 hover:gap-4 rounded-sm"
              >
                Browse Products <span>→</span>
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{
                  scale: 1.03,
                  backgroundColor: "rgba(255,255,255,0.1)",
                }}
                whileTap={{ scale: 0.98 }}
                className="outfit inline-flex items-center justify-center gap-2 border border-white/30 text-white font-medium text-sm px-10 py-4 transition-all duration-300 rounded-sm"
              >
                Contact Our Team
              </motion.a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
