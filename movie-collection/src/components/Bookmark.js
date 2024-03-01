import React, {useState} from 'react';
import { MdBookmark, MdBookmarkBorder } from "react-icons/md";

function Bookmark(){
    let [isBookmarked, setBookmarked] = useState(false);
    const toggleBookmark = () => { 
        setBookmarked(!isBookmarked); }
    return(
        <>
            {isBookmarked
                    ? <MdBookmark onClick={toggleBookmark}/>              // if True
                    : <MdBookmarkBorder onClick={toggleBookmark}/>        //if False
            }
        </>
    );
}

export default Bookmark;