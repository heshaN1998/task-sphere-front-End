import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (<div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="bg-blue-600 text-white text-4xl font-bold px-10 py-6 rounded-xl shadow-xl">
        TaskSphere
      </div>
    </div>
  );
}

export default App
