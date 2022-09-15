import './App.css';

const listItem = <li>
    <input type="checkbox"/> todo 1
    <button>delete todo</button>
</li>
function App() {


    return (
        <ul>
            <li>
                <input type="checkbox"/> learn React!
                <button>delete todo</button>
            </li>
            <li>
                <input type="checkbox" checked={true}/> Be awesome
                <button>delete todo</button>
            </li>
        </ul>
    );
}

export default App;
