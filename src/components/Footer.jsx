import React from "react"

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="px-4 py-6 text-center text-xs text-gray-500">
      <div className="font-semibold text-gray-700">
        تعليم الذكاء الاصطناعي
      </div>
      <div className="mt-1">
        © {year} جميع الحقوق محفوظة – وزارة الاتصالات / الشركة العامة للبريد والتوفير.
      </div>
      <div className="mt-1">
        تطوير: <a target="_blank" rel="noreferrer" className="underline">
          علي خميس غبن
        </a> — الإصدار 1.0.0
      </div>
      <div className="mt-2 space-x-3 rtl:space-x-reverse">
        <a href="/privacy.html" className="underline">سياسة الخصوصية</a>
        <span>·</span>
        <a href="/terms.html" className="underline">الشروط</a>
      </div>
    </footer>
  )
}
