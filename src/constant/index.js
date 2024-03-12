export const scrollToTop = () => {
    window.scrollTo(0, 0);
}

export const inputClass = "border-2 border-blue-400 focus:outline-blue-800 rounded-md w-full py-2 px-2 font-normal mt-2 text-lg";

export const labelClass = "font-bold text-gray-700 text-lg flex-1";

export const hotelTypes = [
    "Budget",
    "Boutique",
    "Luxury",
    "Ski Resort",
    "Business",
    "Family",
    "Romantic",
    "Hiking Resort",
    "Cabin",
    "Beach Resort",
    "Golf Resort",
    "Motel",
    "All Inclusive",
    "Pet Friendly",
    "Self Catering",
];

export const hotelPerks = [
    "Free WiFi",
    "Parking",
    "Airport Shuttle",
    "Family Rooms",
    "Non-Smoking Rooms",
    "Outdoor Pool",
    "Spa",
    "Fitness Center",
];

export const sortOptions = [
    { name: "Best Rating", sort: "star", order: "desc", current: false },
    {
        name: "Price: Low to High",
        sort: "discountedPrice",
        order: "asc",
        current: false,
    },
    {
        name: "Price: High to Low",
        sort: "discountedPrice",
        order: "desc",
        current: false,
    },
];