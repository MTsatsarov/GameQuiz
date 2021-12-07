import Header from "./Components/Header/Header"
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import  {AuthProvider}  from "./contexts/AuthContext";
import './App.css';
function App() {
  return (
    <AuthProvider>
    {/* <> */}
      <Header />
      <Main />
      <Footer/>
      {/* </> */}
     </AuthProvider>
  );
}

export default App;