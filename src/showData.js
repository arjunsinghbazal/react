import React, { useEffect } from "react";
import {useDispatch,useSelector} from "react-redux"
import { accessData } from "./action/actionData";
import { useNavigate } from "react-router-dom";
import { addToDetails } from "./action/addData"; 
const ShowData = () => {
    const { loading, posts, error } = useSelector(state => state.posts);
    console.log(loading, posts, error)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(accessData());
    }, [dispatch])

    function handleCardDetails(post) {
        dispatch(addToDetails(post));
        navigate(`/item/${post.id}`);
    }

    if (loading) return <h1>Please wait...</h1>
    if (error) return <h1>{error}</h1>

    return (
        <div className="mainDiv">
        {posts &&
          posts.map((post) => {
            return (
              <div
                className="container" // Apply the "container" CSS class
                key={post.id}
                onClick={() => {
                  handleCardDetails(post);
                }}
              >
                <img
                  id="imgs"
                  src={`https://picsum.photos/200?random=${post.id}`}
                  alt={post.title}
                />
                <div className="texts">
                  <p>User ID: {post.userId}</p>
                  <p>Title: {post.title.slice(0, 10)}</p>
                  <p>Body: {post.body.slice(0, 50)}</p>
                  <p>Read More...</p>
                </div>
              </div>
            );
          })}
      </div>
    )
}

export default ShowData

