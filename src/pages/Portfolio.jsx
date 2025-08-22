import React from "react";
import {
  ExternalLink,
  Github,
  Star,
  Calendar,
  Users,
  Database,
} from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      name: "Gaming Tournament Platform",
      category: "Custom Platform",
      image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg",
      description:
        "Complete gaming platform with tournament management, live leaderboards, and Instagram integration for user onboarding.",
      problem:
        "Gaming communities needed a centralized platform to organize tournaments, track performance, and manage participants across different games.",
      solution:
        "Built a comprehensive tournament management system with real-time updates, automated bracket generation, and social media integration for seamless user experience.",
      techStack: ["React", "Node.js", "MongoDB", "Socket.io", "Instagram API"],
      features: [
        "Real-time tournament brackets",
        "Live leaderboards with instant updates",
        "Instagram integration for user verification",
        "Admin panel for tournament management",
        "Automated prize distribution system",
        "Multi-game support",
      ],
      client: "GameZone Community",
      testimonial:
        "AimTech delivered exactly what we needed. The platform handles our 1000+ member tournaments flawlessly, and the Instagram integration made onboarding seamless.",
      completedDate: "2024",
      teamSize: "3 developers",
      duration: "8 weeks",
      status: "Live",
    },
    {
      id: 2,
      name: "Social Dating Platform",
      category: "Social App",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg",
      description:
        "Modern dating app with advanced matching algorithms, real-time chat, and comprehensive user verification systems.",
      problem:
        "Users needed a safe, feature-rich dating platform with intelligent matching and seamless communication tools.",
      solution:
        "Developed a sophisticated matching system with real-time chat, video calls, and multi-layer verification for user safety and authentic connections.",
      techStack: ["React Native", "Node.js", "MongoDB", "Socket.io", "Stripe"],
      features: [
        "AI-powered matching algorithms",
        "Real-time messaging and video calls",
        "Multi-step user verification",
        "Geolocation-based matching",
        "Premium subscription management",
        "Safety reporting and moderation",
      ],
      client: "SocialConnect Inc",
      testimonial:
        "The app exceeded our expectations. User engagement increased by 300% after launch, and the real-time features work perfectly even with thousands of concurrent users.",
      completedDate: "2024",
      teamSize: "4 developers",
      duration: "12 weeks",
      status: "Live",
    },
    {
      id: 3,
      name: "E-commerce Business Platform",
      category: "E-commerce",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
      description:
        "Full-featured e-commerce platform with inventory management, payment processing, and advanced analytics dashboard.",
      problem:
        "A growing retail business needed a custom e-commerce solution with advanced inventory management and detailed analytics.",
      solution:
        "Created a comprehensive e-commerce platform with real-time inventory tracking, multiple payment gateways, and business intelligence dashboards.",
      techStack: ["Next.js", "Node.js", "MongoDB", "Stripe", "AWS"],
      features: [
        "Advanced inventory management",
        "Multiple payment gateway integration",
        "Real-time order tracking",
        "Customer analytics dashboard",
        "Automated email marketing",
        "Multi-vendor support",
      ],
      client: "RetailPro Solutions",
      testimonial:
        "Our online sales increased by 250% within the first month. The platform is intuitive for both customers and our admin team.",
      completedDate: "2024",
      teamSize: "5 developers",
      duration: "10 weeks",
      status: "Live",
    },
  ];

  const upcomingProjects = [
    {
      name: "Healthcare Management System",
      category: "Healthcare",
      description:
        "Comprehensive patient management system with appointment scheduling and telemedicine features.",
      status: "In Development",
    },
    {
      name: "Educational Learning Platform",
      category: "Education",
      description:
        "Interactive learning platform with course management and student progress tracking.",
      status: "Planning Phase",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Portfolio
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8">
              Discover the innovative solutions we've built for our clients.
              From gaming platforms to social applications, see how we turn
              ideas into successful digital products.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Stats */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">
                50+
              </div>
              <div className="text-gray-600 text-sm sm:text-base">
                Projects Completed
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">
                25+
              </div>
              <div className="text-gray-600 text-sm sm:text-base">
                Happy Clients
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-2">
                15+
              </div>
              <div className="text-gray-600 text-sm sm:text-base">
                Technologies
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-orange-600 mb-2">
                99%
              </div>
              <div className="text-gray-600 text-sm sm:text-base">
                Client Satisfaction
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Detailed case studies showcasing our expertise across different
              industries and technologies
            </p>
          </div>

          <div className="space-y-20">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-64 sm:h-80 object-cover rounded-xl shadow-lg"
                  />
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                      {project.name}
                    </h3>
                    <p className="text-gray-600 mb-6">{project.description}</p>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6 text-sm">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <Calendar className="h-5 w-5 text-gray-500 mx-auto mb-1" />
                      <div className="font-medium">{project.completedDate}</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <Users className="h-5 w-5 text-gray-500 mx-auto mb-1" />
                      <div className="font-medium">{project.teamSize}</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <Database className="h-5 w-5 text-gray-500 mx-auto mb-1" />
                      <div className="font-medium">{project.status}</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Tech Stack:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-start space-x-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 italic text-sm">
                      "{project.testimonial}"
                    </p>
                    <p className="text-sm text-gray-600 mt-2 font-medium">
                      — {project.client}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Case Studies */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Project Details
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Deep dive into our problem-solving approach and technical
              solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {project.name}
                </h3>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Problem Statement:
                  </h4>
                  <p className="text-gray-600 text-sm mb-4">
                    {project.problem}
                  </p>

                  <h4 className="font-semibold text-gray-900 mb-2">
                    Our Solution:
                  </h4>
                  <p className="text-gray-600 text-sm mb-4">
                    {project.solution}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Key Features:
                  </h4>
                  <ul className="space-y-1">
                    {project.features
                      .slice(0, 4)
                      .map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="text-sm text-gray-600 flex items-start"
                        >
                          <span className="text-blue-500 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Duration: {project.duration}</span>
                    <span className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>{project.status}</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Projects */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What's Next?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Exciting projects currently in development and planning phases
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {upcomingProjects.map((project, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                    {project.category}
                  </span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm font-medium rounded-full">
                    {project.status}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.name}
                </h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and see how we can help bring your vision
            to life. From concept to deployment, we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/quote"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200 flex items-center space-x-2"
            >
              <span>Start Your Project</span>
              <ExternalLink className="h-5 w-5" />
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              Discuss Your Idea
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
