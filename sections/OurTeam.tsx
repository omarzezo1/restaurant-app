import TeamMemberCard from "@/components/TeamMemberCard";
import { team } from "@/constants";
import Button from "@/utils/Button";

const OurTeam = () => {
  return (
    <section className="mt-40 px-3">
      <div className="xl:w-10/12 w-full mx-auto flex flex-col gap-14">
        <div className="flex max-lg:items-center flex-col gap-5">
          <h2 className="font-Josefin font-semibold text-3xl lg:text-5xl text-slate-200">
            Our Team Member
          </h2>
          <div className="flex max-xl:flex-col justify-between items-center gap-5">
            <p className="xl:w-1/2 max-lg:max-w-md max-lg:text-center text-gray-400 text-base font-pacifico">
              Proin at lorem justo. Sed maximus risus hendrerit ipsum sodales,
              vel consequat dui ultrices. Vestibulum ante ipsum primis in
              faucibus orci luctus.
            </p>
            <Button label={"View All"} bg={false} border={true}/>
          </div>
        </div>
        <div className="flex justify-center flex-wrap flex-1 gap-x-5 gap-y-10">
            {
              team.map(member=>(
              <TeamMemberCard member={member}/>
              ))
            }
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
