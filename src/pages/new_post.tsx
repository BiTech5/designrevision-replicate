import { FaBold, FaItalic, FaListOl, FaListUl, FaFlag, FaRegCalendar } from "react-icons/fa";
import { MdOutlineFormatUnderlined, MdOutlineStrikethroughS, MdVisibility, MdScore, MdFileCopy } from "react-icons/md";
import { IoMdSave } from "react-icons/io";
import { CgFormatIndentIncrease, CgFormatIndentDecrease } from "react-icons/cg";
const NewPost = () => {


    return (
        <>
            <div className="p-4 sm:p-6 space-y-8 max-w-7xl mx-auto">
                <div>
                    <span className="text-xs text-gray-500">BLOG POSTS</span>
                    <h1 className="text-2xl sm:text-3xl text-gray-600">Add New Post</h1>
                </div>
                <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-1">
                        <div className="bg-white rounded-lg shadow border border-gray-200">
                            <div className="p-4">
                                <input
                                    type="text"
                                    placeholder="Your Post Title"
                                    className="w-full p-4 border border-gray-400 rounded-lg"
                                />
                            </div>
                            <div className="p-4">

                                <div className="flex flex-wrap items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg">
                                    <select className="px-2 py-1 border border-gray-300 rounded text-sm">
                                        <option>Normal</option>
                                        <option>Heading 1</option>
                                        <option>Heading 2</option>
                                    </select>

                                    <div className="flex gap-1 ">
                                        <button className="p-1 text-gray-400 hover:text-blue-800 rounded">
                                            <span className="font-bold ">
                                                <FaBold />
                                            </span>
                                        </button>
                                        <button className="p-1 text-gray-400  hover:text-blue-800 rounded">
                                            <span className="italic">
                                                <FaItalic />
                                            </span>
                                        </button>
                                        <button className="p-1 text-gray-400  hover:text-blue-800 rounded text-2xl">
                                            <span className="underline">
                                                <MdOutlineFormatUnderlined />
                                            </span>
                                        </button>
                                        <button className="p-1 text-gray-400  hover:text-blue-800 rounded text-2xl">
                                            <span className="line-through">
                                                <MdOutlineStrikethroughS />
                                            </span>
                                        </button>
                                    </div>

                                    <div className="flex gap-1">
                                        <button className="p-1 text-gray-400  hover:text-blue-800 font-bold rounded text-2xl">
                                            <span>"</span>
                                        </button>
                                        <button className="p-1 text-gray-400  hover:text-blue-800 rounded text-xl">
                                            <span>{`</>`}</span>
                                        </button>
                                    </div>

                                    <div className="flex gap-1">
                                        <button className="p-1 text-gray-400  hover:text-blue-800 rounded font-bold">
                                            <span>H1</span>
                                        </button>
                                        <button className="p-1 text-gray-400  hover:text-blue-800 rounded font-bold">
                                            <span>H₂</span>
                                        </button>
                                    </div>

                                    <div className="flex gap-1">
                                        <button className="p-1 text-gray-400  hover:text-blue-800 rounded">
                                            <span><FaListOl /></span>
                                        </button>
                                        <button className="p-1 text-gray-400  hover:text-blue-800 rounded">
                                            <span><FaListUl /></span>
                                        </button>
                                    </div>

                                    <div className="flex gap-1">
                                        <button className="p-1 hover:text-blue-800 rounded font-bold text-gray-400">
                                            <span>x₂</span>
                                        </button>
                                        <button className="p-1 hover:text-blue-800 rounded font-bold text-gray-400">
                                            <span>x²</span>
                                        </button>
                                    </div>

                                    <div className="flex gap-1">
                                        <button className="p-1 hover:text-blue-800 rounded text-lg text-gray-400">
                                            <span><CgFormatIndentDecrease /></span>

                                        </button>
                                        <button className="p-1 hover:text-blue-800 rounded text-lg text-gray-400">
                                            <span><CgFormatIndentIncrease /></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="px-4 mb-11">
                                <textarea
                                    placeholder="Words can be like x-rays if you use them properly..."
                                    className="w-full p-4 h-96 border border-gray-400 focus:outline-none text-gray-700 resize-none rounded-lg"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-80">
                        <div className="bg-white rounded-lg shadow border border-gray-200 mb-6">
                            <div className="p-4 border-b border-gray-200">
                                <h2 className="font-semibold text-gray-700">Actions</h2>
                            </div>
                            <div className="p-4 space-y-4">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <span className="text-gray-600">
                                            <FaFlag />
                                        </span>
                                        <span>Status: Draft</span>
                                    </div>
                                    <button className="text-blue-500 text-sm">Edit</button>
                                </div>

                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <span className="text-gray-600">
                                            <MdVisibility />
                                        </span>
                                        <span>Visibility: <span className="text-green-500">Public</span></span>
                                    </div>
                                    <button className="text-blue-500 text-sm">Edit</button>
                                </div>

                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <span className="text-gray-600">
                                            <FaRegCalendar />
                                        </span>
                                        <span>Schedule: Now</span>
                                    </div>
                                    <button className="text-blue-500 text-sm">Edit</button>
                                </div>

                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <span className="text-gray-600">
                                            <MdScore />
                                        </span>
                                        <span>Readability: <span className="text-yellow-500">Ok</span></span>
                                    </div>
                                </div>
                                <hr />
                                <div className="flex gap-2 pt-4">
                                    <button className="flex-1 px-4 py-2 bg-white border border-gray-300 rounded text-gray-700 flex items-center justify-center gap-1 hover:bg-blue-500 hover:text-white">
                                        <IoMdSave />
                                        Save Draft
                                    </button>
                                    <button className="flex-1 px-4 py-2 bg-blue-500 text-white rounded flex items-center justify-center gap-1 hover:bg-blue-600">
                                        <MdFileCopy />
                                        Publish
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow border border-gray-200">
                            <div className="p-4 border-b border-gray-200">
                                <h2 className="font-semibold text-gray-700">Categories</h2>
                            </div>
                            <div className="p-4">
                                <div className="space-y-2">
                                    <div className="flex items-center">
                                        <input type="checkbox" id="cat-uncategorized" checked className="mr-2" />
                                        <label htmlFor="cat-uncategorized">Uncategorized</label>
                                    </div>
                                    <div className="flex items-center">
                                        <input type="checkbox" id="cat-design" checked className="mr-2" />
                                        <label htmlFor="cat-design">Design</label>
                                    </div>
                                    <div className="flex items-center">
                                        <input type="checkbox" id="cat-development" className="mr-2" />
                                        <label htmlFor="cat-development">Development</label>
                                    </div>
                                    <div className="flex items-center">
                                        <input type="checkbox" id="cat-writing" checked className="mr-2" />
                                        <label htmlFor="cat-writing">Writing</label>
                                    </div>
                                    <div className="flex items-center">
                                        <input type="checkbox" id="cat-books" className="mr-2" />
                                        <label htmlFor="cat-books">Books</label>
                                    </div>
                                </div>

                                <div className="mt-4 flex">
                                    <input
                                        type="text"
                                        placeholder="New category"
                                        className="flex-1 px-3 py-2 border border-gray-300 rounded-l text-sm focus:outline-none"
                                    />
                                    <button className="bg-gray-100 px-3 py-2 border border-gray-300 border-l-0 rounded-r text-gray-500 hover:bg-gray-200">
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewPost;