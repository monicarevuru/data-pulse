import { LineChart, Twitter, Github, Linkedin } from "lucide-react";
import { FooterConstants, ProjectName } from "../LayoutConstants";

const socialLinks = [
  { href: "#", label: "Twitter", icon: Twitter },
  { href: "#", label: "GitHub", icon: Github },
  { href: "#", label: "LinkedIn", icon: Linkedin },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-linear-[60deg,var(--color-primary-600)_0%,var(--color-primary-700)_50%,var(--color-primary-700)_100%] shadow-2xl text-white">
      <div className="mx-auto max-w-7xl p-6 lg:px-8">
        <div className="flex flex-col space-y-4">
          {/* Logo and Description */}
          <div className="flex items-center space-x-2">
            <LineChart className="h-6 w-6 text-white" />
            <span className="text-xl font-bold">{ProjectName}</span>
          </div>
          <p className="text-sm leading-6 text-gray-300">
            {FooterConstants.shortDescription}
          </p>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                className="text-gray-400 hover:text-gray-300"
                aria-label={label}
              >
                <Icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-white/10 pt-4 mt-4">
          <p className="text-xs leading-5 text-gray-400 text-left">
            &copy; {currentYear} {ProjectName}, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
