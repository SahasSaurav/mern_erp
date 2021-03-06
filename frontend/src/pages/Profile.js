import { useForm } from 'react-hook-form';

import ImageUploader from '../components/ImageUploader'
import Sidebar from "../components/Sidebar";
import BouncingLoader from "../components/BouncingLoader";
import AppShell from '../components/AppShell';

const Profile = () => {
  const { register, handleSubmit, errors: formError } = useForm()

  const onSubmitHandler = (data) => {
    console.log(data)
  };

  const loading = false;

  return (
    <AppShell>
      <div className="h-full w-full rounded-3xl bg-white dark:bg-blueGray-800 p-4">

        <ImageUploader />
        <br />
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <div className="flex flex-wrap space-x-8 w-full">
            <div className="mb-3 pt-0 w-full  max-w-xs">
              <label className="block mb-1 dark:text-gray-50" htmlFor="fristName">Frist Name</label>
              <input type="text"
                ref={register({
                  required: 'Please enter your frist name'
                })}
                name="fristName"
                placeholder="Frist Name" className={`px-2 py-3 placeholder-gray-400 dark:placeholder-gray-200 text-gray-700 dark:text-gray-200 relative bg-white dark:bg-gray-700 rounded-lg text-base font-normal border border-gray-400 dark:border-gray-500 outline-none focus:outline-none focus:ring-2 ${formError.fristName ? "ring-red-400" : "ring-blue-400"
                  } ${formError.fristName ? "ring-2" : ""}  w-full   pl-6`} />
              {formError.fristName && (
                <small className="error">{formError.fristName?.message}</small>
              )}
            </div>
            <div className="mb-3 pt-0 w-full max-w-xs">
              <label className="block mb-1 dark:text-gray-50" htmlFor="lastName">Last Name</label>
              <input type="text"
                ref={register({
                  required: 'Please enter your last name'
                })}
                name="lastName"
                placeholder="Last Name" className={`px-2 py-3 placeholder-gray-400 dark:placeholder-gray-200 text-gray-700 dark:text-gray-200 relative bg-white dark:bg-gray-700 rounded-lg text-base font-normal border border-gray-400 dark:border-gray-500 outline-none focus:outline-none focus:ring-2 ${formError.lastName ? "ring-red-400" : "ring-blue-400"
                  } ${formError.lastName ? "ring-2" : ""}  w-full  pl-6`} />
              {formError.lastName && (
                <small className="error">{formError.lastName?.message}</small>
              )}
            </div>
          </div>
          <div className="mb-3 pt-0 w-full max-w-2xl ">
            <label className="block mb-1 dark:text-gray-50" htmlFor="email">Email</label>
            <input type="email"
              ref={register({
                required: 'Please enter your email'
              })}
              name="eamil"
              placeholder="Email" className={`px-2 py-3 placeholder-gray-400 dark:placeholder-gray-200 text-gray-700 dark:text-gray-200 relative bg-white dark:bg-gray-700 rounded-lg text-base font-normal border border-gray-400 dark:border-gray-500 outline-none focus:outline-none focus:ring-2 ${formError.email ? "ring-red-400" : "ring-blue-400"
                } ${formError.email ? "ring-2" : ""}  w-full pl-6`} />
            {formError.email && (
              <small className="error">{formError.email?.message}</small>
            )}
          </div>
          <div className="mb-3 pt-0 w-full max-w-2xl">
            <label className="block mb-1 dark:text-gray-50" htmlFor="phone">Contact Number</label>
            <input type="text"
              ref={register({
                required: 'Please enter your contact number'
              })}
              name="phone"
              placeholder="Contact Number" className={`px-2 py-3 placeholder-gray-400 dark:placeholder-gray-200 text-gray-700 dark:text-gray-200 relative bg-white dark:bg-gray-700 rounded-lg text-base font-normal border border-gray-400 dark:border-gray-500 outline-none focus:outline-none focus:ring-2 ${formError.phone ? "ring-red-400" : "ring-blue-400"
                } ${formError.phone ? "ring-2" : ""}  w-full pl-6`} />
            {formError.phone && (
              <small className="error">{formError.phone?.message}</small>
            )}
          </div>
          <div className="mb-3 pt-0 w-full max-w-2xl">
            <label className="block mb-1 dark:text-gray-50" htmlFor="address">Address</label>
            <input type="text"
              ref={register({
                required: 'Please enter your address'
              })}
              name="address"
              placeholder="Address" className={`px-2 py-3 placeholder-gray-400 dark:placeholder-gray-200 text-gray-700 dark:text-gray-200 relative bg-white dark:bg-gray-700 rounded-lg text-base font-normal border border-gray-400 dark:border-gray-500 outline-none focus:outline-none focus:ring-2 ${formError.address ? "ring-red-400" : "ring-blue-400"
                } ${formError.address ? "ring-2" : ""}  w-full pl-6`} />
            {formError.address && (
              <small className="error">{formError.address?.message}</small>
            )}
          </div>
          <div className="flex flex-wrap space-x-8 w-full">
            <div className="mb-3 pt-0  w-full max-w-xs">
              <label className="block mb-1 dark:text-gray-50" htmlFor="city">City</label>
              <input type="text"
                ref={register({
                  required: 'Please enter your last name'
                })}
                name="city"
                placeholder="City" className={`px-2 py-3 placeholder-gray-400 dark:placeholder-gray-200 text-gray-700 dark:text-gray-200 relative bg-white dark:bg-gray-700 rounded-lg text-base font-normal border border-gray-400 dark:border-gray-500 outline-none focus:outline-none focus:ring-2 ${formError.city ? "ring-red-400" : "ring-blue-400"
                  } ${formError.city ? "ring-2" : ""}  w-full pl-6`} />
              {formError.city && (
                <small className="error">{formError.city?.message}</small>
              )}
            </div>
            <div className="mb-3 pt-0  w-full max-w-xs">
              <label className="block mb-1 dark:text-gray-50" htmlFor="state">State</label>
              <input type="text"
                ref={register({
                  required: 'Please enter your last name'
                })}
                name="state"
                placeholder="State" className={`px-2 py-3 placeholder-gray-400 dark:placeholder-gray-200 text-gray-700 dark:text-gray-200 relative bg-white dark:bg-gray-700 rounded-lg text-base font-normal border border-gray-400 dark:border-gray-500 outline-none focus:outline-none focus:ring-2 ${formError.state ? "ring-red-400" : "ring-blue-400"
                  } ${formError.state ? "ring-2" : ""}  w-full pl-6`} />
              {formError.state && (
                <small className="error">{formError.state?.message}</small>
              )}
            </div>
          </div>
          <div className="flex flex-wrap space-x-8 w-full">
            <div className="mb-3 pt-0  w-full max-w-xs">
              <label className="block mb-1 dark:text-gray-50" htmlFor="zip">Zip Code</label>
              <input type="text"
                ref={register({
                  required: 'Please enter your last name'
                })}
                name="zip"
                placeholder="Zip Code" className={`px-2 py-3 placeholder-gray-400 dark:placeholder-gray-200 text-gray-700 dark:text-gray-200 relative bg-white dark:bg-gray-700 rounded-lg text-base font-normal border border-gray-400 dark:border-gray-500 outline-none focus:outline-none focus:ring-2 ${formError.zip ? "ring-red-400" : "ring-blue-400"
                  } ${formError.zip ? "ring-2" : ""}  w-full pl-6`} />
              {formError.zip && (
                <small className="error">{formError.zip?.message}</small>
              )}
            </div>
            <div className="mb-3 pt-0 w-full max-w-xs">
              <label className="block mb-1 dark:text-gray-50" htmlFor="country">Country</label>
              <input type="text"
                ref={register({
                  required: 'Please enter your last name'
                })}
                name="country"
                placeholder="Country" className={`px-2 py-3 placeholder-gray-400 dark:placeholder-gray-200 text-gray-700 dark:text-gray-200 relative bg-white dark:bg-gray-700 rounded-lg text-base font-normal border border-gray-400 dark:border-gray-500 outline-none focus:outline-none focus:ring-2 ${formError.country ? "ring-red-400" : "ring-blue-400"
                  } ${formError.country ? "ring-2" : ""}  w-full pl-6`} />
              {formError.country && (
                <small className="error">{formError.country?.message}</small>
              )}
            </div>
          </div>
          <button
            className={` ${loading ? "bg-blue-300" : "bg-blue-500"} ${loading ? "bg-blue-300" : "hover:bg-blue-600"
              } text-white  font-semibold uppercase text-base px-8 py-4 rounded-lg shadow-xs hover:shadow-lg outline-none focus:outline-none mr-1 mb-10 transition duration-100`}
            type="submit"
            disabled={loading}
          >
            {loading ? <BouncingLoader /> : "Submit"}
          </button>
        </form>
      </div>
    </AppShell>
  );
};

export default Profile;
