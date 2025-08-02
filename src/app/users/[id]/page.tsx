import { notFound } from "next/navigation";
import { User } from "@/app/hooks/useUsers"; // reuse the type
import { Mail, Phone, Globe, MapPin, Building } from "lucide-react";
import { Separator } from "@/app/components/ui/separator/separator";
import Link from "next/link";

export default async function UserDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) return notFound();

  const user: User = await res.json();

  return (
    <div className="min-h-screen bg-white p-6 md:p-10 lg:p-16" dir="rtl">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link
            href="/"
            className="text-blue-600 hover:underline text-sm"
          >
            ← بازگشت به لیست کاربران
          </Link>
        </div>

        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
            {user.name.charAt(0)}
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{user.name}</h1>
            <p className="text-gray-600 text-sm">@{user.username}</p>
          </div>
        </div>

        {/* Contact Info */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Mail className="h-5 w-5 text-blue-500" />
            اطلاعات تماس
          </h2>
          <div className="bg-gray-50 p-4 rounded-lg space-y-2">
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
        </section>

        {/* Address */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <MapPin className="h-5 w-5 text-red-500" />
            آدرس
          </h2>
          <div className="bg-gray-50 p-4 rounded-lg space-y-2">
            <div>
              <span className="font-medium">شهر:</span> {user.address.city}
            </div>
            <div>
              <span className="font-medium">خیابان:</span> {user.address.street}
            </div>
            <div>
              <span className="font-medium">واحد:</span> {user.address.suite}
            </div>
            <div>
              <span className="font-medium">کد پستی:</span>{" "}
              {user.address.zipcode}
            </div>
            <Separator className="my-2" />
            <div className="text-sm text-gray-600">
              <span className="font-medium">موقعیت جغرافیایی:</span>
              <div className="mt-1">
                عرض: {user.address.geo.lat} | طول: {user.address.geo.lng}
              </div>
            </div>
          </div>
        </section>

        {/* Company Info */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Building className="h-5 w-5 text-purple-500" />
            شرکت
          </h2>
          <div className="bg-gray-50 p-4 rounded-lg space-y-2">
            <div>
              <span className="font-medium">نام شرکت:</span> {user.company.name}
            </div>
            <div>
              <span className="font-medium">شعار:</span>{" "}
              {user.company.catchPhrase}
            </div>
            <div>
              <span className="font-medium">حوزه:</span> {user.company.bs}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
