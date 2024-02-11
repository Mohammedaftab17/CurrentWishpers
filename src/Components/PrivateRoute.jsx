import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'

function PrivateRoute() {
 const {user} =  useSelector((state) =>  state.Auth)
 const dispatch = useDispatch()

  return (
    <>
    {user ? <Outlet/> : <Navigate to='/login' />}
    </>
  )
}

export default PrivateRoute
