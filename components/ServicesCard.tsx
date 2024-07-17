import Button from "@/utils/Button";
import Image from "next/image";
import Link from "next/link";

const ServicesCard = ({service, getBg}:{service:any, getBg:any}) => {
  return (
    <div className="relative max-md:w-full max-xl:w-1/2 xl:w-1/4 h-[500px] lg:h-[600px] md:after:ser-border max-xl:mb-10 max-xl:even:after:hidden last-of-type:after:hidden" onMouseOver={()=> getBg(service.bgImg)}>
      <Link className="size-full flex flex-col justify-start items-center gap-8 py-28" href={"#"}>
        <Image width={100} height={85} className="w-[100px] h-[85px]" src={service.icon} alt={service.name}/>
        <h5 className="w-3/4 text-center font-Josefin font-semibold text-3xl text-slate-100">
        {service.title}
        </h5>
        <p className="w-3/4 max-xl:max-w-xl text-slate-300 text-md max-xl:text-xl text-center font-Josefin leading-8">
          {service.des}
        </p>
        <Button label={"See More"} bg={false} border={true}/>
      </Link>
    </div>
  );
};

export default ServicesCard;
