const PriceFilter = ({ selectPrice, handlePrice, mobile = false }) => {
    return (
        <div className="border-b border-slate-300 pb-5">
            <h1 className="text-md font-semibold mb-2">Max Price</h1>
            <select
                className={`p-2 broder rounded-md w-full ${mobile && "bg-blue-400 text-white"} `}
                value={selectPrice}
                onChange={(e) => handlePrice(+e.target.value)}>
                <option value="">Select Max Price</option>
                {[1000, 5000, 10000, 15000, 20000].map((p) => (
                    <option value={p} key={p}>{p}</option>
                ))}
            </select>
        </div>
    )
}

export default PriceFilter
