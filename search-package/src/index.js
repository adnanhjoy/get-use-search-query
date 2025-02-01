import { useState, useEffect } from 'react';

const getUseSearchQuery = (data, searchQuery) => {
    const [filteredData, setFilteredData] = useState([]);
    const searchParams = new URLSearchParams(searchQuery);
    const params = searchParams.get('search');

    useEffect(() => {
        if (!params) {
            setFilteredData(data);
            return;
        }

        const matchedData = data?.filter((item) =>
            Object.values(item).some(
                (value) =>
                    (typeof value === 'string' && value.toLowerCase().includes(params.toLowerCase()))
            )
        );


        if (matchedData?.length > 0) {
            setFilteredData(matchedData);
        } else {
            setFilteredData([]);
        }
    }, [data, params]);

    return filteredData;
};

export default getUseSearchQuery;
