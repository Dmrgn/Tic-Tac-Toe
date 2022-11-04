import "./Square.css";

function Square(props) {
    function emitClicked(e) {
        e.preventDefault();
        console.log("click");
        props.makeMove(props.x, props.y);
    }

    return (
        <div className="square" onClick={emitClicked}>
            <h2 className="text-8xl">{props.board[props.y][props.x]}</h2>
        </div>
    );
}

export default Square;