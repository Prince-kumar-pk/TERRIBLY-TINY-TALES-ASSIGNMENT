import React from 'react'
import './Profile.css'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import { IconButton} from '@mui/material';
import { orange } from '@mui/material/colors';



const Posts = ({postData}) => {


  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    const truncatedText = text.substr(0, maxLength) + '...';
    return truncatedText;
  };

  const buttonStyle = {
    backgroundColor: orange[400], 
    color: '#fff', 
    width: '30px', 
    height: '30px',
  };

  const truncatedContent = truncateText(postData.content, 130); 

  return (
    <div className='flex gap-2 flex-col h-auto border-0 border-b-2  border-gray-700 p-8 '>
      <div className="h-12 border-0 border-black flex justify-between">
        <div className='border-0 border-black cuflex_7 shrink text-left self-center font-extrabold'> {postData.header} </div>
        <p className='border-0 border-red-500 cuflex_2 shrink-0 text-center self-center'>
          <IconButton style={buttonStyle}>
          <ThumbUpOutlinedIcon/>
          </IconButton>
        </p>
      </div>
      <div className="flex-1 border-0 border-red-700 flex">
          <div className='border-0 border-red-700 self-center'> {truncatedContent} </div>
      </div>
      <div className="h-12 border-0 border-black flex justify-between gap-8">
      <div className='border-0 border-black tablet:cuflex_3 shrink text-left mobiles:flex-1 self-center font-medium'>
        <span className='text-sky-600 mobilem:text-[.9rem]  '> {postData.tag} </span> 
        <span className='text-gray-500 mobilem:text-[.9rem] '>by {postData.byname} </span>
      </div> 
        <div className='border-0 border-red-500 tablet:cuflex_5 mobiles:cuflex_7 mobiles:text-[.6rem] shrink-0 text-center self-center flex'>
            <span className="text-gray-500 w-full   border-0 border-red-400  tablet:ml-auto mobiles:ml-0 mobilel:ml-auto "> {postData.date} . {postData.timesRead} Read . 
            {postData.views} Views</span>
        </div>
      </div>
    </div>
  )
}

export default Posts