const App = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold text-red-500'>테스트입니다</h1>
      <button className='rounded-md bg-blue-500 p-2 text-white'>버튼</button>
      <div className='flex h-screen flex-col items-center justify-center'>
        <div className='h-1/2 w-1/2 rounded-md bg-red-500'>테스트</div>
        <div className='h-1/2 w-1/2 rounded-md bg-red-500'>테스트</div>
        <div className='h-1/2 w-1/2 rounded-md bg-red-500'>
          테스트입니다
          <span>테스트</span>
        </div>
      </div>
    </div>
  );
};

export default App;
