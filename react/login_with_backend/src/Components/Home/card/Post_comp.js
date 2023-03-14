import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import "./Card.css";

export default function Post_comp() {
  const [postInfo, setPostInfo] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8000/post").then((res) => {
      // console.log(res.data[0].Title)
      setPostInfo(res);
    });
  }, []);

  console.log("19", postInfo);

  return (
    <>
      {postInfo?.data?.slice(0).reverse().map((post) => {
        return (
          
            <div className="card_comp" key={post.id}>
              <Card style={{ width: "18rem" }}>
                <Card.Body className="cardbody">
                  <Card.Title> {post.Title}</Card.Title>
                    <hr />
                  <Card.Text>{post.About}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          
        );
      })}
    </>
  );
}
