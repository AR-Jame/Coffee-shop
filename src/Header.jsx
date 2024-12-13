import logo from './images/more/logo1.png'
const Header = () => {
    return (
        <div className='bg-hero-bg flex justify-center items-center gap-3'>
            <img src={logo} className='w-20' />
            <h1 className='text-4xl font-semibold text-[#ebebdb]'>Espresso Emporium</h1>
        </div>
    );
};

export default Header;