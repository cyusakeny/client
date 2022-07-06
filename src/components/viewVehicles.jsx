const ViewVehicles =()=>{
    return (
        <div className="border-2 rounded-lg flex flex-row mt-10  mr-4 h-12 bg-white">
        <p className=" mr-2 w-32 mt-2 pl-2">TOYOTA</p>
        <p className=" w-44 mr-12 mt-2 pl-16 ">RCA23M</p>
        <p className="w-48 mr-20 mt-2 pl-12 ">Doctor</p>
        <button
          className="border  rounded mr-10 w-32 text-white bg-black h-9 mt-1"
        >
          History
        </button>
      </div>
    )
}
export default ViewVehicles;