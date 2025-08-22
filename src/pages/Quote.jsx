import React, { useState } from "react";
import {
  CheckCircle,
  Upload,
  Calendar,
  DollarSign,
  Clock,
  Star,
} from "lucide-react";

const Quote = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Service Selection
    services: [],
    projectType: "",

    // Step 2: Business Details
    businessName: "",
    contactName: "",
    email: "",
    phone: "",
    website: "",
    industry: "",

    // Step 3: Project Details
    projectTitle: "",
    description: "",
    features: [],
    timeline: "",
    budget: "",

    // Step 4: Additional Info
    inspiration: "",
    files: [],
    additionalNotes: "",
  });

  const services = [
    {
      id: "web-dev",
      name: "Web Development",
      icon: "💻",
      price: "Starting at $2,000",
    },
    {
      id: "ecommerce",
      name: "E-commerce Platform",
      icon: "🛒",
      price: "Starting at $3,500",
    },
    {
      id: "mobile-app",
      name: "Mobile Application",
      icon: "📱",
      price: "Starting at $5,000",
    },
    {
      id: "devops",
      name: "DevOps & Automation",
      icon: "⚙️",
      price: "Starting at $1,500",
    },
    {
      id: "custom-platform",
      name: "Custom Platform",
      icon: "🎯",
      price: "Custom Pricing",
    },
    {
      id: "api-integration",
      name: "API Integration",
      icon: "🔗",
      price: "Starting at $800",
    },
  ];

  const projectTypes = [
    "New Project from Scratch",
    "Redesign Existing Website",
    "Add Features to Existing App",
    "Migration/Upgrade Project",
    "Maintenance & Support",
    "Consultation Only",
  ];

  const budgetRanges = [
    "Under $1,000",
    "$1,000 - $5,000",
    "$5,000 - $15,000",
    "$15,000 - $50,000",
    "$50,000+",
    "I need help determining budget",
  ];

  const timelineOptions = [
    "ASAP (Rush job)",
    "1-2 weeks",
    "1 month",
    "2-3 months",
    "3-6 months",
    "6+ months",
    "Flexible timeline",
  ];

  const commonFeatures = [
    "User Authentication & Registration",
    "Admin Dashboard",
    "Payment Processing",
    "Real-time Chat/Messaging",
    "File Upload/Management",
    "Email Notifications",
    "Mobile Responsive Design",
    "SEO Optimization",
    "Analytics & Reporting",
    "Third-party Integrations",
    "Database Design",
    "API Development",
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      if (name === "services") {
        setFormData((prev) => ({
          ...prev,
          services: checked
            ? [...prev.services, value]
            : prev.services.filter((service) => service !== value),
        }));
      } else if (name === "features") {
        setFormData((prev) => ({
          ...prev,
          features: checked
            ? [...prev.features, value]
            : prev.features.filter((feature) => feature !== value),
        }));
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Quote request submitted:", formData);
    alert(
      "Quote request submitted! We'll get back to you within 24 hours with a detailed proposal."
    );
  };

  const renderStep1 = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-6">
          What services do you need?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service) => (
            <div
              key={service.id}
              className={`border-2 rounded-lg p-4 cursor-pointer transition-all duration-200 ${
                formData.services.includes(service.id)
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 hover:border-blue-300"
              }`}
            >
              <label className="cursor-pointer flex items-center">
                <input
                  type="checkbox"
                  name="services"
                  value={service.id}
                  checked={formData.services.includes(service.id)}
                  onChange={handleInputChange}
                  className="sr-only"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-2xl">{service.icon}</span>
                    <span className="font-semibold text-gray-900">
                      {service.name}
                    </span>
                  </div>
                  <span className="text-sm text-gray-600">{service.price}</span>
                </div>
                {formData.services.includes(service.id) && (
                  <CheckCircle className="h-6 w-6 text-blue-500" />
                )}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Project Type
        </h3>
        <select
          name="projectType"
          value={formData.projectType}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select project type</option>
          {projectTypes.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">
        Business Information
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Business/Company Name *
          </label>
          <input
            type="text"
            name="businessName"
            value={formData.businessName}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Your business name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Contact Person *
          </label>
          <input
            type="text"
            name="contactName"
            value={formData.contactName}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Your full name"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="+1 (555) 123-4567"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Current Website (if any)
          </label>
          <input
            type="url"
            name="website"
            value={formData.website}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="https://yourwebsite.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Industry
          </label>
          <input
            type="text"
            name="industry"
            value={formData.industry}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="e.g., E-commerce, Healthcare, Education"
          />
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-6">
          Project Details
        </h3>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Project Title *
            </label>
            <input
              type="text"
              name="projectTitle"
              value={formData.projectTitle}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Give your project a descriptive name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Project Description *
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Describe your project in detail. What problem does it solve? Who is your target audience? What are your main goals?"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Timeline *
              </label>
              <select
                name="timeline"
                value={formData.timeline}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select timeline</option>
                {timelineOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Budget Range *
              </label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select budget range</option>
                {budgetRanges.map((range, index) => (
                  <option key={index} value={range}>
                    {range}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-4">
          Required Features
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {commonFeatures.map((feature, index) => (
            <div key={index} className="flex items-center">
              <input
                type="checkbox"
                name="features"
                value={feature}
                checked={formData.features.includes(feature)}
                onChange={handleInputChange}
                className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
              />
              <label className="ml-3 text-sm text-gray-700">{feature}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="space-y-8">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">
        Additional Information
      </h3>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Inspiration & References
        </label>
        <textarea
          name="inspiration"
          value={formData.inspiration}
          onChange={handleInputChange}
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Share any websites, apps, or designs that inspire you. Include URLs if possible."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          File Upload
        </label>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors duration-200">
          <Upload className="h-8 w-8 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 mb-2">
            Upload any relevant documents, mockups, or reference materials
          </p>
          <p className="text-sm text-gray-500">
            Drag and drop files here or click to browse
          </p>
          <input
            type="file"
            multiple
            className="hidden"
            accept=".pdf,.doc,.docx,.jpg,.png,.gif,.sketch,.fig"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Additional Notes
        </label>
        <textarea
          name="additionalNotes"
          value={formData.additionalNotes}
          onChange={handleInputChange}
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Any other information you'd like us to know about your project?"
        />
      </div>

      {/* Project Summary */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">
          Project Summary
        </h4>
        <div className="space-y-2 text-sm">
          <div>
            <span className="font-medium">Services:</span>{" "}
            {formData.services.join(", ") || "None selected"}
          </div>
          <div>
            <span className="font-medium">Project:</span>{" "}
            {formData.projectTitle || "Not specified"}
          </div>
          <div>
            <span className="font-medium">Timeline:</span>{" "}
            {formData.timeline || "Not specified"}
          </div>
          <div>
            <span className="font-medium">Budget:</span>{" "}
            {formData.budget || "Not specified"}
          </div>
          <div>
            <span className="font-medium">Features:</span>{" "}
            {formData.features.length} selected
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Get Your Project Quote
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8">
            Tell us about your project and we'll provide a detailed quote within
            24 hours. Our transparent pricing ensures no surprises.
          </p>
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-blue-500" />
              <span>24 Hour Response</span>
            </div>
            <div className="flex items-center space-x-2">
              <DollarSign className="h-5 w-5 text-purple-500" />
              <span>Transparent Pricing</span>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Bar */}
      <section className="bg-white py-8 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    step <= currentStep
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {step}
                </div>
                <span
                  className={`ml-2 text-sm ${
                    step <= currentStep
                      ? "text-blue-600 font-medium"
                      : "text-gray-500"
                  }`}
                >
                  {step === 1 && "Services"}
                  {step === 2 && "Business Info"}
                  {step === 3 && "Project Details"}
                  {step === 4 && "Review"}
                </span>
                {step < 4 && (
                  <div
                    className={`w-8 sm:w-16 h-0.5 ml-4 ${
                      step < currentStep ? "bg-blue-600" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit}>
            {currentStep === 1 && renderStep1()}
            {currentStep === 2 && renderStep2()}
            {currentStep === 3 && renderStep3()}
            {currentStep === 4 && renderStep4()}

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
              <button
                type="button"
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  currentStep === 1
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                Previous
              </button>

              <div className="text-sm text-gray-500">
                Step {currentStep} of 4
              </div>

              {currentStep < 4 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
                >
                  Next Step
                </button>
              ) : (
                <button
                  type="submit"
                  className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center space-x-2"
                >
                  <Star className="h-5 w-5" />
                  <span>Submit Quote Request</span>
                </button>
              )}
            </div>
          </form>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Why Choose AimTech Solution?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Fast Delivery
              </h3>
              <p className="text-gray-600 text-sm">
                We deliver projects on time without compromising quality
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Transparent Pricing
              </h3>
              <p className="text-gray-600 text-sm">
                No hidden fees, clear pricing structure from the start
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Star className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Quality Assurance
              </h3>
              <p className="text-gray-600 text-sm">
                Rigorous testing and quality checks for every project
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quote;
