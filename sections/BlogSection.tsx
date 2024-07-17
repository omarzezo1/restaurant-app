import { blogs } from "@/constants";
import { Vec2 } from "@/images/icons";
import Image from "next/image";
import BlogCard from "@/components/BlogCard";


const BlogSection = () => {
  return (
    <section>
      <div className="pt-32 flex flex-col gap-10">
        <div className="flex flex-col gap-5 items-center max-w-xl mx-auto">
          <Image width={43} height={50} src={Vec2} alt="icon" />
          <h2 className="font-Josefin font-semibold text-center text-3xl lg:text-5xl text-slate-200">
            Latest New and blogs
          </h2>
          <p className="font-Josefin text-sm md:text-base text-center text-gray-400 px-2">
          Proin at lorem justo. Sed maximus risus hendrerit ipsum sodales, vel consequat dui ultrices. Vestibulum ante ipsum primis in faucibus orci luctus.
          </p>
        </div>
        <div className="xl:w-11/12 w-full flex justify-center flex-wrap gap-8 mx-auto p-2 lg:p-3">
        {
            blogs.map(blog=>(
                <BlogCard blog={blog}/>
            ))
        }
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
