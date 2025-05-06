import { useEffect, useState } from 'react';
import Card from '../components/ui/card';
import BlogAPI from '../services/blogapi';
import PostCardProps from '../models/blog';
const Blog = () => {
    const [posts, SetPosts] = useState<PostCardProps[] | null>(null);
    useEffect(
        () => {
            BlogAPI.getBlog("posts/").then(
                (res) => {
                    SetPosts(res.data);
                }
            ).catch((err) => console.error("Error ", err))
        }, []
    )
    return (
        <div className="p-4 md:p-8 bg-gray-100 h-full">
            <div>
                <span className="text-xs text-gray-500">COMPONENTS</span>
                <h1 className="text-3xl text-gray-600">Blog Posts</h1>
            </div>

            <div className="mt-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {posts && posts.slice(0, 4).map((post) => (
                        <Card key={post.id} id={post.id} title={post.title} body={post.body} />
                    ))}
                </div>
                <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {posts && posts.slice(0, 2).map((post) => (
                        <Card key={post.id} id={post.id} title={post.title} body={post.body} />
                    ))}
                </div>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {posts && posts.slice(0, 4).map((post) => (
                        <Card key={post.id} id={post.id} title={post.title} body={post.body} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;