import { render } from "react-dom"
import TodoItem from "./TodoItem"
import todoJson from "./todoJson"
import Forms from "./Forms"
import ConditionalRendering from "./ConditionalRendering"

function MainContent() {
    //creiamo un array usando il json
    const todoItems = todoJson.map((item: { id: any }) => (
        <TodoItem key={item.id} item={item} />
    ))
    let count: number = 0
    return (
        <div>
            {/*
            {todoItems}
            <button
                onClick={function () {
                    {
                        console.log(count++)
                    }
                }}
            >
                click me
            </button>
            */}
            <Forms />
            <ConditionalRendering />
        </div>
    )
}

export default MainContent
