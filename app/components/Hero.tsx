export default function BlogHero() {
  return (
    <div className="bg-[#f8f8f8] min-h-[50vh] flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative">
          {/* Grid background */}
          <div className="absolute inset-0 grid grid-cols-[repeat(40,1fr)] grid-rows-[repeat(20,1fr)] gap-px pointer-events-none">
            {Array.from({ length: 800 }).map((_, i) => (
              <div key={i} className="bg-gray-200" />
            ))}
          </div>

          {/* Content */}
          <div className="relative">
            <span className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-white rounded-full">
              Design Journal
            </span>
            <h1 className="mb-4 text-5xl font-serif font-bold leading-tight">
              The Untitled Design Journal & Interviews
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The Untitled UI Journal features carefully selected good works
              from designers from around the globe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
