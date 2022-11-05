import React, { useState, useEffect } from 'react';
import Pagination from '../pagination/Pagination';
import axios from 'axios';
import Posts from './Archi';


const Base = ({category}) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(20);
  const url = JSON.stringify(category)
console.log("http://localhost:8000/api/aggregate/"+category)
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("http://localhost:8000/api/aggregate/"+category);
      console.log(res.data.msg)
      setPosts(res.data.msg);
      setLoading(false);
    };

    fetchPosts();
  }, []);
  console.log(posts.length)
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
     <div className=' mt-5'>
      <h1 className="text-6xl font-bold flex justify-center mt-16">{category}'S COLLECTION</h1>
      <Posts posts={currentPosts} 
             loading={loading} 
            />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Base;