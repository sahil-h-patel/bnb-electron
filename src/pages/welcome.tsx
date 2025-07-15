import bnbLogo from '../assets/bnb.png'
import { Button } from '../components/ui/button'
import tapIcon from '../assets/tap.png'
import { Link } from 'react-router'
import { useUser } from '@/context/UserContext'

export function Welcome() {
    const { setName } = useUser(); 

    const handleTapCard = () => {
        const fetchedName = "Sahil"; 
        setName(fetchedName); 
    };

    return(
        <div className="flex flex-col gap-5">
            <h1 className="ml-4 my-4 text-4xl font-mono m-auto">Welcome</h1>
            <div className="flex gap-10 flex-col items-center">
                <img className='w-96 h-auto' src={bnbLogo}></img>
                <Link to="/name">
                    <Button onClick={handleTapCard} className='w-96 px-20 py-7 rounded-full text-xl'>
                        <img className='w-7 h-auto' src={tapIcon}></img>Tap Card to Continue
                    </Button>
                </Link>
            </div>
        </div>
    )
}