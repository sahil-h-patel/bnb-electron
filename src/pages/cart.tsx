import Item from "@/components/item"
import mock_image from '../assets/mock_image.svg'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sidebar } from "@/components/sidebar"

const items = [
    {
        name: "Reeses King Size",
        image_url: mock_image,
        price: 5.00,
        quantity: 1,
        summary: {
            calories: 200,
            description: 'A chocolate cup filled with peanut butter'
        }
    }, 
    {
        name: "Snickers",
        image_url: mock_image,
        price: 2.00,
        quantity: 2,
        summary: {
            calories: 200,
            description: 'a chocolate bar consisting of nougat, peanuts, and caramel, all coated in milk chocolatey'
        }
    }, 
    {
        name: "Sour Skittles",
        image_url: mock_image,
        price: 3.00,
        quantity: 3,
        summary: {
            calories: 200,
            description: 'a tangy twist on the classic Skittles candy, offering a mix of fruity flavors with a sour coating'
        }
    }, 
    {
        name: "Sour Skittles",
        image_url: mock_image,
        price: 3.00,
        quantity: 3,
        summary: {
            calories: 200,
            description: 'a tangy twist on the classic Skittles candy, offering a mix of fruity flavors with a sour coating'
        }
    },
    {
        name: "Sour Skittles",
        image_url: mock_image,
        price: 3.00,
        quantity: 3,
        summary: {
            calories: 200,
            description: 'a tangy twist on the classic Skittles candy, offering a mix of fruity flavors with a sour coating'
        }
    },
]

export function Cart() {
    const isEmpty = items.length === 0
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="flex flex-row justify-between h-screen">
            <div className="flex flex-col gap-5 m-3 w-[70%]">
                <h1 className="text-4xl font-mono left">Cart</h1>
                <div className="flex flex-row justify-between">
                    <p className="font-mono">Your cart</p>
                    {isEmpty ? null: <p className="font-semibold">Subtotal: ${subtotal.toFixed(2)}</p>
}
                </div>
                {isEmpty ? <p className="flex text-center text-lg mx-auto my-28">Welcome [Y/N] <br/>Your cart is empty, please grab your snacks<br/>from the cabinet to start.<br/>We’ll do the rest</p> :
                <ScrollArea className="flex-1 overflow-auto">
                    <div className="flex gap-5 flex-col items-center">
                    {items.map((item, i) => (
                        <Item key={i} {...item}></Item>
                    ))}
                    </div>
                </ScrollArea>
                }
            </div>
            <Sidebar variant="cart"></Sidebar>
        </div>
    )
}