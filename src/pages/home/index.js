import React, { useState, useEffect } from "react";
import axios from "axios";

// Components
import Feed from "./components/Feed";

// css file
import "./index.css";

function Home() {
  const [feeds, setFeeds] = useState([]);
  const [numberOfPosts, setNumberOfPosts] = useState(0);
  const [numberOfMembers, setNumberOfMembers] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const blogs = await axios.get("http://localhost:3001/readBlog");
    const numUsers = await axios.get("http://localhost:3001/read");
    setFeeds(blogs.data);
    setNumberOfPosts(blogs.data.length);
    setNumberOfMembers(numUsers.data.length);
  };

  return (
    <div className="home">
      <div className="home__leftSection">
        <div className="home__header">
          <h2>Recommended for you</h2>
          <p>Full Forum Listing {" > "}</p>
        </div>
        {/* Feeds section */}
        {feeds.map((feed, idx) => (
          <Feed src={feed} key={idx} />
        ))}
      </div>
      <div className="home__rightSection">
        <h2>Australia Forum Clone</h2>
        <p>Since 2021</p>
        <p>
          A clone version of Australia Forum community with non-commercial
          purpose. Come join the discussion about residency, taxes, documents,
          banking, classifieds, and more!
        </p>
        <div className="postsAndMember">
          <div className="posts">
            <h1>{numberOfPosts}</h1>
            <p>posts</p>
          </div>
          <div className="members">
            <h1>{numberOfMembers}</h1>
            <p>members</p>
          </div>
        </div>
        <button>Add a post</button>
      </div>
    </div>
  );
}

export default Home;
