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
    <div className="flex flex-row justify-between items-center gap-16">
      <CartProduct product={item} />

      <div className="ml-7 mb-6">
        Quantity:
        <input
          name="qty"
          type="number"
          min="0"
          value={item.qty || 1}
          className="text-ntst-blue bg-gray-100 w-11 ml-3 text-center font-semibold"
          onChange={(e) => onChange(e.currentTarget.value)}
        />
      </div>

      <button
        onClick={() => deleteItem({ id: item.id })}
        className="mb-6 bg-ntst-purple text-ntst-white h-14 font-semibold p-2 rounded-md hover:bg-ntst-white hover:text-ntst-blue"
      >
        Remove
      </button>
    </div>
  )
}
