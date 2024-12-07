import React, { useEffect, useState } from "react";
import axios from "axios";

function Contributions({ owner, repo , username}) {
  const [contributions, setContributors] = useState(null);
  const [animatedCount, setAnimatedCount] = useState(0); 

  useEffect(() => {
    async function fetchContributors() {
      const token = process.env.REACT_APP_GITHUB_TOKEN;
      try {
        const response = await axios.get(
          `https://api.github.com/search/issues`, {
            params: {
              q: `repo:${owner}/${repo} is:pr author:${username}`,
            },
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const contributions = response.data.total_count
        setContributors(contributions);
      } catch (error) {
        console.error("Error fetching contributors:", error);
      }
    }

    fetchContributors();
  }, [owner, repo, username]);

  useEffect(() => {
    if (contributions !== null) {
      let count = 0;
      const interval = setInterval(() => {
        count++;
        setAnimatedCount(count);
        if (count === contributions) {
          clearInterval(interval); // Stop animation when the count matches
        }
      }, 100); // Adjust speed by changing the interval time
    }
  }, [contributions]);

  return (
      <div className="contrib-card">
        <div className="contrib-repo">{repo}</div>
        <div className="contrib-count">
          Contributions: <span style={{fontSize:"25px"}}>{animatedCount}</span>
        </div>
      </div>
  );
}

export default Contributions;
