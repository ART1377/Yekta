"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card/card";
import { Mail, Phone, MapPin, Building } from "lucide-react";
import { User } from "@/app/hooks/useUsers";

export default function UserCard({
  user,
  onClick,
}: {
  user: User;
  onClick: (user: User) => void;
}) {
  return (
    <Card
      className="hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-[1.02] border-l-4 border-l-blue-500"
      onClick={() => onClick(user)}
    >
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg" dir="rtl">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
            {user.name.charAt(0)}
          </div>
          <div>
            <div className="font-semibold">{user.name}</div>
            <div className="text-sm text-muted-foreground">
              @{user.username}
            </div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center gap-2 text-sm" dir="rtl">
          <Mail className="h-4 w-4 text-blue-500" />
          <span className="truncate">{user.email}</span>
        </div>
        <div className="flex items-center gap-2 text-sm" dir="rtl">
          <Phone className="h-4 w-4 text-green-500" />
          <span>{user.phone}</span>
        </div>
        <div className="flex items-center gap-2 text-sm" dir="rtl">
          <MapPin className="h-4 w-4 text-red-500" />
          <span>{user.address.city}</span>
        </div>
        <div className="flex items-center gap-2 text-sm" dir="rtl">
          <Building className="h-4 w-4 text-purple-500" />
          <span className="truncate">{user.company.name}</span>
        </div>
      </CardContent>
    </Card>
  );
}
