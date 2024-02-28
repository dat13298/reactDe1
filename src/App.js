import "./App.css";
import Counter from "./counter";
import HeaderComponent from "./Header";
import NavigationComponent from "./Navigation";
import FooterComponent from "./Footer";


function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <NavigationComponent />
      {/* counter App */}
      <Counter />

      <FooterComponent />
    </div>
  );
}

export default App;
