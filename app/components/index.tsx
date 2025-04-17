export function Button() {
  return (
    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
      Click me
    </button>
  );
}

export function Card() {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-lg font-semibold mb-2">Card Title</h3>
      <p className="text-gray-600">
        This is a simple card component with some content.
      </p>
    </div>
  );
}

export function Input() {
  return (
    <input
      type="text"
      className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Type something..."
    />
  );
}

export function Badge() {
  return (
    <span className="inline-block px-2 py-1 text-xs font-semibold bg-gray-100 text-gray-800 rounded-full">
      New
    </span>
  );
}
