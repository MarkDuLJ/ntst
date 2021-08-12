import { useCart, CartProduct } from 'src/components/Cart'

export const CartItem = ({ item }) => {
  const { updateItemQty, deleteItem } = useCart()

  const onChange = (e) => {
    const qty = parseInt(e)
    if (qty < 1) {
      updateItemQty({ id: item.id, qty: 1 })
    } else {
      updateItemQty({ id: item.id, qty: qty })
    }
  }

  return (
    <div className="">
      <CartProduct product={item} />
      <div className="">
        <div className="">
          Quantity:
          <input
            name="qty"
            type="number"
            min="0"
            value={item.qty || 1}
            className=""
            onChange={(e) => onChange(e.currentTarget.value)}
          />
        </div>
        <button onClick={() => deleteItem({ id: item.id })} className="">
          Remove
        </button>
      </div>
    </div>
  )
}
