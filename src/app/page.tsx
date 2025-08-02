"use client";

import { useState } from "react";
import { useUsers, SearchCriteria, User } from "@/app/hooks/useUsers";
import { SearchBar, searchOptions } from "@/app/components/search-bar";
import UserList from "@/app/components/user-list";
import UserDetailsModal from "@/app/components/user-detail-modal";
import { Badge } from "@/app/components/ui/badge/badge";
import { Loader2, Users } from "lucide-react";

export default function UserDashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchCriteria, setSearchCriteria] = useState<SearchCriteria>("both");
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { filteredUsers, loading } = useUsers(searchTerm, searchCriteria);

  const handleUserClick = (user: User) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  const getSearchResultText = () => {
    if (!searchTerm) return "";
    const label = searchOptions.find(
      (opt) => opt.value === searchCriteria
    )?.label;
    return `نتایج جستجو در ${label} برای: "${searchTerm}"`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2" dir="rtl">
            داشبورد مدیریت کاربران
          </h1>
          <p className="text-gray-600 text-lg" dir="rtl">
            مشاهده و جستجو در لیست کاربران
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            searchCriteria={searchCriteria}
            onSearchCriteriaChange={setSearchCriteria}
          />
          <div className="flex items-center gap-4">
            <Badge variant="secondary" className="text-sm px-3 py-1">
              <Users className="h-4 w-4 mr-1" />
              {filteredUsers.length} کاربر
            </Badge>
            {searchTerm && (
              <Badge variant="outline" className="text-sm px-3 py-1" dir="rtl">
                {getSearchResultText()}
              </Badge>
            )}
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="h-12 w-12 animate-spin text-blue-500 mx-auto mb-4" />
          </div>
        ) : filteredUsers.length === 0 ? (
          <div className="text-center py-20 flex flex-col items-center">
            <Users className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2" dir="rtl">
              کاربری یافت نشد
            </h3>
            <p className="text-gray-600" dir="rtl">
              نتیجه‌ای برای جستجوی شما یافت نشد
            </p>
          </div>
        ) : (
          <UserList users={filteredUsers} onUserClick={handleUserClick} />
        )}

        <UserDetailsModal
          user={selectedUser}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </div>
  );
}
