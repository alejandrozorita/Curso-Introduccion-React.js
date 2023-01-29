import './TodoList.css';

function TodoList(propos) {
    return (
        <section>
            <ul>
                {propos.children}
            </ul>
        </section>
    );
}

export { TodoList }