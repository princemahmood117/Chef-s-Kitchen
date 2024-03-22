
import banner from '../../../public/Images/chef-banner.jpg'

const Banner = () => {
 
  return (
    <section className="">
      <div
        className="hero mx-auto"
      >
        <div className='rounded'>
        <img className='h-[600px] w-[1220px]' src={banner} alt="Chef's banner image" />
        </div>
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-center text-white">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold">
              Welcome to <span className='text-green-500'>Recipe Calories</span> 
            </h1>
            <p className="mb-5">Learn and Master the Ultimate cooking</p>
            <button className="btn btn-primary bg-green-600 border-none mr-8">
              Explore Now
            </button>
            <button className="btn">Our Feedback</button>
          </div>
        </div>
      </div>


    </section>

    
  );
};

export default Banner;


