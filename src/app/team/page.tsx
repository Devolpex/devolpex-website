
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";

import { Metadata } from "next";
import teamData from "@/components/Team/teamData";
import SingleTeamMember from "@/components/Team/SingleTeamMemeber";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const TeamPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Team Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {teamData.map((member) => (
              <div
                key={member.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleTeamMember member={member} />
              </div>
            ))}
          </div>
          
          
        </div>
      </section>
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default TeamPage;
