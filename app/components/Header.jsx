import Link from "next/link";
import "./Header.css";

export default function Header() {
  return (
    <header className="seo-header">
      <div className="seo-header-inner">
        <Link href="/" className="seo-logo">
          <span className="seo-logo-dark">SEO</span>
          <span className="seo-logo-blue">Learn.ing</span>
        </Link>

        <nav className="seo-nav">
          <Link href="/topics">Topics</Link>
          <Link href="/masterclass">Masterclass</Link>
          <Link href="/contribute">Contribute</Link>
          <Link href="/newsletter">Newsletter</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div className="seo-header-actions">
          <Link href="/write-for-us" className="seo-btn seo-btn-outline">
            Write for Us
          </Link>

          <Link href="/join" className="seo-btn seo-btn-gradient">
            Join Free →
          </Link>
        </div>
      </div>
    </header>
  );
}