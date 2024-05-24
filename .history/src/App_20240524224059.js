import "./App.css";
import Footer from "./Components/Footer/Footer";
import FAQs from "./Components/FAQs/FAQs";
import SignupHere from "./Components/SignupHere/SignupHere";
import Header from "./Components/Header/Header";
import CreateProfile from "./Components/CreateProfile/CreateProfile";
import WatchHere from "./Components/WatchHere/WatchHere";
import Downloads from "./Components/Downloads/Downloads";
import Enjoy from "./Components/Enjoy/Enjoy";

function App() {
  return (
    <>
      <SignupHere />
      <Header />
      <Enjoy />
      <Header />
      <Downloads />
      <Header />
      <WatchHere />
      <Header />
      <CreateProfile />
      <Header />
      <FAQs />
      <Header />
      <Footer />
    </>
  );
}

export default App;
