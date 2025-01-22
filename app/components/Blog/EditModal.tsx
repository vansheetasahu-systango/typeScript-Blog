import { useState } from "react";

interface Blog {
  id: string;
  title: string;
  description: string;
  content: string;
}

interface EditModalProps {
  blog: Blog;
  onClose: () => void;
  onSave: () => void;
}

export default function EditModal({ blog, onClose, onSave }: EditModalProps) {
  const [title, setTitle] = useState(blog.title);
  const [description, setDescription] = useState(blog.description);
  const [content, setContent] = useState(blog.content);

  const handleSave = async () => {
    await fetch(`https://6787e220c4a42c9161089db1.mockapi.io/blogs/${blog.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description, content }),
    });
    onSave();
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-lg">
      <div className="p-6 bg-gradient-to-t from-pink-100 to-amber-100 rounded-lg shadow-xl max-w-md w-full">
        <h2 className="mb-6 text-2xl font-semibold text-gray-800">Edit Blog</h2>
        <input
          type="text"
          className="w-full p-4 mb-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter blog title"
        />
        <textarea
          className="w-full p-4 mb-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter a short description"
          rows={3}
        />
        <textarea
          className="w-full p-4 mb-6 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Enter blog content"
          rows={6}
        />
        <div className="flex justify-between space-x-4">
          <button
            onClick={handleSave}
            className="px-6 py-2 text-white bg-gradient-to-r from-pink-500 to-amber-500 rounded-lg shadow-md hover:from-pink-600 hover:to-amber-600 transition duration-200"
          >
            Save
          </button>
          <button
            onClick={onClose}
            className="px-6 py-2 text-white bg-gray-500 rounded-lg shadow-md hover:bg-gray-600 transition duration-200"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
