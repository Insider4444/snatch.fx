'use client'

import { useState } from 'react'
import Image from 'next/image'

interface PaymentButtonProps {
  amount: string
  productName: string
  qrCodePath: string
}

export default function PaymentButton({ amount, qrCodePath }: PaymentButtonProps) {
  const [showQR, setShowQR] = useState(false)
  
  const upiUrl = `upi://pay?pa=8074023732@ybl&pn=snatchfx&am=${amount}&cu=INR`
  
  const isMobile = () => {
    if (typeof window === 'undefined') return false
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  }

  const buttonClasses = "neomorphic-button relative overflow-hidden text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 ease-in-out w-full md:w-auto transform hover:scale-105 shadow-neo"

  return (
    <div className="relative">
      {isMobile() ? (
        <a
          href={upiUrl}
          className={buttonClasses}
        >
          Pay ₹{amount}
        </a>
      ) : (
        <>
          <button
            onClick={() => setShowQR(!showQR)}
            className={buttonClasses}
          >
            Pay ₹{amount}
          </button>
          
          {showQR && (
            <div className="absolute top-full mt-4 p-4 bg-white rounded-lg shadow-lg z-20">
              <div className="w-48 h-48 relative">
                <Image
                  src={qrCodePath || "/placeholder.svg"}
                  alt="QR Code for payment"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <p className="text-black text-center mt-2">Scan this QR code with any UPI app to pay</p>
              <p className="text-xs text-gray-500 text-center mt-1">UPI ID: 8074023732@ybl</p>
            </div>
          )}
        </>
      )}
    </div>
  )
}

