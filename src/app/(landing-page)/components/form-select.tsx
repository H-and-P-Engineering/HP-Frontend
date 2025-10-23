"use client"
import { useState } from "react"

export default function SelectedOption({label, defaultValue, selectOptions}: {
  label: string;
  defaultValue: string;
  selectOptions: {value: string; label: string}[];
}) {
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  const handleChange = (event:React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
  }

  return (
      <div>
          <label className="font-medium text-gray-800 mb-1 block">{label}</label>
          <select
              value={selectedValue} onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-3 focus:border-[#3571a6] outline-none" required>
                  {selectOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
          </select>
      </div>
  );
}