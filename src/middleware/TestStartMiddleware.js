import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const TestStartMiddleware = ({children}) => {
    const state = useSelector(state => state.userReducer)

    if(state.start===1 && state.end===0){
        return (
            <>
                {children}
            </>
          )
    }
    return <Navigate to={'/'} replace />;
}

export default TestStartMiddleware