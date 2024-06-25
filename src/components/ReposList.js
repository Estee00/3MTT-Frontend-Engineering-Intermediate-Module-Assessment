import React, { useState, useEffect } from 'react';
// import { fetchRepos } from './api';
import { Link } from 'react-router-dom';
import { TextField, List, ListItem, ListItemText, Button, Modal, Box, Typography } from '@mui/material';

const ReposList = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [newRepoName, setNewRepoName] = useState('');
  const [creatingRepo, setCreatingRepo] = useState(false);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Estee00/repos');
        if (!response.ok) throw new Error(response.statusText);
        const data = await response.json();
        setRepos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, []);

  const handleCreateRepo = async () => {
    setCreatingRepo(true);
    try {
      const response = await fetch('https://api.github.com/user/repos', {
        method: 'POST',
        headers: {
          Authorization: `token YOUR_PERSONAL_ACCESS_TOKEN`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: newRepoName }),
      });
      if (!response.ok) throw new Error(response.statusText);
      const data = await response.json();
      // Optionally, update state or show success message
      console.log('Repository created:', data);
      // Fetch updated list of repositories
      fetchRepos();
      handleCloseModal();
    } catch (err) {
      console.error('Error creating repository:', err.message);
      // Handle error
    } finally {
      setCreatingRepo(false);
    }
  };

  const handleCloseModal = () => {
    setOpen(false);
    setNewRepoName('');
  };

  const filteredRepos = repos.filter(repo =>
    repo.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <TextField
        label="Search Repos"
        variant="outlined"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <List>
        {filteredRepos.map(repo => (
          <ListItem button component={Link} to={`/repo/${repo.name}`} key={repo.id}>
            <ListItemText primary={repo.name} />
          </ListItem>
        ))}
      </List>
      <Button variant="contained" color="primary" onClick={() => setOpen(true)}>Create New Repo</Button>
      <Modal
        open={open}
        onClose={handleCloseModal}
        aria-labelledby="create-new-repo-modal"
        aria-describedby="create-new-repo-form"
      >
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
          <Typography variant="h6">Create New Repository</Typography>
          <TextField
            fullWidth
            label="Repository Name"
            value={newRepoName}
            onChange={(e) => setNewRepoName(e.target.value)}
            variant="outlined"
            margin="normal"
          />
          <Button disabled={!newRepoName || creatingRepo} onClick={handleCreateRepo} variant="contained" color="primary">
            {creatingRepo ? 'Creating...' : 'Create Repository'}
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default ReposList;