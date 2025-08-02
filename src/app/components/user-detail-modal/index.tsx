"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/app/components/ui/dialog/dialog";
import { Mail, Phone, Globe, MapPin, Building } from "lucide-react";
import { Separator } from "@/app/components/ui/separator/separator";
import { User } from "@/app/hooks/useUsers";
import Link from "next/link";

export default function UserDetailsModal({
  user,
  isOpen,
  onClose,
}: {
  user: User | null;
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!user) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="max-w-2xl w-[95vw] max-h-[80vh] bg-white border shadow-lg"
        dir="rtl"
      >
        <DialogHeader className="pr-8">
          <DialogTitle className="flex items-center gap-3 text-xl text-gray-900">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
              {user.name.charAt(0)}
            </div>
            <div>
              <div className="text-gray-900">{user.name}</div>
              <div className="text-sm text-gray-500 font-normal">
                @{user.username}
              </div>
            </div>
          </DialogTitle>
          <Link
            href={`/users/${user.id}`}
            className="text-blue-600 text-sm hover:underline text-start mt-4"
          >
            مشاهده صفحه جزئیات
          </Link>
        </DialogHeader>

        <div className="space-y-6 mt-6 overflow-y-auto modal-content max-h-[50vh] pr-2">
          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2 text-gray-900">
              <Mail className="h-5 w-5 text-blue-500" />
              اطلاعات تماس
            </h3>
            <div className="space-y-2 bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-500" />
                <span className="font-medium text-gray-700">ایمیل:</span>
                <span className="text-gray-900">{user.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-green-500" />
                <span className="font-medium text-gray-700">تلفن:</span>
                <span className="text-gray-900">{user.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-orange-500" />
                <span className="font-medium text-gray-700">وبسایت:</span>
                <a
                  href={`http://${user.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {user.website}
                </a>
              </div>
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2 text-gray-900">
              <MapPin className="h-5 w-5 text-red-500" />
              آدرس
            </h3>
            <div className="bg-gray-50 p-4 rounded-lg space-y-2">
              <div>
                <span className="font-medium text-gray-700">شهر:</span>
                <span className="text-gray-900 mr-2">{user.address.city}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">خیابان:</span>
                <span className="text-gray-900 mr-2">
                  {user.address.street}
                </span>
              </div>
              <div>
                <span className="font-medium text-gray-700">واحد:</span>
                <span className="text-gray-900 mr-2">{user.address.suite}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">کد پستی:</span>
                <span className="text-gray-900 mr-2">
                  {user.address.zipcode}
                </span>
              </div>
              <Separator className="my-2" />
              <div className="text-sm text-gray-600">
                <span className="font-medium">موقعیت جغرافیایی:</span>
                <div className="mt-1">
                  عرض جغرافیایی: {user.address.geo.lat} | طول جغرافیایی:{" "}
                  {user.address.geo.lng}
                </div>
              </div>
            </div>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2 text-gray-900">
              <Building className="h-5 w-5 text-purple-500" />
              اطلاعات شرکت
            </h3>
            <div className="bg-gray-50 p-4 rounded-lg space-y-2">
              <div>
                <span className="font-medium text-gray-700">نام شرکت:</span>
                <span className="text-gray-900 mr-2">{user.company.name}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">شعار:</span>
                <span className="text-gray-900 mr-2">
                  {user.company.catchPhrase}
                </span>
              </div>
              <div>
                <span className="font-medium text-gray-700">حوزه فعالیت:</span>
                <span className="text-gray-900 mr-2">{user.company.bs}</span>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
