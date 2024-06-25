export const fetchRepos = async () => {
    try {
      const response = await fetch('https://api.github.com/users/Estee00/repos');
      if (!response.ok) throw new Error(response.statusText);
      const data = await response.json();
      return data;
    } catch (err) {
      throw new Error('Error fetching repositories:', err.message);
    }
  };