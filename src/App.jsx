import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Contador from "./context/Contador";
import UserContext from "./context/UserContext";
import CartContext from "./context/CartContext";


const App = () => {
  return (
    <>
    <UserContext>
        <CartContext>
          <Contador>
            <Header/>
            <Main/>
            <Footer />
          </Contador>
        </CartContext>
      </UserContext>
    </>
  );
};

export default App;