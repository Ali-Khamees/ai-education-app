import React from 'react'

export function Badge({ variant='secondary', className='', children }) {
  const styles = variant === 'secondary'
    ? 'bg-gray-100 text-gray-800 border border-gray-200'
    : 'bg-blue-100 text-blue-800 border border-blue-200'
  return <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs ${styles} ${className}`}>{children}</span>
}

export default Badge
