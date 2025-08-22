import './App.css'
import Dashboard from './components/Dashboard/Dashboard'
import Header from './components/Header'

function App() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* Fixed height header */}
      <Header />

      {/* Dashboard fills remaining space */}
      <div className="flex-1 overflow-hidden">
        <Dashboard />
      </div>
    </div>
  )
}

export default App
