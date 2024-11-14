import Image from "next/image";

export default function TrendingBlogPost() {
  return (
    <>
      <div className="p-3">
        <div className="relative w-full h-full overflow-hidden rounded-lg">
          <Image
            src="/placeholder.svg?height=600&width=1200"
            alt="Frankie Sullivan"
            width={1200}
            height={600}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-green-900 opacity-60"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
            <h2 className="text-4xl font-serif font-bold leading-tight mb-4">
              Happy Clients and Finding Work That Motivates: Frankie Sullivan on
              Design and Freelancing
            </h2>
            <p className="text-lg mb-6 max-w-3xl">
              Frankie Sullivan is a 23-year-old photographer and product
              designer from Toronto, Ontario. She has worked with Spotify, Nike,
              Chews, Makr, and Square. Amélie Laurent asked her a few questions
              about her work and what's next.
            </p>
            <div className="flex justify-between items-end">
              <div className="space-y-1">
                <p className="text-sm font-semibold">Written by</p>
                <p className="text-lg">Amélie Laurent</p>
              </div>
              <div className="space-y-1 text-right">
                <p className="text-sm font-semibold">Published on</p>
                <p className="text-lg">12 April 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
