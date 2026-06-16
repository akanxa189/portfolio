import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { profileLinks } from "./siteData";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="section-shell flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-white/65">
          © 2024 Akanxa Acharya · Built with Next.js &amp; ❤️
        </p>
        <div className="flex items-center gap-3">
          <a
            href={profileLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 transition hover:text-white"
            aria-label="LinkedIn profile"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href={profileLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 transition hover:text-white"
            aria-label="GitHub profile"
          >
            <FaGithub size={20} />
          </a>
          <a
            href={`mailto:${profileLinks.email}`}
            className="text-white/70 transition hover:text-white"
            aria-label="Email contact"
          >
            <MdEmail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
