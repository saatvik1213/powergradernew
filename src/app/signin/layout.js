export default function SinginPage({ onClose }) {
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle authentication logic here
  
      // Close modal after login
      onClose();
    };
  
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="flex flex-col items-center justify-center w-full max-w-md p-8 bg-white rounded shadow-md relative">
          <button 
            onClick={onClose} 
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
          
          <h1 className="text-3xl font-bold mb-6">SignUp to PowerGrader</h1>
          
          <form onSubmit={handleSubmit} className="w-full">
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
  