import Answer from "./Answer";

function Question({ data, checkAnswer }) {
  return (
    <div className="w-full">

    
      <div className="flex justify-center mb-6">

        <div className="
          bg-gradient-to-r
          from-indigo-500
          to-purple-500
          text-white
          px-6
          py-2
          rounded-full
          text-sm
          md:text-base
          font-semibold
          shadow-lg
        ">
          Quiz Question 🚀
        </div>
      </div>


      <div className="
        bg-white
        border
        border-gray-200
        rounded-[35px]
        p-8
        md:p-10
        shadow-xl
      ">

        <div className="flex justify-center mb-6">

          <div className="
            w-20
            h-20
            rounded-full
            bg-gradient-to-r
            from-indigo-500
            to-purple-500
            flex
            items-center
            justify-center
            text-white
            text-4xl
            shadow-lg
          ">
            ❓
          </div>
        </div>

     
        <h2 className="
          text-3xl
          md:text-4xl
          font-extrabold
          text-center
          text-gray-800
          leading-snug
        ">
          {data.question}
        </h2>

  
        <p className="
          text-center
          text-gray-500
          mt-4
          text-lg
        ">
          Choose the correct answer below
        </p>

        <div className="mt-10">
          <Answer
            options={data.options}
            checkAnswer={checkAnswer}
          />
        </div>
      </div>
    </div>
  );
}

export default Question;