export default function Hero() {
  const cards = [
    "Email marketing tools",
    "SEO tools",
    "SMM tools",
    "CRO tools",
  ];

  return (
    <section
      style={{
        background: "#f5f5fb",
        padding: "90px 20px 70px",
      }}
    >
      <div
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "68px",
            lineHeight: "1.08",
            fontWeight: 800,
            color: "#111",
            letterSpacing: "-1.8px",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          Find The Right Software To
          <br />
          Run Your Marketing
        </h1>

        <p
          style={{
            marginTop: "28px",
            fontSize: "18px",
            color: "#555",
          }}
        >
          Our expert research will help you find the best
        </p>

        <div
          style={{
            marginTop: "36px",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "16px",
            maxWidth: "820px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {cards.map((item, index) => (
            <div
              key={index}
              style={{
                background: "#fff",
                border: "1px solid #ececf2",
                borderRadius: "14px",
                padding: "30px 16px",
                minHeight: "118px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                fontSize: "18px",
                fontWeight: 500,
                color: "#111",
                boxShadow: "0 6px 20px rgba(17,17,17,0.04)",
              }}
            >
              {item}
            </div>
          ))}
        </div>

        <p
          style={{
            marginTop: "42px",
            fontSize: "18px",
            color: "#444",
            lineHeight: "1.7",
          }}
        >
          Uncover marketing insights, reviews, and industry news you need to{" "}
          <span
            style={{
              textDecoration: "underline",
              textUnderlineOffset: "4px",
            }}
          >
            skyrocket your business growth.
          </span>
        </p>
      </div>
    </section>
  );
}