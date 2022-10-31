import React, { useState, useEffect } from 'react';
import Pagination from '../pagination/Pagination';
import axios from 'axios';
import Archi from './Archi';


const Base = () => {
  const [image, setimage] = useState([]);
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [imagePerPage] = useState(8);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const rep =await axios.get("http://localhost:8000/api/products");
      setPost(rep.data.result);
      const res = await axios.get('http://localhost:8000/api/image');
      setimage(res.data.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastImage = currentPage * imagePerPage;
  const indexOfFirstImage = indexOfLastImage - imagePerPage;
  const currentImage = image.slice(indexOfFirstImage, indexOfLastImage);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
       {post.map((data) =>
        image.map((info) =>
          data._id == info.related_product_id &&
          info.image_type == "cover" &&
          data.category == "boys" ? (
            <div className='container mt-5'>
                   <Archi image={currentImage} 
                          loading={loading}
                          extension={info.extension}
                          content={info.buff_data}
                          tit={data.title}
                          pri={data.price} />
            </div>
          ) : (
            console.log(false)
          ))
      )}
                      <Pagination
                          imagePerPage={imagePerPage}
                          totalimage={image.length}
                          paginate={paginate}/>
    </>
  );
};

export default Base;