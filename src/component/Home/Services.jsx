import { Link } from 'react-router-dom';
import { AiFillCheckCircle } from 'react-icons/ai';
function Services() {
    return (
        <div className='flex gap-8 justify-center'>
          <div className="card w-96 bg-[#5e13e5] text-white shadow-xl ">
                    <figure><img src="https://phero-web.nyc3.cdn.digitaloceanspaces.com/website-prod-images/public/files/1654421926132.png
        " alt="" /></figure>
                    <div className=" card-actions justify-center my-3">
                      
                    </div>
                    <div className="card-body">
                        <div className="card-title">
                            <span>775+ Videos</span>
                            <span>300+ Quizes</span>
                            <span>12+ Assignment</span>
                        </div>
                        <h1 className='text-4xl font-semibold mt-3 text-primary'>৳ 5,500</h1>
                        <Link to="/courses" className="btn w-100 btn-primary ">Enroll</Link>
                    </div>
                </div>


                <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-5 w-[32rem]'>
                  
                    <div><p><AiFillCheckCircle className='inline-flex text-sky-500'/> ফটাফট কয়েকটা ভিডিও দেখে HTML, CSS শিখে ফটাফট চমৎকার দুইটা ওয়েবসাইট বানিয়ে ফেলবে। <br /> এবং সেগুলার লিংক যেকারো সাথে শেয়ার করে ভাব পেটাতে পারবে।</p></div>

<div><p><AiFillCheckCircle className='inline-flex text-sky-500'/> বুটস্ট্রাপ (bootstrap) নামক পপুলার ফ্রেমওয়ার্ক এর খুঁটিনাটি ভাজা ভাজা করে ফেলবে। তারপর সেটা দিয়েও দুইটা ই-কমার্স ওয়েবসাইট বানিয়ে ফেলবে। কি মজা!</p></div>

<div><p><AiFillCheckCircle className='inline-flex text-sky-500'/> জাভাস্ক্রিপ্টের ছয়টা মেইন জিনিস, জাভাস্ক্রিপ্ট দিয়ে প্রবলেম সলভিং, ইন্টারভিউ এর প্রশ্ন-উত্তর। এমনকি ES6 দিয়ে তোমার নলেজকে যোগোপযোগী করে তুলবে</p></div>

<div><p><AiFillCheckCircle className='inline-flex text-sky-500'/>  জাভাস্ক্রিপ্ট দিয়ে ব্যাংকের deposit, withdraw এর লাইভ ক্যালকুলেশন থাকছে। তারপরই থাকছে ই-কমার্স সাইটের শপিং কার্টের হিসাব-নিকাশ করার সিস্টেম</p></div>
                
                </div>






        </div>
    );
};

export default Services;