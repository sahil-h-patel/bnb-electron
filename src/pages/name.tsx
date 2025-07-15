import { useUser } from "@/context/UserContext"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router"

export function Name() {
    const { name } = useUser();
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(1);

    useEffect(() => {
        if (countdown === 0) {
            navigate('/cart');
            return; 
        }
        const timer = setTimeout(() => {
            setCountdown((prevCountdown: number) => prevCountdown - 1);
        }, 1000); 

        return () => clearTimeout(timer);
    }, [countdown, navigate]); 

    return (
        <div className="flex w-[100vw] h-[100vh]">
            <h1 className="m-auto text-8xl">Welcome {name || 'Guest'}</h1>
        </div>
    )
}