import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`

function App() {
  return <>
    <GlobalStyle />
    <div>Hello World</div>
  </>;
}

export default App;
