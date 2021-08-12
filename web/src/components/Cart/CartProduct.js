import { currency } from 'src/utils'

export const CartProduct = ({ product }) => {
  const { name, description, imgUrl, price } = product
  return (
    <div className="">
      <div className="">{name}</div>
      <div className="">{currency(price)}</div>
    </div>
  )
}
