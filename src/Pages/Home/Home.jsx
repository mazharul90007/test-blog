import { Link } from "react-router-dom";
const HomePage = () => {
  const posts = [
    {
      id: 1,
      title: "React in 2025: What's New?",
      image:
        "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      excerpt:
        "Discover the latest features in React that are changing how we build apps.",
      tag: "Tech",
      author: "John Doe",
      date: "March 10, 2025",
    },
    {
      id: 2,
      title: "Tailwind CSS Power Moves",
      image:
        "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      excerpt: "Utility-first design like you've never seen before.",
      tag: "Tutorial",
      author: "Ava Carter",
      date: "March 9, 2025",
    },
    {
      id: 3,
      title: "Best VSCode Extensions for Devs",
      image:
        "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      excerpt:
        "Level up your coding productivity with these must-have extensions.",
      tag: "Tools",
      author: "Mark Lee",
      date: "March 7, 2025",
    },
    {
      id: 4,
      title: "Balancing Code and Life",
      image:
        "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      excerpt: "Tips for maintaining mental health as a remote developer.",
      tag: "Life",
      author: "Sofia Green",
      date: "March 5, 2025",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-20">
      {/* Hero */}
      <section
        className="relative h-[85vh] rounded-3xl overflow-hidden shadow-xl bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
        <div className="relative z-10 h-full flex flex-col justify-center pl-12 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-xl">
            CodeCraft: Explore the World of Web Development
          </h1>
          <p className="text-xl mb-6 max-w-xl text-gray-300">
            Insightful articles, real dev stories, and modern coding tutorials
            delivered fresh every week.
          </p>
          <Link
            to="/posts"
            className="px-8 py-3 bg-white text-black text-lg font-medium rounded-full hover:bg-gray-100 transition"
          >
            Browse All Posts
          </Link>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="text-center space-y-6">
        <h2 className="text-3xl font-bold text-gray-800">Explore Categories</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {["Tech", "Tutorial", "Life", "Tools", "Inspiration"].map(
            (cat, idx) => (
              <button
                key={idx}
                className="bg-gradient-to-tr from-blue-500 to-indigo-500 text-white px-5 py-2 rounded-full text-sm font-semibold hover:scale-105 transition"
              >
                {cat}
              </button>
            )
          )}
        </div>
      </section>

      {/* Latest Posts */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          Latest Articles
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {posts.map((post) => (
            <div
              key={post.id}
              className="rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                    {post.tag}
                  </span>
                  <span>{post.date}</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800">
                  {post.title}
                </h3>
                <p className="text-gray-600">{post.excerpt}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-sm text-gray-500">
                    By {post.author}
                  </span>
                  <Link
                    to={`/post/${post.id}`}
                    className="text-blue-600 hover:underline text-sm font-medium"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
