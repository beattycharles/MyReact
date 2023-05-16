import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";

function Contact() {
  return (
    <div>
      <h1 style={{ color: "red" }}> Contact Me </h1>
      <ul>
        <li>
          {" "}
          <a href="http://www.github.com/beattycharles">GitHub</a>
        </li>
        <li>
          {" "}
          <a href="http://www.linkedin.com/in/charles-beatty-4a86565a/">
            Linkdin
          </a>
        </li>
        <li>
          {" "}
          <a href="mailto:beattycharles@yahoo.com">Email</a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
