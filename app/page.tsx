import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
          Hello World - Tailwind CSS Test
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Test Card 1 */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Card 1</h2>
            <p className="text-gray-600">This card tests basic Tailwind classes.</p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors">
              Click Me
            </button>
          </div>
          
          {/* Test Card 2 */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-green-800 mb-3">Card 2</h2>
            <p className="text-green-700">This card tests custom color classes.</p>
            <div className="mt-4 flex space-x-2">
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Tag 1</span>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Tag 2</span>
            </div>
          </div>
          
          {/* Test Card 3 */}
          <div className="bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg p-6 text-white">
            <h2 className="text-xl font-semibold mb-3">Card 3</h2>
            <p className="opacity-90">This card tests gradients and opacity.</p>
            <div className="mt-4 flex items-center space-x-2">
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <span className="text-sm">Active Status</span>
            </div>
          </div>
        </div>
        
        {/* Test Custom Utility Classes */}
        <div className="mt-12 bg-gray-900 text-white p-8 rounded-lg">
          <h2 className="bold-32 mb-4">Custom Utility Classes Test</h2>
          <div className="space-y-4">
            <p className="regular-16">This text uses the regular-16 class</p>
            <p className="bold-20">This text uses the bold-20 class</p>
            <p className="regular-24">This text uses the regular-24 class</p>
            <button className="btn_green">Custom Button Style</button>
          </div>
        </div>
      </div>
    </div>
  );
}
