import AddToListsButtons from './AddToListsButtons'
import ProductImage from './ProductImage'
import Container from './Container'
import Link from 'next/link'

export default function Product({
  image,
  type,
  name,
}: {
  image: string
  type: string
  name: string
}) {
  return (
    <Container className="p-2">
      <Link className="flex flex-col items-center" href="/catalog/product">
        <ProductImage image={image} name={name} size={130} />
      </Link>
      <h1 className="text-text-product-light mt-1 mx-2 font-light">{type}</h1>
      <h2 className="text-text-product-light mx-2 text-[13px] font-semibold leading-none mb-3">
        {name}
      </h2>
      <AddToListsButtons />
    </Container>
  )
}
