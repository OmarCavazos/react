import { createGlobalStyle } from "styled-components";
import { Main } from "./componentes/main/Main";
import Header from "./header/Header";
import ProductsContainer from "./header/productsContainer/ProductsContainer";


const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body,
#root {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  background-color: gray;

}
`;

function App() {

  return (
    <>
      <GlobalStyle />
      <Header/>
      <Main />
    </>
  );
}
export default App;