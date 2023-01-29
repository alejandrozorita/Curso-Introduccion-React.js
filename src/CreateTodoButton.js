import './CreateTodoButton.css';

function CreateTodoButton() {

    const onClickButton = (msg) => {
        alert(msg)
    }
    return (
        <button
            className="CreateTodoButton"
            onClick={() => onClickButton('aquí debería abrirse la modal')}
        >+</button>
    );
}

export { CreateTodoButton };