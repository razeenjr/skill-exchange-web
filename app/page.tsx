import React from 'react'
import { Search, UserPlus, LogIn } from 'lucide-react'

const Page = () => {
  return (
    <>
    {/* Hero Section */}
      <section className = "pt-32 pb-16 px-4" >
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold text-black mb-6">
            Discover your <span className="text-blue-600">skills</span>
          </h2>
          <p className="text-black -600 max-w-2xl mx-auto mb-8">
            Connect with others, exchange skills, and grow together in a collaborative learning environment
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-3 text-black" size={24} />
            <input
              type="text"
              placeholder="Search for skills..."
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 text-black focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </div>
      </section >

  {/* Profiles Section */ }
  < section className = "py-16 bg-gray-50" >
    <div className="container mx-auto px-4">
      <h3 className="text-2xl text-black font-semibold mb-8">Latest Skills Needed</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((profile) => (
          <div key={profile} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full"></div>
              <div>
                <h4 className="font-semibold text-black">John Doe</h4>
                <p className="text-sm text-black -500">Web Developer</p>
              </div>
            </div>
            <div className="mb-4">
              <h5 className="text-sm font-medium text-black -700 mb-2">Skills Needed:</h5>
              <div className="flex flex-wrap gap-2">
                {['UI Design', 'Python', 'Data Analysis'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-3">
              <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                View Profile
              </button>
              <button className="flex-1 px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50">
                Request
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  </>
  )
}

export default Page