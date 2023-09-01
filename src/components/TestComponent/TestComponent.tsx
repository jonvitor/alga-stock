import React, { useState, useEffect } from "react"
import './TestComponent.css'

function TestComponent(props: { name: string }) {
    const [age, setAge] = useState(23);

    useEffect(() => {
        console.log('Component has Created!')
    }, [])

    useEffect(() => {
        console.log('Age' + age + 'updated!')
    }, [age])

    return <div className="TestComponent">Olá, {props.name}, {age}
        <button onClick={() => {
            setAge(age + 1);
        }}>
            Aniversário
        </button>
    </div>;
}

export default TestComponent