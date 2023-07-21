import logo from './assets/logo.svg';
import './App.css';
import './landing_page/ComingSoonComponent'
// import ComingSoonComponent from "./landing_page/ComingSoonComponent";
// import MobileScreenshotsComponent from "./landing_page/MobileScreenshotsComponent";
import Home from './components/Home';
import Logo from './components/Logo';




function App() {
  return (
    <div
        className="App">
      {/*<header className="App-header">*/}
      {/*   */}
      {/*</header>*/}
      {/* <ComingSoonComponent/>
      <MobileScreenshotsComponent/> */}
      <Logo />
      <Home />
    </div>
  );
}


export default App;
