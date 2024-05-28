import { TeamMember } from "@/types/team";
 // Ensure your CSS file is correctly imported
import "@/styles/index.css" ;

const SingleTeamMember = ({ member }: { member: TeamMember }): JSX.Element => {
  return (
    <div className="team-member drop-shadow-md   hover:drop-shadow-xl">
      
      <img src={member.image} alt={member.name} className="w-full h-100 object-cover   gradient-bg  rounded-lg mb-4" />
  <div className="flex items-center space-x-4 justify-self-center mb-2">
    <h3 className="text-lg font-semibold ">{member.name}</h3>
    <div className="social-links flex   space-x-4">
      {member.socialLinks.twitter && (
        <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
          <img src="/images/icons/twitter.svg" alt="Twitter" className="w-8 h-8" />
        </a>
      )}
      {member.socialLinks.linkedin && (
        <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
          <img src="/images/icons/linkedin.svg" alt="LinkedIn" className="w-8 h-8" />
        </a>
      )}
      {member.socialLinks.github && (
        <a href={member.socialLinks.github} target="_blank" rel="noopener noreferrer">
          <img src="/images/icons/github.svg" alt="GitHub" className="w-8 h-8" />
        </a>
      )}
    </div>
  </div>
  <p className="text-gray-500 dark:text-blue-500 mb-2">{member.jobTitle}</p> {/* Add job title here */}
</div>
  );
};

export default SingleTeamMember;