// components/Team/SingleTeamMember.tsx
import { TeamMember } from "@/types/team";

const SingleTeamMember = ({ member }: { member: TeamMember }): JSX.Element => {
  return (
    <div className="team-member">
      <img src={member.image} alt={member.name} className="w-full h-100 object-cover rounded-lg mb-4" />
      <h3 className="text-lg font-semibold">{member.name}</h3>
      <p className="text-gray-500 dark:text-blue-500 mb-2">{member.jobTitle}</p> {/* Add job title here */}
     {/*<p className="text-gray-600 dark:text-gray-400 mb-4">{member.paragraph}</p>*/}
      <div className="social-links flex space-x-4">
        {member.socialLinks.twitter && (
          <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
            <img src="/images/icons/twitter.svg" alt="Twitter" className="w-6 h-6" />
          </a>
        )}
        {member.socialLinks.linkedin && (
          <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
            <img src="/images/icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
          </a>
        )}
        {member.socialLinks.github && (
          <a href={member.socialLinks.github} target="_blank" rel="noopener noreferrer">
            <img src="/images/icons/github.svg" alt="GitHub" className="w-6 h-6" />
          </a>
        )}
      </div>
    </div>
  );
};

export default SingleTeamMember;
