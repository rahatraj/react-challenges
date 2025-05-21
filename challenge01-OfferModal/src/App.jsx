import { useState } from 'react'
import './App.css'
import OfferModal from './components/OfferModal'


function App() {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen((prev)=> !prev)
  }
  return (
    <div className='w-full'>
        {isOpen ? (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <OfferModal setIsOpen={setIsOpen} />
            </div>
          ) : (
            <button onClick={handleOpen} className="bg-blue-600 text-white px-4 py-2 rounded">
              Show Offer
            </button>
        )}
    </div>
  )
}

export default App
