import React from 'react'
import Header from "../src/assets/Header.jpg";
import { useEffect, useState } from "react";
import Story from "./components/Story";
import Photos from "./components/Photos";
import Diagnosis from "./components/Diagnosis";
import { IoCopy } from "react-icons/io5";
import copy from "copy-to-clipboard";
import { loadStripe } from "@stripe/stripe-js";


const stripePromise = loadStripe(
  "pk_test_51RHYfsGf9EIvNMdJcX77uPK5e58SBVDLGBY7teYOIhsaVdqUGcyLkq2HPfXVJT0c94SfNudAAZDMO4sqtVfU1Ihm00i5eDyfoe"
);

const handleCheckout = async () => {
  try {
    const response = await fetch('https://admirable-froyo-137013.netlify.app/api', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const {id} = await response.json();

    const stripe = await stripePromise;
    await stripe.redirectToCheckout({sessionId: id})
  } catch (error) {
    console.log(error);
  }
};

const Home = () => {

      const [storybg, setStorybg] = useState("");
      const [photosbg, setPhotosbg] = useState("");
      const [diagnosisbg, setDiagnosisbg] = useState("");
    
      const [story, setStory] = useState(true);
      const [photos, setPhotos] = useState(true);
      const [diagnosis, setDiagnosis] = useState(true);
      const [alert, setAlert] = useState(false);
    
      useEffect(() => {
        setStorybg("bg-black text-white"), setPhotosbg("");
        setDiagnosisbg("");
        setDiagnosis(false);
        setPhotos(false);
        setStory(true);
      }, []);
    
      useEffect(() => {
        setTimeout(() => {
          setAlert(false);
        }, 3000);
      }, [alert]);


  return (
    <section className=" bg-gray-100 w-screen pb-18">
    <h3 className="font-aleo md:text-4xl text-3xl text-center font-semibold pb-14 pt-16">
      Help Nala Survive Cancer
    </h3>

    <div className="md:flex justify-between w-full gap-4 px-6">
      <div className="grid place-items-center md:w-3/5 pt-10 md:border-[0.5px] md:px-6 md:bg-white pb-8 border-b-black">
        <img src={Header} className="w-screen md:w-full h-[400px]" alt="" />

        <div>
          <div className="flex w-full md:gap-20 gap-10 pb-10 pt-4">
            <p
              onClick={() => {
                setStorybg("bg-black text-white"), setPhotosbg("");
                setDiagnosisbg("");
                setDiagnosis(false);
                setPhotos(false);
                setStory(true);
              }}
              className={`font-varela text-lg cursor-pointer ${storybg}  px-2 py-0.5`}
            >
              story
            </p>
            <p
              onClick={() => {
                setPhotosbg("bg-black text-white"), setStorybg("");
                setDiagnosisbg("");
                setDiagnosis(false);
                setPhotos(true);
                setStory(false);
              }}
              className={`font-varela text-lg cursor-pointer ${photosbg}  px-2 py-0.5`}
            >
              photos
            </p>
            <p
              onClick={() => {
                setDiagnosisbg("bg-black text-white"), setStorybg("");
                setPhotosbg("");
                setDiagnosis(true);
                setPhotos(false);
                setStory(false);
              }}
              className={`font-varela text-lg cursor-pointer ${diagnosisbg}  px-2 py-0.5`}
            >
              diagnosis
            </p>
          </div>
        </div>
        <div>
          {story && <Story />}
          {photos && <Photos />}
          {diagnosis && <Diagnosis />}
        </div>
        <div className=" md:hidden bg-black h-0.5 w-full mt-16"></div>
      </div>

      <div className="md:w-1/3 pt-10 ">
        <h3 className="font-aleo md:text-3xl text-2xl text-center font-semibold pb-10 pt-16">
          Donate Here
        </h3>
        <h2>
          You can make your kind donation into this bitcoin wallet address.
          Every penny donated into this wallet is a tremendous contribution
          towards helping Nala defeat cancer.
          <br /> Thank you!
        </h2>
        <br /> <br /> <br /> <br />
        <div className=" gap-1 flex">
          <p className="text-[12px]">bc1q846lwf96hguygclxs5q867f87p9ps94t33sst9 </p>
          <span>
            <IoCopy
              onClick={() => {
                copy("bc1q846lwf96hguygclxs5q867f87p9ps94t33sst9"),
                  setAlert(true);
              }}
              className="md:text-md text-sm cursor-pointer"
            />
          </span>
        </div>
        {alert && (
          <p className="text-center text-sm pt-4 italic">
            Wallet address copied to clipboard!
          </p>
        )}
        <p className="font-varela text-xl cursor-pointer bg-gray-500 text-white border-2 rounded-3xl w-fit px-20 mt-10 py-1 mx-auto " onClick={handleCheckout}>
          Donate
        </p>
      </div>
    </div>
    <p className="px-6 pt-10 font-varela text-green-900 font-bold">
      CONTACT:{" "}
      <span className="text-black font-normal">Bridgesrick21@gmail.com</span>
    </p>
  </section>
  )
}

export default Home