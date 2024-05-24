import "./App.css";
import Footer from "./Components/Footer/Footer";
import FAQs from "./Components/FAQs/FAQs";
import SignupHere from "./Components/SignupHere/SignupHere";
import CreateProfile from "./Components/CreateProfile/CreateProfile";
import WatchHere from "./Components/WatchHere/WatchHere";
import Downloads from "./Components/Downloads/Downloads";

function App() {
  return (
    <>
      <SignupHere />
      <Downloads />
      <WatchHere />
      <CreateProfile />
      <FAQs />
      <Footer />
    </>
  );
}

export default App;
