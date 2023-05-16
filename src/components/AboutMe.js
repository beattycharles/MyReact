import React from "react";
import Card from "react-bootstrap/Card";

export default function AboutMe() {
  return (
    <div>
      <h1 style={{ color: "#FFFFF0", background: "#626075" }}> About Me </h1>

      <Card
        style={{
          //   backgroundSize: "cover",
          //   height: "90vh",
          color: "Green",
          fontSize: "large",
          fontWeight: "bold",
          background: "#040740",
          display: "flex",
          justifyContent: "space-around",
          marginTop: 30,
        }}
      >
        <Card.Body>
          I recently earned a certificate in full stack web develop through UNC
          Charlotte. It introduced to JavaScript, Node.js, MySQL, Restful APIs,
          MongoDB, Mongoose, React and more. I found that I enjoy front-end
          development. Throughout my education it's become clear that we must
          always be seeking more knowledge, rarely should we be satisfied with
          knowledge we already have, always strive for a better understanding or
          new material.{" "}
        </Card.Body>
      </Card>
    </div>
  );
}
