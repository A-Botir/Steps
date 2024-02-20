function Step2() {
  return (
    <form className="step2">
      <label
        htmlFor="myselect"
        className="mytext w-full text-xl text-black font-medium"
      >
        Subscription type:
        <select
          name="select"
          className="py-1 text-medium outline-none block text-left"
          id="myselect"
        >
          <option value="value1" selected>
            Choose an option
          </option>
          <option value="value2">Free</option>
          <option value="value3">Monthly</option>
          <option value="value4">Yearly</option>
        </select>
      </label>
    </form>
  );
}

export default Step2;
