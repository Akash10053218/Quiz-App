function Answer({ options, checkAnswer }) {
  return (
    <div className="grid gap-6 mt-8">

      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => checkAnswer(option)}
          className="
            group
            relative
            overflow-hidden
            bg-white
            border border-gray-200
            hover:border-indigo-500
            rounded-3xl
            p-5
            text-left
            transition-all
            duration-300
            hover:scale-[1.02]
            hover:shadow-2xl
          "
        >

         
          <div className="
            absolute
            inset-0
            bg-gradient-to-r
            from-indigo-500
            to-purple-500
            opacity-0
            group-hover:opacity-100
            transition-all
            duration-300
          " />

         
          <div className="relative flex items-center gap-5">

            
            <div className="
              w-12
              h-12
              rounded-full
              bg-indigo-100
              group-hover:bg-white
              flex
              items-center
              justify-center
              text-indigo-600
              group-hover:text-indigo-600
              font-bold
              text-lg
              transition-all
              duration-300
            ">
              {index + 1}
            </div>

           
            <p className="
              text-lg
              md:text-xl
              font-semibold
              text-gray-700
              group-hover:text-white
              transition-all
              duration-300
            ">
              {option}
            </p>
          </div>
        </button>
      ))}
    </div>
  );
}

export default Answer;