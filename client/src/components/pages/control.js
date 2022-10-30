import React, { useState, useEffect } from 'react';
import Girls_template from "../girls_display_index_page/girls_template";
import Posts from '../pagination/Posts';
import Pagination from '../pagination/Pagination';
import axios from 'axios';

const Control= () => {
  const [posts, setPosts] = useState([]);
  const [image, setimage] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(7);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const rep = await axios.get("http://localhost:8000/api/products").then((response) => {
        console.log(response);
        setPosts(response.data.result);
      });
      const res = await axios.get('http://localhost:8000/api/image');
      setimage(res.data.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
    {posts.map((data) =>
        image.map((info) =>
          data._id == info.related_product_id &&
          info.image_type == "cover" &&
          data.category == "girls" ? (
    <div >
      <div  className="grid grid-cols-4 my-32 gap-4 pl-12" > 
      <Girls_template posts={currentPosts} 
                      loading={loading}
                      extension={info.extension}
                      content={info.buff_data}
                      tit={data.title}
                      pri={data.price}
                      /></div>
         <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
        
      />
    </div>
          ):(
            console.log(false)
          )
        )
    )}
    </>
  );
}

export default Control;    