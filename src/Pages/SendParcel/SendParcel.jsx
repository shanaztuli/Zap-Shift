import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    control,
    // formState: { errors },
  } = useForm();
  const {user} = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const serviceCentres = useLoaderData();

  const regions = [...new Set(serviceCentres.map((c) => c.region))];

  const senderRegion = useWatch({ control, name: "senderRegion" });
  const receiverRegion = useWatch({ control, name: "receiverRegion" });

  const districtsByRegion = (region) => {
    if (!region) return [];
    return serviceCentres
      .filter((c) => c.region === region)
      .map((c) => c.district);
  };

  const handleSendParcel = (data) => {
    console.log(data);
    const isDocument = data.parcelType === 'document';
    const isSameDistrict = data.senderDistrict === data.receiverDistrict;
    const parcelWeight = parseFloat(data.parcelWeight);
    // console.log(sameDistrict);
    let cost = 0;
    if(isDocument){
      cost = isSameDistrict? 60 : 80 ;

    }else{
      if(parcelWeight <3 ){
        cost = isSameDistrict ? 110 :150 ;
      }
      else {
        const minCharge = isSameDistrict ? 110 : 150 ;
        const extraWeight = parcelWeight -3;
        const extraCharge = isSameDistrict ? extraWeight *40 : extraWeight *40 +40;
      
        cost = minCharge + extraCharge;
      }
    }
    console.log('cost', cost);
    data.cost = cost;
    Swal.fire({
      title: "Agree with the Cost?",
      text: `You will be charged ${cost} take !`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm and Continue Payment",
    }).then((result) => {
      if (result.isConfirmed) {
//save the parcel info to the database;

axiosSecure.post("/parcels", data).then((res) => {
  console.log("after saving parcel", res.data);
  if(res.data.insertedId){
  navigate('/dashboard/my-parcels')
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your parcel has been Created.Please Pay",
      showConfirmButton: false,
      timer: 2500,
    });
  }
});

      


      }
    });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold">Send a Parcel</h1>
      <form
        onSubmit={handleSubmit(handleSendParcel)}
        className="mt-12 p-4 text-black"
      >
        {/* Parcel Type */}
        <div>
          <label className="label mr-4">
            <input
              type="radio"
              {...register("parcelType")}
              value="document"
              className="radio"
              defaultChecked
            />
            Document
          </label>
          <label className="label">
            <input
              type="radio"
              {...register("parcelType")}
              value="non-document"
              className="radio"
            />
            Non-Document
          </label>
        </div>

        {/* Parcel Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-8">
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
              placeholder="Parcel Weight"
            />
          </fieldset>
        </div>

        {/* Sender & Receiver */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Sender */}
          <div>
            <h4 className="text-2xl font-semibold">Sender Details</h4>
            <fieldset className="fieldset">
              <label className="label">Sender Name</label>
              <input
                type="text"
                {...register("senderName")}
                defaultValue={user?.displayName}
                className="input w-full"
                placeholder="Sender Name"
              />

              <label className="label mt-2">Sender Email</label>
              <input
                type="email"
                {...register("senderEmail")}
                defaultValue={user?.email}
                className="input w-full"
                placeholder="Sender Email"
              />

              <label className="label mt-2">Sender Region</label>
              <select {...register("senderRegion")} className="select">
                <option value="">Pick a Region</option>
                {regions.map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>

              <label className="label mt-2">Sender District</label>
              <select {...register("senderDistrict")} className="select">
                <option value="">Pick a District</option>
                {districtsByRegion(senderRegion).map((d, i) => (
                  <option key={i} value={d}>
                    {d}
                  </option>
                ))}
              </select>

              <label className="label mt-2">Sender Address</label>
              <input
                type="text"
                {...register("senderAddress")}
                className="input w-full"
                placeholder="Sender Address"
              />

              <label className="label mt-2">Sender Contact No</label>
              <input
                type="text"
                {...register("senderContact")}
                className="input w-full"
                placeholder="Sender Contact No"
              />

              <label className="label mt-2">Delivery Instruction</label>
              <input
                type="text"
                {...register("senderDeliveryInstruction")}
                className="input w-full h-[90px]"
                placeholder=""
              />
            </fieldset>
          </div>

          {/* Receiver */}
          <div>
            <h4 className="text-2xl font-semibold">Receiver Details</h4>
            <fieldset className="fieldset">
              <label className="label">Receiver Name</label>
              <input
                type="text"
                {...register("receiverName")}
                className="input w-full"
                placeholder="Receiver Name"
              />

              <label className="label mt-2">Receiver Email</label>
              <input
                type="email"
                {...register("receiverEmail")}
                className="input w-full"
                placeholder="Receiver Email"
              />

              <label className="label mt-2">Receiver Region</label>
              <select {...register("receiverRegion")} className="select">
                <option value="">Pick a Region</option>
                {regions.map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>

              <label className="label mt-2">Receiver District</label>
              <select {...register("receiverDistrict")} className="select">
                <option value="">Pick a District</option>
                {districtsByRegion(receiverRegion).map((d, i) => (
                  <option key={i} value={d}>
                    {d}
                  </option>
                ))}
              </select>

              <label className="label mt-2">Receiver Address</label>
              <input
                type="text"
                {...register("receiverAddress")}
                className="input w-full"
                placeholder="Receiver Address"
              />

              <label className="label mt-2">Receiver Contact No</label>
              <input
                type="text"
                {...register("receiverContact")}
                className="input w-full"
                placeholder="Receiver Contact No"
              />

              <label className="label mt-2">Delivery Instruction</label>
              <input
                type="text"
                {...register("receiverDeliveryInstruction")}
                className="input w-full h-[90px]"
                placeholder=""
              />
            </fieldset>
          </div>
        </div>

        <input
          type="submit"
          className="btn btn-primary text-black mt-5"
          value="Send Parcel"
        />
      </form>
    </div>
  );
};

export default SendParcel;
