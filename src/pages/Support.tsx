import { useFormStore } from "../store/useFormStore";

export default function Support() {
  const { setField, submitForm, errors } = useFormStore();

  return (
    <div className="bg-neutral-900 text-white min-h-screen p-10">
      <h1 className="text-4xl font-bold">Welcome to our support page!</h1>

      <div className="mt-10 grid grid-cols-2 gap-4 max-w-2xl">
        <div>
          <input
            className="p-3 bg-neutral-800 rounded w-full"
            placeholder="First Name"
            onChange={(e) => setField("firstName", e.target.value)}
          />
          {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
        </div>

        <div>
          <input
            className="p-3 bg-neutral-800 rounded w-full"
            placeholder="Last Name"
            onChange={(e) => setField("lastName", e.target.value)}
          />
          {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
        </div>

        <div className="col-span-2">
          <input
            className="p-3 bg-neutral-800 rounded w-full"
            placeholder="Email"
            onChange={(e) => setField("email", e.target.value)}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div className="col-span-2">
          <input
            className="p-3 bg-neutral-800 rounded w-full"
            placeholder="Phone Number"
            onChange={(e) => setField("phone", e.target.value)}
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>

        <div className="col-span-2">
          <textarea
            className="p-3 h-32 bg-neutral-800 rounded w-full"
            placeholder="Message"
            onChange={(e) => setField("message", e.target.value)}
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>

        <button className="bg-red-600 p-3 rounded col-span-2" onClick={submitForm}>
          Send Message
        </button>
      </div>
    </div>
  );
}