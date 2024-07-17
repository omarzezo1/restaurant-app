import MenuSection from "@/components/MenuSection";
import { menuItems } from "@/constants";
import { Vec2 } from "@/images/icons";
import Image from "next/image";

const OurSpecialMenu = () => {
  return (
    <section>
      <div className="pt-32 flex flex-col gap-10">
        <div className="flex flex-col gap-5 items-center max-w-xl mx-auto">
          <Image width={43} height={50} src={Vec2} alt="icon" />
          <h2 className="font-Josefin font-semibold text-center text-3xl lg:text-5xl text-slate-200">
            Our Special Menu
          </h2>
          <p className="font-Josefin text-sm md:text-base text-center text-gray-400 px-2">
            Proin at lorem justo. Sed maximus risus hendrerit ipsum sodales, vel
            consequat dui ultrices. Vestibulum ante ipsum primis in faucibus
            orci luctus.
          </p>
        </div>
        <div className="xl:w-10/12 w-full mx-auto bg-[#1b1b1b] p-2 lg:p-5 rounded-2xl">
          <div className="bg-img rounded-2xl lg:p-12 p-5 flex max-md:flex-col gap-10 items-start">
            <div className="lg:w-1/2 w-full flex-1 flex flex-col gap-12">
              <MenuSection title={"Breakfast"} items={menuItems.breakfast}/>
              <MenuSection title={"Lunch"} items={menuItems.lunch}/>
            </div>

            <div className="lg:w-1/2 w-full flex-1 flex flex-col gap-12">
              <MenuSection title={"Dinner"} items={menuItems.dinner}/>
              <MenuSection title={"Cool Drinks"} items={menuItems.drinks}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurSpecialMenu;
