import React, { useEffect, useState } from "react";

// Separate Component for Post Item (Props Demonstration)
function PostItem({ title, body }) {
  // State within the item (Optional, but demonstrates state in separate components)
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div style={styles.card} onClick={() => setIsExpanded(!isExpanded)}>
      <h3 style={styles.title}>{title}</h3>
      {isExpanded ? <p style={styles.body}>{body}</p> : <p style={styles.hint}>Click to see body</p>}
    </div>
  );
}

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetching data from API
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.slice(0, 10)); // Fetch only 10 items
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Experiment 4: React Post List</h1>
      {loading ? (
        <p>Loading posts...</p>
      ) : (
        <div style={styles.grid}>
          {posts.map((post) => (
            <PostItem key={post.id} title={post.title} body={post.body} />
          ))}
        </div>
      )}
    </div>
  );
}

// Basic inline styling for React
const styles = {
  container: { padding: "20px", fontFamily: "Arial" },
  header: { textAlign: "center", color: "#333" },
  grid: { display: "flex", flexDirection: "column", gap: "10px" },
  card: { padding: "15px", border: "1px solid #ddd", borderRadius: "8px", cursor: "pointer", background: "#fdfdfd" },
  title: { margin: "0 0 10px 0", fontSize: "18px", textTransform: "capitalize" },
  body: { margin: "0", color: "#555" },
  hint: { margin: "0", color: "#999", fontSize: "12px", fontStyle: "italic" }
};

export default App;