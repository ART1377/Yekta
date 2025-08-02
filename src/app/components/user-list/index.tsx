"use client";

import { User } from "@/app/hooks/useUsers";
import UserCard from "../user-card";

export default function UserList({
  users,
  onUserClick,
}: {
  users: User[];
  onUserClick: (user: User) => void;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {users.map((user) => (
        <UserCard key={user.id} user={user} onClick={onUserClick} />
      ))}
    </div>
  );
}
