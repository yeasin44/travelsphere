import React from "react";
import client1 from "../../assets/images/client-1.png";
import client2 from "../../assets/images/client-2.png";

const Clients = () => {
  return (
    <div className="max-w-screen-lg mx-auto py-12">
      <h2 className="text-center text-xl md:text-2xl lg:text-4xl p-6 font-bold">
        What my client say
      </h2>
      <div className="border-2 p-12 bg-slate-800 rounded-xl">
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-4 md:gap-20 gap-12 mt-6">
          <div className="border-2 rounded-xl border-slate-900 p-6 bg-white">
            <div className="avatar">
              <div className="lg:w-24 md:w-24 w-20 rounded-full absolute lg:bottom-1 lg:left-40 bottom-0 left-16 md:bottom-0 md:left-64">
                <img src={client1} alt="" />
              </div>
            </div>
            <h2 className="text-center font-bold mb-2">Hasan Ali</h2>
            <p>
              He is providing very good and safe service. You can rely and be
              safe with him. He is very friendly and funny. I have had
              experiences with other guide but he is really different one.
            </p>
          </div>
          <div className="border-2 rounded-xl border-slate-900 p-6 bg-white">
            <div className="avatar">
              <div className="lg:w-24 md:w-24 w-20 rounded-full absolute lg:bottom-1 lg:left-40 bottom-0 left-16 md:bottom-0 md:left-64">
                <img src={client2} alt="" />
              </div>
            </div>
            <h2 className="text-center font-bold mb-2">Mohammad Imran</h2>
            <p>
              I’m never really worried that the booth isn’t going to get there
              on time. I can call over there and talk to anyone and get my
              questions answered in an instant. Ease of getting a hold of
              people. All communication with them is really easy. They do handle
              everything.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
