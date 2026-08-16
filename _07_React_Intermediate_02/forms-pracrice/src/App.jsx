import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    comments: false,
    candidate: false,
    offers: false,
    pushNotification: "",
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;

    setFormData((prev) => {
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <form
        onSubmit={submitHandler}
        className="mx-auto max-w-2xl rounded-xl bg-white p-8 shadow-lg"
      >
        {/* Heading */}
        <h1 className="mb-2 text-3xl font-bold text-gray-900">
          Profile Information
        </h1>

        <p className="mb-8 text-sm text-gray-500">
          Please provide your personal information and preferences.
        </p>

        {/* First Name */}
        <div className="mb-5">
          <label
            htmlFor="firstName"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            First Name
          </label>

          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={changeHandler}
            className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>

        {/* Last Name */}
        <div className="mb-5">
          <label
            htmlFor="lastName"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Last Name
          </label>

          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={changeHandler}
            className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>

        {/* Email */}
        <div className="mb-5">
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Email
          </label>

          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={changeHandler}
            className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>

        {/* Country */}
        <div className="mb-5">
          <label
            htmlFor="country"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Country
          </label>

          <select
            name="country"
            id="country"
            value={formData.country}
            onChange={changeHandler}
            className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          >
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="UAE">UAE</option>
          </select>
        </div>

        {/* Street Address */}
        <div className="mb-5">
          <label
            htmlFor="streetAddress"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Street Address
          </label>

          <input
            type="text"
            name="streetAddress"
            id="streetAddress"
            placeholder="Street Address"
            value={formData.streetAddress}
            onChange={changeHandler}
            className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>

        {/* City / State */}
        <div className="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="city"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              City
            </label>

            <input
              type="text"
              name="city"
              id="city"
              placeholder="City"
              value={formData.city}
              onChange={changeHandler}
              className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <div>
            <label
              htmlFor="state"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              State
            </label>

            <input
              type="text"
              name="state"
              id="state"
              placeholder="State"
              value={formData.state}
              onChange={changeHandler}
              className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>
        </div>

        {/* Postal Code */}
        <div className="mb-8">
          <label
            htmlFor="postalCode"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Postal Code
          </label>

          <input
            type="number"
            name="postalCode"
            id="postalCode"
            placeholder="Postal Code"
            value={formData.postalCode}
            onChange={changeHandler}
            className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>

        {/* Email Notifications */}
        <fieldset className="mb-8 border-t border-gray-200 pt-6">
          <legend className="mb-1 text-base font-semibold text-gray-900">
            By Email
          </legend>

          <p className="mb-5 text-sm text-gray-500">
            Choose which email notifications you want to receive.
          </p>

          {/* Comments */}
          <div className="mb-4 flex gap-3">
            <input
              type="checkbox"
              id="comments"
              name="comments"
              checked={formData.comments}
              onChange={changeHandler}
              className="mt-1 h-4 w-4 cursor-pointer accent-blue-600"
            />

            <div>
              <label
                htmlFor="comments"
                className="cursor-pointer font-medium text-gray-800"
              >
                Comments
              </label>

              <p className="text-sm text-gray-500">
                Get notified when someone posts a comment.
              </p>
            </div>
          </div>

          {/* Candidate */}
          <div className="mb-4 flex gap-3">
            <input
              type="checkbox"
              id="candidate"
              name="candidate"
              checked={formData.candidate}
              onChange={changeHandler}
              className="mt-1 h-4 w-4 cursor-pointer accent-blue-600"
            />

            <div>
              <label
                htmlFor="candidate"
                className="cursor-pointer font-medium text-gray-800"
              >
                Candidate
              </label>

              <p className="text-sm text-gray-500">
                Get notified about candidate updates.
              </p>
            </div>
          </div>

          {/* Offers */}
          <div className="flex gap-3">
            <input
              type="checkbox"
              id="offers"
              name="offers"
              checked={formData.offers}
              onChange={changeHandler}
              className="mt-1 h-4 w-4 cursor-pointer accent-blue-600"
            />

            <div>
              <label
                htmlFor="offers"
                className="cursor-pointer font-medium text-gray-800"
              >
                Offers
              </label>

              <p className="text-sm text-gray-500">
                Get notified about new offers and opportunities.
              </p>
            </div>
          </div>
        </fieldset>

        {/* Push Notifications */}
        <fieldset className="border-t border-gray-200 pt-6">
          <legend className="mb-1 text-base font-semibold text-gray-900">
            Push Notification
          </legend>

          <p className="mb-5 text-sm text-gray-500">
            These are delivered via push notification on your device.
          </p>

          <div className="space-y-3">
            {/* Everything */}
            <div className="flex items-center gap-3">
              <input
                type="radio"
                id="pushEverything"
                name="pushNotification"
                value="Everything"
                checked={formData.pushNotification === "Everything"}
                onChange={changeHandler}
                className="h-4 w-4 cursor-pointer accent-blue-600"
              />

              <label
                htmlFor="pushEverything"
                className="cursor-pointer text-gray-700"
              >
                Everything
              </label>
            </div>

            {/* Same as Email */}
            <div className="flex items-center gap-3">
              <input
                type="radio"
                id="pushEmail"
                name="pushNotification"
                value="Same as email"
                checked={formData.pushNotification === "Same as email"}
                onChange={changeHandler}
                className="h-4 w-4 cursor-pointer accent-blue-600"
              />

              <label
                htmlFor="pushEmail"
                className="cursor-pointer text-gray-700"
              >
                Same as Email
              </label>
            </div>

            {/* Nothing */}
            <div className="flex items-center gap-3">
              <input
                type="radio"
                id="pushNothing"
                name="pushNotification"
                value="No Push Notification"
                checked={formData.pushNotification === "No Push Notification"}
                onChange={changeHandler}
                className="h-4 w-4 cursor-pointer accent-blue-600"
              />

              <label
                htmlFor="pushNothing"
                className="cursor-pointer text-gray-700"
              >
                No Push Notification
              </label>
            </div>
          </div>
        </fieldset>

        {/* Submit */}
        <button
          type="submit"
          className="mt-8 w-full rounded-md bg-blue-600 px-4 py-2.5 font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default App;
