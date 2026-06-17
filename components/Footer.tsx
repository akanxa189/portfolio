import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { profileLinks } from "./siteData";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="section-shell flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-[rgba(248,248,248,0.55)]">
          © 2026 Akanxa Acharya · Built with Next.js &amp; ❤️
        </p>
        <div className="flex items-center gap-3">
          <a
            href={profileLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg p-2 text-[rgba(248,248,248,0.55)] transition hover:bg-violet-500/10 hover:text-violet-400"
            aria-label="LinkedIn profile"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href={profileLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg p-2 text-[rgba(248,248,248,0.55)] transition hover:bg-violet-500/10 hover:text-violet-400"
            aria-label="GitHub profile"
          >
            <FaGithub size={20} />
          </a>
          <a
            href={`mailto:${profileLinks.email}`}
            className="rounded-lg p-2 text-[rgba(248,248,248,0.55)] transition hover:bg-violet-500/10 hover:text-violet-400"
            aria-label="Email contact"
          >
            <MdEmail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
