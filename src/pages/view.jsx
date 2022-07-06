import ViewVehicles from "../components/viewVehicles";
import Navbar from "../components/navbar";
const View  = ()=>{
return(
<div className="width-full justify-end ">
    <Navbar/>
    <div className="border-1 border-black border-solid rounded-lg flex flex-row mt-10  mr-4 w-[40%] h-12 bg-white">
        <p className=" mr-2 w-32 mt-2 pl-2">model</p>
        <p className=" w-44 mr-12 mt-2 pl-16 ">Plate</p>
        <p className="w-48 mr-20 mt-2 pl-12 ">Owner</p>
        </div>
        <div className=" w-[40%]">
   <ViewVehicles/>  
   <ViewVehicles/>  
   <ViewVehicles/>  
   <ViewVehicles/>  
            </div>
</div>
);
}
export default View ;