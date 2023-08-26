import { useParams } from 'react-router-dom';
import { dataModel } from '../Data/Model';
import Section from '../Components/Section';



const data = dataModel;

export default function Details() {
  const { id } = useParams();
  const re = data.data.find((e) => e.id == Number(id));
  return (
    <>
      <div className='flex justify-center  h-96 '>
        <div className='flex p-4 justify-center rounded-lg bg-black  border-white w-full'>
          <div
            className="flex w-1/3  md:flex-row border ">
            <img
              className=" h-full w-full rounded-lg  object-fill "
              src={re?.photo}
              alt="" />
          </div>

          <div className='flex items-center text-center w-1/2 ml-3 md:flex-col'>
            <p className='font-bold text-3xl pb-5 pt-8'>Movie : {re?.title}</p>
            <p className='font-bold text-base pt-8 pb-8'>Description :</p>
            <p className=' text-base '>{re?.desc}</p>
          </div>
        </div>
        <Section></Section>

      </div>

    </>
  )
}

