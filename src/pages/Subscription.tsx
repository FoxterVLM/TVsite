import { useState } from 'react';

export default function Subscription() {
  const [] = useState<number | null>(null);
  return (
      <div className="min-h-screen bg-neutral-950 text-white px-6 py-16">
        {/* HEADER */}
        <section className="max-w-5xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-4">
            Choose your subscription
          </h1>
          <p className="text-gray-400">
            Simple plans. Cancel anytime.
          </p>
        </section>

        {/* PLANS */}


        <section className="max-w-5xl mx-auto grid gap-6 md:grid-cols-3 mb-20">
          {plans.map((plan) => (
              <div
                  key={plan.name}
                  className="bg-neutral-900 rounded-2xl p-6
                       hover:bg-red-900
                       hover:scale-105 transition-transform duration-300
                      "
              >
                <h3 className="text-xl font-semibold mb-2">
                  {plan.name}
                </h3>

                <p className="text-gray-400 text-sm mb-6">
                  {plan.desc}
                </p>

                <div className="text-3xl font-bold mb-6">
                  ${plan.price}
                  <span className="text-sm text-gray-400"> / month</span>
                </div>

                <button className="w-full bg-red-600 hover:bg-red-700 py-2 rounded-lg hover:scale-110 transition-transform duration-300">
                  Get started
                </button>
              </div>
          ))}
        </section>

        {/* FEATURES */}
        <section className="max-w-4xl mx-auto mb-20">
          <h2 className="text-2xl font-bold mb-6">
            What you get
          </h2>

          <ul className="grid sm:grid-cols-2 gap-4 text-gray-300">
            {features.map((feature) => (
                <li
                    key={feature}
                    className="bg-neutral-900 rounded-lg p-4"
                >
                  {feature}
                </li>
            ))}
          </ul>
        </section>


        <section className="max-w-5xl mx-auto bg-neutral-900 rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">
              Start watching today
            </h3>
            <p className="text-gray-400">
              Try it free for 7 days.
            </p>
            <div>
              <img className="w-150 h-auto shadow-xl rounded-md" alt="" src="/img/BackgroundImages.png" />
            </div>
          </div>

          <button className="px-6 py-3 rounded-lg hover:scale-110 transition-transform duration-300">
            Start free trial
          </button>
        </section>
      </div>
  )
}
const plans = [
  {
    name: "Basic",
    price: "9.99",
    desc: "Watch on one device",
  },
  {
    name: "Standard",
    price: "12.99",
    desc: "Watch on two devices",
  },
  {
    name: "Premium",
    price: "14.99",
    desc: "Watch on four devices",
  },
]

const features = [
  "Unlimited movies and shows",
  "Cancel anytime",
  "Watch on multiple devices",
  "Offline viewing",
]