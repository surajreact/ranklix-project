import Link from "next/link";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="seo-footer">
      <div className="seo-footer-inner">
        <div className="seo-footer-top">
          <div className="seo-footer-brand">
            <Link href="/" className="seo-footer-logo">
              <span className="seo-logo-dark">SEO</span>
              <span className="seo-logo-blue">Learn.ing</span>
            </Link>

            <p>
              The community-driven platform for Search Everywhere Optimization,
              link building, and modern digital growth tactics.
            </p>

            <div className="seo-socials">
              <a href="#">X</a>
              <a href="#">in</a>
              <a href="#">r/</a>
              <a href="#">▶</a>
            </div>
          </div>

          <div className="seo-footer-links">
            <div className="seo-footer-col">
              <h4>Learn</h4>
              <Link href="/topics">All Topics</Link>
              <Link href="/search-everywhere-seo">Search Everywhere SEO</Link>
              <Link href="/link-building">Link Building</Link>
              <Link href="/reddit-marketing">Reddit Marketing</Link>
              <Link href="/social-media">Social Media</Link>
            </div>

            <div className="seo-footer-col">
              <h4>Community</h4>
              <Link href="/write-for-us">Write for Us</Link>
              <Link href="/guidelines">Guidelines</Link>
              <Link href="/masterclasses">Masterclasses</Link>
              <Link href="/newsletter">Newsletter</Link>
            </div>

            <div className="seo-footer-col">
              <h4>Company</h4>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms">Terms of Use</Link>
            </div>
          </div>
        </div>

        <div className="seo-footer-bottom">
          <p>© 2026 SEOLearn.ing — Built for the SEO community, by the SEO community.</p>

          <div className="seo-footer-bottom-links">
            <Link href="/privacy-policy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}