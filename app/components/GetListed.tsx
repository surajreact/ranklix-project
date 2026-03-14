export default function GetListed() {
  return (
    <section
      style={{
        background: "#f5f5fb",
        padding: "0 20px 70px",
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
            background: "#5f3df5",
            borderRadius: "14px",
            padding: "60px 30px",
            textAlign: "center",
            color: "#fff",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: "40px",
              top: "50%",
              transform: "translateY(-50%)",
              fontSize: "260px",
              fontWeight: 800,
              color: "rgba(255,255,255,0.05)",
              lineHeight: 1,
              userSelect: "none",
            }}
          >
            O
          </div>

          <div
            style={{
              position: "absolute",
              right: "40px",
              top: "50%",
              transform: "translateY(-50%)",
              fontSize: "260px",
              fontWeight: 800,
              color: "rgba(255,255,255,0.05)",
              lineHeight: 1,
              userSelect: "none",
            }}
          >
            S
          </div>

          <h2
            style={{
              fontSize: "54px",
              fontWeight: 800,
              margin: "0 0 18px",
              position: "relative",
              zIndex: 2,
            }}
          >
            Want to get listed?
          </h2>

          <p
            style={{
              maxWidth: "760px",
              margin: "0 auto 28px",
              fontSize: "18px",
              lineHeight: "1.7",
              position: "relative",
              zIndex: 2,
            }}
          >
            Our experts will review your application and get back to you if your
            product is eligible for a listing. We carefully review all
            applications.
          </p>

          <button
            style={{
              background: "#fff",
              color: "#5f3df5",
              border: "none",
              borderRadius: "8px",
              padding: "14px 36px",
              fontSize: "18px",
              fontWeight: 700,
              cursor: "pointer",
              minWidth: "245px",
              position: "relative",
              zIndex: 2,
            }}
          >
            Get Listed
          </button>
        </div>
      </div>
    </section>
  );
}