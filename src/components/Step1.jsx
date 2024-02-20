function Step1() {
  return (
      <form className="step1">
        <label className="mytext w-full text-xl text-black font-medium">
          Login
          <input
            type="text"
            className="w-full px-3 py-2 rounded-md my-3 border border-inherit text-lg  outline-none"
            id="mytext"
            required
            placeholder="Enter your login..."
          />
        </label>
        <label
          htmlFor="mypasw1"
          className="mytext w-full text-xl text-black font-medium"
        >
          Password
          <input
            type="password"
            className="w-full px-3 py-2 rounded-md my-3 border border-inherit text-lg outline-none"
            minLength={5}
            required
            id="mypasw1"
            placeholder="Enter your password..."
          />
        </label>
        <label
          htmlFor="mypasw2"
          className="mytext w-full text-xl text-black font-medium"
        >
          Confirm password
          <input
            type="password"
            className="w-full px-3 py-2 rounded-md my-3 border border-inherit text-lg outline-none"
            minLength={5}
            required
            id="mypasw2"
            placeholder="Confirm your password..."
          />
        </label>
      </form>
  );
}

export default Step1;
