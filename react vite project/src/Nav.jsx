import React from "react";
import Airbnb from "./assets/Airbnb.png";
import Magnifying from "../src/assets/Magnifying.svg";
import Global from "../src/assets/Global.svg";
import Menu from "../src/assets/Menu.svg";
import Person from "../src/assets/Person.svg";

function Nav(){

  return(
      <>
    <div className="flex justify-center justify-around h-20 items-center">
        <div>
        <img src={Airbnb} alt="logo" className="h-11 cursor-pointer" />
        </div>
        <div>
            <ul className="flex gap-2 border-2 border-solid rounded-full w-96 justify-center h-12 items-center ml-44 cursor-pointer hover:shadow"> 
                <li className="font-bold">Anywhere  | </li>
                <li className="font-bold">Any Week  | </li>
                <li>Add Guest</li>
                <img src={Magnifying} alt="serch-icon" className="h-10" />
                    </ul>
            
        </div>
        <div className="flex gap-8 items-center">
            <p className=" hover:bg-gray-300 p-4 rounded-full cursor-pointer">Airbnb your home</p>
            <img src={Global} alt="global" className="h-10 cursor-pointer hover:shadow rounded-full" />
            

        </div>
        <div className="flex gap-2 border-solid rounded-full border-2 w-24 justify-center items-center h-12 hover:shadow cursor-pointer">
        <img src={Menu} alt="menu"  className="h-8"/>
        <img src={Person} alt="login" className="h-8"/>

        





        </div>

        

    </div>
        <div>
          <hr />
        </div>
        </>
    )

}

export default Nav