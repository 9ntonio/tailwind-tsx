import React from "react";
import "./App.scss";

const App = (): JSX.Element => (
  <section className="subpixel-antialiased text-gray-900 px-6">
    <div className="max-w-xl mx-auto py-12 divide-y md:max-w-4xl">
      <div className="grid grid-rows-1 grid-flow-col auto-cols-max mb-6 flex justify-center">
        <h1 className="font-serif pr-8">¡Howdy!</h1>
        <button className="btn btn--primary">Decline</button>
      </div>

      <article className="mx-auto text-center p-6 prose lg:prose-2xl">
        <h1>Garlic bread with cheese: What the science tells us</h1>
        <p>
          For years parents have espoused the health benefits of eating garlic
          bread with cheese to their children, with the food earning such an
          iconic status in our culture that kids will often dress up as warm,
          cheesy loaf for Halloween.
        </p>
        <p>
          But a recent study shows that the celebrated appetizer may be linked
          to a series of rabies cases springing up around the country.
        </p>
      </article>

      <div className="py-12">
        <h2 className="text-2xl font-bold">Unstyled</h2>
        <p className="mt-2 text-lg text-gray-600">
          This is how form elements look out of the box.
        </p>
        <div className="mt-8 max-w-xl">
          <div className="grid grid-cols-1 gap-6">
            <label className="block">
              <span className="text-gray-700">Full name</span>
              <input type="text" className="mt-1 block w-full" placeholder="" />
            </label>
            <label className="block">
              <span className="text-gray-700">Email address</span>
              <input
                type="email"
                className="mt-1 block w-full"
                placeholder="john@example.com"
              />
            </label>
            <label className="block">
              <span className="text-gray-700">When is your event?</span>
              <input type="date" className="mt-1 block w-full" />
            </label>
            <label className="block">
              <span className="text-gray-700">What type of event is it?</span>
              <select className="block w-full mt-1">
                <option>Corporate event</option>
                <option>Wedding</option>
                <option>Birthday</option>
                <option>Other</option>
              </select>
            </label>
            <label className="block">
              <span className="text-gray-700">Additional details</span>
              <textarea className="mt-1 block w-full" />
            </label>
            <div className="block">
              <div className="mt-2">
                <div>
                  <label className="inline-flex items-center">
                    <input type="checkbox" />
                    <span className="ml-2">
                      Email me news and special offers
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12">
        <h2 className="text-2xl font-bold">Simple</h2>
        <div className="mt-8 max-w-xl">
          <div className="grid grid-cols-1 gap-6">
            <label className="block">
              <span className="text-gray-700">Full name</span>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder=""
              />
            </label>
            <label className="block">
              <span className="text-gray-700">Email address</span>
              <input
                type="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="john@example.com"
              />
            </label>
            <label className="block">
              <span className="text-gray-700">When is your event?</span>
              <input
                type="date"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </label>
            <label className="block">
              <span className="text-gray-700">What type of event is it?</span>
              <select className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                <option>Corporate event</option>
                <option>Wedding</option>
                <option>Birthday</option>
                <option>Other</option>
              </select>
            </label>
            <label className="block">
              <span className="text-gray-700">Additional details</span>
              <textarea className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </label>
            <div className="block">
              <div className="mt-2">
                <div>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                    <span className="ml-2">
                      Email me news and special offers
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12">
        <h2 className="text-2xl font-bold">Underline</h2>
        <div className="mt-8 max-w-xl">
          <div className="grid grid-cols-1 gap-6">
            <label className="block">
              <span className="text-gray-700">Full name</span>
              <input
                type="text"
                className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                placeholder=""
              />
            </label>
            <label className="block">
              <span className="text-gray-700">Email address</span>
              <input
                type="email"
                className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                placeholder="john@example.com"
              />
            </label>
            <label className="block">
              <span className="text-gray-700">When is your event?</span>
              <input
                type="date"
                className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
              />
            </label>
            <label className="block">
              <span className="text-gray-700">What type of event is it?</span>
              <select className="block w-full mt-0 px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black">
                <option>Corporate event</option>
                <option>Wedding</option>
                <option>Birthday</option>
                <option>Other</option>
              </select>
            </label>
            <label className="block">
              <span className="text-gray-700">Additional details</span>
              <textarea className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black" />
            </label>
            <div className="block">
              <div className="mt-2">
                <div>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="border-gray-300 border-2 text-black focus:border-gray-300 focus:ring-black"
                    />
                    <span className="ml-2">
                      Email me news and special offers
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default App;
