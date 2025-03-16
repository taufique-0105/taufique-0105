const BackToTop = ({ isVisible }) => {
    return (
      <button 
        className={`fixed bottom-5 right-5 p-3 bg-purple-600 text-white rounded-full shadow-lg transition-opacity ${
          isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ↑
      </button>
    );
  };
  
  export default BackToTop;
  