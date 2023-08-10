import Faq from "./components/Faq";
import BoxDesktop from "./images/illustration-box-desktop.svg";

function App() {
  return (
    <div className="App bg-white rounded-xl">
      <Faq />
      <img
        className="absolute z-10 top-[25em] left-[24em] hidden 3xl:flex"
        src={BoxDesktop}
        alt=""
      />
    </div>
  );
}

export default App;
