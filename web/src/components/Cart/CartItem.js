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
    <div className="flex flex-row justify-between gap-16 mb-9">
      <CartProduct product={item} />

      <div className="ml-20 mt-5">
        Quantity:
        <input
          name="qty"
          type="number"
          min="0"
          value={item.qty || 1}
          className="text-ntst-blue bg-gray-100 w-11 ml-3"
          onChange={(e) => onChange(e.currentTarget.value)}
        />
      </div>

      <button
        onClick={() => deleteItem({ id: item.id })}
        className="bg-ntst-purple text-ntst-white font-semibold p-2 rounded-md hover:bg-ntst-white hover:text-ntst-blue"
      >
        Remove
      </button>
    </div>
  )
}
