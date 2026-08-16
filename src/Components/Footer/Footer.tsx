import React from "react";
import { ReactComponent as RssIcon } from "../../assets/images/rss.svg";
import { ReactComponent as GoodreadsIcon } from "../../assets/images/goodreads.svg";
import "../Common/common.css";

function Footer() {
  return (
    <div className="footer">
      <a href="https://naths.in/rss.xml">
        <RssIcon
          width="0.8rem"
          role="img"
          aria-label="RSS icon"
          style={{ marginBottom: "-2px", marginRight: "0.5rem" }}
        />
        RSS
      </a>
      <a href="https://www.goodreads.com/user/show/108597085-naren">
        <GoodreadsIcon
          width="0.8rem"
          role="img"
          aria-label="Goodreads icon"
          style={{ marginBottom: "-2px", marginRight: "0.5rem" }}
        />
        Goodreads
      </a>
    </div>
  );
}

export default Footer;
