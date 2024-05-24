import { Service} from "@/types/service";
// Import icons
import { FaLaptop } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa6";
import { MdDesignServices } from "react-icons/md";
import { FaCloud } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";



const featuresData: Service[] = [
  {
    id: 1,
    icon: (
      <FaLaptop  size={40}/>
    ),
    title: "Web Development",
    paragraph:
      "Empower your online presence with our cutting-edge web development solutions. From sleek and responsive websites to robust web applications, we specialize in crafting digital experiences that captivate audiences and drive results.",
  },
  {
    id: 2,
    icon: (
      <FaMobileAlt size={40}/>
    ),
    title: "Mobile App Development",
    paragraph:
      "Stay ahead in the mobile-first world with our customized mobile app development services. Whether it's iOS, Android, or cross-platform apps, we design and build innovative solutions tailored to meet your unique business needs.",
  },
  {
    id: 3,
    icon: (
      <FaDesktop size={40}/>
    ),
    title: "Software Application Development",
    paragraph:
      "Transform your ideas into reality with our comprehensive software application development services. From conceptualization to deployment, we provide end-to-end solutions that streamline processes, enhance efficiency, and drive growth.",
  },
  {
    id: 4,
    icon: (
      <MdDesignServices size={40}/>
    ),
    title: "UI/UX Design",
    paragraph:
      "Deliver exceptional user experiences with our expert UI/UX design services. Our talented designers combine creativity with usability to craft intuitive interfaces that engage users and elevate your brand.",
  },
  {
    id: 5,
    icon: (
      <FaCloud size={40}/>
    ),
    title: "Cloud Services",
    paragraph:
      "Harness the power of the cloud with our scalable and secure cloud services. From migration to optimization, we help businesses leverage cloud technologies to increase agility, reduce costs, and unlock new opportunities for innovation.",
  },
  {
    id: 6,
    icon: (
      <MdSecurity size={40}/>
    ),
    title: "Cybersecurity Solutions",
    paragraph:
      "Protect your digital assets and safeguard your business with our robust cybersecurity solutions. From risk assessment to threat detection and mitigation, we offer comprehensive strategies and technologies to defend against evolving cyber threats.",
  },
];
export default featuresData;
