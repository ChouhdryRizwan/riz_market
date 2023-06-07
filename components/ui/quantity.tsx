'use client'
import { useState } from "react"
import toast from "react-hot-toast";

interface IQty {
    minQuantity: number
}

export default function Quantity({ minQuantity }: IQty) {
    let [currentQuatity, setCurrentQuantity] = useState(1);
    const inc = () => {
        if (currentQuatity > minQuantity) {
            console.log(`Quantity can't exceed than ${minQuantity}`)
            toast.error(`Quantity can't exceed than ${minQuantity}`)
        } else {
            setCurrentQuantity(currentQuatity++);
        }
    }
    const dec = () => {
        if (currentQuatity == 1) {
            toast.error("Quantity can't be less than 01.")
            setCurrentQuantity(1);
        } else {
            setCurrentQuantity(currentQuatity--);
        }
    }
    return (
        <div className="flex flex-row gap-x-6 items-center mt-4">
            <h2 className="text-sm font-bold text-gray-900">QUANTITY: </h2>
            <div className="space-x-3">
                <span className="bg-gray-200 px-3 py-2 font-bold rounded-full cursor-pointer" onClick={() => dec()}> -</span> <span className="border-b-2 border-gray-200 px-4">{currentQuatity}</span>
                <span className="bg-gray-200 px-3 py-2 font-bold rounded-full cursor-pointer" onClick={() => inc()}>+</span>
            </div>
        </div>
    )
}