import React from 'react'

export function Card({ className='', children }) {
  return <div className={`bg-white border border-gray-200 rounded-2xl shadow-sm ${className}`}>{children}</div>
}

export function CardHeader({ className='', children }) {
  return <div className={`p-4 border-b border-gray-100 ${className}`}>{children}</div>
}

export function CardTitle({ className='', children }) {
  return <h3 className={`font-bold text-gray-900 ${className}`}>{children}</h3>
}

export function CardDescription({ className='', children }) {
  return <p className={`text-gray-600 ${className}`}>{children}</p>
}

export function CardContent({ className='', children }) {
  return <div className={`p-4 ${className}`}>{children}</div>
}

export default Card
