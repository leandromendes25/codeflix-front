import React, { useEffect } from 'react'
'use client'
export default function Error({error, reset}: any) {
  useEffect(() => {
    console.log('Loggin error:', error)
  }, [error])
  return (
    <div className='text-red-500'>
      <h1 className="text-2xl font-bold">User error</h1>
      <div className="border border-dashed border-red-500">
        <p>Something went wrong with User</p>
      </div>
    </div>
  )
}
