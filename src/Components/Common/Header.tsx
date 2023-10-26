import pix from "../../assets/a0a83a06-13f1-4255-94dc-39a13f91a6a8.svg"
import {RiArrowDropDownLine} from "react-icons/ri"
const Header = () => {
  return (
    <div>
      <div className="w-full h-[20vh] items-center 
      flex justify-center">
      <div className="h-[16vh] w-[90%] justify-between bg-[#fff]
       items-center flex flex-col">

      <div className="bg-[#000] w-[100%] h-[15vh] flex shadow-x1 shadow-blac-15 duration-300 transition-all hover:text-[orange]
       justify-center items-center rounded-[30px] gap-[4px] flex-wrap max-sm:flex">
 <span className="w-[4%] h-[20px] bg-[blue] justify-center items-center flex text-[12px]
  rounded-[25px] max-sm:hidden max-md:hidden duration-300 transition-all">NEW</span>
 <span className="text-[#ffff] hover:text-[orange] max-md:hidden duration-300 transition-all">PlanetScale is bringing vector Search and 
 storage to MySQL</span>
 <span className="text-[#ffff] duration-300 transition-all hover:text-[orange] cursor-pointer max-sm:flex
  max-md:flex max-xl:hidden max-2xl:hidden">vector are and coming to MySQL</span>
      </div>,

<div className="bg-[] h-[9vh] w-[100%] flex justify-between ">
<div className="w-[50%] h-[9vh] flex  items-center max-md:flex">
<div className="flex items-center">
<div className="w-[40px] h-[40px] flex justify-center 
      items-center rounded-[50%] object-cover">
        <img src={pix} alt="" className="w-[40px] h-[40px flex justify-center items-center object-cover"/>
      </div>
</div>

 <div className="w-[120px] h-[50px] flex justify-center
      items-center">
        <span className="flex items-center justify-center max-sm:hidden max-md:hidden max-lg:flex">Products
<RiArrowDropDownLine className="text-[25px] flex items-center justify-center"/>
          </span> 
      </div>
 <div className="w-[120px] h-[50px] flex justify-center
      items-center">
        <span className="flex items-center justify-center max-sm:hidden max-md:hidden max-lg:flex">Solutions
<RiArrowDropDownLine className="text-[25px] flex items-center justify-center"/>
          </span> 
      </div>
 <div className="w-[120px] h-[50px] flex justify-center
      items-center">
        <span className="flex items-center justify-center max-sm:hidden max-md:hidden max-lg:flex">Resources
<RiArrowDropDownLine className="text-[25px] flex items-center justify-center"/>
          </span> 
      </div>
 <div className="w-[120px] h-[50px] flex justify-center
      items-center">
        <span className="flex items-center justify-center max-sm:hidden max-md:hidden max-lg:flex">Documentation
<RiArrowDropDownLine className="text-[25px] flex items-center justify-center"/>
          </span> 
      </div>
 <div className="w-[120px] h-[50px] flex justify-center
      items-center">
        <span className="flex items-center justify-center max-sm:hidden max-md:hidden ">Pricing
          </span> 
      </div>
</div>
<div className="h-[9vh] flex items-center justify-between">
<div><button className="py-[10px] px-[15px] flex justify-center items-center max-sm:hidden max-md:hidden">
  Contact</button></div>
<div><button className="flex justify-center items-center py-[10px] px-[15px] max-sm:flex">
  Sign in</button></div>
<div><button className="px-[15px] py-[5px] rounded-[55px] flex justify-center items-center border-gray border-[1px] max-sm:flex">
  Get Started</button></div>
</div>
</div>
      </div>
      </div>
    </div>
  )
}

export default Header
