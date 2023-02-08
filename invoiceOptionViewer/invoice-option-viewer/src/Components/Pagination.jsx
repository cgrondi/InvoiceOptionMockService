import React from "react";

function Pagination(props)
{
    const disabledLink = {pointerEvents : "none"}
    const enabledLink = {pointerEvents: "auto"}
    const selectedPage = {backgroundColor: "rgb(222, 226, 230)"}
    const notSelectedPage = {backgroundColor: "transparent"}

    const pageNumbers = [];
    const maxPages = Math.ceil(props.totalPosts/props.postsPerPage);

    if(props.currentPage < 9){
        setRange(2,10);
    }
    else if(props.currentPage > maxPages-9 )
    {
        setRange(maxPages-9, maxPages)
    }
    else{
        setRange(props.currentPage-3, props.currentPage+4);
    }

    function setRange(start, end){
        for(let i=start; i<end; i++){
            pageNumbers.push(i);
        }
    }

    return(
        <nav>
            <ul className="pagination justify-content-center">
                <li className="page-item">
                    <a onClick={() => {props.paginate(props.currentPage-1)}} href="!#" className="page-link" style={props.currentPage===1 ? disabledLink : enabledLink}>
                        &lt;
                    </a>
                </li>
                <li>
                    <a onClick={() => {props.paginate(1)}} href="!#" className="page-link" style={props.currentPage===1 ? selectedPage : notSelectedPage}>1</a>
                </li>
                {props.currentPage>8 && <li className="page-item">
                    <div style={{width:"30px"}}>...</div>
                </li>}
                {pageNumbers.map(number => (
                    <li key={number} className="page-item" >
                        <a onClick={() => {props.paginate(number)}} href="!#" className="page-link" style={props.currentPage===number ? selectedPage : notSelectedPage}>
                            {number}
                        </a>
                    </li>
                ))}
                {props.currentPage<maxPages-8 && <li className="page-item">
                    <div style={{width:"30px"}}>...</div>
                </li>}
                <li>
                    <a onClick={() => {props.paginate(maxPages)}} href="!#" className="page-link" style={props.currentPage===maxPages ? selectedPage : notSelectedPage}>{maxPages}</a>
                </li>
                <li>
                    <a onClick={() => {props.paginate(props.currentPage+1)}} href="!#" className="page-link" style={props.currentPage===Math.ceil(props.totalPosts/props.postsPerPage) ? disabledLink : enabledLink}>
                        &gt;
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination;