import { MdOutlineTravelExplore } from "react-icons/md";
import "react-datepicker/dist/react-datepicker.module.css"

const SearchBar = ({ location, setLocation }) => {

    return (
        <div className="-mt-[70px] bg-orange-400 p-3 rounded shadow-md grid grid-cols-1 items-center gap-4">

            <div className="flex flex-row items-center flex-1 bg-white p-2">
                <MdOutlineTravelExplore size={25} className="mr-2" />
                <input
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    type="text"
                    placeholder="Where are u go?"
                    className="text-md w-full focus:outline-none" />
            </div>

        </div >
    )
}

export default SearchBar
