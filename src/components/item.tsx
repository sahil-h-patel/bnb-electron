type ItemProps = {
    name: string
    image_url: string
    price: number
    quantity: number
}

export default function Item({name, image_url, price, quantity}: ItemProps) {
    return (
        <div className="flex flex-row justify-between items-center bg-primary w-full p-3 rounded-lg">
            <img src={image_url}></img>
            <p className="text-2xl">{name}</p>
            <div className="flex flex-row gap-x-4">
                <p>{quantity}x</p>
                <p>${price.toFixed(2)}</p>
            </div>
        </div>
    )
}