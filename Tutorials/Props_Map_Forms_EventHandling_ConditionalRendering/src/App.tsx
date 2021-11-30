import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Header from "../components/Header"
import Footer from "../components/Footer"
import MainContent from "../components/MainContent"

const App = () => {
    return (
        //className = class CSS
        <div className="m-4 col">
            <Header titolo="TODO LIST LOGIN" />
            <MainContent />
            <Footer />
        </div>
    )
}

export default App
