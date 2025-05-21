import React, { useState } from 'react';

function OfferModal({ setIsOpen }) {
  const [isAccept, setIsAccept] = useState(false);

  const handleAccept = () => setIsAccept(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div className='relative bg-gray-900 p-10 rounded-2xl shadow-lg w-[90%] max-w-xl mx-auto text-white'>
      <button
        onClick={handleClose}
        className='absolute top-4 left-4 text-xl text-white hover:text-red-500'
      >
        &times;
      </button>

      {!isAccept ? (
        <div className="mt-10 text-center">
          <div className="mb-5">
            Click the button below to accept our amazing offer!
          </div>
          <button
            onClick={handleAccept}
            className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded"
          >
            Accept Offer
          </button>
        </div>
      ) : (
        <div className="mt-10 text-center text-green-400 text-lg font-semibold">
           Offer Accepted! ✅
        </div>
      )}
    </div>
  );
}

export default OfferModal;
