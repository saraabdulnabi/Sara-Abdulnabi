type User = {
  id: number;
  name: string;
};

async function getUsers(): Promise<User[]> {
  const res = await fetch("http://localhost:3000/api/users", {
    cache: "no-store",
  });

  const data = await res.json();
  return data.users;
}

export default async function Home() {
  const users = await getUsers();

  return (
    <div>
      <h1>Users</h1>

      {users.map((user) => {
        return <p key={user.id}>{user.name}</p>;
      })}

    </div>
  );
}
