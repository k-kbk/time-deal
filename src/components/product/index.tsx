import { useParams } from 'react-router-dom';
import TimeBanner from './TimeBanner';

const dummy = [
  {
    id: 1,
    img: 'https://image.msscdn.net/images/goods_img/20220727/2684358/2684358_1_500.jpg',
    name: 'CROPPED HAIRY KNIT - GRASS GREEN',
    price: 109000,
    discount: 20,
    remaining: 7,
  },
  {
    id: 2,
    img: 'https://image.msscdn.net/images/goods_img/20201224/1730340/1730340_4_500.jpg',
    name: 'XT-6 GTX - 블랙 에보니 루나 락',
    price: 280000,
    discount: 10,
    remaining: 3,
  },
  {
    id: 3,
    img: 'https://image.msscdn.net/images/goods_img/20220727/2684358/2684358_1_500.jpg',
    name: 'CROPPED HAIRY KNIT - GRASS GREEN',
    price: 109000,
    discount: 20,
    remaining: 7,
  },
  {
    id: 4,
    img: 'https://image.msscdn.net/images/goods_img/20221221/2992063/2992063_1_500.jpg',
    name: 'XT-6 GTX - 블랙 에보니 루나 락',
    price: 280000,
    discount: 10,
    remaining: 3,
  },
  {
    id: 5,
    img: 'https://image.msscdn.net/images/goods_img/20220727/2684358/2684358_1_500.jpg',
    name: 'CROPPED HAIRY KNIT - GRASS GREEN',
    price: 109000,
    discount: 20,
    remaining: 7,
  },
  {
    id: 6,
    img: 'https://image.msscdn.net/images/goods_img/20221221/2992063/2992063_1_500.jpg',
    name: 'XT-6 GTX - 블랙 에보니 루나 락',
    price: 280000,
    discount: 10,
    remaining: 3,
  },
];

export default function Index() {
  const { id } = useParams();
  const productId = id ? parseInt(id) - 1 : -1;

  /** 할인 적용 가격 */
  const discountedPrice =
    ((100 - dummy[productId].discount) * dummy[productId].price) / 100;

  return (
    <div className="flex flex-col items-center justify-center bg-white">
      <TimeBanner />
      <div className="mt-12 flex w-[60rem] items-start justify-between">
        <div className="flex w-[48%] items-center justify-center rounded border">
          <img
            src={dummy[productId].img}
            alt="img"
            className="h-[27rem] w-[22.5rem]"
          />
        </div>
        <div className="flex h-[27rem] w-[48%] flex-col items-center justify-between px-4 py-4 text-start font-medium">
          <div>
            <div className="mb-4 w-full text-end text-lg">{`${dummy[productId].remaining}개 남음`}</div>
            <h1 className="mb-8 w-full text-2xl">{dummy[productId].name}</h1>
          </div>
          <div className="w-full text-end">
            <p className="text-xl font-normal text-gray-400 line-through">
              {dummy[productId].price.toLocaleString()}
            </p>
            <span className="mr-4 text-2xl text-blue-700">{`${dummy[productId].discount}%`}</span>
            <span className="text-3xl">{discountedPrice.toLocaleString()}</span>
            <span className="text-2xl">원</span>
            <button
              type="button"
              className="mt-8 w-full rounded-lg bg-red-500 py-4 text-xl font-semibold text-white shadow hover:bg-opacity-70"
            >
              주문하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
