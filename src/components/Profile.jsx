import React from 'react';
import './Profile.css'
import Posts from './Posts';
import Data from './Data';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { blue, green, grey, orange, purple, red } from '@mui/material/colors';
import VerifiedIcon from '@mui/icons-material/Verified';
import DiamondIcon from '@mui/icons-material/Diamond';
const Profile = () => {

  const buttonStyle1 = {
    backgroundColor: blue[300], 
    color: '#fff', 
    width: '20px', 
    height: '20px',
    borderRadius: '50%',
  };
  const buttonStyle2 = {
    backgroundColor: orange[400], 
    color: '#fff', 
    width: '20px', 
    height: '20px',
    borderRadius: '50%',
  };
  const buttonStyle3 = {
    backgroundColor: grey[400], 
    color: '#fff', 
    width: '20px', 
    height: '20px',
    borderRadius: '50%',
  };
  const buttonStyle4 = {
    backgroundColor: red[400], 
    color: '#fff', 
    width: '20px', 
    height: '20px',
    borderRadius: '50%',
  };
  const diamond = {
    backgroundColor: purple[500], 
    color: '#fff', 
    width: '20px', 
    height: '20px',
    borderRadius: '50%',
  };
  const verified = {
    backgroundColor: '#fff', 
    color: green[500], 
    width: '20px', 
    height: '20px',
    borderRadius: '50%',
  };

console.log(Data);
  return (
    <>
      {/* header section  */}
      <header className="max-w-full h-auto">

        {/* img section  */}
        <div className="border-0  border-blue-300 h-2/4">
          <img className='min-w-full   h-full border-0 border-green-700' src= {Data.coverpic} alt="" />
        </div>

        {/* details section  */}
        <div className=" border-0 border-blue-900 h-2/4 flex flex-row">
          <div className=" cuflex_3 mobiles:cuflex_4 grow border-0 border-green-800">
            <div className="w-3/4 border-0 ml-auto mr-auto border-pink-800 h-full tablet:-mt-8 mobiles:-mt-5">
              <img className='tablet:w-[125px]  tablet:h-full mobile:h-[92px] rounded-full border-2 border-black' src= {Data.profilepic} alt="" />
            </div>
          </div>

          <div className="cuflex_7 mobiles:cuflex_5  border-0 border-red-800 flex flex-col shrink">
            <div className="name border-0 border-red-800 cuflex_3 flex flex-col">
              <span className='text-2xl font-medium text-gray-700 mt-2'> {Data.Name} <DiamondIcon style={diamond} /> <VerifiedIcon style={verified} /> </span>
            </div>
            <div className="followers cuflex_7 border-0 border-green-800">
              <div className="border-0 flex border-red-950 tablet:w-3/5 mobiles:w-full h-full">
                <div className="followers w-1/2  border-0 border-black">
                  <div className="button mt-3 w-28 border-2 border-gray-600 rounded-xl text-center font-bold text-2xl text-gray-600 mr-auto ">{Data.followers} </div>
                  <div className=" w-28 m-1 rounded-md text-center font-medium  text-gray-600 mr-auto ">followers</div>
                </div>
                <div className="following w-1/2 border-0 border-red-800">
                  <div className="button mt-3 w-28 border-2 border-gray-600 rounded-xl text-center font-bold text-2xl text-gray-600 mr-auto ">{Data.following}</div>
                  <div className=" w-28 m-1 rounded-md text-center font-medium  text-gray-600 mr-auto ">following</div>
                </div>
              </div>
            </div>

          </div>
        </div>


        <section className="border-0 border-red-500 h-20 flex flex-col">
          <h2 className='tablet:text-[1.2rem] mobiles:text-[1rem] h-1/2 ml-10'>{Data.designation}</h2>
          <a href= {Data.link}  target='_blank' className='h-1/2 ml-10 tablet:text-1xl mobiles:text-[.9rem] text-sky-600' rel="noreferrer"> {Data.link} </a>
          
        </section>

        <section className="border-0 border-red-500 h-10 p-1 mb-3 mobiles:w-full tablet:w-[60%] flex flex-col">
          <div className='ml-10 flex h-full w-[80%] border-0  border-black'>
            <span className="w-1/4 border-0  border-black self-center"> <StarBorderIcon style={buttonStyle1} /> 125</span>
            <span className="w-1/4 border-0  border-black self-center"> <ThumbUpOutlinedIcon style={buttonStyle2} /> 12</span>
            <span className="w-1/4 border-0  border-black self-center"><RemoveRedEyeOutlinedIcon style={buttonStyle3}/> 57.8k</span>
            <span className="w-1/4 border-0  border-black self-center"><FavoriteBorderOutlinedIcon style={buttonStyle4}/> 26.0k</span>
          </div>
        </section>

        <section className="border-0 border-red-500 flex  h-12">
          <div className="cuflex_2 border-t-2 border-r-2 border-gray-500 shrink-0 flex justify-center items-center">
            <p className='text-[1.1rem] font-bold text-center text-sky-700'> {Data.posts.length} Posts</p>
          </div>
          <div className="cuflex_8 border-b-2 border-gray-500 shrink">  </div>
        </section>
        <section className='border-0 border-red-700 h-auto'>
          {Data.posts.map((item,index)=>{
            return <Posts key={index} postData={item} />
          })}
        </section>
      </header>


    </>
  );
};

export default Profile;
