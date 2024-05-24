import "./App.css";
import Footer from "./Components/Footer/Footer";
import FAQs from "./Components/FAQs/FAQs";
import SignupHere from "./Components/SignupHere/SignupHere";
import CreateProfile from "./Components/CreateProfile/CreateProfile";
import WatchHere from "./Components/WatchHere/WatchHere";

function App() {
  return (
    <>
      <SignupHere />
      <WatchHere />
      <CreateProfile />
      <FAQs />
      <Footer />
    </>
  );
}

export default App;
