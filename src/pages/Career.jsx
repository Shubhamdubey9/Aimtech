import React, { useState } from "react";
import {
  MapPin,
  Clock,
  DollarSign,
  Users,
  Code,
  Server,
  Zap,
  Send,
  Star,
  CheckCircle,
} from "lucide-react";

const Career = () => {
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [applicationData, setApplicationData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    portfolio: "",
    coverLetter: "",
    resume: null,
  });

  const openPositions = [
    {
      id: 1,
      title: "Full Stack Developer",
      type: "Full-time",
      location: "Remote",
      salary: "$50K - $80K",
      icon: <Code className="h-6 w-6" />,
      description:
        "We're looking for a skilled Full Stack Developer to join our growing team and work on exciting client projects.",
      requirements: [
        "3+ years of experience with React and Node.js",
        "Strong knowledge of MongoDB and API development",
        "Experience with modern DevOps practices",
        "Excellent problem-solving skills",
        "Strong communication and teamwork abilities",
      ],
      responsibilities: [
        "Develop and maintain web applications using React and Node.js",
        "Design and implement RESTful APIs",
        "Collaborate with clients to understand requirements",
        "Participate in code reviews and maintain code quality",
        "Work with DevOps tools for deployment and monitoring",
      ],
      benefits: [
        "Competitive salary and performance bonuses",
        "Flexible working hours",
        "Professional development opportunities",
        "Latest tech equipment provided",
        "Health insurance coverage",
      ],
    },
    {
      id: 2,
      title: "DevOps Engineer",
      type: "Full-time",
      location: "Remote",
      salary: "$60K - $90K",
      icon: <Server className="h-6 w-6" />,
      description:
        "Join our DevOps team to help clients build robust, scalable infrastructure and automated deployment pipelines.",
      requirements: [
        "4+ years of DevOps experience",
        "Proficiency with Docker, AWS, and CI/CD pipelines",
        "Experience with Infrastructure as Code (Terraform, CloudFormation)",
        "Strong Linux administration skills",
        "Knowledge of monitoring and logging tools",
      ],
      responsibilities: [
        "Design and implement CI/CD pipelines",
        "Manage cloud infrastructure on AWS and DigitalOcean",
        "Automate deployment processes and monitoring",
        "Optimize system performance and security",
        "Provide technical guidance to development teams",
      ],
      benefits: [
        "Competitive salary with equity options",
        "Work with cutting-edge DevOps technologies",
        "Professional certification support",
        "Flexible remote work environment",
        "Annual tech conference allowance",
      ],
    },
    {
      id: 3,
      title: "UI/UX Designer",
      type: "Part-time",
      location: "Remote",
      salary: "$30K - $50K",
      icon: <Zap className="h-6 w-6" />,
      description:
        "Create beautiful, user-friendly designs for web applications and help shape the user experience of our client projects.",
      requirements: [
        "2+ years of UI/UX design experience",
        "Proficiency in Figma, Sketch, or Adobe Creative Suite",
        "Strong understanding of user-centered design principles",
        "Experience with responsive web design",
        "Portfolio demonstrating design skills",
      ],
      responsibilities: [
        "Create wireframes, mockups, and prototypes",
        "Design user interfaces for web and mobile applications",
        "Collaborate with developers to ensure design implementation",
        "Conduct user research and usability testing",
        "Maintain design systems and style guides",
      ],
      benefits: [
        "Flexible part-time schedule",
        "Creative freedom and autonomy",
        "Work on diverse client projects",
        "Professional development support",
        "Collaborative team environment",
      ],
    },
  ];

  const internshipProgram = {
    title: "AimTech Internship Program",
    duration: "3-6 months",
    positions: [
      "Frontend Development",
      "Backend Development",
      "DevOps",
      "UI/UX Design",
    ],
    benefits: [
      "Hands-on experience with real client projects",
      "Mentorship from experienced developers",
      "Flexible schedule (part-time or full-time)",
      "Certificate upon completion",
      "Potential for full-time position",
    ],
  };

  const companyPerks = [
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Remote-First",
      description: "Work from anywhere in the world with flexible hours",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Collaborative Culture",
      description: "Supportive team environment with open communication",
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Latest Technology",
      description: "Work with cutting-edge tools and technologies",
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Growth Opportunities",
      description: "Continuous learning and career advancement",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setApplicationData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleApplicationSubmit = (e) => {
    e.preventDefault();
    console.log("Application submitted:", applicationData);
    alert(
      "Application submitted successfully! We'll review your application and get back to you soon."
    );
    setApplicationData({
      name: "",
      email: "",
      phone: "",
      position: "",
      experience: "",
      portfolio: "",
      coverLetter: "",
      resume: null,
    });
    setSelectedPosition(null);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Join Our Team
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8">
              Be part of a dynamic team building the future of web technology.
              We're always looking for talented individuals who share our
              passion for innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#positions"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
              >
                View Open Positions
              </a>
              <a
                href="#internship"
                className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200"
              >
                Internship Program
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Work With Us?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              At AimTech Solution, we believe in creating an environment where
              innovation thrives and every team member can reach their full
              potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyPerks.map((perk, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors duration-300"
              >
                <div className="text-blue-600 mb-4 flex justify-center">
                  {perk.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {perk.title}
                </h3>
                <p className="text-gray-600">{perk.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Open Positions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore opportunities to grow your career with us
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {openPositions.map((position) => (
              <div
                key={position.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                    {position.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {position.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {position.type}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {position.location}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{position.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <span className="flex items-center text-green-600 font-semibold">
                    <DollarSign className="h-4 w-4 mr-1" />
                    {position.salary}
                  </span>
                </div>

                <button
                  onClick={() => setSelectedPosition(position)}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
                >
                  View Details & Apply
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internship Program */}
      <section id="internship" className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                {internshipProgram.title}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Get hands-on experience working on real client projects while
                learning from experienced professionals. Our internship program
                is designed to give you practical skills and industry
                experience.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center text-gray-700">
                  <Clock className="h-5 w-5 text-blue-600 mr-3" />
                  <span>
                    <span className="font-semibold">Duration:</span>{" "}
                    {internshipProgram.duration}
                  </span>
                </div>
                <div className="flex items-start text-gray-700">
                  <Code className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                  <div>
                    <span className="font-semibold">Available Positions:</span>
                    <div className="mt-1">
                      {internshipProgram.positions.map((pos, index) => (
                        <span
                          key={index}
                          className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm mr-2 mb-2"
                        >
                          {pos}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={() =>
                  setSelectedPosition({
                    id: "internship",
                    title: "Internship Program",
                    type: "Internship",
                    location: "Remote",
                    salary: "Stipend Available",
                    description:
                      "Join our internship program to gain real-world experience",
                    requirements: [
                      "Currently pursuing or recently completed relevant degree",
                      "Basic knowledge of programming or design",
                      "Eager to learn and grow",
                      "Good communication skills",
                      "Available for 3-6 months commitment",
                    ],
                    responsibilities: [
                      "Work on real client projects under mentorship",
                      "Participate in team meetings and code reviews",
                      "Learn industry best practices and tools",
                      "Complete assigned tasks and projects",
                      "Present work to team and clients",
                    ],
                    benefits: internshipProgram.benefits,
                  })
                }
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
              >
                Apply for Internship
              </button>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Program Benefits
              </h3>
              <div className="space-y-4">
                {internshipProgram.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {selectedPosition && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-screen overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {selectedPosition.title}
                  </h2>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {selectedPosition.type}
                    </span>
                    <span className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {selectedPosition.location}
                    </span>
                    <span className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-1" />
                      {selectedPosition.salary}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedPosition(null)}
                  className="text-gray-400 hover:text-gray-600 text-xl"
                >
                  ×
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Job Details */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Job Description
                    </h3>
                    <p className="text-gray-600">
                      {selectedPosition.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Requirements
                    </h3>
                    <ul className="space-y-2">
                      {selectedPosition.requirements.map((req, index) => (
                        <li
                          key={index}
                          className="flex items-start text-gray-600"
                        >
                          <span className="text-blue-500 mr-2">•</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Responsibilities
                    </h3>
                    <ul className="space-y-2">
                      {selectedPosition.responsibilities.map((resp, index) => (
                        <li
                          key={index}
                          className="flex items-start text-gray-600"
                        >
                          <span className="text-green-500 mr-2">•</span>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Benefits
                    </h3>
                    <ul className="space-y-2">
                      {selectedPosition.benefits.map((benefit, index) => (
                        <li
                          key={index}
                          className="flex items-start text-gray-600"
                        >
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Application Form */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">
                    Apply Now
                  </h3>

                  <form
                    onSubmit={handleApplicationSubmit}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={applicationData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={applicationData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={applicationData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Years of Experience
                      </label>
                      <select
                        name="experience"
                        value={applicationData.experience}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select experience</option>
                        <option value="0-1">0-1 years</option>
                        <option value="2-3">2-3 years</option>
                        <option value="4-5">4-5 years</option>
                        <option value="6+">6+ years</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Portfolio/LinkedIn URL
                      </label>
                      <input
                        type="url"
                        name="portfolio"
                        value={applicationData.portfolio}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Cover Letter *
                      </label>
                      <textarea
                        name="coverLetter"
                        value={applicationData.coverLetter}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Tell us why you're interested in this position..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Resume *
                      </label>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2"
                    >
                      <Send className="h-5 w-5" />
                      <span>Submit Application</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Don't See a Perfect Match?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            We're always open to connecting with talented individuals. Send us
            your resume and we'll keep you in mind for future opportunities.
          </p>
          <a
            href="mailto:solutionaimtech@gmail.com?subject=General Application"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
          >
            Send General Application
          </a>
        </div>
      </section>
    </div>
  );
};

export default Career;
