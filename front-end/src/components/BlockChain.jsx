import React from "react";
import { CheckCircle } from "lucide-react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export default function BlockChain() {
  // const [data, setData] = useState(null);
  const blockNo = localStorage.getItem("blockNo");
  const indexNo = localStorage.getItem("Index");
  const timestamp = localStorage.getItem("Timestamp");
  const nameStore = localStorage.getItem("Name");
  const emailStore = localStorage.getItem("Email");
  const mobileNo = localStorage.getItem("MobNo");
  const prevHash = localStorage.getItem("PreviousHash");
  const presentHash = localStorage.getItem("Hash");

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token1");
    if (!localStorage.getItem("blockNo")) {
      return navigate("/");
    }
  }, []);

  const removeAllToken = () => {
    localStorage.removeItem("blockNo");
    localStorage.removeItem("Index");
    localStorage.removeItem("Timestamp");
    localStorage.removeItem("Name");
    localStorage.removeItem("Email");
    localStorage.removeItem("MobNo");
    localStorage.removeItem("MobNo");
    localStorage.removeItem("PreviousHash");
    localStorage.removeItem("Hash");

    return navigate("/");
  };

  return (
    <section className="relative w-full overflow-hidden overflow bg-white pb-14 mt-10 mx-8">
      <div className="relative  z-10 mx-auto max-w-7xl px-4">
        <div>
          <div className="-m-5 flex flex-wrap">
            <div className="w-full p-5 md:w-1/2">
              <div className="rounded-md border bg-white bg-opacity-90">
                <div className=" border-b">
                  <div className="px-9 py-7">
                    <h3 className="mb-3 text-xl font-bold leading-snug text-gray-900">
                      Your Block Details
                    </h3>
                  </div>
                </div>
                <div className="px-9 pb-9 pt-8">
                  <ul className="mb-11">
                    <li className="mb-4 flex items-center">
                      <CheckCircle className="mr-2" size={16} />
                      <p className="font-semibold leading-normal">
                        Block No. : {blockNo}
                      </p>
                    </li>
                    <li className="mb-4 flex items-center">
                      <CheckCircle className="mr-2" size={16} />
                      <p className="font-semibold leading-normal">
                        Index Number : {indexNo}
                      </p>
                    </li>
                    <li className="mb-4 flex items-center">
                      <CheckCircle className="mr-2" size={16} />
                      <p className="font-semibold leading-normal">
                        Timestamps : {timestamp}
                      </p>
                    </li>
                    {/* <li className="mb-4 flex items-center">
                      <CheckCircle className="mr-2" size={16} />
                      <p className="font-semibold leading-normal">
                        Your Data :
                      </p>
                    </li> */}
                    {/* idhar se 😜😜😜 */}

                    <li className="mb-4 flex items-center">
                      <p className="font-semibold leading-normal">
                        <CheckCircle className="mr-2" size={16} />
                        Hash : {presentHash}
                      </p>
                    </li>

                    <li className="mb-4 flex items-center">
                      <p className="font-semibold leading-normal">
                        <CheckCircle className="mr-2" size={16} />
                        Previous Hash : {prevHash}
                      </p>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2" size={16} />
                      <p className="font-semibold leading-normal">
                        Name : {nameStore}
                      </p>
                    </li>

                    <li className="flex items-center">
                      <CheckCircle className="mr-2" size={16} />
                      <p className="font-semibold leading-normal">
                        E-Mail : {emailStore}
                      </p>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2" size={16} />
                      <p className="font-semibold leading-normal">
                        Contact : {mobileNo}
                      </p>
                    </li>
                  </ul>

                  <div className="md:inline-block">
                    <button
                      onClick={removeAllToken}
                      type="button"
                      className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Generate New Block
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
