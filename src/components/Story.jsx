import React from "react";

const Story = () => {
  return (
    <div>
      <h3 className="font-aleo md:text-2xl text-xl font-semibold text-left">
        Summary
      </h3>
      <p className="font-varela md:text-[16px] text-[14px] pt-4">
        Nala, my sweet and playful dog, has been a source of endless joy and
        comfort in my life. Recently, she was diagnosed with cancer, and while
        the news was heartbreaking, her courageous spirit has been a constant
        reminder of how special she is. The treatment she needs is costly, but
        I’m determined to give her the best care possible. If you can
        contribute, even a little, it would mean the world to both of us.
        Together, we can give Nala the chance to enjoy many more happy and
        healthy moments. Thank you for your kindness.
      </p>
      <div className="flex justify-center pt-10">
        <div className="flex gap-10 flex-wrap">
          <div>
            <h3 className="font-aleo text-2xl text-green-600 font-bold">$42K</h3> <p className="text-center -mt-1 font-varela text-[12px] md:text-sm">total target</p>
          </div>
          <div>
            <h3 className="font-aleo text-2xl text-green-600 font-bold">$11,425</h3> <p className="text-center -mt-1 font-varela text-[12px] md:text-sm">amount raised</p>
          </div>
          <div>
            <h3 className="font-aleo text-2xl text-green-600 font-bold">48</h3> <p className="text-center -mt-1 font-varela text-[12px] md:text-sm">donors</p>
          </div>
          <div>
            <h3 className="font-aleo text-2xl text-green-600 font-bold">$30,575</h3> <p className="text-center -mt-1 font-varela text-[12px] md:text-sm">shortfall</p>
          </div>
        </div>
      </div>
      <h3 className="font-aleo md:text-2xl text-xl pt-14 font-semibold text-left">
        How Your Donations Will Be Used
      </h3>
      <p className="font-varela md:text-[16px] text-[14px] pt-4">
        Your kind and generous donations will help me to:
      </p>
      <ul className="list-disc ml-8">
        <li className="font-varela md:text-[16px] text-[14px] pt-4">pay for chemotherapy and surgical procedures that will help alleviate the pain and discomfort that Nala is experiencing.</li>
        <li className="font-varela md:text-[16px] text-[14px] pt-4">provide Nala with neccessary complimentary therapies that will help her to get back in good shape very soon. therapies such as acupuncture, nutritional support, advanced and personalized treatments etc. </li>
        <li className="font-varela md:text-[16px] text-[14px] pt-4">acquire home care and support equipments including orthopedic bedding and mobility aids to ease her through the process of treatment and recovery.</li>
      </ul>
      <p className="font-varela md:text-[16px] text-[14px] pt-4">Every donation made by each and everyone of you will make a meaningful difference in helping Nala fight this battle. Your generosity could truly save her life—thank you for your support. 🐾💖</p>
    </div>
  );
};

export default Story;
