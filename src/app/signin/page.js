import link from 'next/link';

export default function SigninPage() {
    return (
      <div className="flex flex-col items-center text-center min-h-screen bg-gray-100">
        {/* Navbar */}
        <nav className="flex items-center justify-between w-full p-6 bg-white shadow-md">
          <div className="text-lg font-bold">PowerGrader</div>
          <div>
            <link href="/" className="text-blue-600">Home</link>
          </div>
        </nav>
        
        {/* Login Form */}
        <div className="flex flex-col items-center justify-center w-full max-w-md p-8 mt-20 bg-white rounded shadow-md">
          <h1 className="text-3xl font-bold mb-6">Login to PowerGrader</h1>
          
          <form className="w-full">
            <div className="mb-4">
              <label htmlFor="email" className="block text-left text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Enter your email"
              />
            </div>
  
            <div className="mb-4">
              <label htmlFor="password" className="block text-left text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Enter your password"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="Confirm password" className="block text-left text-gray-700">Password</label>
              <input
                type="confirm password"
                id="confirm password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Re-enter your password"
              />
            </div>
  
            <button
              type="submit"
              className="w-full px-4 py-2 mt-4 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              Login
            </button>
          </form>
          
          <p className="mt-4 text-gray-600">
            Don’t have an account? <a href="/signup" className="text-blue-600">Sign Up</a>
          </p>
        </div>
      </div>
    );
  }
  