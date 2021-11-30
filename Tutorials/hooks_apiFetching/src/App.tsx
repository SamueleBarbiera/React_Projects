import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import State from "../components/State"
import Ref from "../components/Ref"
import Reducer from "../components/Reducer"
import Memo from "../components/Memo"
import LayoutEffect from "../components/LayoutEffect"
import ImperativeHandle from "../components/useImperativeHandle/ImperativeHandle"
import Effect from "../components/Effect"
import Context from "../components/Context"
import CallBack from "../components/useCallback/CallBack"

function App() {
    return (
        <div className="row m-4">
            <h1 style={header}>Test Hooks</h1>
            <div className="col">
                <div style={hooksMargin}>
                    <h3 style={hooksHeader}>useState()</h3>
                    <State />
                    <br></br>
                    <hr></hr>
                </div>
                <div style={hooksMargin}>
                    <h3 style={hooksHeader}>useEffect()</h3>
                    <Effect />
                    <br></br>
                    <hr></hr>
                </div>
                <div style={hooksMargin}>
                    <h3 style={hooksHeader}>useRef()</h3>
                    <Ref />
                    <br></br>
                    <hr></hr>
                </div>
                <div style={hooksMargin}>
                    <h3 style={hooksHeader}>useReducer()</h3>
                    <Reducer />
                    <br></br>
                    <hr></hr>
                </div>
            </div>
            <div className="col">
                <div style={hooksMargin}>
                    <h3 style={hooksHeader}>useMemo()</h3>
                    <Memo />
                    <br></br>
                    <hr></hr>
                </div>
                <div style={hooksMargin}>
                    <h3 style={hooksHeader}>useLayoutEffect()</h3>
                    <LayoutEffect />
                    <br></br>
                    <hr></hr>
                </div>
                <div style={hooksMargin}>
                    <h3 style={hooksHeader}>useImperativeHandle()</h3>
                    <ImperativeHandle />
                    <br></br>
                    <hr></hr>
                </div>
                <div style={hooksMargin}>
                    <h3 style={hooksHeader}>useContext()</h3>
                    <Context />
                    <br></br>
                    <hr></hr>
                </div>
            </div>
            <div style={hooksMargin}>
                <h3 style={hooksHeader}>useCallback()</h3>
                <CallBack />
                <br></br>
                <hr></hr>
            </div>
        </div>
    )
}

const header = {
    color: "blue",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}

const hooksHeader = {
    color: "blue",
    display: "flex",
    justifyContent: "left",
    alignItems: "left",
}

const hooksMargin = {
    margin: 10,
}

export default App
