import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b-2 sticky top-0 ">
      <div className="bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <div className="h-8 w-8 bg-black rounded-full"></div>
              <span className="ml-2 text-xl font-semibold">BrainOverFlow</span>
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <Link
              href="/features"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
            >
              Pricing
            </Link>
            <Link
              href="/company"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
            >
              Company
            </Link>
            <div className="relative inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900">
              <span>Marketplace</span>
              <ChevronDown className="ml-1 h-4 w-4" />
            </div>
            <div className="relative inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900">
              <span>Resources</span>
              <ChevronDown className="ml-1 h-4 w-4" />
            </div>
          </div>
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="block h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
