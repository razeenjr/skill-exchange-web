// pages/dashboard.tsx
import Head from 'next/head'
import Link from 'next/link'

export default function Profile() {
  return (
    <>
      <Head>
        <title>Profile | SkillExchange</title>
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white font-sans px-4 py-8">
        {/* Navbar */}
        <nav className="flex justify-between items-center px-6 py-4 mb-10 bg-white/5 backdrop-blur-md rounded-xl shadow-md border border-white/10">
          <div className="text-2xl font-bold tracking-widest text-cyan-400">SkillExchange</div>
          <Link href="/">
            <button className="px-4 py-2 rounded-full bg-cyan-600 hover:bg-cyan-700 transition">Home</button>
          </Link>
        </nav>

        {/* User Info */}
        <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-1 bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-md shadow-md">
            <h2 className="text-xl font-bold mb-2 text-cyan-300">User Profile</h2>
            <p><strong>Name:</strong> Jane Doe</p>
            <p><strong>Email:</strong> jane@example.com</p>
            <button className="mt-4 px-4 py-2 bg-cyan-600 rounded-full hover:bg-cyan-700 transition text-sm">
              Edit Profile
            </button>
          </div>

          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Skills We Have */}
            <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-md shadow-md">
              <h2 className="text-xl font-bold text-purple-400 mb-4">Skills You Have</h2>
              <ul className="space-y-2">
                <li className="bg-white/10 p-2 rounded">Web Development</li>
                <li className="bg-white/10 p-2 rounded">UI/UX Design</li>
                <li className="bg-white/10 p-2 rounded">JavaScript</li>
              </ul>
            </div>

            {/* Skills Needed */}
            <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-md shadow-md">
              <h2 className="text-xl font-bold text-pink-400 mb-4">Skills You Need</h2>
              <ul className="space-y-2">
                <li className="bg-white/10 p-2 rounded">Python</li>
                <li className="bg-white/10 p-2 rounded">Machine Learning</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Stats + Connect */}
        <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Ratings */}
          <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-md shadow-md">
            <h2 className="text-xl font-bold text-yellow-400 mb-4">Rating</h2>
            <p className="text-4xl font-bold">4.8</p>
            <p className="text-sm text-gray-400">Based on 25 reviews</p>
          </div>

          {/* Requests */}
          <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-md shadow-md">
            <h2 className="text-xl font-bold text-green-400 mb-4">Request Count</h2>
            <p className="text-4xl font-bold">12</p>
            <p className="text-sm text-gray-400">Skills you've requested</p>
          </div>

          {/* Connect */}
          <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-md shadow-md">
            <h2 className="text-xl font-bold text-cyan-300 mb-4">Connect</h2>
            <div className="space-y-2">
              <a href="mailto:jane@example.com" className="block bg-cyan-700 hover:bg-cyan-800 rounded px-4 py-2 text-sm">Email</a>
              <a href="https://wa.me/1234567890" target="_blank" className="block bg-green-600 hover:bg-green-700 rounded px-4 py-2 text-sm">WhatsApp</a>
            </div>
          </div>
        </section>

        {/* Latest Requests */}
        <section className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">Latest Requests</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map((_, idx) => (
              <div key={idx} className="bg-white/5 p-5 rounded-xl border border-white/10 backdrop-blur-md shadow-md">
                <p><strong>Skill:</strong> Python</p>
                <p><strong>From:</strong> John Smith</p>
                <p className="text-sm text-gray-400 mt-2">Requested 2 days ago</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
