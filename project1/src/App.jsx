import reactImg from "./assets/react-core-concepts.png";
import componentImg from "./assets/components.png";
import { CORE_CONCEPTS } from "./data.js";

function Header() {
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        Fundamental React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function CoreConcept() {
  return (
    <li>
      <image src={CORE_CONCEPTS[0].title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}
function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title="Components"
              description="the core ui building block."
              img={componentImg}
            />

            <CoreConcept title="Props"
              description="the core ui building block."
              image={componentImg} />
            <CoreConcept title="Components"
              description="the core ui building block."
              image={componentImg} />
            <CoreConcept title="Components"
              description="the core ui building block."
              image={componentImg}/>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
