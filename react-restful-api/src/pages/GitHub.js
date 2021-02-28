import React, { useEffect, useState, useCallback } from 'react';
import { Media, Card } from 'react-bootstrap';
import Loading from '../components/Loading';
import api from './../services/api';

export default function GitHub() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setLoading] = useState(false);

  const getData = useCallback(async () => {
    const res = await api.get(`/search/users?q=${searchTerm}`);
    setData(res.data.items);
    setLoading(false);
  }, [searchTerm]);

  useEffect(() => {
    if (searchTerm.length > 0) {
      getData();
    }
  }, [getData, searchTerm]);

  const handleSubmit = event => {
    event.preventDefault();
    setLoading(true);
    getData();
  };

  const listUsers = data.map(user => (
    <Card
      style={{
        width: '18rem',
        padding: 10,
        alignContent: 'center',
        margin: 5,
      }}
      key={user.id}>
      <Media>
        <a href={user.html_url}>
          <img
            width={64}
            height={64}
            className="mr-3"
            src={user.avatar_url}
            alt="Generic placeholder"
            style={{ borderRadius: 10 }}
          />
        </a>
        <Media.Body>
          <h5>Login: {user.login}</h5>
          <p>Id: {user.id}</p>
        </Media.Body>
      </Media>
    </Card>
  ));

  return (
    <div>
      <h3>GitHub Users Results</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={event => setSearchTerm(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {isLoading && <Loading type="spinningBubbles" color="#444" />}
      {listUsers}
    </div>
  );
}
