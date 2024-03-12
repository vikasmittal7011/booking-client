import { useState } from "react";
import SearchBar from "../components/home/SearchBar"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getHotelsAsync, selecthotel } from "../features/hotel/hotelSlice";
import Pagination from "../components/home/Pagination";
import Hotels from "../components/home/Hotels";
import Filters from "../components/home/Filters";
import { ClipLoader } from "react-spinners";

const Home = () => {

    const { totalProduct, status } = useSelector(selecthotel)

    const [page, setPage] = useState(1);
    const pagination = { _page: page, _limit: 5 };

    const dispatch = useDispatch();

    const [location, setLocation] = useState("");
    const [star, setStar] = useState([]);
    const [selectedType, setSelectedType] = useState([]);
    const [selectedPerk, setSelectedPerk] = useState([]);
    const [maxPrice, setMaxPrice] = useState();
    const [sort, setSort] = useState({});

    const handlStar = (e) => {
        const { checked, value } = e.target;
        setStar((pre) => (
            checked ? [...pre, +value] : pre.filter((p) => p !== value)
        ))
    }

    const handlType = (e) => {
        const { checked, value } = e.target;
        setSelectedType((pre) => (
            checked ? [...pre, value] : pre.filter((p) => p !== value)
        ))
    }

    const handlPrek = (e) => {
        const { checked, value } = e.target;
        setSelectedPerk((pre) => (
            checked ? [...pre, value] : pre.filter((p) => p !== value)
        ))
    }

    const handlePage = (page) => {
        setPage(page);
    };

    useEffect(() => {
        const filters = { perks: selectedPerk, type: selectedType, star };
        dispatch(getHotelsAsync({ filters, location, pagination, sort, maxPrice }))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page, location, sort, selectedPerk, selectedType, maxPrice, star]);

    const [isOpen, setIsOpen] = useState(false);

    const handleIsOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <SearchBar location={location} setLocation={setLocation} />
            <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5 my-5">

                <Filters selectedStar={star} handlChnage={handlStar} handlType={handlType} selectType={selectedType} selectPerk={selectedPerk} handlPerk={handlPrek} selectPrice={maxPrice} handlePrice={setMaxPrice} isOpen={isOpen} handleIsOpen={handleIsOpen} />

                {status === "loading" ?
                    <div className="flex justify-center my-16">
                        <ClipLoader size={100} color="blue" />
                    </div>
                    :
                    <>
                        <Hotels location={location} setSort={setSort} isOpen={isOpen} handleIsOpen={handleIsOpen} />
                        <Pagination
                            handlePage={handlePage}
                            page={page}
                            setPage={setPage}
                            totalProduct={totalProduct}
                        />
                    </>

                }
            </div>
        </div>
    )
}

export default Home
