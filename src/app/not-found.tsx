// app/not-found.tsx

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-tr from-blue-50 via-white to-purple-50 px-6 text-center">
      <div className="bg-white p-12 rounded-3xl shadow-xl max-w-lg w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto mb-6 w-24 h-24 text-blue-500 animate-bounce"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <h1 className="text-8xl font-extrabold text-gradient bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
          404
        </h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-3">
          صفحه مورد نظر یافت نشد
        </h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          متاسفانه این صفحه وجود ندارد یا حذف شده است. لطفا به صفحه اصلی
          بازگردید و دوباره تلاش کنید.
        </p>

        <Link
          href="/"
          className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </div>
  );
}
