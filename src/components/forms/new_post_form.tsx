import { useRef, useState } from "react";
import JoditEditor from 'jodit-react';

const PostForm = () => {
  const editor = useRef(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    console.log({ title, content });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow border border-gray-200">
        <div className="p-4">
          <input
            type="text"
            placeholder="Your Post Title"
            className="w-full p-4 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        
        <div className="p-4">
          <JoditEditor
            ref={editor}
            value={content}
            tabIndex={1}
            onBlur={newContent => setContent(newContent)}
            onChange={newContent => setContent(newContent)}
            config={{
              height: 400,
              placeholder:"Words can be like x-rays if you use them properly... " 
            }}
          className="italic"/>
        </div>
        
        <div className="p-4 flex justify-end space-x-3 border-t border-gray-200">
          <button 
            type="button"
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button 
            type="button"
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Publish Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostForm;