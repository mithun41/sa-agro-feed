"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const cattleProducts = [
  {
    name: "Dairy Cattle Concentrate",
    type: "Dairy",
    protein: "18-20%",
    fat: "3-4%",
    fiber: "12-14%",
    price: "৳1,850 per 50kg bag",
    description: "Premium concentrate feed for high-yielding dairy cattle",
  },
  {
    name: "Beef Cattle Grower",
    type: "Beef",
    protein: "14-16%",
    fat: "2-3%",
    fiber: "14-16%",
    price: "৳1,650 per 50kg bag",
    description: "Specially formulated for optimal beef cattle growth",
  },
  {
    name: "Calf Starter Feed",
    type: "Calf",
    protein: "20-22%",
    fat: "4-5%",
    fiber: "10-12%",
    price: "৳2,100 per 50kg bag",
    description: "High-quality nutrition for young calves",
  },
  {
    name: "Lactating Cow Special",
    type: "Dairy",
    protein: "16-18%",
    fat: "3.5-4.5%",
    fiber: "13-15%",
    price: "৳1,950 per 50kg bag",
    description: "Enhanced formula for lactating dairy cows",
  },
];

const nutritionalBenefits = [
  {
    icon: "🥛",
    title: "Increased Milk Production",
    description:
      "Our specialized dairy feed formulation enhances milk yield by 15-25% through optimal protein and energy balance.",
  },
  {
    icon: "💪",
    title: "Improved Body Weight",
    description:
      "Carefully balanced nutrients promote healthy weight gain in beef cattle, achieving 1.2-1.5 kg daily growth rate.",
  },
  {
    icon: "🛡️",
    title: "Enhanced Immunity",
    description:
      "Fortified with essential vitamins and minerals to boost immune system and reduce disease susceptibility.",
  },
  {
    icon: "🌾",
    title: "Better Digestibility",
    description:
      "High-quality ingredients ensure 85%+ digestibility, maximizing nutrient absorption and reducing waste.",
  },
  {
    icon: "🦴",
    title: "Strong Bone Development",
    description:
      "Optimal calcium-phosphorus ratio supports strong skeletal structure and prevents metabolic disorders.",
  },
  {
    icon: "🔄",
    title: "Improved Reproduction",
    description:
      "Essential nutrients support reproductive health, improving conception rates and reducing calving intervals.",
  },
];

const ingredients = [
  { name: "Corn/Maize", percentage: "30-35%", purpose: "Energy source" },
  { name: "Soybean Meal", percentage: "20-25%", purpose: "Protein source" },
  { name: "Wheat Bran", percentage: "15-20%", purpose: "Fiber and nutrients" },
  { name: "Rice Bran", percentage: "10-12%", purpose: "Energy and fat" },
  { name: "Molasses", percentage: "5-7%", purpose: "Palatability and energy" },
  { name: "Mustard Oil Cake", percentage: "8-10%", purpose: "Protein and fat" },
  { name: "Vitamin Premix", percentage: "1-2%", purpose: "Essential vitamins" },
  { name: "Mineral Mix", percentage: "2-3%", purpose: "Essential minerals" },
  { name: "Salt", percentage: "0.5-1%", purpose: "Sodium and chloride" },
  { name: "Limestone", percentage: "1-1.5%", purpose: "Calcium source" },
];

const feedingGuide = [
  {
    category: "Dairy Cows (Lactating)",
    amount: "4-6 kg per day",
    frequency: "2-3 times daily",
    notes:
      "Increase quantity based on milk production. Add 1kg feed per 2.5 liters of milk produced above 10 liters.",
  },
  {
    category: "Dairy Cows (Dry Period)",
    amount: "2-3 kg per day",
    frequency: "2 times daily",
    notes:
      "Reduce concentrate during dry period but maintain mineral supplementation.",
  },
  {
    category: "Beef Cattle (Growing)",
    amount: "3-5 kg per day",
    frequency: "2 times daily",
    notes:
      "Gradually increase amount as cattle grow. Provide adequate roughage alongside.",
  },
  {
    category: "Bulls (Breeding)",
    amount: "4-5 kg per day",
    frequency: "2 times daily",
    notes:
      "Maintain consistent feeding schedule for optimal breeding performance.",
  },
  {
    category: "Calves (3-6 months)",
    amount: "1-2 kg per day",
    frequency: "2-3 times daily",
    notes:
      "Start with small amounts and gradually increase. Always provide fresh water.",
  },
  {
    category: "Calves (6-12 months)",
    amount: "2-3 kg per day",
    frequency: "2 times daily",
    notes: "Transition gradually to adult feed formulations.",
  },
];

const faqs = [
  {
    question: "What is the shelf life of cattle feed?",
    answer:
      "Our cattle feed has a shelf life of 3 months when stored properly in a cool, dry place away from direct sunlight and moisture. Always check the manufacturing date on the bag.",
  },
  {
    question: "Can I mix different types of cattle feed?",
    answer:
      "While it's generally safe to mix feeds, we recommend consulting with our nutritionists first. Sudden changes in feed composition can affect digestion. If mixing is necessary, do it gradually over 7-10 days.",
  },
  {
    question: "How should I store cattle feed?",
    answer:
      "Store feed in a cool, dry, well-ventilated area. Keep bags off the ground using pallets. Protect from rain, moisture, and pests. Use older stock first (FIFO method) and reseal opened bags tightly.",
  },
  {
    question: "Why is my cattle not eating the feed?",
    answer:
      "Several factors can cause reduced appetite: sudden feed change, spoiled feed, illness, stress, or environmental factors. Ensure feed is fresh, introduce new feed gradually, check for health issues, and maintain clean feeding areas.",
  },
  {
    question: "Do I need to provide supplements with this feed?",
    answer:
      "Our cattle feed is complete and balanced. However, depending on your cattle's specific needs, production level, and local conditions, additional mineral supplements or vitamins might be beneficial. Consult with a veterinarian for specific recommendations.",
  },
  {
    question: "What is the difference between dairy and beef cattle feed?",
    answer:
      "Dairy cattle feed has higher protein content (18-20%) to support milk production, while beef cattle feed (14-16% protein) focuses on weight gain and muscle development. Energy levels and mineral ratios also differ based on production goals.",
  },
  {
    question: "How quickly will I see results?",
    answer:
      "For dairy cattle, increased milk production can be observed within 2-3 weeks. For beef cattle, improved weight gain becomes noticeable after 4-6 weeks of consistent feeding. Results vary based on cattle breed, age, and management practices.",
  },
  {
    question: "Is this feed suitable for organic farming?",
    answer:
      "Our standard cattle feed contains conventional ingredients. For organic farming requirements, please contact us for our organic-certified feed options that meet Bangladesh organic farming standards.",
  },
];

export default function CattleDetailsPage() {
  const [selectedTab, setSelectedTab] = useState("overview");
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-800 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold mb-4">Premium Cattle Feed</h1>
            <p className="text-xl text-green-100 max-w-3xl">
              Scientifically formulated nutrition for dairy and beef cattle to
              maximize milk production, weight gain, and overall health. Trusted
              by thousands of farmers across Bangladesh.
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
            src="/images/products/cattle.jpg"
            alt="Cattle Feed"
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
                    ? "bg-green-700 text-white"
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
                Why Choose Our Cattle Feed?
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Our cattle feed is the result of extensive research and
                development, combining traditional knowledge with modern
                nutritional science. We understand the unique challenges faced
                by Bangladeshi farmers and have formulated our feed to address
                local cattle breeds, climate conditions, and farming practices.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Every batch is quality-tested to ensure consistent nutrient
                composition, palatability, and safety. We source ingredients
                from trusted suppliers and process them in our state-of-the-art
                manufacturing facility that follows strict hygiene and quality
                control standards.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Whether you're running a small family dairy farm or managing a
                large beef production operation, our comprehensive range of
                cattle feed products provides the nutrition your animals need to
                thrive.
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

            {/* Quality Assurance */}
            <div className="bg-green-50 rounded-xl p-8 border border-green-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Quality Assurance & Certifications
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    ✓ Laboratory Tested
                  </h4>
                  <p className="text-gray-700">
                    Every batch undergoes rigorous testing for protein content,
                    moisture levels, and contamination to ensure premium
                    quality.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    ✓ No Harmful Additives
                  </h4>
                  <p className="text-gray-700">
                    Free from antibiotics, growth hormones, and harmful
                    chemicals. Only natural, safe ingredients approved for
                    animal consumption.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    ✓ Hygienically Processed
                  </h4>
                  <p className="text-gray-700">
                    Manufactured in ISO-compliant facilities with strict hygiene
                    protocols to prevent contamination and ensure feed safety.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    ✓ Consistent Quality
                  </h4>
                  <p className="text-gray-700">
                    Advanced manufacturing process ensures uniform mixing and
                    consistent nutrient distribution in every bag.
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
              Our Cattle Feed Range
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {cattleProducts.map((product, index) => (
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
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                      {product.type}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{product.description}</p>

                  <div className="grid grid-cols-3 gap-4 mb-4 p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="text-sm text-gray-500">Protein</p>
                      <p className="font-semibold text-gray-900">
                        {product.protein}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Fat</p>
                      <p className="font-semibold text-gray-900">
                        {product.fat}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Fiber</p>
                      <p className="font-semibold text-gray-900">
                        {product.fiber}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t">
                    <span className="text-2xl font-bold text-green-700">
                      {product.price}
                    </span>
                    <button className="px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition">
                      Order Now
                    </button>
                  </div>
                </motion.div>
              ))}
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
                Guaranteed Analysis (Typical Values)
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex justify-between p-3 bg-gray-50 rounded">
                    <span className="font-medium">Crude Protein</span>
                    <span className="text-green-700 font-semibold">16-20%</span>
                  </div>
                  <div className="flex justify-between p-3 bg-gray-50 rounded">
                    <span className="font-medium">Crude Fat</span>
                    <span className="text-green-700 font-semibold">3-5%</span>
                  </div>
                  <div className="flex justify-between p-3 bg-gray-50 rounded">
                    <span className="font-medium">Crude Fiber</span>
                    <span className="text-green-700 font-semibold">12-15%</span>
                  </div>
                  <div className="flex justify-between p-3 bg-gray-50 rounded">
                    <span className="font-medium">Moisture</span>
                    <span className="text-green-700 font-semibold">
                      Max 12%
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between p-3 bg-gray-50 rounded">
                    <span className="font-medium">Calcium</span>
                    <span className="text-green-700 font-semibold">
                      0.8-1.2%
                    </span>
                  </div>
                  <div className="flex justify-between p-3 bg-gray-50 rounded">
                    <span className="font-medium">Phosphorus</span>
                    <span className="text-green-700 font-semibold">
                      0.5-0.7%
                    </span>
                  </div>
                  <div className="flex justify-between p-3 bg-gray-50 rounded">
                    <span className="font-medium">Metabolizable Energy</span>
                    <span className="text-green-700 font-semibold">
                      2800-3000 kcal/kg
                    </span>
                  </div>
                  <div className="flex justify-between p-3 bg-gray-50 rounded">
                    <span className="font-medium">Salt</span>
                    <span className="text-green-700 font-semibold">0.5-1%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Premium Ingredients
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-green-50">
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
                        <td className="px-4 py-3 text-green-700 font-semibold">
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
              Feeding Guidelines & Recommendations
            </h2>

            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Important Feeding Instructions
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-green-700 text-xl">•</span>
                  <p className="text-gray-700">
                    Always provide unlimited access to fresh, clean water.
                    Cattle require 3-5 liters of water per kg of dry matter
                    intake.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-700 text-xl">•</span>
                  <p className="text-gray-700">
                    Introduce new feed gradually over 7-10 days by mixing with
                    existing feed to avoid digestive upset and maintain rumen
                    health.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-700 text-xl">•</span>
                  <p className="text-gray-700">
                    Feed at consistent times each day. Cattle thrive on routine
                    and irregular feeding can reduce intake and productivity.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-700 text-xl">•</span>
                  <p className="text-gray-700">
                    Ensure adequate roughage (grass, hay, silage) is provided
                    alongside concentrate feed. Roughage should constitute
                    40-60% of total diet.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-700 text-xl">•</span>
                  <p className="text-gray-700">
                    Clean feeding troughs regularly to prevent mold growth and
                    maintain feed palatability. Remove any leftover feed daily.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-700 text-xl">•</span>
                  <p className="text-gray-700">
                    Adjust feeding amounts based on body condition, production
                    level, and environmental conditions. Consult with a
                    nutritionist for optimal results.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Recommended Feeding Rates
              </h3>
              <div className="space-y-6">
                {feedingGuide.map((guide, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-green-700 pl-6 py-2"
                  >
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {guide.category}
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4 mb-3">
                      <div>
                        <p className="text-sm text-gray-500">Daily Amount</p>
                        <p className="font-semibold text-green-700">
                          {guide.amount}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">
                          Feeding Frequency
                        </p>
                        <p className="font-semibold text-green-700">
                          {guide.frequency}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm bg-gray-50 p-3 rounded">
                      <strong>Note:</strong> {guide.notes}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mt-8">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <span className="text-xl">⚠️</span> Important Safety Information
              </h4>
              <p className="text-gray-700">
                Do not feed moldy, contaminated, or spoiled feed to cattle.
                Monitor cattle closely during feed transition periods. Consult a
                veterinarian if cattle show signs of digestive distress, reduced
                appetite, or unusual behavior. Keep feed storage areas secure
                from pests and rodents.
              </p>
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
                    <span className="text-green-700 text-xl flex-shrink-0">
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

            <div className="bg-green-50 rounded-xl p-8 mt-8 border border-green-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Still Have Questions?
              </h3>
              <p className="text-gray-700 mb-4">
                Our team of animal nutrition experts is here to help you choose
                the right feed for your cattle and optimize your farm's
                productivity.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 transition font-medium">
                  Contact Our Experts
                </button>
                <button className="px-6 py-3 bg-white text-green-700 border-2 border-green-700 rounded-lg hover:bg-green-50 transition font-medium">
                  Download Feeding Guide
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-green-700 to-green-600 text-white py-16 mt-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Boost Your Cattle's Health?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied farmers who trust our premium cattle
            feed for better results.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-white text-green-700 rounded-lg hover:bg-gray-100 transition font-semibold text-lg">
              Order Now
            </button>
            <button className="px-8 py-4 bg-green-800 text-white rounded-lg hover:bg-green-900 transition font-semibold text-lg">
              Request a Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
