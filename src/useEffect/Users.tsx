import { useEffect, useState } from 'react';

interface User {
  username: string;
  id: number;
}

export function Users() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h2>Пользователи:</h2>
      {users.map((user, index) => (
        <p key={user.id}>
          {index + 1} - {user.username}
        </p>
      ))}
    </div>
  );
}
