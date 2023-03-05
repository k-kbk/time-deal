interface ProductProps {
  id?: number;
  img: string;
  name: string;
  price: number;
  discount: number;
  remaining: number;
}

export default function Product({
  id,
  img,
  name,
  price,
  discount,
  remaining,
}: ProductProps) {
  /** 할인 적용 가격 */
  const discountedPrice = ((100 - discount) * price) / 100;

  return (
    <div className="my-0.5 flex h-[8rem] w-full items-center justify-center rounded-lg bg-white px-1 font-medium hover:opacity-50 sm:my-1 sm:h-[10rem] sm:w-[45rem]">
      <div className="mr-2 flex w-[33%] justify-center sm:w-[30%]">
        <img src={img} alt="img" className="h-[7.5rem] sm:h-[10rem]" />
      </div>
      <div className="mx-2 flex w-[62%] flex-col">
        <div className="flex items-center justify-between text-sm sm:text-base">
          <p className="text-blue-700">05:15:53</p>
          <p>{remaining}개 남음</p>
        </div>
        <div className="mb-2 text-left sm:mb-4 sm:hidden sm:text-lg ">
          {name.length > 20 ? name.substring(0, 20).trim() + '..' : name}
        </div>
        <div className="mb-2 hidden text-left sm:mb-4 sm:block sm:text-lg">
          {name.length > 40 ? name.substring(0, 40).trim() + '..' : name}
        </div>
        <div className="flex flex-col items-end">
          <div className="text-sm font-normal text-gray-400 line-through sm:text-lg">
            {price.toLocaleString()}
          </div>
          <div>
            <span className="mr-2 text-blue-700 sm:text-xl">{`${discount.toLocaleString()}%`}</span>
            <span className="text-lg sm:text-2xl">{`${discountedPrice.toLocaleString()}`}</span>
            <span className="text-sm sm:text-xl">원</span>
          </div>
        </div>
      </div>
    </div>
  );
}
