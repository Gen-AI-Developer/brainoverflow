import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-16 relative">
      {/* Decorative squares */}
      <div className="absolute top-0 right-0 grid grid-cols-2 gap-1">
        <div className="w-4 h-4 bg-white"></div>
        <div className="w-4 h-4 bg-white"></div>
        <div className="w-4 h-4 bg-white"></div>
      </div>

      <div className="container mx-auto px-4">
        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="text-3xl font-serif italic mb-4 md:mb-0">
            Let's get started on something great
          </h2>
          <button className="bg-transparent border border-white rounded-full px-6 py-2 hover:bg-white hover:text-green-900 transition-colors">
            Start your 7-day free trial
          </button>
        </div>

        {/* Links section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          <div>
            <h3 className="font-bold mb-4">Product</h3>
            <ul className="space-y-2">
              {[
                "Overview",
                "Features",
                "Solutions",
                "Tutorials",
                "Pricing",
                "Releases",
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:underline">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              {[
                "About us",
                "Careers",
                "Press",
                "News",
                "Media kit",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:underline">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              {[
                "Blog",
                "Newsletter",
                "Events",
                "Help centre",
                "Tutorials",
                "Support",
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:underline">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Use cases</h3>
            <ul className="space-y-2">
              {[
                "Startups",
                "Enterprise",
                "Government",
                "SaaS centre",
                "Marketplaces",
                "Ecommerce",
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:underline">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Social</h3>
            <ul className="space-y-2">
              {[
                "Twitter",
                "LinkedIn",
                "Facebook",
                "GitHub",
                "AngelList",
                "Dribbble",
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:underline">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              {[
                "Terms",
                "Privacy",
                "Cookies",
                "Licenses",
                "Settings",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:underline">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="w-6 h-6 bg-white rounded-full mr-2"></div>
            <span className="font-bold">Untitled UI</span>
          </div>
          <div className="text-sm">
            © 2077 Untitled UI. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
