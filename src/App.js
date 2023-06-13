import logo from './assets/logo.svg';
import './App.css';
import './landing_page/ComingSoonComponent'
import ComingSoonComponent from "./landing_page/ComingSoonComponent";
import MobileScreenshotsComponent from "./landing_page/MobileScreenshotsComponent";




function App() {
  return (
    <div
        className="App">
      {/*<header className="App-header">*/}
      {/*   */}
      {/*</header>*/}
      <ComingSoonComponent/>
      <MobileScreenshotsComponent/>
    </div>
  );
}


export default App;
