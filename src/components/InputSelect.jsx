export default function InputSelect({item,state}){
    const [form, setForm] = state;

    // Properties
    const formKey = [item.key];
    const formValue = form[item.key];
  
    return (
      <label className="input-text">
        {item.label}
        <input
          // State
          value={formValue}
          onChange={(event) =>
            setForm({ ...form, [formKey]: event.target.value })
          }
          // Common properties
          type={item.type}
          required={item.required}
          disabled={item.disabled}
          placeholder={item.placeholder}
          // Specific properties
          maxLength={item.maxLength}
          min={item.min}
          max={item.max}
        />
      </label>
    );
}