import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug } from "../../lib/wordpress";

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function SingleBlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const featuredImage =
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;

  const featuredAlt =
    post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text ||
    post.title.rendered.replace(/<[^>]+>/g, "").trim();

  const author = post._embedded?.author?.[0]?.name || "Admin";

  return (
    <>
      <Header />

      <main
        style={{
          backgroundColor: "#ffffff",
          minHeight: "100vh",
          padding: "40px 20px 80px",
        }}
      >
        <div
          style={{
            maxWidth: "860px",
            margin: "0 auto",
          }}
        >
          <div style={{ marginBottom: "28px" }}>
            <Link
              href="/blog"
              style={{
                fontSize: "15px",
                color: "#6b7280",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              ← Back to articles
            </Link>
          </div>

          <h1
            style={{
              fontSize: "48px",
              lineHeight: "1.15",
              fontWeight: 800,
              color: "#111827",
              margin: "0 0 18px",
            }}
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              alignItems: "center",
              color: "#6b7280",
              fontSize: "15px",
              marginBottom: "30px",
            }}
          >
            <span>{formatDate(post.date)}</span>
            <span>•</span>
            <span>By {author}</span>
          </div>

          {featuredImage ? (
            <img
              src={featuredImage}
              alt={featuredAlt}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "22px",
                display: "block",
                marginBottom: "34px",
              }}
            />
          ) : (
            <div
              style={{
                width: "100%",
                height: "320px",
                borderRadius: "22px",
                backgroundColor: "#f3f4f6",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#6b7280",
                fontSize: "20px",
                fontWeight: 600,
                marginBottom: "34px",
              }}
            >
              No Image Available
            </div>
          )}

          <style>
            {`
              article h2 {
                font-size: 32px;
                line-height: 1.3;
                font-weight: 800;
                color: #111827;
                margin-top: 42px;
                margin-bottom: 16px;
              }

              article h3 {
                font-size: 26px;
                line-height: 1.35;
                font-weight: 700;
                color: #111827;
                margin-top: 34px;
                margin-bottom: 14px;
              }

              article p {
                margin-bottom: 20px;
              }

              article ul,
              article ol {
                margin-bottom: 20px;
                padding-left: 24px;
              }

              article li {
                margin-bottom: 10px;
              }

              article img {
                max-width: 100%;
                height: auto;
                border-radius: 18px;
                margin: 24px 0;
              }

              article a {
                color: #2563eb;
                text-decoration: underline;
              }

              article blockquote {
                border-left: 4px solid #d1d5db;
                padding-left: 18px;
                margin: 24px 0;
                color: #4b5563;
                font-style: italic;
              }

              article strong {
                color: #111827;
              }
            `}
          </style>

          <article
            style={{
              fontSize: "18px",
              lineHeight: "1.9",
              color: "#1f2937",
            }}
            dangerouslySetInnerHTML={{ __html: post.content?.rendered || "" }}
          />
        </div>
      </main>

      <Footer />
    </>
  );
}