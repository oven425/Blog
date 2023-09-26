import * as React from 'react'
import { ReactNode, forwardRef, useImperativeHandle, useState } from 'react'
type ChildWindow_Props = {
    children: ReactNode,
    isShowCloseButton?:boolean
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
                setIsShow(x=>true)
            },
            close() {
                setIsShow(x=>false)
            },
        }
    }, [])

    return (
        <div className={
            `${isShow ? "block" : "hidden"} fixed left-0 top-0 w-screen h-screen bg-green-600 opacity-70`
        } >
            <div className='flex'>
                <div className=' bg-slate-300'>
                {props.children}
                </div>
            </div>
            
        </div>)
})

export default ChildWindow



//https://blog.logrocket.com/using-react-children-prop-with-typescript/
//https://juejin.cn/post/7242209076359790651