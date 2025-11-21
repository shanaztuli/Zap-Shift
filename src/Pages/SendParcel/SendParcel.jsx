import React from 'react';
import { useForm } from 'react-hook-form';

const SendParcel = () => {
const {register,handleSubmit,formState:{errors}} = useForm();


const handleSendParcel = data =>{
console.log(data);
}
    return (
      <div>
        <h1 className="text-3xl text-bold">Send a Parcel </h1>
        <form
          onSubmit={handleSubmit(handleSendParcel)}
          className="mt-12 p-4 text-black"
        >
          {/*parcel type   */}
          <div>
            <label className="label mr-4 ">
              <input
                type="radio"
                {...register("parcelType")}
                value={document}
                className="radio"
                defaultChecked
              />
              Document
            </label>
            <label className="label">
              <input
                type="radio"
                {...register("parcelType")}
                value={"non-document"}
                className="radio"
                defaultChecked
              />
              Non-Document
            </label>
          </div>
          {/* parcel info : name, weight */}
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-12 my-8">
            <fieldset className="fieldset">
              <label className="label">Parcel Name</label>
              <input
                type="text"
                {...register("parcelName")}
                className="input w-full"
                placeholder="Parcel Name"
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label">Parcel Weight</label>
              <input
                type="number"
                {...register("parcelWeight")}
                className="input w-full"
                placeholder="Parcel Name"
              />
            </fieldset>
          </div>
          {/* two column */}
          <div>
            {/* sender details */}

            <h4 className="text-2xl font-semibold">Sender Details</h4>
            <fieldset className="fieldset">
                {/* sender name  */}
              <label className="label">Sender Name</label>
              <input
                type="text"
                {...register("senderName")}
                className="input w-full"
                placeholder="Sender Name"
              />
              {/* sender address */}
              <label className="label mt-4">Sender Address</label>
              <input
                type="text"
                {...register("senderAddress")}
                className="input w-full"
                placeholder="Sender Address"
              />
            </fieldset>
          </div>
          <div>{/* receiver info  */}</div>

          <input
            type="submit"
            className="btn btn-primary text-black"
            value="Send Parcel"
          />
        </form>
      </div>
    );
};

export default SendParcel;