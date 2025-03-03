const Banner = () => {
  return (
    <div className='relative w-[394px] max-w-md'>
      <img src='/assets/banner.png' alt='Background' className='w-full rounded-md opacity-80' />
      <img src='/assets/logo.png' className='absolute inset-0 m-auto h-12 w-auto' />
    </div>
  );
};

export default Banner;
