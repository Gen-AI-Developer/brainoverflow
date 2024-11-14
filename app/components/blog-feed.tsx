import Image from "next/image";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";
import blogimage from "@/public/thought-catalog.jpg";
type BlogPost = {
  id: number;
  title: string;
  description: string;
  image: string;
  categories: string[];
  link: string;
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "A Continually Unfolding History — Hillview by Made by Hand",
    description:
      "A single building occupies the hillside at Hillview, a historic 240-hectare former sheep farm on Tasmania's Bruny Island...",
    image: blogimage.src,
    categories: ["Design", "Architecture"],
    link: "#",
  },
  {
    id: 2,
    title: "Cognitive Dissonance Theory: Crash Course for UX Designers",
    description:
      "We all like to think of ourselves in certain ways. We consider ourselves to be truthful, hard-working, health-conscious...",
    image: blogimage.src,
    categories: ["Product", "Research", "Frameworks"],
    link: "#",
  },
  {
    id: 3,
    title: "How Remote Work Drastically Improved My Design Skills",
    description:
      "Remote working might not only be feasible but beneficial. Stanford University found that remote employees were 13...",
    image: blogimage.src,
    categories: ["Design", "Research"],
    link: "#",
  },
  {
    id: 4,
    title: "Improve Your UI Design Skills and Develop an Eye for Design",
    description:
      "The design industry is constantly evolving, but good design is timeless. Learn how to quickly develop an eye for UI...",
    image: blogimage.src,
    categories: ["Design", "Tools", "Research"],
    link: "#",
  },
  {
    id: 5,
    title: "Exclusive Interview with Designer, Jasmin Chew",
    description:
      "Jasmin Chew is a 23-year-old photographer and photo editor from Toronto, Ontario. She has worked with Spotify...",
    image: blogimage.src,
    categories: ["Design", "Research", "Interview"],
    link: "#",
  },
  {
    id: 6,
    title: "The Design Dilemma: Is Best UX Practice the Enemy of Creativity",
    description:
      "Frankie Sullivan explores the 'Design Dilemma' – what happens when best practice UX design clashes with creative...",
    image: blogimage.src,
    categories: ["Design", "Theory", "Research"],
    link: "#",
  },
  {
    id: 7,
    title: "Conversations with Makr & Co.",
    description:
      "We sat down with London's fast-growing brand and product design studio, Makr & Co. to find out how they've used Untitled UI to 2x their revenue.",
    image: blogimage.src,
    categories: ["Design", "Research", "Interview"],
    link: "#",
  },
  {
    id: 8,
    title: "A Relentless Pursuit of Perfection in Product Design",
    description:
      '"I began to notice that there was a sharp contrast between well-made, crafted products and poorly made ones, and...',
    image: blogimage.src,
    categories: ["Product", "Research", "Frameworks"],
    link: "#",
  },
  {
    id: 9,
    title: "How to Run a Successful Business With Your Partner",
    description:
      "Starting a business with your spouse or significant other is an exciting but delicate process and requires a great deal...",
    image: blogimage.src,
    categories: ["Design", "Research"],
    link: "#",
  },
];

export default function BlogFeed() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              width={300}
              height={200}
              className="w-full h-48 object-cover filter grayscale"
            />
            <div className="p-4">
              <div className="flex justify-normal">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <MdOutlineArrowOutward height={110} width={20} />
              </div>
              <p className="text-gray-600 text-sm mb-4">{post.description}</p>
              <div className="flex flex-wrap gap-2 mb-4 border">
                {post.categories.map((category, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded"
                  >
                    {category}
                  </span>
                ))}
              </div>
              <Link href={post.link} className="text-blue-600 hover:underline">
                Read more →
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-8">
        <Link href="#" className="text-gray-600 hover:text-gray-900">
          ← Previous
        </Link>
        <span className="text-gray-600">Page 1 of 16</span>
        <Link href="#" className="text-gray-600 hover:text-gray-900">
          Next →
        </Link>
      </div>
    </div>
  );
}
