import { useState } from 'react'; 

export default function Home() {
  const [number, setNumber] = useState(0)
  return (
    <div>{number}
    <button onClick={() => setNumber(number + 1)}>increment</button>
    <button onClick={() => setNumber(number -1 )}>decrement</button>
    </div>
  )
}
