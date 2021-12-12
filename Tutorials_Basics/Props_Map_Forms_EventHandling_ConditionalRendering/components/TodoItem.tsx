const TodoItem = (props: any) => {
    return (
        <div>
            <input
                type="checkbox"
                onChange={() => console.log("changed")}
                checked={props.item.completed}
                style={inputCSS}
            ></input>
            <p>{props.item.text}</p>
            <br></br>
        </div>
    )
}

const inputCSS = {
    display: "flex",
    flex: "column",
    alignItems: "center",
    margin: 0,
}

export default TodoItem
