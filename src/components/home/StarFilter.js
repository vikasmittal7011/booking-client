const StarFilter = ({ selectedStar, handlChnage }) => {
    return (
        <div className="border-b border-slate-300 pb-5">
            <h1 className="text-md font-semibold mb-2">Property Rating</h1>
            {[5, 4, 3, 2, 1].map((star) => (
                <label key={star} className="flex items-center gap-2">
                    <input id="star" name="star" type="checkbox" className="rounded" value={star} checked={selectedStar?.includes(star)} onChange={handlChnage} />
                    {star} Star
                </label>
            ))}
        </div>
    )
}

export default StarFilter
