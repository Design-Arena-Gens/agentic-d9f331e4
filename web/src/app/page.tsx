import Link from "next/link";

type Destination = {
  name: string;
  region: string;
  description: string;
  price: string;
  duration: string;
  image: string;
  badge?: string;
};

type Hotel = {
  name: string;
  location: string;
  rating: number;
  reviews: number;
  price: string;
  image: string;
  perks: string[];
};

type Experience = {
  title: string;
  description: string;
  image: string;
  duration: string;
};

type Insight = {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
};

const destinations: Destination[] = [
  {
    name: "Santorini Escape",
    region: "Cyclades, Greece",
    description: "Sunset sails, volcanic beaches, and cliffside suites.",
    price: "From $1,280",
    duration: "8d / 7n",
    image:
      "https://images.unsplash.com/photo-1526481280695-3c46977c7c87?auto=format&fit=crop&w=1600&q=80",
    badge: "Editors' Choice",
  },
  {
    name: "Kyoto Heritage",
    region: "Honshu, Japan",
    description: "Tea ceremonies, bamboo forests, and hidden ryokans.",
    price: "From $2,050",
    duration: "10d / 9n",
    image:
      "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1600&q=80",
  },
  {
    name: "Patagonia Trails",
    region: "Torres del Paine, Chile",
    description: "Glacial hikes, eco-lodges, and expert-led expeditions.",
    price: "From $3,480",
    duration: "12d / 11n",
    image:
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=1600&q=80",
    badge: "New",
  },
];

const hotels: Hotel[] = [
  {
    name: "The Azure Reef Residences",
    location: "Maldives",
    rating: 4.9,
    reviews: 1821,
    price: "$980/night",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80",
    perks: ["Overwater villa", "Private butler", "Sunset tasting menu"],
  },
  {
    name: "Alba Riad & Spa",
    location: "Marrakech, Morocco",
    rating: 4.8,
    reviews: 964,
    price: "$420/night",
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1600&q=80",
    perks: ["Rooftop pool", "Hammam access", "Guided medina tours"],
  },
  {
    name: "Aurora Ridge Lodge",
    location: "Tromsø, Norway",
    rating: 4.7,
    reviews: 713,
    price: "$540/night",
    image:
      "https://images.unsplash.com/photo-1516542076529-1ea3854896e1?auto=format&fit=crop&w=1600&q=80",
    perks: ["Glass igloos", "Northern lights wake-up", "Sauna ritual"],
  },
];

const curatedExperiences: Experience[] = [
  {
    title: "Napa Valley Sommelier Table",
    description:
      "Behind-the-cellar tastings with third-generation winemakers and farm-to-table pairings.",
    duration: "48 hours",
    image:
      "https://images.unsplash.com/photo-1543248939-ff40856f65d4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Sailing the Amalfi Horizon",
    description:
      "Private skipper-led coastline hop featuring pastel harbors, limoncello ateliers, and coastal hikes.",
    duration: "5 days",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Namib Desert Star Camp",
    description:
      "Astronomer-guided stargazing, hot air sunrise, and conservation-focused dune safaris.",
    duration: "72 hours",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  },
];

const travelInsights: Insight[] = [
  {
    title: "2025 Luxury Getaway Index",
    excerpt:
      "Explore destinations where design-forward stays meet immersive local culture without compromise.",
    category: "Trend Report",
    readTime: "8 min read",
  },
  {
    title: "Inside Kyoto's Hidden Machiya",
    excerpt:
      "How traditional townhouses are being reimagined for slow travel seekers and culinary purists.",
    category: "City Guide",
    readTime: "6 min read",
  },
  {
    title: "Wellness Over Water",
    excerpt:
      "10 restorative retreats that combine biophilic architecture with blue mind therapy.",
    category: "Wellness",
    readTime: "5 min read",
  },
];

const stats = [
  { label: "Curated escapes", value: "180+" },
  { label: "Partnered hotels", value: "620" },
  { label: "Global travel curators", value: "48" },
  { label: "Guest satisfaction", value: "98%" },
];

const testimonials = [
  {
    name: "Ivy Nakamura",
    role: "Product Lead, Helio Labs",
    quote:
      "Every detail felt choreographed—private transfers, hidden tasting rooms, even the perfect sunrise hike. Aeris set a new benchmark.",
  },
  {
    name: "Marcelo Duarte",
    role: "Photographer & Storyteller",
    quote:
      "Their Patagonia itinerary balanced epic trails with intimate storytelling workshops. I came home with a portfolio and lifelong friends.",
  },
  {
    name: "Chloé Ferrand",
    role: "Founder, The Atelier Edit",
    quote:
      "From tailor-made concept stores in Kyoto to a moonlit tea ceremony, Aeris knows how to blend craft, culture, and comfort.",
  },
];

const partners = [
  "Aman",
  "Six Senses",
  "Belmond",
  "Four Seasons",
  "Habitas",
  "Edition Hotels",
];

const navItems = [
  { label: "Destinations", href: "#destinations" },
  { label: "Stays", href: "#stays" },
  { label: "Experiences", href: "#experiences" },
  { label: "Journal", href: "#journal" },
];

function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M5 12h14m-6-6 6 6-6 6"
      />
    </svg>
  );
}

function SparklesIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 3.75 10.5 7.5 14.25 9 10.5 10.5 9 14.25 7.5 10.5 3.75 9 7.5 7.5 9 3.75Zm9.75 6L19.125 11.25 21 12l-1.875.75L18.75 15l-.75-2.25L16.5 12l1.5-.75.75-2.25ZM5.25 15l.75 1.5 1.5.75-1.5.75-.75 1.5-.75-1.5-1.5-.75 1.5-.75.75-1.5Z"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 pb-24 pt-10 md:px-10 lg:px-14">
      <div className="glass-panel relative mt-4 flex flex-col gap-12 overflow-hidden rounded-3xl bg-white/90 px-8 pb-10 pt-8 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.4)] md:pt-10 lg:px-12">
        <div className="absolute -right-36 -top-28 h-64 w-64 rounded-full bg-gradient-to-br from-sky-300/40 to-emerald-200/60 blur-3xl" />
        <header className="relative z-10 flex flex-col items-center justify-between gap-6 md:flex-row md:gap-10">
          <div className="flex items-center gap-2 text-slate-700">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-900 text-white">
              AV
            </span>
            <div className="flex flex-col">
              <span className="text-base font-semibold tracking-wide">
                Aeris Voyages
              </span>
              <span className="text-xs uppercase tracking-[0.4em] text-slate-500">
                travel studio
              </span>
            </div>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-slate-500 md:justify-end">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-full px-5 py-2 transition-colors hover:bg-slate-900 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#consultation"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800"
            >
              Start Planning
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </nav>
        </header>

        <section className="relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-7">
            <div className="inline-flex items-center gap-3 rounded-full border border-slate-200/80 bg-white/50 px-5 py-2 text-sm font-medium text-slate-600 shadow-sm">
              <SparklesIcon className="h-4 w-4 text-sky-500" />
              Design-led journeys for curious travelers
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
              Travel & hotel booking reimagined for modern explorers.
            </h1>
            <p className="max-w-xl text-lg text-slate-600">
              Aeris curates considered itineraries, boutique hotels, and
              immersive cultural experiences. Plan within minutes, travel with a
              dedicated concierge, and stay where design meets authenticity.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <Link
                href="#destinations"
                className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-200 transition hover:bg-sky-600"
              >
                Explore destinations
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link
                href="#stays"
                className="text-sm font-semibold text-slate-700 underline-offset-4 hover:text-slate-900 hover:underline"
              >
                Discover signature stays
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-slate-500">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-xl font-semibold text-slate-900">
                    {stat.value}
                  </span>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel relative flex flex-col gap-6 rounded-2xl bg-white/70 p-6 shadow-xl">
            <div className="absolute -left-28 -top-32 h-56 w-56 rounded-full bg-emerald-200/40 blur-3xl" />
            <h2 className="text-base font-semibold text-slate-900">
              Craft your next escape
            </h2>
            <form className="grid gap-4 text-sm text-slate-500">
              <label className="flex flex-col gap-1.5">
                <span>Where to?</span>
                <input
                  type="text"
                  placeholder="Try Cyclades, Kyoto, Patagonia..."
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 shadow-sm outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                />
              </label>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-1.5">
                  <span>Check in</span>
                  <input
                    type="date"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 shadow-sm outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                  />
                </label>
                <label className="flex flex-col gap-1.5">
                  <span>Check out</span>
                  <input
                    type="date"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 shadow-sm outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                  />
                </label>
              </div>
              <label className="flex flex-col gap-1.5">
                <span>Travel style</span>
                <select className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 shadow-sm outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100">
                  <option>Design hotels & spas</option>
                  <option>Epic landscapes & hikes</option>
                  <option>Culinary discoveries</option>
                  <option>Family escapes</option>
                  <option>Honeymoon & celebration</option>
                </select>
              </label>
              <button
                type="submit"
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-200 transition hover:bg-emerald-600"
              >
                Preview tailored journeys
                <ArrowRightIcon className="h-4 w-4" />
              </button>
            </form>
            <p className="text-xs text-slate-400">
              100% carbon offset companion + personal travel concierge on every
              escape.
            </p>
          </div>
        </section>
      </div>

      <section
        id="destinations"
        className="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr]"
      >
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
            Curated Destinations
          </div>
          <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
            Hand-picked journeys that tell unforgettable stories.
          </h2>
          <p className="max-w-lg text-base text-slate-600">
            Explore places designed for sensory seekers—from cliffside suites to
            desert observatories. Each itinerary unlocks private previews, local
            tastemakers, and bespoke moments.
          </p>
          <Link
            href="#consultation"
            className="inline-flex items-center gap-2 text-sm font-semibold text-sky-600 underline-offset-6 transition hover:text-sky-700 hover:underline"
          >
            Plan a complimentary discovery call
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {destinations.map((destination) => (
            <article
              key={destination.name}
              className="group relative overflow-hidden rounded-3xl border border-white/60 bg-white shadow-[0_24px_60px_-30px_rgba(15,23,42,0.45)]"
            >
              <div
                className="h-48 w-full bg-cover bg-center transition duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${destination.image})` }}
              />
              <div className="space-y-4 px-6 py-6">
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                  <span>{destination.region}</span>
                  <span>{destination.duration}</span>
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-semibold text-slate-900">
                    {destination.name}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {destination.description}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-900">
                    {destination.price}
                  </span>
                  <span className="text-xs font-medium text-slate-400">
                    Remote concierge included
                  </span>
                </div>
              </div>
              {destination.badge && (
                <span className="absolute left-5 top-5 inline-flex items-center rounded-full bg-white/90 px-4 py-1 text-xs font-semibold text-slate-600 shadow-sm">
                  {destination.badge}
                </span>
              )}
            </article>
          ))}
        </div>
      </section>

      <section id="stays" className="space-y-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
              Signature Stays
            </div>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900 md:text-4xl">
              Boutique hotels crafted for elevated downtime.
            </h2>
          </div>
          <p className="max-w-2xl text-base text-slate-600">
            Enjoy flexible check-in, private experiences, and in-suite rituals
            in every Aeris partner property. Book instantly or sync with your
            itinerary concierge.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {hotels.map((hotel) => (
            <article
              key={hotel.name}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/70 bg-white/80 shadow-[0_24px_60px_-28px_rgba(15,23,42,0.45)] transition hover:-translate-y-1 hover:shadow-[0_30px_70px_-32px_rgba(12,74,110,0.45)]"
            >
              <div
                className="h-48 w-full bg-cover bg-center transition duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${hotel.image})` }}
              />
              <div className="flex flex-1 flex-col gap-5 px-6 py-6">
                <header className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      {hotel.name}
                    </h3>
                    <p className="text-sm text-slate-500">{hotel.location}</p>
                  </div>
                  <div className="flex flex-col items-end text-sm text-slate-600">
                    <span className="font-semibold text-slate-900">
                      {hotel.price}
                    </span>
                    <span>
                      {hotel.rating.toFixed(1)} ★ · {hotel.reviews.toLocaleString()} reviews
                    </span>
                  </div>
                </header>
                <ul className="space-y-2 text-sm text-slate-500">
                  {hotel.perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-2">
                      <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      {perk}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex items-center justify-between border-t border-slate-200 pt-4 text-sm">
                  <span className="font-semibold text-slate-700">
                    Reserve with concierge
                  </span>
                  <ArrowRightIcon className="h-4 w-4 text-slate-400 transition group-hover:text-slate-600" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="experiences"
        className="glass-panel relative rounded-3xl bg-white/85 px-8 py-12 shadow-[0_40px_120px_-60px_rgba(8,47,73,0.55)] lg:px-12"
      >
        <div className="absolute -left-20 -top-16 h-56 w-56 rounded-full bg-sky-200/50 blur-3xl" />
        <div className="absolute -bottom-24 right-16 h-64 w-64 rounded-full bg-emerald-200/50 blur-3xl" />
        <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
              Immersive Experiences
            </div>
            <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
              Feel the world differently with insider-only moments.
            </h2>
            <p className="text-base text-slate-600">
              From private cellar doors to desert astronomy camps, Aeris curators
              craft experiences that balance contrast—serene mornings with
              unforgettable evenings.
            </p>
            <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.32em] text-slate-400">
              <span>Slow Travel</span>
              <span>Culinary Residencies</span>
              <span>Design Itineraries</span>
              <span>Wellness Retreats</span>
            </div>
          </div>
          <div className="grid flex-1 gap-5 md:grid-cols-3">
            {curatedExperiences.map((experience) => (
              <article
                key={experience.title}
                className="group relative overflow-hidden rounded-3xl border border-white/60 bg-white shadow-[0_20px_60px_-30px_rgba(8,47,73,0.4)]"
              >
                <div
                  className="h-40 w-full bg-cover bg-center transition duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${experience.image})` }}
                />
                <div className="space-y-3 px-5 py-6">
                  <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                    <span>{experience.duration}</span>
                    <span>Hosted</span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {experience.title}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {experience.description}
                  </p>
                  <Link
                    href="#consultation"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700"
                  >
                    Request access
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="journal"
        className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"
      >
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
            Travel Journal
          </div>
          <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
            Inspiration, itineraries, and design-forward travel intelligence.
          </h2>
          <p className="max-w-xl text-base text-slate-600">
            Weekly dispatches from our global curators featuring emerging design
            stays, chef collaborations, and mindful travel rituals.
          </p>
          <form className="flex w-full max-w-md items-center gap-3">
            <input
              type="email"
              placeholder="Join 42k explorers—drop your email"
              className="flex-1 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 shadow-sm outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
            >
              Subscribe
              <ArrowRightIcon className="h-4 w-4" />
            </button>
          </form>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {travelInsights.map((insight) => (
            <article
              key={insight.title}
              className="flex flex-col gap-4 rounded-3xl border border-slate-200/70 bg-white p-6 shadow-[0_20px_50px_-28px_rgba(15,23,42,0.45)]"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                {insight.category}
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                {insight.title}
              </h3>
              <p className="text-sm text-slate-600">{insight.excerpt}</p>
              <div className="mt-auto flex items-center justify-between text-xs font-medium text-slate-400">
                <span>{insight.readTime}</span>
                <Link
                  href="#"
                  className="inline-flex items-center gap-1 text-slate-600 hover:text-slate-900"
                >
                  Read story
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="glass-panel relative rounded-3xl px-8 py-12 shadow-[0_40px_120px_-60px_rgba(8,47,73,0.5)] lg:px-12">
        <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-sky-200/50 blur-[120px]" />
        <div className="relative z-10 grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
              Guest Stories
            </div>
            <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
              Trusted by creatives, founders, and mindful travelers.
            </h2>
            <p className="max-w-xl text-base text-slate-600">
              A global community designing the way they explore next—one
              thoughtfully crafted journey at a time.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {testimonials.map((testimonial) => (
                <blockquote
                  key={testimonial.name}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-white/60 bg-white p-6 text-sm text-slate-600 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.45)]"
                >
                  <p className="text-sm leading-relaxed">{`“${testimonial.quote}”`}</p>
                  <footer className="mt-auto">
                    <span className="text-sm font-semibold text-slate-900">
                      {testimonial.name}
                    </span>
                    <div className="text-xs text-slate-400">
                      {testimonial.role}
                    </div>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-12">
            <div className="rounded-3xl border border-white/70 bg-white/80 p-6 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.45)]">
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
                Strategic Partners
              </h3>
              <div className="mt-6 grid grid-cols-2 gap-6 text-base font-semibold text-slate-600 md:grid-cols-3">
                {partners.map((partner) => (
                  <span key={partner} className="uppercase tracking-[0.18em]">
                    {partner}
                  </span>
                ))}
              </div>
            </div>
            <div
              id="consultation"
              className="relative overflow-hidden rounded-3xl border border-white/80 bg-slate-900 text-white"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.45),transparent)]" />
              <div className="relative flex flex-col gap-6 px-8 py-10">
                <h3 className="text-2xl font-semibold">
                  Your journey architect awaits.
                </h3>
                <p className="text-sm text-slate-200">
                  Book a 20-minute consultation to align on style, pace, and
                  dream destinations. Receive a bespoke proposal within 48 hours.
                </p>
                <div className="flex flex-wrap gap-4 text-xs tracking-[0.28em] text-slate-300">
                  <span>Itinerary blueprint</span>
                  <span>Hotel shortlist</span>
                  <span>Local tastemakers</span>
                </div>
                <Link
                  href="#"
                  className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                >
                  Schedule a consultation
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="flex flex-col gap-8 rounded-3xl border border-slate-200/80 bg-white/80 px-8 py-12 text-sm text-slate-500 shadow-[0_24px_60px_-35px_rgba(15,23,42,0.4)] md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col gap-3">
          <span className="text-lg font-semibold text-slate-900">
            Aeris Voyages
          </span>
          <p className="max-w-sm">
            Conscious travel design studio crafting modern getaways with
            elevated hospitality, local storytellers, and mindful pacing.
          </p>
          <span className="text-xs uppercase tracking-[0.3em] text-slate-400">
            © {new Date().getFullYear()} Aeris Studio. All rights reserved.
          </span>
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-[0.32em] text-slate-400">
              Discover
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#destinations" className="hover:text-slate-900">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="#stays" className="hover:text-slate-900">
                  Stays
                </Link>
              </li>
              <li>
                <Link href="#experiences" className="hover:text-slate-900">
                  Experiences
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-[0.32em] text-slate-400">
              Resources
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#journal" className="hover:text-slate-900">
                  Journal
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-slate-900">
                  Travel Insurance
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-slate-900">
                  Sustainability
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-[0.32em] text-slate-400">
              Connect
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-slate-900">
                  Concierge
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-slate-900">
                  Partnerships
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-slate-900">
                  Press
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
}
