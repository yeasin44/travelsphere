import React from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const AddService = () => {
  const { _id } = useLoaderData();
  const handleAddService = (e) => {
    e.preventDefault();
    const form = e.target;
    const img = form.img.value;
    const title = form.title.value;
    const price = form.price.value;
    const description = form.description.value;
    const addService = {
      service: _id,
      title,
      img,
      price,
      description,
    };
    // console.log(img, title, price, description);
    fetch("http://localhost:5000/addService", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addService),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Service added");
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="max-w-screen-lg mx-auto">
      <h2>Add service</h2>
      <div className="">
        <form onSubmit={handleAddService} className="mb-12 ">
          <div className="grid grid-cols-1">
            <label htmlFor="" className="text-lg mt-4 font-bold m-2">
              Image:{" "}
            </label>
            <input
              name="img"
              type="name"
              placeholder="Image url"
              className="input input-bordered w-1/2 "
            />
          </div>
          <div className="grid grid-cols-1">
            <label htmlFor="" className="text-lg mt-4 font-bold m-2">
              Title:{" "}
            </label>
            <input
              name="title"
              type="name"
              placeholder="title"
              className="input input-bordered w-1/2 "
            />
          </div>
          <div className="grid grid-cols-1">
            <label htmlFor="" className="text-lg mt-4 font-bold m-2">
              Price:{" "}
            </label>
            <input
              name="price"
              type="name"
              placeholder="price"
              className="input input-bordered w-1/2 "
            />
          </div>

          <label htmlFor="name" className="text-lg mt-4 font-bold block m-2">
            Description:{" "}
          </label>
          <textarea
            name="description"
            className="textarea textarea-bordered w-1/2"
            placeholder="description"
            required
          ></textarea>

          <input
            className="btn py-1 px-3  rounded font-bold mt-3 block"
            type="submit"
            value="Add Service"
          />
        </form>
      </div>
    </div>
  );
};

export default AddService;
