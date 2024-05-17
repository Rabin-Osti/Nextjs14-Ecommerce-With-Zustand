"use client";
import React, { useState, useEffect } from "react";
import Select from "react-select";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const options = [
  { value: "collegeBooks", label: "College Books" },
  { value: "literature", label: "Literature" },
  { value: "schoolBooks", label: "School's Books" },
  { value: "stationery", label: "Stationery" },
  { value: "officeTools", label: "Office Tools" },
];

export default function SelectMenu() {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState(null);
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  useEffect(() => {
    console.log("category is = ", category);
    if (category) {
      const selected = options.find((option) => option.value === category);
      setSelectedOption(selected || null);
    }
  }, [category]);

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#fb2e86" : "white",
      color: state.isSelected ? "white" : "black",
      ":hover": {
        backgroundColor: "#fb2e86",
        color: "white",
      },
    }),
  };

  return (
    <Select
      value={selectedOption} // Use value prop instead of defaultValue
      onChange={(selected) => router.push(`/products?category=${selected.value}`)}
      options={options}
      styles={customStyles}
      className="selectContainer"
      classNamePrefix="reactSelect"
      placeholder="Select By Category"
    />
  );
}
