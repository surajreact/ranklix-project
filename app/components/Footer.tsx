export default function Footer() {
  return (
    <footer
      style={{
        background: "#5f3df5",
        color: "#fff",
        padding: "60px 20px 28px",
      }}
    >
      <div
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: "40px",
            marginBottom: "40px",
          }}
        >
          <div>
            <h3
              style={{
                fontSize: "28px",
                fontWeight: 800,
                margin: "0 0 20px",
              }}
            >
              ONSAAS
            </h3>

            <p
              style={{
                maxWidth: "320px",
                lineHeight: "1.7",
                fontSize: "16px",
                margin: 0,
              }}
            >
              Choosing the right marketing software is very important for every
              online business. ONSAAS compares the leading software providers
              and offers honest and objective reviews.
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: "16px", marginBottom: "18px" }}>Sitemap</h4>
            <p style={{ margin: "0 0 14px" }}>Blog</p>
            <p style={{ margin: 0 }}>Get Listed</p>
          </div>

          <div>
            <h4 style={{ fontSize: "16px", marginBottom: "18px" }}>
              Terms & Privacy
            </h4>
            <p style={{ margin: "0 0 14px" }}>Privacy Policy</p>
            <p style={{ margin: 0 }}>Disclosure</p>
          </div>

          <div>
            <h4 style={{ fontSize: "16px", marginBottom: "18px" }}>
              Get in touch
            </h4>
            <p style={{ margin: 0 }}>irina@onsaas.me</p>
          </div>
        </div>

        <div
          style={{
            textAlign: "center",
            fontSize: "15px",
            borderTop: "1px solid rgba(255,255,255,0.15)",
            paddingTop: "20px",
          }}
        >
          © ONSAAS.ME 2023. All rights reserved.
        </div>
      </div>
    </footer>
  );
}