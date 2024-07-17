import { User, Comment } from "@/images/icons";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({blog}:{blog:any}) => {
  return (
    <div className="w-[350px] flex flex-col gap-8 pb-5 border-b border-dashed border-borderColor">
      <div className="w-full h-[350px] relative">
        <Image
          width={350}
          height={350}
          src={blog.img}
          alt={blog.title}
          className="object-cover size-full absolute z-0"
        />
        <div className="bg-[rgba(0,0,0,.2)] relative size-full z-1">
            <div className="font-Josefin text-gray-400 font-medium text-base size-16 rounded-xl bg-[#1b1b1b] flex flex-col justify-center items-center absolute top-3 right-3">
                <span>09</span>
                <span>Aug</span>
            </div>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-3">
            <Image width={20} height={20} src={User} alt="author" />
            <h5 className="font-pacifico font-medium text-gray-400">
              by {blog.auth}
            </h5>
          </div>
          <div className="flex items-center gap-3">
            <Image width={20} height={20} src={Comment} alt="comment" />
            <h5 className="font-pacifico font-medium text-gray-400">
              0{blog.comments} Comments
            </h5>
          </div>
        </div>
        <h4 className="font-Josefin text-3xl font-semibold text-slate-100">
          <Link href={"#"}>{blog.title}</Link>
        </h4>
      </div>
    </div>
  );
};

export default BlogCard;
