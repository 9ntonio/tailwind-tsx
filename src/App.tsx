import React from "react";
import "./App.scss";
import AntForm from "./ant/AntForm";

const App = (): JSX.Element => (
  <section className="subpixel-antialiased text-gray-900 px-6">
    <div className="lg:max-w-screen-xl md:max-w-lg mx-auto py-12 divide-y">
      <div className="grid grid-rows-1 grid-flow-col auto-cols-max mb-6 flex justify-center">
        <h1 className="font-serif pr-8 mb-0">¡Howdy! Tailwind CSS</h1>
        <a
          href="https://tailwindcss.com/docs"
          target="_blank"
          rel="noopener noreferrer"
          className="ant-btn btn--primary my-auto"
        >
          Documentation
        </a>
      </div>

      <article className="mx-auto text-center p-6 prose lg:prose-2xl">
        <h1>Garlic bread with cheese: What the science tells us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae
          tortor condimentum lacinia quis vel. Malesuada fames ac turpis egestas
          integer eget aliquet nibh. Tristique nulla aliquet enim tortor at
          auctor urna nunc.{" "}
          <a
            href="https://tailwindcss.com/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Placerat
          </a>{" "}
          duis ultricies lacus sed turpis tincidunt id. Eget velit aliquet
          sagittis id consectetur purus ut. Enim sed faucibus turpis in. Duis
          tristique sollicitudin nibh sit amet commodo nulla facilisi. Nullam
          non nisi est sit amet facilisis magna etiam tempor. Tortor consequat
          id porta nibh venenatis cras. At tempor commodo ullamcorper a lacus
          vestibulum sed arcu non. Phasellus vestibulum lorem sed risus
          ultricies tristique nulla aliquet. Sed turpis tincidunt id aliquet
          risus feugiat in. Non arcu risus quis varius quam quisque id diam vel.
        </p>
      </article>

      <div className="py-12">
        <h2 className="text-2xl font-bold">Ant Design</h2>
        <p className="mt-2 text-lg text-gray-600">
          This is how form elements look out of the{" "}
          <strong>
            <a
              href="https://ant.design/docs/react/customize-theme"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ant Design
            </a>
          </strong>{" "}
          box.
        </p>
        <div className="mt-8 max-w-xl">
          <div className="grid grid-cols-1 gap-6">
            <AntForm />
          </div>
        </div>
      </div>

      <div className="py-12">
        <h2 className="text-2xl font-bold">Unstyled</h2>
        <p className="mt-2 text-lg text-gray-600">
          This is how form elements look out of the box.
        </p>
        <div className="mt-8 max-w-xl">
          <div className="grid grid-cols-1 gap-6">
            <label className="block">
              <span className="text-gray-700">Full name</span>
              <input
                type="text"
                className="mt-1 block w-full"
                placeholder="placeholder"
              />
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
                placeholder="placeholder"
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
