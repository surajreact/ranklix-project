import Link from "next/link";
import { WordPressPost } from "../lib/wordpress";

function stripHtml(html: string) {
  return html.replace(/<[^>]+>/g, "").trim();
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function FeaturedPosts({ posts }: { posts: WordPressPost[] }) {
  return (
    <section
      style={{
        backgroundColor: "#ffffff",
        padding: "60px 20px 80px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            textAlign: "center",
            maxWidth: "850px",
            margin: "0 auto 50px",
          }}
        >
          <p
            style={{
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "1px",
              textTransform: "uppercase",
              color: "#6b7280",
              marginBottom: "12px",
            }}
          >
            Blog
          </p>

          <h1
            style={{
              fontSize: "42px",
              lineHeight: "1.2",
              fontWeight: 800,
              color: "#111827",
              margin: "0 0 16px",
            }}
          >
            Latest Marketing & Software Articles
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.7",
              color: "#6b7280",
              margin: 0,
            }}
          >
            Real blog posts are coming from WordPress and showing dynamically in
            this Next.js layout.
          </p>
        </div>

        {posts.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "40px 20px",
              border: "1px solid #e5e7eb",
              borderRadius: "20px",
              backgroundColor: "#f9fafb",
            }}
          >
            <h3
              style={{
                fontSize: "22px",
                fontWeight: 700,
                marginBottom: "10px",
                color: "#111827",
              }}
            >
              No posts found
            </h3>

            <p
              style={{
                fontSize: "16px",
                color: "#6b7280",
                margin: 0,
              }}
            >
              WordPress se abhi data nahi aa raha ya posts empty hain.
            </p>
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "28px",
            }}
          >
            {posts.map((post) => {
              const featuredImage =
                post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;

              const featuredAlt =
                post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text ||
                stripHtml(post.title.rendered);

              const author = post._embedded?.author?.[0]?.name || "Admin";

              const cleanExcerpt = stripHtml(post.excerpt.rendered);

              return (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    display: "block",
                  }}
                >
                  <article
                    style={{
                      backgroundColor: "#ffffff",
                      border: "1px solid #e5e7eb",
                      borderRadius: "22px",
                      overflow: "hidden",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
                    }}
                  >
                    {featuredImage ? (
                      <img
                        src={featuredImage}
                        alt={featuredAlt}
                        style={{
                          width: "100%",
                          height: "220px",
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                    ) : (
                      <div
                        style={{
                          width: "100%",
                          height: "220px",
                          backgroundColor: "#f3f4f6",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#6b7280",
                          fontSize: "18px",
                          fontWeight: 600,
                          borderBottom: "1px solid #e5e7eb",
                        }}
                      >
                        No Image Available
                      </div>
                    )}

                    <div style={{ padding: "24px" }}>
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "10px",
                          alignItems: "center",
                          marginBottom: "14px",
                          fontSize: "14px",
                          color: "#6b7280",
                        }}
                      >
                        <span>{formatDate(post.date)}</span>
                        <span>•</span>
                        <span>By {author}</span>
                      </div>

                      <h2
                        style={{
                          fontSize: "22px",
                          lineHeight: "1.4",
                          fontWeight: 700,
                          color: "#111827",
                          margin: "0 0 14px",
                        }}
                        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                      />

                      <p
                        style={{
                          fontSize: "16px",
                          lineHeight: "1.7",
                          color: "#4b5563",
                          margin: "0 0 20px",
                        }}
                      >
                        {cleanExcerpt.length > 140
                          ? cleanExcerpt.slice(0, 140) + "..."
                          : cleanExcerpt}
                      </p>

                      <span
                        style={{
                          display: "inline-block",
                          padding: "10px 16px",
                          backgroundColor: "#111827",
                          color: "#ffffff",
                          borderRadius: "12px",
                          fontSize: "14px",
                          fontWeight: 600,
                        }}
                      >
                        Read Article
                      </span>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}