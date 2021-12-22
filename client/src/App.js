import Header from "./Components/Header/Header"
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import LeftAside from "./Components/Left Aside/LeftAside";
import { AuthProvider } from "./contexts/AuthContext";

import './App.css';
function App() {
  require('dotenv').config()
  return (
    <AuthProvider>
      <Header />
      <div className="main-container">
      <LeftAside />
      <Main />
      </div>
      <Footer />
    </AuthProvider>
  );
}

export default App;