import { Post } from '../typings';
import Image from 'next/image';
import urlFor from '../lib/urlFor';

type Props = {
  posts: Post[];
};

export default function BlogList({ posts }: Props) {
  return (
    <div>
      <hr className="mb-10 border-blue-300" />

      <div>
        {posts.map((post) => (
          <div key={post._id} className="cursor-pointer group flex-flex-col">
            <div className="relative w-full transition-transform duration-200 ease-out h-80 drop-shadow-xl group-hover:scale-105">
              <Image
                className="object-cover object-left lg:object-center"
                src={urlFor(post.mainImage).url()}
                alt={post.author.name}
                fill
              />
              <div className="absolute bottom-0 flex justify-between w-full p-5 text-white bg-black rounded bg-opacity-20 backdrop-blur-lg drop-shadow-lg">
                <div>
                  <p className="font-bold">{post.title}</p>
                  <p>
                    {new Date(post._createdAt).toLocaleDateString('en-US', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </p>
                </div>

                <div className="flex flex-col items-center md:flex-row gap-y-2 md:gap-x-2">
                  {post.categories.map((category) => (
                    <div className="px-3 py-1 text-sm font-semibold text-center text-black bg-blue-200 rounded-full">
                      <p>{category.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex-1 mt-5">
              <p className="text-lg font-bold underline">{post.title}</p>
              <p className="text-gray-500">{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
