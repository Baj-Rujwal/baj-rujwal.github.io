import type { Dispatch, SetStateAction } from "react"

const Modal = ({ children, setIsOpen }: { children: React.ReactNode, setIsOpen: Dispatch<SetStateAction<boolean>> }) => {
    return (
        <>
            <div className="opacity-80 z-40 fixed top-0 left-0 h-screen w-screen bg-black">
            </div>
            <div className="flex flex-col fixed top-5 sm:left-3/12 left-1/12 z-50 p-5 backdrop-blur-2xl items-start bg-[#161a22] \
                min-h-2/3 max-h-8/12 sm:w-6/12 w-10/12 rounded-2xl shadow-2xl shadow-amber-600 inset-shadow-sm inset-shadow-indigo-500/50 \
                overflow-scroll"
            >
                <div className="flex-1">
                    {children}
                </div>
                <button className='cursor-pointer p-1 ring-1 w-26 rounded-2xl bg-[#3b65e2] hover:bg-[#c91b68]' onClick={() => setIsOpen(false)}>Close</button>
            </div>
        </>
    )
}

export default Modal