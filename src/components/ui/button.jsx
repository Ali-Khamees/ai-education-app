/* بسيط: زر */
/* usage: <Button variant="default|ghost|outline" size="sm|md" className="" onClick={...}>... */
import React from 'react'

const variants = {
  default: 'bg-blue-600 text-white hover:bg-blue-700',
  ghost: 'bg-transparent text-gray-700 hover:bg-gray-100',
  outline: 'border border-gray-300 text-gray-800 hover:bg-gray-50',
}
const sizes = {
  sm: 'px-3 py-2 text-sm rounded-xl',
  md: 'px-4 py-2 text-base rounded-xl',
}

export function Button({ variant='default', size='md', className='', ...props }) {
  const cls = `${variants[variant] || variants.default} ${sizes[size] || sizes.md} transition-all ${className}`
  return <button className={cls} {...props} />
}

export default Button
