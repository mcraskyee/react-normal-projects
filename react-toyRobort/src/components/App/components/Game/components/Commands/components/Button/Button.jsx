const Button = ({ children }) => (
  <button className="min-w-[150px] border-1 border-gray-800 rounded-full h-[50px] hover:bg-gray-400 hover:cursor-pointer">
    {children}
  </button>
);
export default Button;
