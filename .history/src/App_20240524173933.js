import "./App.css";
import Footer from "./Components/Footer/Footer";
import FAQs from "./Components/FAQs/FAQs";
import SignupHere from "./Components/SignupHere/SignupHere";
import CreateProfile from "./Components/CreateProfile/CreateProfile";

function App() {
  return (
    <>
      <SignupHere />
      <CreateProfile />
      <FAQs />
      <Footer />
    </>
  );
}

export default App;
