const faqs = [
  "What’s email marketing software?",
  "Which email marketing software is the best?",
  "What’s marketing automation software?",
  "What’s the best marketing automation software?",
  "Why use SEO tools?",
  "What are the best SEO tools?",
  "What is the best social media management tool?",
  "What is conversion rate optimization?",
];

export default function FaqSection() {
  return (
    <section
      style={{
        background: "#f5f5fb",
        padding: "80px 20px 100px",
      }}
    >
      <div
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "330px 1fr",
          gap: "70px",
          alignItems: "start",
        }}
      >
        <div>
          <h2
            style={{
              fontSize: "60px",
              lineHeight: "1.05",
              fontWeight: 800,
              letterSpacing: "-1px",
              color: "#111",
              margin: 0,
            }}
          >
            Have questions?
          </h2>
        </div>

        <div>
          {faqs.map((item, index) => (
            <div
              key={index}
              style={{
                borderBottom: "1px solid #d9d9e4",
                padding: "24px 0",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "20px",
              }}
            >
              <span
                style={{
                  fontSize: "18px",
                  color: "#111",
                  lineHeight: "1.5",
                }}
              >
                {item}
              </span>

              <span
                style={{
                  width: "34px",
                  height: "34px",
                  minWidth: "34px",
                  borderRadius: "50%",
                  border: "1.5px solid #111",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "22px",
                  color: "#111",
                }}
              >
                +
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}