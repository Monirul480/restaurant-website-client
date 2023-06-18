import React, { useRef } from "react";
import ReactPrint from "react-to-print";

const Blog = () => {
  const print = useRef();

  return (
    <div
      className="mt-4 text-white"
      style={{
        backgroundImage: `url("https://i.ibb.co/6mKwYg0/15.jpg")`,
      }}
    >
      <div className="hero-overlay py-0 bg-opacity-60">
        <div className="py-4 border-b">
          <h2 className="text-xl font-semibold">Questions</h2>
        </div>
        {/* all questions will be here  */}
        <div>
          <ReactPrint
            trigger={() => (
              <button className="text-2xl py-1 px-3 rounded-md mt-5 ml-10 font-bold text-slate-950  bg-slate-300">
                Print
              </button>
            )}
            content={() => print.current}
          ></ReactPrint>
          <div>
            <div ref={print}>
              <div className="px-10 pb-12">
                <p className="text-center  text-white font-bold text-5xl">
                  Question and Answer blog
                </p>
                <p className="text-2xl mt-8">
                  1.{" "}
                  <span>
                    Tell us the differences between uncontrolled and controlled
                    components.
                  </span>
                </p>
                <p>
                  <span className="font-semibold text-xl">Answer :</span>
                  Controlled components manage their state using React state and
                  update it based on user input, while uncontrolled components
                  manage their own state internally and do not rely on React
                  state. Controlled components provide a more declarative
                  approach to handling user input, while uncontrolled components
                  provide a simpler and more flexible approach.
                </p>
                <p className="text-2xl mt-8">
                  2. <span>How to validate React props using PropTypes</span>
                </p>
                <p>
                  <span className="font-semibold text-xl">Answer :</span>When
                  developing a React application, you’ll need to structure and
                  define your props to avoid bugs and errors. Just like a
                  function might have mandatory arguments, a React component
                  might require a prop to be defined, otherwise, it will not
                  render properly. Forgetting to pass a required prop into a
                  component that needs it could cause your app to behave
                  unexpectedly.
                </p>
                <p className="text-2xl mt-8">
                  3.{" "}
                  <span>
                    Tell us the difference between nodejs and express js.
                  </span>
                </p>
                <p>
                  <span className="font-semibold text-xl">Answer :</span>Node.js
                  is a JavaScript runtime environment that allows developers to
                  run JavaScript code outside of a web browser. while Express.js
                  is a popular web framework built on top of Node.js. Node.js
                  provides the runtime environment, while Express.js provides a
                  layer of abstraction on top of Node.js, making it easier to
                  build web applications by providing features like routing,
                  middleware, and templating.
                </p>
                <p className="text-2xl mt-8">
                  4.{" "}
                  <span>
                    What is a custom hook, and why will you create a custom
                    hook?
                  </span>
                </p>
                <p>
                  <span className="font-semibold text-xl">Answer :</span> Custom
                  React JS hooks offer reusability as when a custom hook is
                  created, it can be reused easily, which makes the code cleaner
                  and reduces the time to write the code.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
