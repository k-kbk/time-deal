interface ProductProps {
  id?: number;
  img: string;
  name: string;
  price: number;
  discount: number;
  remaining: number;
}

export default function Product({
  img,
  name,
  price,
  discount,
  remaining,
}: ProductProps) {
  const discountedPrice = ((100 - discount) * price) / 100;

  return (
    <div className="my-0.5 flex h-[8rem] w-screen items-center justify-center bg-white px-1 font-medium">
      <div className="mr-2 flex w-[33%] justify-center">
        <img src={img} alt="img" className="h-[7.5rem]" />
      </div>
      <div className="mx-2 flex w-[62%] flex-col">
        <div className="flex items-center justify-between text-sm">
          <p className="text-blue-700">05:15:53</p>
          <p>{remaining}개 남음</p>
        </div>
        <div className="mb-2 text-left text-sm">
          {name.length > 20 ? name.substring(0, 20).trim() + '..' : name}
        </div>
        <div className="flex flex-col items-end">
          <div className="text-sm font-normal text-gray-400 line-through">
            {price.toLocaleString()}
          </div>
          <div>
            <span className="mr-3 text-base text-blue-700">{`${discount.toLocaleString()}%`}</span>
            <span className="text-lg">{`${discountedPrice.toLocaleString()}`}</span>
            <span className="text-sm">원</span>
          </div>
        </div>
      </div>
    </div>
  );
}
