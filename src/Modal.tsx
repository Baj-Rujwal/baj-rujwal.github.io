import type { Dispatch, SetStateAction } from "react"

const Modal = ({ children, setIsOpen }: { children: React.ReactNode, setIsOpen: Dispatch<SetStateAction<boolean>> }) => {
    return (
        <>
            <div className="opacity-80 z-40 fixed top-0 left-0 h-screen w-screen bg-black">
            </div>
            <div className="flex flex-col fixed top-5 left-3/12 z-50 p-5 backdrop-blur-2xl items-start bg-[#161a22] min-h-2/3 w-6/12 rounded-2xl shadow-2xl shadow-amber-600 inset-shadow-sm inset-shadow-indigo-500/50">
                <div className="flex-1">
                    {children}
                </div>
                <button className='cursor-pointer' onClick={() => setIsOpen(false)}>Close</button>
            </div>
        </>
    )
}

export default Modal