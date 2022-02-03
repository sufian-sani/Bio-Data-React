import logo from "./logo.svg";
import "./App.css";
import BioData from "./components/BioData";
// import Counter from "./components/Counter";

const names = ["Setu Vai", "Sumit Via", "Foyzul Vai"];

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}

      <BioData
        name="Mahir asif"
        email="asifmahir@gmail.com"
        mobile="46464684"
        linkdin="gahkhkh"
        github="shkhkh"
        skills={["js", "node", "react"]}
        interests={["DS ALGO", "GO"]}
      />

      <hr />
      <hr />

      <BioData
        name="Setu"
        email="satu@gmail.com"
        mobile="0128557455"
        linkdin="satu"
        github="satu"
        skills={["js", "node", "wordpress"]}
        interests={["php"]}
      />

      <hr />
      <hr />

      <BioData
        name="Abu"
        email="rahian@gmail.com"
        mobile="01288887777"
        linkdin="rahian"
        github="rahian"
        skills={["js", "react", "django"]}
        interests={["php", "Wordpress"]}
      />
    </div>
  );
}

export default App;
