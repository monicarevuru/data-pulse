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
    <footer className="bg-[#f4f5fb] text-secondary-900">
      <div className="mx-auto max-w-7xl p-6 lg:px-8">
        <div className="flex flex-col space-y-2 pb-2">
          {/* Logo and Description */}
          <div className="flex items-center space-x-2">
            <LineChart className="h-6 w-6 text-secondary-900" />
            <span className="text-xl font-bold">{ProjectName}</span>
          </div>
          <p className="text-sm leading-6 text-primary-500">
            {FooterConstants.shortDescription}
          </p>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                className="text-primary-500 hover:text-primary-800"
                aria-label={label}>
                <Icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
        {/* Bottom copyright */}
        <div className="border-t border-primary-500 mt-2 pt-3 flex items-center">
          <p className="text-xs leading-5 text-primary-500 text-left font-bold">
            &copy; {currentYear} {ProjectName}, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
