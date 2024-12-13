import first from './images/icons/1.png'
import second from './images/icons/2.png'
import thrid from './images/icons/3.png'
import fourth from './images/icons/4.png'
import banner from './images/more/6.jpeg'
const Hero = () => {
    return (
        <div>
            <div className='relative'>
                <img src={banner} className='w-full h-[80vh] object-cover -scale-x-100' />
                <div className='absolute space-y-5 top-52 right-20 max-w-[600px] text-white w-full'>
                    <h3 className='text-3xl font-semibold text-semiWhite'>Would you like a Cup of Delicious Coffee?</h3>
                    <p>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                    <button className='bg-[#E3B577] px-4 py-2 text-black font-semibold hover:bg-transparent hover:border hover:border-white hover:text-white'>Learn More</button>
                </div>
            </div>
            <div className='bg-[#ECEAE3] flex gap-16 py-10 px-[15%]'>
                <div className='text-[#331A15]'>
                    <img src={first}/>
                    <h5 className='font-bold text-2xl'>Awesome Aroma</h5>
                    <p>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                <div className='text-[#331A15]'>
                    <img src={second}/>
                    <h5 className='font-bold text-2xl'>Awesome Aroma</h5>
                    <p>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                <div className='text-[#331A15]'>
                    <img src={thrid}/>
                    <h5 className='font-bold text-2xl'>Awesome Aroma</h5>
                    <p>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                <div className='text-[#331A15]'>
                    <img src={fourth}/>
                    <h5 className='font-bold text-2xl'>Awesome Aroma</h5>
                    <p>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
            </div>
        </div>
    );
};

export default Hero;