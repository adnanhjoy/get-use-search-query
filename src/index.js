import { useState, useEffect, useMemo } from "react";

const getUseSearchQuery = (data, searchQuery) => {
    const [filteredData, setFilteredData] = useState([]);

    const params = useMemo(() => {
        const searchParams = new URLSearchParams(searchQuery);
        return searchParams.get("search");
    }, [searchQuery]);

    const stableData = useMemo(() => data, [data]);

    useEffect(() => {
        if (!params) {
            setFilteredData(stableData);
            return;
        }

        const timeout = setTimeout(() => {
            const matchedData = stableData.filter((item) =>
                Object.values(item).some(
                    (value) =>
                        typeof value === "string" &&
                        value.toLowerCase().includes(params.toLowerCase())
                )
            );

            setFilteredData(matchedData?.length > 0 ? matchedData : []);
        }, 300);

        return () => clearTimeout(timeout);
    }, [stableData, params]);

    return filteredData;
};

export default getUseSearchQuery;
