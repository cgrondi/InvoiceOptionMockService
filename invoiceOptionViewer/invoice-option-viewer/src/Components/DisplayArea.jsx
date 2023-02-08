import React, {useState, useEffect} from "react";
import SearchBy from "./SearchBy";
import axios from 'axios';
import InvoiceOptionContainer from "./InvoiceOptionContainer";
import Pagination from "./Pagination";

function DisplayArea(){
    const [posts, setPosts] = new useState([]);
    const [loading, setLoading] = new useState(false);
    const [currentPage, setCurrentPage] = new useState(1);
    const [postsPerPage] = new useState(10);

    const [reqInfo, setReqInfo] = new useState("");

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get("https://localhost:5001/api/invoiceoptions/"+reqInfo);
            setPosts(res.data);
            setLoading(false);
        }
        fetchPosts();
    },[reqInfo]);

    //get current page
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    //Change the page
    function paginate(pageNumber){
        setCurrentPage(pageNumber)
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <SearchBy filterType="Type Code" onFilter={setReqInfo}/>
                </div>
                <div className="col">
                    <SearchBy filterType="Category Id" onFilter={setReqInfo}/>
                </div>
            </div>
            <hr></hr>
            <div className="row justify-content-center" >
                <div className="col-6 text-center">
                    <InvoiceOptionContainer invoiceOptions={currentPosts} loading={loading} />
                    
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-8 text-center">
                <Pagination 
                        postsPerPage={postsPerPage} 
                        totalPosts={posts.length} 
                        paginate={paginate} 
                        currentPage={currentPage}
                    />
                </div>
            </div>
        </div>
    )
}

export default DisplayArea;