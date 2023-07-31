// import React from "react";
// import PropTypes from "prop-types";



const FormField = (props) => {
  const {
    labelName,
    type,
    name,
    placeholder,
    value,
    handleChange,
    isSurpriseMe,
    handleSurpriseMe,
  } = props;
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-grey-900">
          {labelName}
        </label>
        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurpriseMe}
          className="font-semi-bold text-xs bg-[#ECECF1] py-1 px-2 rounded-[5px] text-black">Surprise me</button>
        )}
      </div>
      <input type={type} id={name} name={name} placeholder={placeholder} value={value} onChange={handleChange} required
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649ff] outline-none block w-full p-3"/>
    </div>
  );
};

// FormField.propTypes = {
//   labelName: PropTypes.string.isRequired,
//   type: PropTypes.string.isRequired,
//   name: PropTypes.string,
//   placeholder: PropTypes.string,
//   value: PropTypes.string.isRequired,
//   handleChange: PropTypes.func.isRequired,
//   isSurpriseMe: PropTypes.bool,
//   handleSurpriseMe: PropTypes.func,
// };
export default FormField;
