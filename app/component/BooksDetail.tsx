'use client'
import { Fragment } from "react";
import {Dialog, Transition} from "@headlessui/react";
import Image from "next/image";

// dialog is the model open when we click on view more

// type script we make a new interface and add 
// a privouse interface and add some new properties
interface BookDetailsProps{
    isOpen: boolean;
    closeModel:()=>void;
    // car : CarProps;
}

const BooksDetail= ({isOpen , closeModel}:BookDetailsProps)=> {
  return (
    // appear is use to show something
   <Transition appear show={isOpen} >
    <Dialog as='div' className='relative z-10' onClose={closeModel}>
    <Transition.Child 
    as={Fragment}
    enter='ease-out duration-300'
    enterFrom='opacity-0'
    enterTo='opacity-100'
    leave='ease-in duration-200'
    leaveFrom='opacity-100'
    leaveTo='opacity-0'
    >
        <div className='fixed inset-0 bg-black
    bg-opacity-25' >

    </div>
    </Transition.Child>
    <div className=" fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full item-center
        justify-center p-4 text-center">
         
    <Transition.Child 
    as={Fragment}
    enter='ease-out duration-300'
    enterFrom='opacity-0 scale-95'
    enterTo='opacity-100 scale-100'
    leave='ease-in duration-200'
    leaveFrom='opacity-100'
    leaveTo='opacity-0'
    >
        <Dialog.Panel className='relative w-full max-w-lg
         max-h-[90vh] overflow-y-auto transform rounded-2xl
       bg-white p-6 text-left shadow-xl transition-all flex flex-col'>
            <button
            type="button"
            className="absolute top-2 right-2 z-10 w-fit p-2 
            bg-primary-blue-100 rounded-full"
            onClick={closeModel}
            >
                <Image src={'/close.svg'} alt="close image"
                width={20} height={20}/>
            </button>
            
          
            <div className="flex-1 flex flex-col gap-2">
                <h2 className="font-semibold text-xl capitalize">
                   hey
                </h2>
                
                <div className="mt-3 flex flex-wrap gap-4">
                    {/* we have to export keys and value */}
                    {/* you van export keys by object.entries */}
                  
                </div>
            </div>
        </Dialog.Panel>
    </Transition.Child>
        </div>
    </div>
    </Dialog>
   </Transition>
  )
}

export default BooksDetail;
