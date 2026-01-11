import { useState } from 'react';

export default function Subscription() {

  const plans = [
    { name: 'Basic', desc: 'Access to basic content', price: 9.99 },
    { name: 'Standard', desc: 'Access to standard content', price: 14.99 },
    { name: 'Premium', desc: 'Access to all content', price: 19.99 },
  ];

  const features = ['HD Streaming', 'Unlimited Movies', 'No Ads', 'Offline Viewing'];

  const [open, setOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<{ name: string; desc: string; price: number } | null>(null);
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  return (
      <div className="min-h-screen bg-neutral-950 text-white px-6 py-16 lg:px-200">

        <section className="max-w-5xl mx-auto mb-16 text-center lg:left">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Choose your subscription
          </h1>
          <p className="text-gray-400 max-w-xl">
            Simple plans. Cancel anytime.
          </p>
        </section>


        <section className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-20">
          {plans.map((plan) => (
              <div
                  key={plan.name}
                  className="bg-neutral-900 rounded-2xl p-6
                       hover:bg-red-900
                       hover:scale-105 transition-transform duration-300"
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
                <button
                    onClick={() => {
                      setSelectedPlan(plan);
                      setOpen(true);
                    }}
                    className="w-full bg-red-600 hover:bg-red-700 py-2 rounded-lg
             hover:scale-110 transition-transform duration-300"
                >
                  Get started
                </button>
              </div>
          ))}
        </section>

        {open && selectedPlan && (
            <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
              <div className="bg-neutral-900 rounded-xl p-6 w-full max-w-md">
                <h3 className="text-xl font-bold mb-4">
                  Payment details for {selectedPlan.name}
                </h3>

                <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      // Handle payment logic here
                      alert(`Payment processed for ${selectedPlan.name}!`);
                      setOpen(false);
                      setSelectedPlan(null);
                      setCardNumber('');
                      setExpiry('');
                      setCvc('');
                    }}
                    className="space-y-4"
                >
                  <input
                      type="text"
                      placeholder="Card number"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      className="w-full p-3 rounded bg-neutral-800 text-white outline-none"
                      required
                  />

                  <div className="flex gap-3">
                    <input
                        type="text"
                        placeholder="MM / YY"
                        value={expiry}
                        onChange={(e) => setExpiry(e.target.value)}
                        className="w-full p-3 rounded bg-neutral-800 text-white outline-none"
                        required
                    />
                    <input
                        type="text"
                        placeholder="CVC"
                        value={cvc}
                        onChange={(e) => setCvc(e.target.value)}
                        className="w-full p-3 rounded bg-neutral-800 text-white outline-none"
                        required
                    />
                  </div>

                  <button
                      type="submit"
                      className="w-full bg-red-600 py-2 rounded-lg hover:bg-red-700 transition"
                  >
                    Pay ${selectedPlan.price}
                  </button>

                  <button
                      type="button"
                      onClick={() => {
                        setOpen(false);
                        setSelectedPlan(null);
                        setCardNumber('');
                        setExpiry('');
                        setCvc('');
                      }}
                      className="w-full text-gray-400 hover:text-white text-sm"
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
        )}

        <section className="max-w-5xl mx-auto mb-20">
          <h2 className="text-2xl font-bold mb-6">
            What you get
          </h2>

          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-gray-300">
            {features.map((feature) => (
                <li
                    key={feature}
                    className="bg-neutral-900 rounded-lg p-4 text-center"
                >
                  {feature}
                </li>
            ))}
          </ul>
        </section>


        <section className="max-w-6xl mx-auto bg-neutral-900 rounded-2xl p-10
                          flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-xl">
            <h3 className="text-2xl lg:text-3xl font-bold mb-2">
              Start watching today
            </h3>
            <p className="text-gray-400 mb-6">
              Try it free for 7 days.
            </p>

            <button className="bg-red-600 px-6 py-3 rounded-lg hover:scale-110 transition-transform duration-300">
              Start free trial
            </button>
          </div>

          <img
              className="w-full max-w-md rounded-xl shadow-xl"
              src="/img/BackgroundImages.png"
              alt=""
          />
        </section>
      </div>
  );
}