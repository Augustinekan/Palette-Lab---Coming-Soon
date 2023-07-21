import logo from './assets/logo.svg';
import './App.css';
import './landing_page/comingSoon'
import ComingSoonComponent from "./landing_page/ComingSoonComponent";
import MobileScreenshotsComponent from "./landing_page/MobileScreenshotsComponent";




function App() {
  return (
    <div
        className="App">
      <header className="App-header">

      </header>
      <ComingSoonComponent/>
      <MobileScreenshotsComponent/>
      <comingSoon />
    </div>
  );
}


export default App;
