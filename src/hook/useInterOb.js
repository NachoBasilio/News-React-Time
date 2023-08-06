import { useEffect, useRef, useState } from "react";

export default function useInterOb(options){
    const [elements, setElements] = useState([])
    const [entry, setEntry] = useState({})
    const [isIntersecting, setIsIntersecting] = useState(false)

    const observer = useRef(new IntersectionObserver((ObservedEntries)=>{
        if(ObservedEntries[0].isIntersecting){
            setIsIntersecting(!isIntersecting)
            console.log("se ve")
        }else{
            setIsIntersecting(false)
            console.log("no se ve")
        }
        setEntry(ObservedEntries)
    }, options))


    useEffect(()=>{
        const currentObserver = observer.current
        currentObserver.disconnect()
        if(elements.length > 0){
            elements.forEach(element => currentObserver.observe(element))
        }
        return function cleanup(){
            if (currentObserver){
                currentObserver.disconnect()
            }
        }
    }, [elements])

    return [
        observer.current,
        setElements,
        entry,
        isIntersecting
    ]
}