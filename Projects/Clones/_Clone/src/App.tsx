import "./App.css"
import Header from "./components/Header"
import Home from "./components/Home"
import styled from "styled-components"

function App() {
    return (
        <Container>
            {/*<Header />*/}
            <Home />
        </Container>
    )
}

export default App

const Container = styled.div`
  height: 100vh;
`
