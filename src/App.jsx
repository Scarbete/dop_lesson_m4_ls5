import Button from './components/Button.jsx'
import Counter from './components/Counter.jsx'
import {useState} from 'react'


const App = () => {
    const [color, setColor] = useState('')

    const [books, setBooks] = useState([
        {id: 0, title: 'Book 1', completed: false},
        {id: 1, title: 'Book 2', completed: false},
        {id: 2, title: 'Book 3', completed: true},
    ])

    const setColorRed = () => setColor('red')
    const setColorGreen = () => setColor('green')
    const setColorBlue = () => setColor('blue')

    return (
        <div style={{ background: color }}>
            {books.map(item => (
                <div key={item.id}>
                    <h2>{item.title}</h2>
                    <p>ID: {item.id}</p>
                </div>
            ))}
            <Counter/>
            <Counter/>
            <Button text={'red'} onClick={setColorRed} />
            <Button text={'green'} onClick={setColorGreen} />
            <Button text={'blue'} onClick={setColorBlue} />
        </div>
    )
}

export default App