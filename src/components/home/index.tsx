import Banner from './Banner';
import Container from './Container';
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
    <div>
      <Banner />
      <Container>
        {dummy.map((item) => (
          <Product
            key={item.id}
            img={item.img}
            name={item.name}
            price={item.price}
            discount={item.discount}
            remaining={item.remaining}
          />
        ))}
      </Container>
    </div>
  );
}
