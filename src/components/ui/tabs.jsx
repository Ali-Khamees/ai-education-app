/* Tabs بسيطة: Tabs, TabsList, TabsTrigger, TabsContent */
/* usage:
<Tabs value={value} onValueChange={setValue}>
  <TabsList>
    <TabsTrigger value="a">A</TabsTrigger>
    <TabsTrigger value="b">B</TabsTrigger>
  </TabsList>
  <TabsContent value="a">...</TabsContent>
  <TabsContent value="b">...</TabsContent>
</Tabs>
*/
import React, { createContext, useContext } from 'react'

const TabsContext = createContext({ value: '', onValueChange: () => {} })

export function Tabs({ value, onValueChange, children }) {
  return <TabsContext.Provider value={{ value, onValueChange }}>{children}</TabsContext.Provider>
}

export function TabsList({ className='', children }) {
  return <div className={`flex gap-2 ${className}`}>{children}</div>
}

export function TabsTrigger({ value, className='', children }) {
  const ctx = useContext(TabsContext)
  const active = ctx.value === value
  const base = 'flex-1 text-center px-3 py-2 rounded-xl text-sm cursor-pointer transition'
  const styles = active ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
  return <button className={`${base} ${styles} ${className}`} onClick={() => ctx.onValueChange(value)}>{children}</button>
}

export function TabsContent({ value, className='', children }) {
  const ctx = useContext(TabsContext)
  if (ctx.value !== value) return null
  return <div className={className}>{children}</div>
}
