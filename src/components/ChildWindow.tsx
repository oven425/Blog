import * as React from 'react'

import { ReactNode, forwardRef, useImperativeHandle, useState } from 'react'
type ChildWindow_Props = {
    children: ReactNode,
    title?: string
    isShowCloseButton?: boolean
}

export interface ChildWindow_Ref {
    open: () => void,
    close: () => void,
}

const ChildWindow = forwardRef<ChildWindow_Ref, ChildWindow_Props>((props, ref) => {
    const [isShow, setIsShow] = useState(false)

    useImperativeHandle(ref, () => {
        return {
            open() {
                setIsShow(x => true)
            },
            close() {
                setIsShow(x => false)
            },
        }
    }, [])

    return (
        <div className={
            `${isShow ? "block" : "hidden"} fixed left-0 top-0 w-screen h-screen bg-green-600 bg-opacity-50`
        } >
            <div className='flex justify-center items-center h-full'>
                <div className='  border-8 border-gray-800 rounded-xl'>
                    <div className='flex bg-slate-700 justify-between'>
                        <div className=' text-white '>{props.title}</div>
                        <svg viewBox="0 0 16 16" className=' h-3 w-3' xmlns="http://www.w3.org/2000/svg">
                            <line className=" bg-white" x1="7" x2="25" y1="7" y2="25" />
                            <line className="cls-1" x1="7" x2="25" y1="25" y2="7" />
                        </svg>
                    </div>

                    {props.children}
                </div>
            </div>

        </div>)
})

export default ChildWindow



//https://blog.logrocket.com/using-react-children-prop-with-typescript/
//https://juejin.cn/post/7242209076359790651