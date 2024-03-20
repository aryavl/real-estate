import { useState } from "react";
import Select, { ActionMeta, GroupBase, MultiValue, SingleValue } from "react-select"; // Import ValueType for correct typing
import { OptionType, options } from "../../utilis/inputOptions";
import styles from "./Search.module.css";


import { StylesConfig } from 'react-select';

type CustomStyles = StylesConfig<OptionType, true, GroupBase<OptionType>>;

const customStyles: CustomStyles = {
  control: (base, state) => ({
    ...base,
    border: state.isFocused ? '2px solid #46ed27' : '2px solid #46ed27',
    borderRadius: 8,
    padding: '10px',
    // backgroundColor:"#f1faa0",
    boxShadow: state.isFocused ? '0 0 0 1px #46ed27' : 'none',
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isSelected ? '#46ed27' : 'white',
    color: state.isSelected ? 'white' : 'black',
  }),
  
};



const Search = () => {
  const [selectedDistrict, setSelectedDistrict] = useState<OptionType | null>(null);
  const [selectedPlace, setSelectedPlace] = useState<OptionType[]>([]);

  const handleChange = (
    newValue: SingleValue<OptionType>, 
    actionMeta: ActionMeta<OptionType>
  ) => {
    if (
      actionMeta.action === "select-option" ||
      actionMeta.action === "remove-value"
    ) {
      setSelectedDistrict(newValue as OptionType | null);
    }
  };

  const handleChangePlace = (
    newValue: MultiValue<OptionType>,
    actionMeta: ActionMeta<OptionType>
  ) => {
    if (
      actionMeta.action === "select-option" ||
      actionMeta.action === "remove-value"
    ) {
      setSelectedPlace(newValue as OptionType[]);
    }
  };

  const districtOptions = options.map((district) => ({
    label: district.label,
    value: district.value,
  }));

  const placeOptions: OptionType[] = selectedDistrict
    ? (options.find((district) => district.value === selectedDistrict.value)?.places || [])
    : [];

  return (
    <div className="w-full">
      <h1 className="text-4xl font-light text-center sm:mb-6">
        Find a Property you'll <span className={styles.headingFont}>love</span>
      </h1>


      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between ">
        <div className="w-full">
          <Select
            options={districtOptions}
            value={selectedDistrict}
            onChange={handleChange}
            className=""
            styles={customStyles}
          />
        </div>
        <div className="w-full">
          <Select
            options={placeOptions}
            value={selectedPlace}
            onChange={handleChangePlace}
            isMulti={true}
            className=""
            styles={customStyles}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
