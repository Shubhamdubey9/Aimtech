import React from "react";
import {
  CheckCircle,
  Target,
  Eye,
  Heart,
  Users,
  Globe,
  Zap,
  Award,
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Innovation",
      description:
        "We stay ahead of technology trends and bring cutting-edge solutions to every project.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Collaboration",
      description:
        "We work closely with our clients as partners, ensuring transparent communication throughout.",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Excellence",
      description:
        "We're committed to delivering high-quality solutions that exceed expectations.",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Passion",
      description:
        "We're genuinely passionate about technology and love what we do every day.",
    },
  ];

  const whyChooseUs = [
    "Fast turnaround times without compromising quality",
    "Scalable solutions that grow with your business",
    "Transparent communication and regular updates",
    "Deep understanding of user engagement and automation",
    "Comprehensive testing and quality assurance",
    "24/7 support and maintenance services",
    "Competitive pricing with flexible payment options",
    "Experienced team with diverse technical expertise",
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About AimTech Solution
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8">
              We're a young and dynamic tech service provider dedicated to
              building efficient, scalable, and business-focused digital
              products that drive success.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                AimTech Solution was born from a vision to bridge the gap
                between complex technology and practical business solutions. We
                specialize in Web Development, Automation, DevOps, and custom
                digital platforms.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                From robust backend architectures to beautiful frontend designs,
                from CI/CD pipelines to cloud automation — AimTech covers all
                essential pillars of modern digital services.
              </p>
              <p className="text-lg text-gray-600">
                Our remote-first approach allows us to work with clients
                globally, delivering world-class solutions regardless of
                geographical boundaries.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  2023
                </div>
                <div className="text-gray-700">Founded</div>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  50+
                </div>
                <div className="text-gray-700">Projects</div>
              </div>
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  25+
                </div>
                <div className="text-gray-700">Happy Clients</div>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  24/7
                </div>
                <div className="text-gray-700">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-blue-600 mb-6">
                <Target className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 text-lg">
                To empower businesses with cutting-edge technology solutions
                that drive growth, efficiency, and innovation. We're committed
                to delivering scalable, reliable, and user-centric digital
                products that make a real difference.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-purple-600 mb-6">
                <Eye className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 text-lg">
                To become the go-to technology partner for businesses worldwide,
                known for our innovation, reliability, and commitment to
                excellence. We envision a future where every business can
                leverage technology to reach its full potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide our work and relationships with clients
              and team members
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors duration-300"
              >
                <div className="text-blue-600 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose AimTech Solution?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We bring unique advantages that set us apart in the competitive
              tech landscape
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {whyChooseUs.map((reason, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm"
              >
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Technologies We Work With
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We stay current with the latest technologies to deliver modern,
              efficient solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Frontend
              </h3>
              <div className="space-y-2">
                <div className="text-gray-700">React & Next.js</div>
                <div className="text-gray-700">Vite & Tailwind CSS</div>
                <div className="text-gray-700">TypeScript & JavaScript</div>
                <div className="text-gray-700">Responsive Design</div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Backend
              </h3>
              <div className="space-y-2">
                <div className="text-gray-700">Node.js & Express</div>
                <div className="text-gray-700">MongoDB & Firebase</div>
                <div className="text-gray-700">RESTful APIs</div>
                <div className="text-gray-700">Socket.io</div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                DevOps & Tools
              </h3>
              <div className="space-y-2">
                <div className="text-gray-700">GitHub Actions</div>
                <div className="text-gray-700">Docker & AWS</div>
                <div className="text-gray-700">DigitalOcean & PM2</div>
                <div className="text-gray-700">Cloudinary & Stripe</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and see how we can help you achieve your
            digital goals. We're here to turn your ideas into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/quote"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
            >
              Get Started Today
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
