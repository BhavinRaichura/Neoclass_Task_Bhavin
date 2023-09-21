import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const TestEndMiddleware = ({children}) => {
    const state = useSelector(state => state.userReducer)

    if( state && state.end===1){  
        return (
            <>
                {children}
            </>
          )
        }
    return <Navigate to={'/'} replace />;
}

export default TestEndMiddleware