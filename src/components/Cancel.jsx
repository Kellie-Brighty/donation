import React from 'react'
import { MdCancel } from "react-icons/md";

const Cancel = () => {
  return (
    <div>
        <div className="h-screen w-screen flex flex-col-reverse justify-center items-center">
                <p className="font-varela text-3xl text-center font-bold">
                  Your payment was declined. Please try again!
                </p>
                <MdCancel className="text-9xl text-red-500" />
              </div>
    </div>
  )
}

export default Cancel