import { LineChart, Twitter, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl p-6 lg:px-8">
        <div className="xl:gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <LineChart className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">SalePilot</span>
            </div>
            <p className="text-sm leading-6 text-gray-300">
              Making data communication simple and effective for development teams worldwide.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 mt-8">
          <p className="text-xs leading-5 text-gray-400">&copy; {new Date().getFullYear()} SalePilot, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;