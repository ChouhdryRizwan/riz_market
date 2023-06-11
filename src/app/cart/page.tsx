'use client';
import { PaperClipIcon } from '@heroicons/react/20/solid'
import Image from "next/image";
import Quantity from '../../../components/ui/quantity';
import { useCart } from '@/lib/CartContext';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineShopping } from 'react-icons/ai';
import { HiOutlineTrash } from 'react-icons/hi';
import { urlForImage } from '../../../sanity/lib/image';
import { Item } from '@radix-ui/react-menubar';

export default function CartPage() {
    const { cartItems, removeFromCart, addToCart, ReducefromCart } = useCart();

    const prodTotalPrice = () => {
        let totalPrice: number = 0;
        cartItems.map(item => (
            totalPrice += Number(item.product.prod_price * item.quantity)
        ))
        return Number(totalPrice);
    }
    prodTotalPrice();
    return (
        <>
            <div>
                <div className='relative'>
                    <span className='text-7xl font-bold opacity-10 text-gray-400 tracking-wide'>Shopping</span>
                    <span className='text-3xl font-bold absolute left-0 top-5'>Cart</span>
                    <hr className='text-gray-500 mt-5' />
                </div>
                <hr className='text-gray-500 mt-5' />
                <div className="mt-6 flex space-x-5 items-center">


                    <div className={cartItems.length < 1 ? 'mx-auto' : ''}>
                        <div className=''>
                            {cartItems.length < 1 && (
                                <div className='flex flex-col justify-center items-center'>
                                    <AiOutlineShopping size={150} />
                                    <h1 className='text-2xl font-bold text-gray-500'>Your shopping bag is empty</h1>
                                </div>
                            )}
                        </div>
                    </div>


                    <div className='flex flex-col'>
                        {cartItems.map(item => (

                            <>
                                <div className='flex gap-10 w-[100%] my-3'>
                                    <div className='bg-gray-100 h-[200px] w-[30%] rounded-2xl'>
                                        <Image className='h-[100%] w-[100%] object-contain object-center' src={urlForImage(item.product.prod_image).url()} alt="Cart Images" width={150} height={150} />
                                    </div>
                                    <div className='w-[60vw]'>
                                        <div className='flex justify-between'>
                                            <span className='text-xl font-bold'>{item.product.product_name}</span>
                                            <span className='text-red-600 cursor-pointer' onClick={() => removeFromCart(item.product._id)}>Delete</span>
                                        </div>
                                        <div>
                                            <span className='inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-blue-600 ring-1 ring-inset ring-blue-500/10 mt-1'>{item.product.cat_name}</span>
                                        </div>
                                        <div className='mt-3'>
                                            <span className='text-lg font-bold text-gray-400'>Delivery Estimation</span>
                                        </div>
                                        <div>
                                            <span>5 Working Days</span>
                                        </div>
                                        <div className='flex justify-between mt-3'>
                                            <span className='font-bold text-lg'>Rs. {item.product.prod_price}</span>
                                            <div className="space-x-3">
                                                <span onClick={() => ReducefromCart(item.product)} className="bg-gray-200 px-3 py-2 font-bold rounded-full cursor-pointer">-</span>
                                                <span className="border-b-2 border-gray-200 px-4">{item.quantity}</span>
                                                <span onClick={() => addToCart(item.product)} className="bg-gray-200 px-3 py-2 font-bold rounded-full cursor-pointer">+</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>
                </div>
                {cartItems.length >= 1 && (
                    <div className='h-[200px] w-[25%] rounded-2xl space-y-5'>
                        <form action="/api/order" method='POST'>
                            <div><span className='text-xl font-bold'>Order Summary</span></div>
                            <div className='flex justify-between'><span className='text-lg'>Quantity</span><span className='font-semibold'>{cartItems.length} Product</span></div>
                            <div className='flex justify-between'><span className='text-lg'>Sub Total</span><span className='font-semibold'>{prodTotalPrice()}</span></div>
                            <div>
                                <button type="submit" className="bg-white hover:bg-gray-800 hover:text-gray-100 text-gray-800 font-semibold py-2 px-5 border border-gray-400 rounded-lg shadow flex gap-2">
                                    Proceed to Checkout
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </>
    );
}
