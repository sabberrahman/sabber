 import Image from 'next/image';
import React from 'react';
import pic from "../../public/1702367598614.jpg"
import pfp from "../../public/other/pfp.png"
import { Card } from '@/components/ui/card';

 
 const AboutDev = () => {
    return (
        <div className='max-w-7xl mx-auto px-4 md:px-8 py-2'>
          <div className='flex flex-col justify-start items-start'>
            <Image 
            src={pic}
            alt='sabber.jpg'
            width={300}
            height={300}
            className='rounded-2xl rotate-6 shadow-md'
            />
            <h1 className='text-md text-muted-foreground'></h1>
            <h1 className='chakra text-4xl md:text-5xl mt-1'></h1>


          </div>
          <div className='mt-2 flex flex-col justify-start items-start '>
            <p className='chakra text-xl text-black px-2 break-words opacity-75 md:text-3xl'>i'm <span className='text-3xl text-green-700 flex'>Sabber rahman <Fire/></span> full stack web developer mostly working with <Card className='inline-block text-xl'><Js/></Card> framework to build application <br /> <br />
            
            My go-to stack for building new projects is <Card className='inline-block text-xl'><Next/></Card> <Card className='inline-block text-xl'> <Tailwind/></Card> alongside <span className='text-green-700 hover:bg-yellow-200 rounded-md'>ui/Shadcn</span>. For the backend,i use either<span className='inline-block'><Supabase/> </span> or good old <Card className='inline-block text-xl'> <Mongo/></Card> </p>  <br />
           <p className='chakra text-2xl px-2 break-words'></p> <br />

           <p className='chakra text-xl text-black px-2 break-words opacity-75 md:text-3xl mb-4'>Currently doing my BSc in Compuer Science at <a className='text-green-800 hover:underline hover:bg-green-200' href='https://ius.edu.bd/' target='_blank'> ius.</a> You can find my CSE notes here <a href="https://github.com/sabberrahman/CSE" target='_blank'> <Card className='inline-block text-xl hover:scale-110'><Repo/></Card></a>. when im not coding, i like to listen <a href='https://www.youtube.com/@2centspodcastofficial' target='_blank' className='text-green-700 hover:bg-green-200 rounded-2xl'>@2centPodcast💸</a><a href='https://www.youtube.com/@ThePrimeTimeagen' target='_blank' className='text-green-700 hover:bg-green-200 rounded-2xl'>@ThePrimeTime🤓</a> and binge watch <a href="https://onepiece.fandom.com/wiki/One_Piece_Wiki" target='_blank' className='text-green-700 hover:bg-green-200 rounded-2xl'>@one piece</a></p>

            <Image 
            src={pfp}
            alt='sabber.jpg'
            width={200}
            height={200}
            className='rounded-2xl -rotate-6 shadow-md bg-opacity-70'
            />
          </div>

          <div className='mt-12'>
            <p className='text-muted-foreground text-sm chakra'>Page last edited: 10:41am 28 june , 2☀24 </p>
          </div>
        </div>
    );
 };
 
 export default AboutDev;

 //<span className='bg-blue-300 text-blue-600 shadow-md hover:bg-yellow-300'>corrupti suscipit</span>

 function Next(){
    return(

        <div className='flex justify-center items-center p-1 '>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="26" height="26" viewBox="0 0 48 48">
            <path d="M20,23.474V31.5c0,0.828-0.672,1.5-1.5,1.5S17,32.328,17,31.5v-13c0-0.659,0.431-1.241,1.062-1.435 c0.627-0.19,1.314,0.049,1.682,0.596l0.249,0.37L20,18l15.234,22.546C40.524,36.947,44,30.88,44,24c0-11.046-8.954-20-20-20 S4,12.954,4,24s8.954,20,20,20c3.082,0,5.99-0.718,8.597-1.963L20,23.474z M28,16.5c0-0.828,0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5 v12.79l-3-4.304V16.5z"></path>
            </svg>

        <p>Nextjs</p>
        </div>
         
    )
 }

 function Js(){
  return(

      <div className='flex justify-center items-center p-1 text-xl'>
         <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="26" height="26" viewBox="0 0 48 48">
<path fill="#f7df1e" d="M6,42V6h36v36H6z"></path><path fill="#000001" d="M29.538,32.947c0.692,1.124,1.444,2.201,3.037,2.201c1.338,0,2.04-0.665,2.04-1.585 c0-1.101-0.726-1.492-2.198-2.133l-0.807-0.344c-2.329-0.988-3.878-2.226-3.878-4.841c0-2.41,1.845-4.244,4.728-4.244 c2.053,0,3.528,0.711,4.592,2.573l-2.514,1.607c-0.553-0.988-1.151-1.377-2.078-1.377c-0.946,0-1.545,0.597-1.545,1.377 c0,0.964,0.6,1.354,1.985,1.951l0.807,0.344C36.452,29.645,38,30.839,38,33.523C38,36.415,35.716,38,32.65,38 c-2.999,0-4.702-1.505-5.65-3.368L29.538,32.947z M17.952,33.029c0.506,0.906,1.275,1.603,2.381,1.603 c1.058,0,1.667-0.418,1.667-2.043V22h3.333v11.101c0,3.367-1.953,4.899-4.805,4.899c-2.577,0-4.437-1.746-5.195-3.368 L17.952,33.029z"></path>
</svg>
      <p>Javascript</p>
      </div>
       
  )
}

function Tailwind(){
  return(

    <div className='flex justify-center items-center p-1 '>
       <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="26" height="26" viewBox="0 0 48 48">
<path fill="#00acc1" d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z"></path>
</svg>
      <p>Tailwind</p>
      </div>
  
  )
}

function Supabase(){
  return(

    <div className='flex justify-center items-center p-1 gap-1 '>
      <Card className='flex justify-center items-center'>
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="26" height="26" viewBox="0 0 48 48">
<g id="Ð¡Ð»Ð¾Ð¹_1"><linearGradient id="SVGID_1__sH0rW2TvYdr9_gr1" x1="14.073" x2="14.073" y1="8.468" y2="36.033" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#7dffce"></stop><stop offset="1" stop-color="#50c08d"></stop></linearGradient><path fill="url(#SVGID_1__sH0rW2TvYdr9_gr1)" d="M24.2,30V6.3c0-1.8-2.3-2.6-3.4-1.2L4.5,25.9c-1.3,1.7-0.1,4.1,2,4.1H24.2z"></path><linearGradient id="SVGID_00000140728474547789280440000018204366184369975479__sH0rW2TvYdr9_gr2" x1="34.249" x2="34.249" y1="48.404" y2="19.425" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#7dffce"></stop><stop offset="1" stop-color="#50c08d"></stop></linearGradient><path fill="url(#SVGID_00000140728474547789280440000018204366184369975479__sH0rW2TvYdr9_gr2)" d="M24,18.4v23.7c0,1.8,2.4,2.6,3.5,1.2 l16.4-20.7c1.3-1.7,0.1-4.1-2.1-4.1H24z"></path></g>
</svg>

<p>Supabase</p>
      </Card >
     <p>  {" "}</p> 
      <Card className='flex justify-center items-center'>
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="26" height="26" viewBox="0 0 50 50">
<path d="M44.674,37.568L27.405,1.49c-0.89-1.859-3.473-2.012-4.575-0.271L3.679,31.461c-0.413,0.652-0.401,1.486,0.03,2.126	l9.647,14.323c0.599,0.889,1.7,1.29,2.729,0.994l26.994-7.775C44.596,40.692,45.357,38.994,44.674,37.568z M40.86,38.865	l-22.703,6.369c-0.526,0.148-1.02-0.318-0.906-0.853L25.3,6.749c0.145-0.678,1.064-0.788,1.364-0.163l14.843,30.881	C41.766,38.033,41.459,38.697,40.86,38.865z"></path>
</svg>

<p>prisma</p>
      </Card>
      
      </div>
  
  )
}

function Mongo(){
  return(

    <div className='flex justify-center items-center p-1 '>
       <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="26" height="26" viewBox="0 0 48 48">
<path fill="#5d4037" d="M42,17.3C42,37.8,24,44,24,44S6,37.8,6,17.3c0-2.5,0.2-4.6,0.4-6.3c0.3-2.5,2-4.5,4.4-5.1 C13.9,5,18.8,4,24,4s10.1,1,13.3,1.9c2.4,0.6,4.1,2.7,4.4,5.1C41.8,12.7,42,14.9,42,17.3z"></path><path fill="#4caf50" d="M24,7c4.9,0,9.5,1,12.5,1.8c1.2,0.3,2,1.3,2.2,2.6c0.2,1.9,0.3,3.9,0.3,5.9c0,15.6-11.5,21.9-15,23.4 c-3.5-1.6-15-7.9-15-23.4c0-2,0.1-4,0.3-5.9c0.1-1.3,1-2.3,2.2-2.6C14.5,8,19.1,7,24,7 M24,4c-5.2,0-10.1,1-13.3,1.9 C8.4,6.5,6.6,8.6,6.4,11C6.2,12.7,6,14.9,6,17.3C6,37.8,24,44,24,44s18-6.2,18-26.7c0-2.5-0.2-4.6-0.4-6.3c-0.3-2.5-2-4.5-4.4-5.1 C34.1,5,29.2,4,24,4L24,4z"></path><path fill="#dcedc8" d="M23 28H25V36H23z"></path><path fill="#4caf50" d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3l1,3c1.7-1.5,5-4.8,5-10C30,15,24,10,24,10z"></path><path fill="#81c784" d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3V10z"></path>
</svg>
      <p>mongoDB</p>
      </div>
  
  )
}

function Fire (){
  return (
    <img width="32" height="32" src="https://img.icons8.com/doodle/48/fire-element--v1.png" alt="fire-element--v1"
    className=''
    />
  )
}

function Repo(){
  return(

      <div className='flex justify-center items-center p-1 '>
         <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="26" height="26" viewBox="0 0 64 64">
<path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"></path>
</svg>

      <p>Repositary</p>
      </div>
       
  )
}