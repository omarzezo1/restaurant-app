import Image from 'next/image'

const MenuItemCard = ({item}:{item:any}) => {
  return (
    <div className="py-5 border-b border-dashed border-gray-500 w-full flex max-lg:flex-wrap gap-5">
    <Image
      width={85}
      height={95}
      className="rounded-lg"
      src={item.img}
      alt={item.name}
    />
    <div className="flex flex-col gap-3">
      <h4 className="font-Josefin font-semibold text-lg text-slate-100">
        {item.name}
      </h4>
      <p className="font-pacifico text-gray-400 text-sm w-3/4">
        {item.des}
      </p>
    </div>
    <div className="flex flex-col gap-1 justify-center items-center">
        <p className="font-Josefin font-medium text-xl text-slate-100">${item.priceAfterDiscount}.00</p>
        <p className="text-gray-400 text-base line-through">${item.priceBeforeDiscount}.00</p>
    </div>
  </div>
  )
}

export default MenuItemCard