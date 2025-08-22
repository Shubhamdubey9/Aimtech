import React from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  User,
  ArrowRight,
  Tag,
  Clock,
  TrendingUp,
} from "lucide-react";

const Blog = () => {
  const featuredPost = {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2025",
    excerpt:
      "Explore the cutting-edge technologies and methodologies that are shaping the future of web development, from AI integration to advanced DevOps practices.",
    content:
      "As we move into 2025, the web development landscape continues to evolve at a rapid pace. From artificial intelligence integration to serverless architectures, developers must stay ahead of these trends to build competitive applications...",
    image:
      "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg",
    author: "AimTech Team",
    date: "Jan 15, 2025",
    readTime: "8 min read",
    category: "Tech Trends",
    tags: ["Web Development", "AI", "Trends", "2025"],
    featured: true,
  };

  const blogPosts = [
    {
      id: 2,
      title: "Building Scalable Tournament Platforms: A Technical Deep Dive",
      excerpt:
        "Learn how we built a gaming tournament platform that handles thousands of concurrent users with real-time updates and Instagram integration.",
      image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg",
      author: "Dev Team",
      date: "Jan 10, 2025",
      readTime: "12 min read",
      category: "Case Study",
      tags: ["Gaming", "React", "Node.js", "WebSocket"],
    },
    {
      id: 3,
      title: "DevOps Best Practices: CI/CD Pipeline Automation",
      excerpt:
        "Implement efficient CI/CD pipelines using GitHub Actions, Docker, and cloud services to streamline your development workflow.",
      image:
        "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg",
      author: "DevOps Team",
      date: "Jan 5, 2025",
      readTime: "10 min read",
      category: "DevOps",
      tags: ["CI/CD", "Docker", "GitHub Actions", "Automation"],
    },
    {
      id: 4,
      title: "React Performance Optimization: Tips and Techniques",
      excerpt:
        "Discover advanced techniques to optimize your React applications for better performance and user experience.",
      image:
        "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg",
      author: "Frontend Team",
      date: "Dec 28, 2024",
      readTime: "7 min read",
      category: "Tutorial",
      tags: ["React", "Performance", "Optimization", "JavaScript"],
    },
    {
      id: 5,
      title: "MongoDB vs PostgreSQL: Choosing the Right Database",
      excerpt:
        "Compare MongoDB and PostgreSQL to make informed decisions about which database technology best fits your project needs.",
      image:
        "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg",
      author: "Backend Team",
      date: "Dec 20, 2024",
      readTime: "9 min read",
      category: "Database",
      tags: ["MongoDB", "PostgreSQL", "Database", "Backend"],
    },
    {
      id: 6,
      title: "Building Real-time Chat Applications with Socket.io",
      excerpt:
        "Step-by-step guide to implementing real-time messaging features in your web applications using Socket.io and Node.js.",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg",
      author: "Full Stack Team",
      date: "Dec 15, 2024",
      readTime: "11 min read",
      category: "Tutorial",
      tags: ["Socket.io", "Real-time", "Chat", "Node.js"],
    },
    {
      id: 7,
      title: "Implementing Stripe Payments: A Complete Guide",
      excerpt:
        "Learn how to integrate Stripe payment processing into your applications with security best practices and error handling.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
      author: "Integration Team",
      date: "Dec 10, 2024",
      readTime: "15 min read",
      category: "Integration",
      tags: ["Stripe", "Payments", "E-commerce", "Security"],
    },
  ];

  const categories = [
    { name: "All Posts", count: 25, active: true },
    { name: "Tech Trends", count: 5 },
    { name: "Case Study", count: 8 },
    { name: "Tutorial", count: 7 },
    { name: "DevOps", count: 3 },
    { name: "Database", count: 2 },
  ];

  const popularTags = [
    "React",
    "Node.js",
    "DevOps",
    "MongoDB",
    "JavaScript",
    "TypeScript",
    "Docker",
    "AWS",
    "API",
    "Performance",
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Tech Insights & Resources
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8">
              Stay updated with the latest in web development, DevOps, and
              technology trends. Learn from our experiences and discover best
              practices for building modern applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full sm:w-80 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-4">
              <TrendingUp className="h-4 w-4 mr-2" />
              Featured Article
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-64 sm:h-80 object-cover rounded-xl shadow-lg"
              />
            </div>
            <div>
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full mb-3">
                  {featuredPost.category}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
              </div>

              <div className="flex items-center text-sm text-gray-500 mb-6">
                <User className="h-4 w-4 mr-1" />
                <span className="mr-4">{featuredPost.author}</span>
                <Calendar className="h-4 w-4 mr-1" />
                <span className="mr-4">{featuredPost.date}</span>
                <Clock className="h-4 w-4 mr-1" />
                <span>{featuredPost.readTime}</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {featuredPost.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <Link
                to="/blog/1"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
              >
                Read Full Article
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-0">
                  Latest Articles
                </h2>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>{blogPosts.length} articles</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 text-sm font-medium rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                        <Link to={`/blog/${post.id}`}>{post.title}</Link>
                      </h3>

                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center text-xs text-gray-500 mb-4">
                        <User className="h-3 w-3 mr-1" />
                        <span className="mr-3">{post.author}</span>
                        <Calendar className="h-3 w-3 mr-1" />
                        <span className="mr-3">{post.date}</span>
                        <Clock className="h-3 w-3 mr-1" />
                        <span>{post.readTime}</span>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {post.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <Link
                        to={`/blog/${post.id}`}
                        className="inline-flex items-center text-blue-600 font-medium text-sm hover:text-blue-800 transition-colors duration-200"
                      >
                        Read More
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <button className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200">
                  Load More Articles
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                {/* Categories */}
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Categories
                  </h3>
                  <ul className="space-y-2">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <button
                          className={`w-full text-left px-3 py-2 rounded-lg transition-colors duration-200 flex justify-between items-center ${
                            category.active
                              ? "bg-blue-50 text-blue-600 font-medium"
                              : "text-gray-700 hover:bg-gray-50"
                          }`}
                        >
                          <span>{category.name}</span>
                          <span className="text-sm text-gray-500">
                            ({category.count})
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Popular Tags */}
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Popular Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag, index) => (
                      <button
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200"
                      >
                        #{tag}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Newsletter */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-xl text-white">
                  <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
                  <p className="text-blue-100 text-sm mb-4">
                    Get the latest tech insights delivered to your inbox.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-3 py-2 rounded-lg text-gray-900 text-sm"
                    />
                    <button className="w-full bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors duration-200">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Notice */}
      <section className="bg-yellow-50 border-y border-yellow-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-yellow-100 text-yellow-800 text-sm font-medium rounded-full mb-4">
              <Tag className="h-4 w-4 mr-2" />
              Demo Content
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Blog Coming Soon
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're preparing comprehensive technical articles, case studies,
              and tutorials. This demo showcases the blog structure and design.
              Stay tuned for real content!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
