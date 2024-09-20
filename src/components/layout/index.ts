export * from './Layout'
export * from './page'

const myObject = {
  name: 'Gago',
  age: 30,
} satisfies { name: string; age: number }

myObject

// Type of 'myObject' remains inferred as { name: "John", age: 30 }
