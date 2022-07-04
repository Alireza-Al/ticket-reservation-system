import React from 'react'

function ErrorPage() {
    return (
        <div style={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            flexDirection:'column',
            height:'70vh'
        }}>
            <h1>
                404
            </h1>
            <p>
                This is not the page you are looking for
            </p>
        </div>
    )
}

export default ErrorPage