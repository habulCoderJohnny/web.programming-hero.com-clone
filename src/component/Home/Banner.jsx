import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Banner() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src="https://phero-web.nyc3.cdn.digitaloceanspaces.com/website-prod-images/public/files/1622955835022.png" className="max-w-lg rounded-lg" />
        <div>
          <h1 className="text-5xl font-bold">Start your dream today. Conquer the world.</h1>
          <p className="py-6">We will ensure our graduates are world-class web developer.
          একদম জিরো থেকে, কোন প্রকার পূর্ব অভিজ্ঞতা ছাড়াই একজন প্রফেশনাল ওয়েব ডেভেলপার হওয়ার জন্য যা যা লাগবে তার সবকিছুই সহজ করে গিলিয়ে খাওয়ানো হবে এই কোর্সে।
          </p>
          <Link to="/courses" className="btn bg-gradient-to-r from-[#d7115d] via-[#FF136F] to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#FF136F] font-bold rounded-lg text-white rounded-full p-5">Enroll Now <span  className='ml-2'> <BsFillArrowRightCircleFill /></span></Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;