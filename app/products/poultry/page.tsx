"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const poultryProducts = [
  {
    name: "Broiler Starter Feed",
    type: "Broiler",
    age: "Day 1-10",
    protein: "22-24%",
    energy: "3000-3100 kcal/kg",
    price: "৳2,200 per 50kg bag",
    description:
      "High-protein starter feed for early broiler growth and development",
  },
  {
    name: "Broiler Grower Feed",
    type: "Broiler",
    age: "Day 11-24",
    protein: "20-22%",
    energy: "3100-3200 kcal/kg",
    price: "৳2,050 per 50kg bag",
    description: "Balanced nutrition for optimal broiler growth phase",
  },
  {
    name: "Broiler Finisher Feed",
    type: "Broiler",
    age: "Day 25-Market",
    protein: "18-20%",
    energy: "3200-3300 kcal/kg",
    price: "৳1,950 per 50kg bag",
    description: "Specially formulated for final growth and market preparation",
  },
  {
    name: "Layer Starter Feed",
    type: "Layer",
    age: "Day 1-6 weeks",
    protein: "20-22%",
    energy: "2800-2900 kcal/kg",
    price: "৳2,100 per 50kg bag",
    description: "Foundation nutrition for young layer chicks",
  },
  {
    name: "Layer Grower Feed",
    type: "Layer",
    age: "7-18 weeks",
    protein: "16-18%",
    energy: "2750-2850 kcal/kg",
    price: "৳1,850 per 50kg bag",
    description: "Developmental feed for growing pullets",
  },
  {
    name: "Layer Production Feed",
    type: "Layer",
    age: "19+ weeks",
    protein: "16-18%",
    energy: "2700-2800 kcal/kg",
    price: "৳1,900 per 50kg bag",
    description: "Complete nutrition for maximum egg production",
  },
];

const nutritionalBenefits = [
  {
    icon: "🐔",
    title: "Faster Growth Rate",
    description:
      "Optimized protein and amino acid profile accelerates broiler growth, achieving market weight 3-5 days earlier than standard feeds.",
  },
  {
    icon: "🥚",
    title: "Higher Egg Production",
    description:
      "Balanced calcium and vitamin D3 levels increase egg production by 10-15%, with stronger shells and better internal quality.",
  },
  {
    icon: "💪",
    title: "Better Feed Conversion",
    description:
      "Superior digestibility ensures FCR of 1.6-1.8 for broilers and efficient nutrient utilization, reducing feed costs per bird.",
  },
  {
    icon: "🛡️",
    title: "Enhanced Immunity",
    description:
      "Fortified with vitamins A, C, E and essential minerals to boost immune response and reduce disease susceptibility.",
  },
  {
    icon: "✨",
    title: "Improved Meat Quality",
    description:
      "Balanced nutrition results in better meat texture, color, and taste, commanding premium prices in the market.",
  },
  {
    icon: "🌡️",
    title: "Heat Stress Management",
    description:
      "Special formulation with electrolytes and antioxidants helps birds cope with Bangladesh's hot climate conditions.",
  },
];

const ingredients = [
  {
    name: "Yellow Corn",
    percentage: "45-50%",
    purpose: "Primary energy source",
  },
  {
    name: "Soybean Meal",
    percentage: "25-30%",
    purpose: "High-quality protein",
  },
  { name: "Rice Polish", percentage: "8-10%", purpose: "Energy and vitamins" },
  { name: "Fish Meal", percentage: "3-5%", purpose: "Animal protein source" },
  {
    name: "Vegetable Oil",
    percentage: "2-4%",
    purpose: "Energy and palatability",
  },
  {
    name: "Limestone",
    percentage: "7-9%",
    purpose: "Calcium for bones/shells",
  },
  {
    name: "DCP (Di-Calcium Phosphate)",
    percentage: "1.5-2%",
    purpose: "Phosphorus source",
  },
  {
    name: "Vitamin Premix",
    percentage: "0.25%",
    purpose: "Essential vitamins",
  },
  { name: "Mineral Premix", percentage: "0.25%", purpose: "Trace minerals" },
  {
    name: "Methionine",
    percentage: "0.15-0.2%",
    purpose: "Essential amino acid",
  },
  { name: "Lysine", percentage: "0.1-0.15%", purpose: "Essential amino acid" },
  { name: "Salt", percentage: "0.3-0.4%", purpose: "Sodium and chloride" },
  { name: "Toxin Binder", percentage: "0.1%", purpose: "Mycotoxin control" },
  {
    name: "Coccidiostat",
    percentage: "As per label",
    purpose: "Disease prevention",
  },
];

const feedingGuide = [
  {
    category: "Broiler Chicks (0-10 days)",
    amount: "10-25 grams per bird/day",
    frequency: "Ad libitum (free access)",
    water: "50-80 ml per bird/day",
    notes:
      "Provide crumble feed. Ensure continuous lighting for first 2-3 days. Temperature should be 32-35°C.",
  },
  {
    category: "Broiler Grower (11-24 days)",
    amount: "70-100 grams per bird/day",
    frequency: "Ad libitum (free access)",
    water: "150-250 ml per bird/day",
    notes:
      "Switch to pellet feed. Reduce temperature gradually to 24-27°C. Ensure proper ventilation.",
  },
  {
    category: "Broiler Finisher (25-35 days)",
    amount: "120-150 grams per bird/day",
    frequency: "Ad libitum (free access)",
    water: "300-400 ml per bird/day",
    notes:
      "Maintain temperature at 21-24°C. Withdraw coccidiostat 5-7 days before market. Adequate space required.",
  },
  {
    category: "Layer Chicks (0-6 weeks)",
    amount: "15-40 grams per bird/day",
    frequency: "Ad libitum (free access)",
    water: "50-100 ml per bird/day",
    notes:
      "Use crumble feed. Provide 23 hours light initially, then gradually reduce. Maintain brooding temperature.",
  },
  {
    category: "Layer Grower (7-18 weeks)",
    amount: "60-90 grams per bird/day",
    frequency: "2-3 times daily or ad libitum",
    water: "150-250 ml per bird/day",
    notes:
      "Control body weight carefully. Natural daylight recommended. Introduce calcium supplements gradually from week 16.",
  },
  {
    category: "Layer Production (19+ weeks)",
    amount: "110-120 grams per bird/day",
    frequency: "2-3 times daily",
    water: "250-300 ml per bird/day",
    notes:
      "Provide 16 hours light daily. Supplement with oyster shell. Monitor egg production and adjust feed accordingly.",
  },
];

const faqs = [
  {
    question: "What is the difference between broiler and layer feed?",
    answer:
      "Broiler feed contains higher protein (18-24%) and energy levels designed for rapid weight gain and muscle development. Layer feed has moderate protein (16-18%) but higher calcium (3.5-4%) for strong eggshell formation. The nutritional focus is completely different based on production goals.",
  },
  {
    question: "Can I feed broiler feed to layer birds?",
    answer:
      "Not recommended for layers in production. Broiler feed lacks sufficient calcium for egg production and has excess protein that layers don't need. However, layer grower feed can sometimes be used for meat birds at finisher stage if properly supplemented.",
  },
  {
    question: "How should I store poultry feed?",
    answer:
      "Store in a cool, dry, well-ventilated area away from direct sunlight. Use covered containers or keep bags elevated on pallets. Ideal storage temperature is below 25°C. Use feed within 30-45 days of manufacturing for best results. Protect from moisture, rodents, and insects.",
  },
  {
    question: "Why are my birds not eating the feed?",
    answer:
      "Common causes include: feed spoilage or poor quality, sudden feed changes, illness, heat stress, contaminated water, or feeder problems. Check feed freshness, introduce new feed gradually over 5-7 days, ensure clean water supply, and monitor bird health. Reduce temperature if birds appear stressed.",
  },
  {
    question: "When should I switch from starter to grower feed?",
    answer:
      "For broilers, switch to grower at day 11 and finisher at day 25. For layers, move to grower at 6 weeks and layer feed at 18-19 weeks or when first eggs appear. Always transition gradually over 3-5 days by mixing old and new feed.",
  },
  {
    question: "How can I improve feed conversion ratio (FCR)?",
    answer:
      "Maintain consistent feeding schedule, ensure fresh clean water 24/7, provide optimal temperature and ventilation, prevent feed wastage through proper feeder management, control diseases through biosecurity, avoid stress factors, and use quality feed from reliable sources.",
  },
  {
    question: "Do I need to provide supplements with your feed?",
    answer:
      "Our feed is nutritionally complete for standard conditions. However, during heat stress, consider electrolyte supplements. For layers, oyster shell or limestone grit helps. Multivitamins can benefit stressed or sick birds. Always consult a poultry nutritionist for specific situations.",
  },
  {
    question: "What causes poor eggshell quality in layers?",
    answer:
      "Main causes include insufficient calcium in feed, vitamin D3 deficiency, old hen age (over 72 weeks), heat stress, diseases affecting calcium absorption, and poor water quality. Ensure feed contains 3.5-4% calcium, provide oyster shell, and maintain proper housing conditions.",
  },
  {
    question: "Is medication included in the feed?",
    answer:
      "Our starter and grower feeds contain approved coccidiostats to prevent coccidiosis. Finisher feeds are medication-free to meet withdrawal periods. We do not include antibiotics. All medications used are approved by Bangladesh Livestock Department and follow international safety standards.",
  },
  {
    question: "How much feed do I need for 100 broilers?",
    answer:
      "Approximately 320-350 kg total feed for 100 broilers raised to 2 kg market weight over 35 days: 40kg starter, 120kg grower, and 160kg finisher. Actual consumption varies by breed, management, and environmental conditions. Always maintain 5-7 days extra feed stock.",
  },
];

export default function PoultryDetailsPage() {
  const [selectedTab, setSelectedTab] = useState("overview");
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-600 to-yellow-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold mb-4">Premium Poultry Feed</h1>
            <p className="text-xl text-orange-100 max-w-3xl">
              Scientifically formulated nutrition for broilers and layers to
              maximize growth, egg production, and profitability. The choice of
              successful poultry farmers across Bangladesh.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Image Section */}
      <section className="max-w-7xl mx-auto px-6 -mt-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          <img
            src="/images/products/paultry.jpg"
            alt="Poultry Feed"
            className="w-full h-96 object-cover"
          />
        </motion.div>
      </section>

      {/* Tab Navigation */}
      <section className="max-w-7xl mx-auto px-6 mt-12">
        <div className="bg-white rounded-xl shadow-md p-2 flex flex-wrap gap-2">
          {["overview", "products", "nutrition", "feeding", "faqs"].map(
            (tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`px-6 py-3 rounded-lg font-medium transition ${
                  selectedTab === tab
                    ? "bg-orange-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            )
          )}
        </div>
      </section>

      {/* Content Sections */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        {/* Overview Tab */}
        {selectedTab === "overview" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose Our Poultry Feed?
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Our poultry feed represents decades of research and development
                in avian nutrition. We understand the unique challenges of
                poultry farming in Bangladesh's tropical climate and have
                formulated our feeds to address heat stress, disease pressure,
                and the specific nutritional requirements of local and
                commercial poultry breeds.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Every batch undergoes rigorous quality control testing in our
                certified laboratory. We test for protein content, energy
                levels, amino acid balance, vitamin potency, mineral
                composition, and contamination. Our feeds are manufactured in a
                modern, hygienic facility using automated systems that ensure
                precise ingredient mixing and consistent pellet quality.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Whether you're raising 50 backyard layers or managing a
                50,000-bird commercial broiler farm, our comprehensive product
                range provides the right nutrition at every stage. We've helped
                thousands of farmers across Bangladesh improve their
                productivity, reduce mortality, and increase profitability.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our commitment extends beyond just selling feed. We provide
                ongoing technical support, farm visits by our poultry
                specialists, and educational resources to help you succeed. When
                you choose our feed, you're choosing a partner invested in your
                success.
              </p>
            </div>

            {/* Benefits Grid */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Key Benefits
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {nutritionalBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
                >
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Success Metrics */}
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-8 border border-orange-200 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Proven Performance Results
              </h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-600 mb-2">
                    1.65
                  </div>
                  <div className="text-gray-700 font-medium">
                    Average FCR for Broilers
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    Industry leading efficiency
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-600 mb-2">
                    290+
                  </div>
                  <div className="text-gray-700 font-medium">
                    Eggs per Layer/Year
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    Peak production performance
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-600 mb-2">
                    2.1kg
                  </div>
                  <div className="text-gray-700 font-medium">
                    Broiler Weight at 35 Days
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    Optimal market weight
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-600 mb-2">
                    &lt;3%
                  </div>
                  <div className="text-gray-700 font-medium">
                    Mortality Rate
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    With proper management
                  </div>
                </div>
              </div>
            </div>

            {/* Quality Assurance */}
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Quality Assurance & Safety Standards
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    ✓ Laboratory Certified
                  </h4>
                  <p className="text-gray-700">
                    Every batch tested for nutrient levels, mycotoxins,
                    salmonella, and heavy metals in our ISO-certified
                    laboratory.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    ✓ No Harmful Additives
                  </h4>
                  <p className="text-gray-700">
                    Free from banned antibiotics, artificial growth hormones,
                    and harmful preservatives. Only approved medications used.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    ✓ HACCP Compliant
                  </h4>
                  <p className="text-gray-700">
                    Manufacturing follows Hazard Analysis Critical Control
                    Points protocols to prevent contamination and ensure food
                    safety.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    ✓ Traceability System
                  </h4>
                  <p className="text-gray-700">
                    Each bag has a unique batch number allowing complete
                    traceability of ingredients and production date for quality
                    assurance.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    ✓ Fresh Guarantee
                  </h4>
                  <p className="text-gray-700">
                    Feed delivered within 7 days of manufacture. We maintain
                    rapid inventory turnover to ensure maximum freshness and
                    nutrient potency.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    ✓ Government Approved
                  </h4>
                  <p className="text-gray-700">
                    Licensed by Bangladesh Livestock Department. All
                    formulations meet or exceed national poultry feed standards.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Products Tab */}
        {selectedTab === "products" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Complete Poultry Feed Range
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {poultryProducts.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      {product.name}
                    </h3>
                    <span
                      className={`px-3 py-1 text-sm font-medium rounded-full ${
                        product.type === "Broiler"
                          ? "bg-orange-100 text-orange-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {product.type}
                    </span>
                  </div>

                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
                      {product.age}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4">{product.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-4 p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="text-sm text-gray-500">Protein</p>
                      <p className="font-semibold text-gray-900">
                        {product.protein}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Energy</p>
                      <p className="font-semibold text-gray-900">
                        {product.energy}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t">
                    <span className="text-2xl font-bold text-orange-600">
                      {product.price}
                    </span>
                    <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition">
                      Order Now
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mt-8">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-xl">💡</span> Feed Selection Tips
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <strong>Broilers:</strong> Use all three phases (starter,
                  grower, finisher) for optimal FCR and profitability.
                </li>
                <li>
                  <strong>Layers:</strong> Don't rush to layer feed - proper
                  grower phase ensures better lifetime production.
                </li>
                <li>
                  <strong>Backyard Birds:</strong> Layer grower feed works well
                  for mixed-age free-range flocks.
                </li>
                <li>
                  <strong>Heat Stress:</strong> During summer, consider adding
                  electrolytes and reducing feeding during hottest hours.
                </li>
              </ul>
            </div>
          </motion.div>
        )}

        {/* Nutrition Tab */}
        {selectedTab === "nutrition" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Nutritional Composition & Ingredients
            </h2>

            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Typical Nutritional Analysis
              </h3>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-orange-600 mb-3">
                    Broiler Feed (Finisher)
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between p-3 bg-orange-50 rounded">
                      <span className="font-medium">Crude Protein</span>
                      <span className="text-orange-700 font-semibold">
                        18-20%
                      </span>
                    </div>
                    <div className="flex justify-between p-3 bg-gray-50 rounded">
                      <span className="font-medium">Crude Fat</span>
                      <span className="text-orange-700 font-semibold">
                        5-7%
                      </span>
                    </div>
                    <div className="flex justify-between p-3 bg-orange-50 rounded">
                      <span className="font-medium">Crude Fiber</span>
                      <span className="text-orange-700 font-semibold">
                        Max 5%
                      </span>
                    </div>
                    <div className="flex justify-between p-3 bg-gray-50 rounded">
                      <span className="font-medium">Metabolizable Energy</span>
                      <span className="text-orange-700 font-semibold">
                        3200-3300 kcal/kg
                      </span>
                    </div>
                    <div className="flex justify-between p-3 bg-orange-50 rounded">
                      <span className="font-medium">Calcium</span>
                      <span className="text-orange-700 font-semibold">
                        0.9-1.1%
                      </span>
                    </div>
                    <div className="flex justify-between p-3 bg-gray-50 rounded">
                      <span className="font-medium">Available Phosphorus</span>
                      <span className="text-orange-700 font-semibold">
                        0.4-0.5%
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-yellow-600 mb-3">
                    Layer Feed (Production)
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between p-3 bg-yellow-50 rounded">
                      <span className="font-medium">Crude Protein</span>
                      <span className="text-yellow-700 font-semibold">
                        16-18%
                      </span>
                    </div>
                    <div className="flex justify-between p-3 bg-gray-50 rounded">
                      <span className="font-medium">Crude Fat</span>
                      <span className="text-yellow-700 font-semibold">
                        3-4%
                      </span>
                    </div>
                    <div className="flex justify-between p-3 bg-yellow-50 rounded">
                      <span className="font-medium">Crude Fiber</span>
                      <span className="text-yellow-700 font-semibold">
                        Max 6%
                      </span>
                    </div>
                    <div className="flex justify-between p-3 bg-gray-50 rounded">
                      <span className="font-medium">Metabolizable Energy</span>
                      <span className="text-yellow-700 font-semibold">
                        2700-2800 kcal/kg
                      </span>
                    </div>
                    <div className="flex justify-between p-3 bg-yellow-50 rounded">
                      <span className="font-medium">Calcium</span>
                      <span className="text-yellow-700 font-semibold">
                        3.5-4.0%
                      </span>
                    </div>
                    <div className="flex justify-between p-3 bg-gray-50 rounded">
                      <span className="font-medium">Available Phosphorus</span>
                      <span className="text-yellow-700 font-semibold">
                        0.35-0.45%
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-3">
                  Essential Amino Acids
                </h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Lysine</p>
                    <p className="font-semibold text-gray-900">1.0-1.2%</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Methionine</p>
                    <p className="font-semibold text-gray-900">0.45-0.55%</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">
                      Methionine + Cystine
                    </p>
                    <p className="font-semibold text-gray-900">0.75-0.85%</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Threonine</p>
                    <p className="font-semibold text-gray-900">0.65-0.75%</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Tryptophan</p>
                    <p className="font-semibold text-gray-900">0.18-0.22%</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Arginine</p>
                    <p className="font-semibold text-gray-900">1.1-1.3%</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Premium Quality Ingredients
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-orange-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-gray-900 font-semibold">
                        Ingredient
                      </th>
                      <th className="px-4 py-3 text-left text-gray-900 font-semibold">
                        Percentage
                      </th>
                      <th className="px-4 py-3 text-left text-gray-900 font-semibold">
                        Purpose
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {ingredients.map((ingredient, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-4 py-3 font-medium text-gray-900">
                          {ingredient.name}
                        </td>
                        <td className="px-4 py-3 text-orange-700 font-semibold">
                          {ingredient.percentage}
                        </td>
                        <td className="px-4 py-3 text-gray-600">
                          {ingredient.purpose}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> Ingredient percentages may vary
                  slightly based on raw material availability and seasonal
                  adjustments, but nutritional guarantees remain consistent. All
                  ingredients are sourced from certified suppliers and tested
                  before use.
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Feeding Tab */}
        {selectedTab === "feeding" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Feeding Management Guidelines
            </h2>

            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Critical Feeding Management Practices
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-orange-600 text-xl">•</span>
                  <p className="text-gray-700">
                    <strong>Water is Critical:</strong> Provide clean, fresh
                    water at all times. Birds need 1.5-2 times more water than
                    feed by weight. Check water quality regularly - contaminated
                    water reduces feed intake and performance.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange-600 text-xl">•</span>
                  <p className="text-gray-700">
                    <strong>Gradual Transitions:</strong> When changing feed
                    types, mix 25% new feed with 75% old feed for 2 days, then
                    50-50 for 2 days, then 75-25 for 2 days before switching
                    completely. Sudden changes cause digestive upset.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange-600 text-xl">•</span>
                  <p className="text-gray-700">
                    <strong>Feeder Management:</strong> Adjust feeder height as
                    birds grow - feed should be at bird's back level. Fill
                    feeders only 1/3 full to prevent wastage. Clean feeders
                    weekly to prevent mold and maintain palatability.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange-600 text-xl">•</span>
                  <p className="text-gray-700">
                    <strong>Temperature Control:</strong> Maintain proper
                    brooding temperature for chicks (32-35°C week 1, reduce 3°C
                    weekly). Heat stress reduces feed intake - provide
                    ventilation and cool water during hot weather.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange-600 text-xl">•</span>
                  <p className="text-gray-700">
                    <strong>Lighting Program:</strong> Broilers need 23 hours
                    light for first 3 days, then reduce to 18-20 hours. Layers
                    need controlled lighting - 16 hours for production, 8-10
                    hours during grower phase.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange-600 text-xl">•</span>
                  <p className="text-gray-700">
                    <strong>Monitor Daily:</strong> Check feed and water
                    consumption daily. Sudden drops indicate problems. Weigh
                    sample birds weekly to track growth. Adjust feeding if birds
                    are over/under target weight.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange-600 text-xl">•</span>
                  <p className="text-gray-700">
                    <strong>Prevent Waste:</strong> Use appropriate feeder space
                    (3-4 cm per bird for broilers, 10-12 cm for layers). Fix
                    feeders securely to prevent spilling. Store feed properly to
                    maintain quality.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Recommended Feeding Rates by Age
              </h3>
              <div className="space-y-6">
                {feedingGuide.map((guide, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-orange-600 pl-6 py-2"
                  >
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      {guide.category}
                    </h4>
                    <div className="grid md:grid-cols-3 gap-4 mb-3">
                      <div>
                        <p className="text-sm text-gray-500">Daily Feed</p>
                        <p className="font-semibold text-orange-600">
                          {guide.amount}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Feeding Method</p>
                        <p className="font-semibold text-orange-600">
                          {guide.frequency}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">
                          Water Requirement
                        </p>
                        <p className="font-semibold text-orange-600">
                          {guide.water}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm bg-gray-50 p-3 rounded">
                      <strong>Management Tips:</strong> {guide.notes}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-xl">✅</span> Best Practices for Success
                </h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>
                    • Maintain biosecurity - control visitor access and
                    disinfect equipment
                  </li>
                  <li>• Provide adequate ventilation without drafts</li>
                  <li>
                    • Use quality litter material (rice husk, wood shavings)
                  </li>
                  <li>• Implement vaccination schedule as recommended</li>
                  <li>
                    • Keep accurate records of feed intake, mortality, and
                    growth
                  </li>
                  <li>
                    • Provide adequate space - 0.6 sq ft per broiler, 2 sq ft
                    per layer
                  </li>
                  <li>• Clean and disinfect between batches</li>
                  <li>• Work with a poultry veterinarian</li>
                </ul>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-xl">⚠️</span> Common Mistakes to Avoid
                </h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>
                    • Don't use old or moldy feed - check manufacturing date
                  </li>
                  <li>
                    • Never mix medications in feed without professional advice
                  </li>
                  <li>
                    • Avoid overcrowding - reduces feed access and increases
                    stress
                  </li>
                  <li>
                    • Don't skip starter feed phase to save money - reduces
                    final weight
                  </li>
                  <li>• Never restrict water even if you restrict feed</li>
                  <li>
                    • Don't ignore sick birds - isolate and treat promptly
                  </li>
                  <li>• Avoid sudden environmental changes</li>
                  <li>• Don't neglect record keeping</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mt-6">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <span className="text-xl">📊</span> Feed Consumption Tracking
              </h4>
              <p className="text-gray-700 mb-3">
                Monitor these benchmarks to ensure your flock is performing
                optimally:
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>Broilers (35 days):</strong>
                  <ul className="mt-1 ml-4 text-gray-600">
                    <li>• Total feed consumed: 3.2-3.5 kg per bird</li>
                    <li>• Target live weight: 2.0-2.2 kg</li>
                    <li>• FCR: 1.6-1.8</li>
                    <li>• Mortality: Less than 5%</li>
                  </ul>
                </div>
                <div>
                  <strong>Layers (per year):</strong>
                  <ul className="mt-1 ml-4 text-gray-600">
                    <li>• Daily feed: 110-120 grams</li>
                    <li>• Annual feed: 40-44 kg per bird</li>
                    <li>• Egg production: 280-300 eggs</li>
                    <li>• Feed per dozen eggs: 1.6-1.8 kg</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* FAQs Tab */}
        {selectedTab === "faqs" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition"
                  >
                    <span className="font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </span>
                    <span className="text-orange-600 text-xl flex-shrink-0">
                      {openFaq === index ? "−" : "+"}
                    </span>
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="bg-orange-50 rounded-xl p-8 mt-8 border border-orange-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Need Expert Guidance?
              </h3>
              <p className="text-gray-700 mb-4">
                Our team of poultry nutritionists and veterinarians is available
                to help you optimize your feeding program, troubleshoot issues,
                and maximize profitability. We offer free farm consultations for
                our customers.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition font-medium">
                  Talk to a Poultry Expert
                </button>
                <button className="px-6 py-3 bg-white text-orange-600 border-2 border-orange-600 rounded-lg hover:bg-orange-50 transition font-medium">
                  Download Complete Guide
                </button>
                <button className="px-6 py-3 bg-white text-orange-600 border-2 border-orange-600 rounded-lg hover:bg-orange-50 transition font-medium">
                  Schedule Farm Visit
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 mt-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Additional Resources
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <a
                  href="#"
                  className="p-4 border rounded-lg hover:border-orange-600 hover:shadow transition"
                >
                  <div className="text-3xl mb-2">📱</div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Mobile App
                  </h4>
                  <p className="text-sm text-gray-600">
                    Track your flock performance on the go
                  </p>
                </a>
                <a
                  href="#"
                  className="p-4 border rounded-lg hover:border-orange-600 hover:shadow transition"
                >
                  <div className="text-3xl mb-2">🎓</div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Training Videos
                  </h4>
                  <p className="text-sm text-gray-600">
                    Learn best practices from experts
                  </p>
                </a>
                <a
                  href="#"
                  className="p-4 border rounded-lg hover:border-orange-600 hover:shadow transition"
                >
                  <div className="text-3xl mb-2">👥</div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Farmer Community
                  </h4>
                  <p className="text-sm text-gray-600">
                    Connect with other poultry farmers
                  </p>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-orange-600 to-yellow-500 text-white py-16 mt-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Improve Your Poultry Performance?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Join over 10,000 successful poultry farmers who trust our premium
            feed for consistent results.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-white text-orange-600 rounded-lg hover:bg-gray-100 transition font-semibold text-lg">
              Contact With Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
