import MenuItemCard from "./MenuItemCard";

const MenuSection = ({title, items}:{title:any, items:any}) => {
  return (
    <div className="w-full">
      <h5 className="text-3xl tracking-wider text-slate-100 font-pacifico font-medium">
        {title}
      </h5>
      <div className="flex flex-col gap-5 mt-5">
        {items.map((item:any) => (
          <MenuItemCard key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MenuSection;
