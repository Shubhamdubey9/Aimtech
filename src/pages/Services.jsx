import React from "react";
import { Link } from "react-router-dom";
import {
  Code,
  Server,
  Zap,
  CheckCircle,
  ArrowRight,
  Globe,
  Database,
  Shield,
  Smartphone,
} from "lucide-react";

const Services = () => {
  const webDevServices = [
    {
      title: "Frontend Development",
      description:
        "Modern, responsive user interfaces built with React, Next.js, and cutting-edge CSS frameworks.",
      features: [
        "React & Next.js",
        "Tailwind CSS",
        "Responsive Design",
        "Performance Optimization",
      ],
    },
    {
      title: "Backend Development",
      description:
        "Robust server-side applications with scalable architecture and secure API development.",
      features: [
        "Node.js & Express",
        "RESTful APIs",
        "Database Design",
        "Authentication Systems",
      ],
    },
    {
      title: "Full-Stack Projects",
      description:
        "Complete web applications from database to user interface, seamlessly integrated.",
      features: [
        "End-to-end Development",
        "Real-time Features",
        "Third-party Integrations",
        "Testing & QA",
      ],
    },
    {
      title: "E-commerce Solutions",
      description:
        "Complete online stores with payment processing, inventory management, and user accounts.",
      features: [
        "Shopping Cart",
        "Payment Integration",
        "Admin Dashboard",
        "Order Management",
      ],
    },
    {
      title: "Business Websites",
      description:
        "Professional corporate websites that establish your brand and drive conversions.",
      features: [
        "CMS Integration",
        "SEO Optimization",
        "Analytics Setup",
        "Contact Forms",
      ],
    },
    {
      title: "Portfolio Websites",
      description:
        "Showcase your work with stunning portfolio sites that highlight your achievements.",
      features: [
        "Gallery Systems",
        "Project Showcases",
        "Client Testimonials",
        "Contact Integration",
      ],
    },
  ];

  const devOpsServices = [
    {
      title: "CI/CD Pipeline Setup",
      description:
        "Automated testing, building, and deployment pipelines for efficient software delivery.",
      features: [
        "GitHub Actions",
        "Automated Testing",
        "Build Automation",
        "Deployment Strategies",
      ],
    },
    {
      title: "Server Automation",
      description:
        "Automated server provisioning, configuration, and management for reliable operations.",
      features: [
        "Infrastructure Setup",
        "Configuration Management",
        "Automated Backups",
        "Security Hardening",
      ],
    },
    {
      title: "Monitoring & Alerting",
      description:
        "Comprehensive monitoring solutions with real-time alerts and performance insights.",
      features: [
        "System Monitoring",
        "Performance Metrics",
        "Error Tracking",
        "Uptime Monitoring",
      ],
    },
    {
      title: "Infrastructure as Code",
      description:
        "Version-controlled infrastructure management with reproducible deployments.",
      features: [
        "Docker Containerization",
        "Cloud Infrastructure",
        "Environment Management",
        "Scaling Solutions",
      ],
    },
    {
      title: "Cloud Services",
      description:
        "Cloud migration, optimization, and management across major cloud platforms.",
      features: [
        "AWS & DigitalOcean",
        "Cloud Migration",
        "Cost Optimization",
        "Security Best Practices",
      ],
    },
    {
      title: "Performance Optimization",
      description:
        "System performance tuning and optimization for maximum efficiency and speed.",
      features: [
        "Database Optimization",
        "Caching Strategies",
        "Load Balancing",
        "Resource Optimization",
      ],
    },
  ];

  const customServices = [
    {
      title: "Game Tournament Platforms",
      description:
        "Complete gaming platforms with tournaments, leaderboards, and user management systems.",
      features: [
        "Tournament Management",
        "Live Leaderboards",
        "User Registration",
        "Prize Distribution",
      ],
    },
    {
      title: "Social & Dating Apps",
      description:
        "Social platforms with matching algorithms, real-time chat, and user engagement features.",
      features: [
        "User Matching",
        "Real-time Chat",
        "Profile Management",
        "Social Features",
      ],
    },
    {
      title: "Instagram Integration",
      description:
        "Social media integrations that leverage Instagram's API for user onboarding and content.",
      features: [
        "Instagram API",
        "Social Login",
        "Content Import",
        "User Verification",
      ],
    },
    {
      title: "Chat Applications",
      description:
        "Real-time messaging applications with advanced features and scalable architecture.",
      features: [
        "Real-time Messaging",
        "File Sharing",
        "Group Chats",
        "Message Encryption",
      ],
    },
    {
      title: "Community Platforms",
      description:
        "Build engaged communities with forums, member management, and social features.",
      features: [
        "User Communities",
        "Content Management",
        "Moderation Tools",
        "Engagement Features",
      ],
    },
    {
      title: "Custom Integrations",
      description:
        "Bespoke integrations with third-party services, APIs, and external systems.",
      features: [
        "API Integrations",
        "Webhook Handling",
        "Data Synchronization",
        "Custom Connectors",
      ],
    },
  ];

  const ServiceCard = ({ service, index }) => (
    <div
      key={index}
      className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-300 transition-all duration-300"
    >
      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        {service.title}
      </h3>
      <p className="text-gray-600 mb-4">{service.description}</p>
      <ul className="space-y-2">
        {service.features.map((feature, featureIndex) => (
          <li
            key={featureIndex}
            className="flex items-center text-sm text-gray-600"
          >
            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8">
              Comprehensive technology solutions covering all aspects of modern
              digital business needs. From web development to DevOps automation
              and custom applications.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <Code className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Web Development
              </h3>
              <p className="text-gray-600">
                Full-stack solutions from frontend to backend
              </p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <Server className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                DevOps & Automation
              </h3>
              <p className="text-gray-600">
                CI/CD, infrastructure, and deployment automation
              </p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <Zap className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Custom Projects
              </h3>
              <p className="text-gray-600">
                Specialized applications and integrations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Web Development Services */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-blue-600 mb-4">
              <Code className="h-12 w-12 mx-auto" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Web Development
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Modern web applications built with cutting-edge technologies and
              best practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webDevServices.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* DevOps Services */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-green-600 mb-4">
              <Server className="h-12 w-12 mx-auto" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Automation & DevOps
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Streamline your development workflow with automated CI/CD
              pipelines and infrastructure management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {devOpsServices.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Custom Projects */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-purple-600 mb-4">
              <Zap className="h-12 w-12 mx-auto" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Custom Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized applications tailored to your unique business
              requirements and industry needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {customServices.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Technology Stack
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We work with modern, proven technologies to deliver reliable and
              scalable solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <Globe className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Frontend</h3>
              <div className="text-sm text-gray-600 space-y-1">
                <div>React & Next.js</div>
                <div>Tailwind CSS</div>
                <div>TypeScript</div>
                <div>Vite</div>
              </div>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <Database className="h-8 w-8 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Backend</h3>
              <div className="text-sm text-gray-600 space-y-1">
                <div>Node.js & Express</div>
                <div>MongoDB</div>
                <div>Firebase</div>
                <div>Socket.io</div>
              </div>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <Shield className="h-8 w-8 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">DevOps</h3>
              <div className="text-sm text-gray-600 space-y-1">
                <div>Docker & AWS</div>
                <div>GitHub Actions</div>
                <div>DigitalOcean</div>
                <div>PM2</div>
              </div>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-lg">
              <Smartphone className="h-8 w-8 text-orange-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Tools</h3>
              <div className="text-sm text-gray-600 space-y-1">
                <div>Stripe & Razorpay</div>
                <div>Cloudinary</div>
                <div>Instagram API</div>
                <div>WhatsApp API</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and find the perfect
            solution for your business needs. Get a detailed quote tailored to
            your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/quote"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200 flex items-center space-x-2"
            >
              <span>Request Quote</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/portfolio"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
