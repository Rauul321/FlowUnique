// src/pages/HomePage.jsx

import { useState } from 'react'
import flowLogo from '../assets/logo.PNG'
import '../App.css'

function HomePage({ handleNavigation }) {

    const [count, setCount] = useState(0)

    return (
        <div>
            <div>
                <img src={flowLogo} className="logo" alt="FlowUnique logo"/>
            </div>
            <div className="card">
                <button onClick={handleNavigation}>
                    Discover FlowUnique
                </button>
            </div>

        </div>
    )
}

export default HomePage