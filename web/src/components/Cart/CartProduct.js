import { currency } from 'src/utils'

export const CartProduct = ({ product }) => {
  const { name, description, imgUrl, price, tag } = product
  return (
    <div className="flex flex-row items-center justify-center gap-16 mb-5">
      <div className="w-28">
        <img
          src={imgUrl}
          alt={tag}
          className="w-24 h-24 object-cover rounded-md"
        />
      </div>

      <div className="uppercase w-56">{name}</div>
      <div className="w-28">{currency(price)}</div>
    </div>
  )
}
