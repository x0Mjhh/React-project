
interface data {
  id: number,
  title: string,
  desc: string,
  photo:string
}

export default function Cards(props: data) {
  return (

    <>



      {/* <div className="flex flex-wrap items-center w-80  text-center border border-sky-500 rounded gap-3 "> */}

        {/* <section className="flex max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12 bg-sky-700"> */}
          <div className="flex w-80 h-96 justify-start ">
            <div className="w-full bg-black rounded-lg sahdow-lg p-12 flex flex-col  items-center">
              <div className="mb-8">
                <div className="bg-sky-400 w-52 text-white font-bold text-lg text-center "> <img className="object-fill h-56 w-96" src={props.photo}/></div>
              </div>
              <div className="text-center">
                <p className="text-xl text-white font-bold mb-2">{props.title}</p>
                <p className="text-base text-gray-400 font-normal">________________________________________</p>
              </div>
            </div>
          </div>
        {/* </section> */}



        {/* <p>{props.id}</p> */}
       
        
      {/* </div> */}

    </>
  )
}

{/* <div className="bg-black py-20 lg:py-[120px] overflow-hidden relative z-10">

  <div className="container xl:max-w-6xl mx-auto px-4">
    <header className="text-center mx-auto mb-12 lg:px-20">
      <h2 className="text-2xl leading-normal mb-2 font-bold text-white">
        Tecnologies / Frameworks
      </h2>
      <p className="text-white leading-relaxed font-light text-xl mx-auto pb-2">
        My favorite tecnologies!
      </p>
    </header>
  </div>


</div>
 */}
