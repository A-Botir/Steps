function Step3() {
  return (
      <form className="step3">
        <label
          htmlFor="myfirst"
          className="mytext w-full text-xl text-black font-medium"
        >
          First name
        </label>
        <input
          type="text"
          className="w-full px-3 py-2 rounded-md my-3 border border-inherit text-lg  outline-none"
          id="myfirst"
          required
        />
        <label
          htmlFor="mylast"
          className="mytext w-full text-xl text-black font-medium"
        >
          Last Name
        </label>
        <input
          type="text"
          className="w-full px-3 py-2 rounded-md my-3 border border-inherit text-lg  outline-none"
          id="mylast"
          required
        />
        <label
          htmlFor="mymiddle"
          className="mytext w-full text-xl text-black font-medium"
        >
          Middle Name
        </label>
        <input
          type="text"
          className="w-full px-3 py-2 rounded-md my-3 border border-inherit text-lg  outline-none"
          id="mymiddle"
        />
        <label
          htmlFor="mydate"
          className="mytext w-full text-xl text-black font-medium"
        >
          Birhtdate
        </label>

        <input
          type="date"
          className="w-full px-3 py-2 rounded-md my-3 border border-inherit text-lg  outline-none"
          id="mydate"
        />

        <label
          htmlFor="mymail"
          className="mytext w-full text-xl text-black font-medium"
        >
          Email
        </label>
        <input
          type="email"
          className="w-full px-3 py-2 rounded-md my-3 border border-inherit text-lg  outline-none"
          id="mymail"
          required
        />

        <label
          htmlFor="mygender"
          className="mytext w-full text-xl text-black font-medium"
        >
          Gender:
        </label>
        <select
          name="select"
          className="py-1 font-medium text-xl outline-none block text-left my-3"
          id="mygender"
        >
          <option value="value1" selected>
            select
          </option>
          <option value="value1">male</option>
          <option value="value2">female</option>
        </select>

        <label
          htmlFor="myadult"
          className="mytext w-full text-xl text-black font-medium"
        >
          Are you older than 18?
          <input type="checkbox" className="w-4 ml-1" id="myadult" required />
        </label>
      </form>
  );
}

export default Step3;
