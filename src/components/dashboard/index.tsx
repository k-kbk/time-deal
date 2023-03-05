import User from '../../assets/user.png';
import Container from '../common/Container';
import Product from './Product';

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
    img: 'https://image.msscdn.net/images/goods_img/20221221/2992063/2992063_1_500.jpg',
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
  return (
    <div className="flex flex-col items-center justify-start bg-gray-100">
      <div className="w-[50rem] font-medium">
        <section className="mt-[4rem] flex h-[12rem] flex-col items-end justify-center">
          <div className="mb-1 flex items-center justify-center">
            <div className="mx-6 h-[2.75rem] w-[2.75rem]">
              <img src={User} alt="user" />
            </div>
            <div className="text-3xl font-bold">김보겸 사장님</div>
          </div>
          <div className="text-neutral-700 hover:text-neutral-400">
            내 정보 수정하기
          </div>
        </section>
        <div className="border-b-2 pb-4 text-3xl font-semibold">
          내 상품 목록
        </div>
        <Container>
          {dummy.map((item) => (
            <Product
              key={item.id}
              id={item.id}
              img={item.img}
              name={item.name}
              price={item.price}
              discount={item.discount}
              remaining={item.remaining}
            />
          ))}
        </Container>
      </div>
    </div>
  );
}
