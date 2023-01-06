const Signup = () => (
  <div className="bg-gradient-to-b from-slate-900 to-slate-800 h-screen">
    <div className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 p-10 bg-black-rgba rounded-xl shadow-lg">
      <h2 className="text-center text-3xl mb-8">Signup</h2>
      <form autoComplete="off">
        <label>
          Username
          <input
            type="text"
            name=""
            required=""
            autoComplete="off"
            className="w-full py-2 rounded-none mb-8 border-b border-b-solid border-b-white bg-transparent outline-none"
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name=""
            required=""
            autoComplete="new-password"
            className="w-full py-2 rounded-none mb-8 border-b border-b-solid border-b-white bg-transparent outline-none"
          />
        </label>
        <label>
          Confirm Password
          <input
            type="password"
            name=""
            required=""
            autoComplete="new-password"
            className="w-full py-2 rounded-none mb-8 border-b border-b-solid border-b-white bg-transparent outline-none"
          />
        </label>
        <button className="bg-gray-dark px-5 py-3">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </button>
      </form>
    </div>
  </div>
);

export default Signup;
