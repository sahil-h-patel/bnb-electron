type ItemProps = {
    name: string
    image_url: string
    price: number
    quantity: number
    summary: {
        calories: number,
        description: string,
    }
}

function truncate(str: string, n: number){
  return (str.length > n) ? str.slice(0, n-1) + '...' : str;
}

export default function Item({name, image_url, price, quantity, summary}: ItemProps) {
    return (
        <div className="flex flex-row items-center bg-primary/30 w-full p-3 rounded-lg">
            <img src={image_url} alt={name} />
            <div className="flex flex-row w-full justify-between pl-3 h-[75px]">
                <div className="flex flex-col justify-between font-thin">
                    <div>
                        <p className="leading-none text-md">{name}</p>
                        <p className="leading-tight text-sm">{summary.calories} cals, {truncate(summary.description, 20)}</p>
                    </div>
                    <p className="text-secondary font-bold">${price.toFixed(2)}</p>
                </div>
                <p className="text-7xl my-auto">{quantity}</p>
            </div>
        </div>
    )
}