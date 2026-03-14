const posts = [
  {
    title: "9 Best Scrunch AI Alternatives to Consider in 2026",
  },
  {
    title: "Profound Feels Overrated? Here Are 8 Profound Alternatives",
  },
  {
    title: "11 Best Peec.ai Alternatives for AI Search Visibility in 2026",
  },
];

export default function FeaturedPosts() {
  return (
    <section style={{ background: "#f3f2f8", padding: "20px 40px 60px" }}>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "24px",
        }}
      >
        {posts.map((post, index) => (
          <div
            key={index}
            style={{
              background: "#fff",
              borderRadius: "18px",
              padding: "28px",
              minHeight: "220px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                width: "52px",
                height: "52px",
                borderRadius: "50%",
                background: "#111",
                marginBottom: "20px",
              }}
            />

            <h3
              style={{
                fontSize: "24px",
                lineHeight: "1.3",
                fontWeight: 700,
                color: "#111",
              }}
            >
              {post.title}
            </h3>

            <a
              href="#"
              style={{
                marginTop: "20px",
                color: "#111",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Read Article &gt;
            </a>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: "28px" }}>
        <a href="#" style={{ color: "#111", fontWeight: 600, textDecoration: "none" }}>
          Explore more
        </a>
      </div>
    </section>
  );
}