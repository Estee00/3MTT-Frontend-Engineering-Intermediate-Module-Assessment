import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Link } from '@mui/material';

const RepoDetails = () => {
  const { repoName } = useParams();
  const [repo, setRepo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepo = async () => {
      try {
        const response = await fetch(`https://api.github.com/repos/Estee00/${repoName}`);
        if (!response.ok) throw new Error(response.statusText);
        const data = await response.json();
        setRepo(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchRepo();
  }, [repoName]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <Typography variant="h4" gutterBottom>{repo.name}</Typography>
      <Typography variant="body1" paragraph>{repo.description}</Typography>
      <Typography variant="body2">Language: {repo.language}</Typography>
      <Typography variant="body2">Stars: {repo.stargazers_count}</Typography>
      <Link href={repo.html_url} target="_blank" rel="noopener noreferrer">View on GitHub</Link>
    </div>
  );
};

export default RepoDetails;