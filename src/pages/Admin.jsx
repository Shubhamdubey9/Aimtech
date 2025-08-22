import React, { useState } from "react";
import {
  Plus,
  Edit,
  Trash2,
  Save,
  X,
  Eye,
  BarChart,
  Users,
  FolderOpen,
  FileText,
} from "lucide-react";

const Admin = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isEditing, setIsEditing] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  // Mock data - in real app this would come from backend
  const [portfolioProjects, setPortfolioProjects] = useState([
    {
      id: 1,
      name: "Gaming Tournament Platform",
      category: "Custom Platform",
      status: "Live",
      client: "GameZone Community",
      completedDate: "2024",
      techStack: ["React", "Node.js", "MongoDB", "Socket.io"],
      description:
        "Complete gaming platform with tournament management and live leaderboards.",
    },
    {
      id: 2,
      name: "Social Dating Platform",
      category: "Social App",
      status: "Live",
      client: "SocialConnect Inc",
      completedDate: "2024",
      techStack: ["React Native", "Node.js", "MongoDB", "Socket.io"],
      description:
        "Modern dating app with advanced matching algorithms and real-time chat.",
    },
  ]);

  const [services, setServices] = useState([
    {
      id: 1,
      title: "Web Development",
      category: "Development",
      pricing: "Starting at $2000",
      description: "Custom web applications and business websites",
      features: [
        "Frontend Development",
        "Backend Development",
        "Database Design",
      ],
    },
    {
      id: 2,
      title: "DevOps & Automation",
      category: "Infrastructure",
      pricing: "Starting at $1500",
      description: "CI/CD pipelines and infrastructure automation",
      features: ["Pipeline Setup", "Server Automation", "Monitoring"],
    },
  ]);

  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      title: "The Future of Web Development",
      status: "Published",
      author: "AimTech Team",
      publishDate: "2025-01-15",
      category: "Tech Trends",
      excerpt: "Explore cutting-edge technologies shaping web development...",
    },
    {
      id: 2,
      title: "Building Scalable Tournament Platforms",
      status: "Draft",
      author: "Dev Team",
      publishDate: "2025-01-10",
      category: "Case Study",
      excerpt: "Technical deep dive into gaming platform architecture...",
    },
  ]);

  const stats = {
    totalProjects: portfolioProjects.length,
    activeServices: services.length,
    blogPosts: blogPosts.length,
    totalClients: 25,
  };

  const handleEdit = (item, type) => {
    setEditingItem({ ...item, type });
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editingItem.type === "project") {
      setPortfolioProjects((prev) =>
        prev.map((project) =>
          project.id === editingItem.id ? editingItem : project
        )
      );
    } else if (editingItem.type === "service") {
      setServices((prev) =>
        prev.map((service) =>
          service.id === editingItem.id ? editingItem : service
        )
      );
    } else if (editingItem.type === "blog") {
      setBlogPosts((prev) =>
        prev.map((post) => (post.id === editingItem.id ? editingItem : post))
      );
    }
    setIsEditing(false);
    setEditingItem(null);
  };

  const handleDelete = (id, type) => {
    if (confirm(`Are you sure you want to delete this ${type}?`)) {
      if (type === "project") {
        setPortfolioProjects((prev) =>
          prev.filter((project) => project.id !== id)
        );
      } else if (type === "service") {
        setServices((prev) => prev.filter((service) => service.id !== id));
      } else if (type === "blog") {
        setBlogPosts((prev) => prev.filter((post) => post.id !== id));
      }
    }
  };

  const renderDashboard = () => (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-900">Dashboard Overview</h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Total Projects
              </p>
              <p className="text-3xl font-bold text-blue-600">
                {stats.totalProjects}
              </p>
            </div>
            <FolderOpen className="h-8 w-8 text-blue-500" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Active Services
              </p>
              <p className="text-3xl font-bold text-green-600">
                {stats.activeServices}
              </p>
            </div>
            <BarChart className="h-8 w-8 text-green-500" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Blog Posts</p>
              <p className="text-3xl font-bold text-purple-600">
                {stats.blogPosts}
              </p>
            </div>
            <FileText className="h-8 w-8 text-purple-500" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Clients</p>
              <p className="text-3xl font-bold text-orange-600">
                {stats.totalClients}
              </p>
            </div>
            <Users className="h-8 w-8 text-orange-500" />
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Recent Activity
        </h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-4 pb-3 border-b border-gray-100">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm text-gray-600">
              New project "E-commerce Platform" added to portfolio
            </span>
            <span className="text-xs text-gray-400">2 hours ago</span>
          </div>
          <div className="flex items-center space-x-4 pb-3 border-b border-gray-100">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-sm text-gray-600">
              Blog post "DevOps Best Practices" published
            </span>
            <span className="text-xs text-gray-400">1 day ago</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span className="text-sm text-gray-600">
              Service pricing updated for "Custom Projects"
            </span>
            <span className="text-xs text-gray-400">3 days ago</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPortfolio = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">
          Portfolio Management
        </h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2 hover:bg-blue-700">
          <Plus className="h-4 w-4" />
          <span>Add Project</span>
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Project
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Client
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {portfolioProjects.map((project) => (
                <tr key={project.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {project.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {project.description.slice(0, 50)}...
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                      {project.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        project.status === "Live"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {project.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {project.client}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => handleEdit(project, "project")}
                      className="text-blue-600 hover:text-blue-900 mr-4"
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(project.id, "project")}
                      className="text-red-600 hover:text-red-900"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderServices = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">
          Services Management
        </h2>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2 hover:bg-green-700">
          <Plus className="h-4 w-4" />
          <span>Add Service</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {service.title}
              </h3>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEdit(service, "service")}
                  className="text-blue-600 hover:text-blue-900"
                >
                  <Edit className="h-4 w-4" />
                </button>
                <button
                  onClick={() => handleDelete(service.id, "service")}
                  className="text-red-600 hover:text-red-900"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-sm">
                <span className="font-medium text-gray-600">Category:</span>
                <span className="ml-2 text-gray-900">{service.category}</span>
              </div>
              <div className="text-sm">
                <span className="font-medium text-gray-600">Pricing:</span>
                <span className="ml-2 text-green-600 font-medium">
                  {service.pricing}
                </span>
              </div>
              <p className="text-sm text-gray-600 mt-3">
                {service.description}
              </p>
              <div className="mt-3">
                <span className="text-sm font-medium text-gray-600">
                  Features:
                </span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {service.features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderBlog = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Blog Management</h2>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2 hover:bg-purple-700">
          <Plus className="h-4 w-4" />
          <span>New Post</span>
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Author
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {blogPosts.map((post) => (
                <tr key={post.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {post.title}
                      </div>
                      <div className="text-sm text-gray-500">
                        {post.excerpt}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        post.status === "Published"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {post.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {post.author}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {post.publishDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-green-600 hover:text-green-900 mr-4">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleEdit(post, "blog")}
                      className="text-blue-600 hover:text-blue-900 mr-4"
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(post.id, "blog")}
                      className="text-red-600 hover:text-red-900"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const tabs = [
    {
      id: "dashboard",
      name: "Dashboard",
      icon: <BarChart className="h-5 w-5" />,
    },
    {
      id: "portfolio",
      name: "Portfolio",
      icon: <FolderOpen className="h-5 w-5" />,
    },
    { id: "services", name: "Services", icon: <Eye className="h-5 w-5" /> },
    { id: "blog", name: "Blog", icon: <FileText className="h-5 w-5" /> },
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <h1 className="text-3xl font-bold text-gray-900">Admin Panel</h1>
            <p className="text-gray-600">
              Manage your content and monitor performance
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64">
            <nav className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <div className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left font-medium transition-colors duration-200 ${
                      activeTab === tab.id
                        ? "bg-blue-50 text-blue-700 border border-blue-200"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    {tab.icon}
                    <span>{tab.name}</span>
                  </button>
                ))}
              </div>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === "dashboard" && renderDashboard()}
            {activeTab === "portfolio" && renderPortfolio()}
            {activeTab === "services" && renderServices()}
            {activeTab === "blog" && renderBlog()}
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {isEditing && editingItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-screen overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-900">
                  Edit{" "}
                  {editingItem.type === "project"
                    ? "Project"
                    : editingItem.type === "service"
                    ? "Service"
                    : "Blog Post"}
                </h2>
                <button
                  onClick={() => setIsEditing(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {editingItem.type === "project"
                    ? "Project Name"
                    : editingItem.type === "service"
                    ? "Service Title"
                    : "Post Title"}
                </label>
                <input
                  type="text"
                  value={editingItem.name || editingItem.title}
                  onChange={(e) =>
                    setEditingItem((prev) => ({
                      ...prev,
                      [editingItem.type === "project" ? "name" : "title"]:
                        e.target.value,
                    }))
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={editingItem.description || editingItem.excerpt}
                  onChange={(e) =>
                    setEditingItem((prev) => ({
                      ...prev,
                      [editingItem.type === "blog" ? "excerpt" : "description"]:
                        e.target.value,
                    }))
                  }
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {editingItem.type === "project" && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Client
                  </label>
                  <input
                    type="text"
                    value={editingItem.client || ""}
                    onChange={(e) =>
                      setEditingItem((prev) => ({
                        ...prev,
                        client: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              )}

              <div className="flex justify-end space-x-4 pt-6">
                <button
                  onClick={() => setIsEditing(false)}
                  className="px-6 py-2 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 flex items-center space-x-2"
                >
                  <Save className="h-4 w-4" />
                  <span>Save Changes</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Demo Notice */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">
              Demo Admin Panel
            </h3>
            <p className="text-yellow-700">
              This is a demonstration of the admin interface. In production,
              this would be protected with authentication and connected to a
              real backend database.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
