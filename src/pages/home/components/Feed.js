import React from "react";

import "./Feed.css";

function Feed({ src }) {
  // Generate random Avatar background color
  let rgb = [];
  for (let i = 0; i < 3; i++) {
    let color = Math.floor(Math.random() * 256);
    rgb.push(color);
  }

  return (
    <div className="feed">
      <div className="feed__avatar" style={{ backgroundColor: `rgb(${rgb})` }}>
        {src.author[0]}
      </div>
      <div className="feed__content">
        <p className="feed__tag">{src.tag}</p>
        <p className="feed__title">{src.title}</p>
        <div className="feed__otherInfo">
          <p>
            <span className="feed__author">{src.author}</span> {" * "} posted
            on:{" "}
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            }).format(src.createTime)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Feed;
