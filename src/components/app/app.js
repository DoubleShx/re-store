import React from 'react'
import ErrorBoundry from '../error-boundry'
import Header from '../header'
import './app.css'

const App = () => {
    return (
        <div className="fluid bg-light">
            <ErrorBoundry>
                <Header itemsCount={4} priceOfItems={200}/>            
            </ErrorBoundry>
        </div>
    )
}

export default App