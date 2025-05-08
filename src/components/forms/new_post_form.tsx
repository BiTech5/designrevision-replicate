import { useRef, useState } from "react";
import JoditEditor from 'jodit-react';

const PostForm = () => {
  const editor = useRef(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

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

      </div>
    </div>
  );
};

export default PostForm;