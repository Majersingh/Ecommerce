import React, { useState} from 'react';

const AddressForm = (props) => {
  const [formData, setFormData] = useState({
    addressLine1: '',
    city: '',
    state: '',
    pincode: '',
    country: '',
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFormSubmitted(true);

    const isAnyFieldEmpty = Object.values(formData).some((value) => value === '');
    if (isAnyFieldEmpty) {
      console.log('Enter all fields');
      return;
    } else {
      props.setAddress(formData);
      props.setisTochangeaddress(false);
      console.log('Address Changed');
    }
  };

  const handleCloseModal = () => {
    props.setisTochangeaddress(false);
    setShowModal(false);
  };

  const getInputClasses = (fieldName) => {
    return `h-12 mt-1 block w-full border ${
      isFormSubmitted && formData[fieldName] === '' ? 'border-red-600' : 'border-gray-300'
    } rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-colors`;
  };

  return (
    <div className={`fixed p-4 inset-0 flex items-center justify-center z-50 bg-opacity-50 backdrop-filter backdrop-blur-sm transition-opacity ${
      showModal ? 'opacity-100' : 'opacity-0 pointer-events-none'
    }`}>
      <div className="bg-white p-6 shadow-md rounded-md max-w-lg w-full relative">
        <button
          className="absolute top-2 right-2 text-black hover:text-gray-600 focus:outline-none"
          onClick={handleCloseModal}
          aria-label="Close"
        >
          <i className="fa-solid fa-xmark xl"></i>
        </button>
        <h2 className="text-xl font-bold mb-6">Shipping Address</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="addressLine1" className="block text-sm font-medium text-gray-700">
              Address Line 1
            </label>
            <input
              type="text"
              id="addressLine1"
              name="addressLine1"
              value={formData.addressLine1}
              onChange={handleChange}
              className={getInputClasses('addressLine1')}
            />
          </div>
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className={getInputClasses('city')}
            />
          </div>
          <div>
            <label htmlFor="state" className="block text-sm font-medium text-gray-700">
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className={getInputClasses('state')}
            />
          </div>
          <div>
            <label htmlFor="pincode" className="block text-sm font-medium text-gray-700">
              Pincode
            </label>
            <input
              type="text"
              id="pincode"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              className={getInputClasses('pincode')}
            />
          </div>
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className={getInputClasses('country')}
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#5e11c2] hover:bg-[#4c0fa5] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save Address
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddressForm;
