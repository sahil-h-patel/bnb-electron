import Item from "@/components/item"
import { ScrollArea } from "@/components/ui/scroll-area"

const items = [
    {
        name: "Reeses King Size",
        image_url: "https://picsum.photos/id/237/75/75",
        price: 5.00,
        quantity: 1,
    }, 
    {
        name: "Snickers",
        image_url: "https://picsum.photos/id/237/75/75",
        price: 2.00,
        quantity: 2,
    }, 
    {
        name: "Sour Skittles",
        image_url: "https://picsum.photos/id/237/75/75",
        price: 3.00,
        quantity: 3,
    }, 
    {
        name: "Sour Skittles",
        image_url: "https://picsum.photos/id/237/75/75",
        price: 3.00,
        quantity: 3,
    },
    {
        name: "Sour Skittles",
        image_url: "https://picsum.photos/id/237/75/75",
        price: 3.00,
        quantity: 3,
    },
]

export function Cart() {
    return (
        <div className="flex flex-row justify-between">
            <div className="flex flex-col gap-5 mx-4 my-2 w-3/5 h-[100vh]">
                <h1 className="text-4xl font-mono left">Cart</h1>
                <ScrollArea className="flex-1 overflow-auto">
                    <div className="flex gap-10 flex-col items-center">
                    {items.map((item) => (
                        <Item {...item}></Item>
                    ))}
                    </div>
                </ScrollArea>
            </div>
            <div className="w-2/5 h-full bg-primary/20 m-4 gap-y-1">
                <div className="h-1/2">
                    <h1 className="font-mono">Nutrition</h1>
                    <p>Example nutrition content{/* {nutrition_content} needs to be added dynamically */}</p>
                </div>
                <div className="h-1/2">
                    <h1 className="font-mono">Ingredient</h1>
                    <p>Example ingredient content{/* {ingredient_content} needs to be added dynamically */}</p>
                </div>
            </div>
        </div>
    )
}