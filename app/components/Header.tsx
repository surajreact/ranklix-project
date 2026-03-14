export default function Header() {
  return (
    <header
      style={{
        background: "#ffffff",
        borderBottom: "1px solid #ececf2",
      }}
    >
      <div
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "22px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            fontSize: "28px",
            fontWeight: 800,
            color: "#111",
            letterSpacing: "-0.5px",
          }}
        >
          <span style={{ color: "#6c4cf1" }}>ON</span>SAAS
        </div>

        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "30px",
            fontSize: "16px",
            fontWeight: 500,
          }}
        >
          <a
            href="#"
            style={{
              textDecoration: "none",
              color: "#111",
            }}
          >
            Software Reviews
          </a>

          <a
            href="#"
            style={{
              textDecoration: "none",
              color: "#111",
            }}
          >
            Blog
          </a>
        </nav>
      </div>
    </header>
  );
}