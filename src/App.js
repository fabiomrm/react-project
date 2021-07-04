import { useState } from "react";
import "./App.css";
import "./index.css";

import Posts from "./components/Posts/Posts";
import TextInput from "./components/TextInput/TextInput";
import Button from "./components/Button/Button";

function App() {
  const [allPosts, setAllPosts] = useState();
  const [posts, setPosts] = useState([]);
  const [postsPerPage, setPostsPerPage] = useState(2);
  const [pageCounter, setPageCounter] = useState(0);
  const [searchValue, setSearchValue] = useState("");

  const filteredPosts = !!searchValue
    ? allPosts.filter((post) => {
        return post.title.toLowerCase().includes(searchValue.toLowerCase());
      })
    : posts;

  const fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const allPosts = await response.json();
    setAllPosts(allPosts);
  };

  const loadMorePosts = () => {
    if (allPosts) {
      let newPosts = allPosts.slice(0, pageCounter + postsPerPage);

      setPosts([...newPosts]);

      setPageCounter(() => pageCounter + postsPerPage);
    } else {
      console.log("sem posts");
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  return (
    <section className="container">
      {!allPosts ? (
        <>
          <Button 
            onClick={fetchPosts}
            text="FETCH POSTS"
          />
        </>
      ) : (
        <>
          {!!searchValue && (
            <>
              <h1>Search Value: {searchValue}</h1>
            </>
          )}
          <TextInput handleChange={handleChange} searchValue={searchValue} />

          {!searchValue && (
            <Button 
              onClick={loadMorePosts}
              text="MAIS 02 POSTS"
            />
          )}
          {posts && <Posts posts={filteredPosts} />}
        </>
      )}
    </section>
  );
}

export default App;
