import { useState } from "react";
import Cards from "../Components/Cards";
import { dataModel } from "../Data/Model";
import { Link } from "react-router-dom";
import { Carousel } from "@material-tailwind/react";
import Section from "../Components/Section";


const data = dataModel


export default function Home() {

  const [search, setSearch] = useState(data.data)
  function searchHandel(event: React.ChangeEvent<HTMLInputElement>) {

    const query = event.target.value;
    let updatedList = [...dataModel.data];
    updatedList = updatedList.filter((item) => {
      return item.title.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    setSearch(updatedList)
  }

  return (
    <>
      {/* <div className="flex flex-col   p-5  "> */}

      <div className="flex gap-3 p-5 ml-11 ">
        <input onChange={searchHandel} className="border border-black h-11 w-72 rounded p-3" placeholder="Search by name" />

      </div>



    

      <div className="flex justify-center w-full" >
        <div className="w-11/12 h-1/6 rounded-md">
          {/* <div className="h-1/2"> */}
            <Carousel className="rounded-xl h-screen border  ">
              <img
                src="https://i1.wp.com/gomoviereviews.com/wp-content/uploads/2019/02/Top10_2018.jpg?fit=1800%2C1200&ssl=1"
                alt="image 3"
                className="  w-full h-full object-cover "
              />
              <img
                src="https://image.cnbcfm.com/api/v1/image/104768589-movies-anywhere.JPG?v=1507816437&w=1920&h=1080"
                alt="image 3"
                className=" w-full h-full object-cover"
              />
              <img
                src="https://www.pinkvilla.com/images/2023-07/1941022096_orange-yellow-minimalist-aesthetic-a-day-in-my-life-travel-vlog-youtube-thumbnail.jpg"
                alt="image 1"
                className=" w-full h-full object-cover"
              />
              <img
                src="https://www.belloflostsouls.net/wp-content/uploads/2022/12/2023-movies.jpeg"
                alt="image 2"
                className=" w-full h-full object-cover"
              />
              <img
                src="https://fav-agoodtime.com.my/en/wp-content/uploads/2023/05/FEATUR1-5.jpg"
                alt="image 3"
                className=" w-full h-full object-cover"
              />
            </Carousel>
          </div>
        </div>
      
     


      <div className="flex justify-center  flex-wrap p-7 gap-5 rounded">
      <hr className="p-6" />
        {search.map((item, index) => (
          <div key={index}>
            <Link to={`/details/${item.id}`}>
              <Cards id={item.id} title={item.title} desc={item.desc} photo={item.photo}></Cards>
            </Link>
          </div>
        ))}
      </div>


      <Section></Section>

    </>
  )
}




