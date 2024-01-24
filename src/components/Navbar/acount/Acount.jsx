const Acount = () => {
  return (
    <nav className="hidden md:flex gap-1 items-center border-2 border-dark bg-slate-200 rounded-full text-sm scale-[0.96] hover:scale-[0.99] duration-100">
      <button className="rounded-l-full h-12 pl-4 pr-1">Sign in</button>
      <button className="bg-dark text-slate-100 duration-100 h-12 px-6 rounded-full">
        Sign up
      </button>
    </nav>
  );
};

export default Acount;
