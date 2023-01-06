const RadioInput = ({ listIds = [], name, checked, ...props }) => (
  <>
    {listIds.map((id, index) => (
      <label htmlFor={id} className="input-radio" key={index}>
        <input
          type="radio"
          className="input-radio-hidden"
          id={id}
          value={id}
          name={name}
          checked={checked === id}
          {...props}
        />
        <div className="input-radio-display">{id}</div>
      </label>
    ))}
  </>
);
export default RadioInput;
