import { hotelPerks } from "../../constant"

const PerkFilter = ({ selectPerk, handlPerk }) => {
    return (
        <div className="border-b border-slate-300 pb-5">
            <h1 className="text-md font-semibold mb-2">Hotel Prek</h1>
            {hotelPerks.map((perk) => (
                <label key={perk} className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" value={perk} checked={selectPerk.includes(perk)} onChange={handlPerk} />
                    {perk}
                </label>
            ))}
        </div>
    )
}

export default PerkFilter
