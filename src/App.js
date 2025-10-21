import React from "react";
import SignUpForm from "./SignUpForm";
function App() {

  return (
    <div>
      <section className="showcase">
        <div className="overlay">
          <article>
            <h1> Learn to code by watching others</h1>
            <p>
              See how experienced developers solve problems in real-time.
              Watching scripted tutorials is great, but understanding how
              developers think is invaluable.{" "}
            </p>
          </article>

          <article>
            <p className="tag">
              <strong>Try it free 7 days </strong> then $20/mo. thereafter
            </p>

          <SignUpForm/>
          </article>
        </div>
      </section>
    </div>
  );
}

export default App;
