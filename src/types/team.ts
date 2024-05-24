export interface TeamMember {
  id: number;
  name: string;
  paragraph: string;
  image: string;
  jobTitle: string;
  socialLinks: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}