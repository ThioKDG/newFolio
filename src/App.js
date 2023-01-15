import GlobalStyle from "./assets/GlobalStyle";
import Diagram from "./components/Diagram";
import FlowList from "./components/FlowList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ImgCont from "./components/ImgCont";
import InstarList from "./components/InstarList";
import MapKakao from "./components/MapKakao";
import Tapbox from "./components/Tapbox";
import Youtube from "./components/Youtube";
import './assets/css/font.css'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Tapbox />
      <Youtube />
      <ImgCont />
      <Diagram />
      <FlowList />
      <MapKakao />
      <InstarList />
      <Footer />
    </>
  );
}

export default App;