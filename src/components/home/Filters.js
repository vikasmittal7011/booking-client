import { XMarkIcon } from "@heroicons/react/20/solid"
import PerkFilter from "./PerkFilter"
import PriceFilter from "./PriceFilter"
import StarFilter from "./StarFilter"
import TypeFilter from "./TypeFilter"

const Filters = ({ selectedStar, handlChnage, handlType, selectType, handlPerk, selectPerk, selectPrice, handlePrice, isOpen, handleIsOpen }) => {
    return (
        <>
            <div className="rounded-lg border border-slate-300 p-5 h-fit top-10 hidden lg:block">
                <div className="space-y-5">
                    <h1 className="text-xl font-semibold border-b border-e-sky-300">Filter By:</h1>
                    <StarFilter selectedStart={selectedStar} handlChnage={handlChnage} />
                    <TypeFilter selectType={selectType} handlType={handlType} />
                    <PerkFilter selectPerk={selectPerk} handlPerk={handlPerk} />
                    <PriceFilter selectPrice={selectPrice} handlePrice={handlePrice} />
                </div>
            </div>
            <div className={`${isOpen ? "block" : "hidden"} cursor-pointer fixed top-0 right-0 w-1/2 h-full bg-blue-600 text-white overflow-y-auto`}>
                <div className="relative">
                    <XMarkIcon className="w-8 h-8 left-3 ms-3 absolute top-3 right-3" onClick={handleIsOpen} />

                    <div className="space-y-5 p-8">
                        <h1 className="text-xl font-semibold border-b border-e-sky-300">Filter By:</h1>
                        <StarFilter selectedStart={selectedStar} handlChnage={handlChnage} />
                        <TypeFilter selectType={selectType} handlType={handlType} />
                        <PerkFilter selectPerk={selectPerk} handlPerk={handlPerk} />
                        <PriceFilter selectPrice={selectPrice} handlePrice={handlePrice} mobile={true} />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Filters
