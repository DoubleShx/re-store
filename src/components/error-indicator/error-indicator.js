import React from 'react'

function ErrorIndicator(props)  {
    const {errorMessage} = props
    
    return(
        <div className="text-center p-5">
            <h1>We Have detected some Errors</h1>
            <h1><b>{errorMessage}</b></h1>
        </div>
    )
}
export default ErrorIndicator;