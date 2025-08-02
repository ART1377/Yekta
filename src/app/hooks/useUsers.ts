// hooks/useUsers.ts
import { useState, useEffect, useMemo } from "react";

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export type SearchCriteria = "both" | "name" | "email";

export function useUsers(searchTerm: string, searchCriteria: SearchCriteria) {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        console.error("خطا در دریافت اطلاعات کاربران:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const filteredUsers = useMemo(() => {
    if (!searchTerm) return users;

    const searchLower = searchTerm.toLowerCase();

    return users.filter((user) => {
      if (searchCriteria === "name")
        return user.name.toLowerCase().includes(searchLower);
      if (searchCriteria === "email")
        return user.email.toLowerCase().includes(searchLower);

      return (
        user.name.toLowerCase().includes(searchLower) ||
        user.email.toLowerCase().includes(searchLower)
      );
    });
  }, [users, searchTerm, searchCriteria]);

  return { users, filteredUsers, loading };
}
