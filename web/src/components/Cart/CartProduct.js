import { currency } from 'src/utils'

export const CartProduct = ({ product }) => {
  const { name, description, imgUrl, price, tag } = product
  return (
    <div className="flex flex-row items-center justify-center gap-16">
      <div className="w-28">
        <img src={imgUrl} alt={tag} className="w-full rounded-md" />
      </div>

      <div className="uppercase">{name}</div>
      <div className="">{currency(price)}</div>
    </div>
  )
}
