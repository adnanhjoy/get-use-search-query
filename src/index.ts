import Fuse from "fuse.js";

type DataItem = Record<string, any>;

interface SearchOptions {
    keys?: string[];
    threshold?: number;
    limit?: number;
}


const getUseSearchQuery = (
    data: DataItem[],
    searchQuery: string,
    options?: SearchOptions
): DataItem[] => {
    const searchParams = new URLSearchParams(searchQuery);
    const query = searchParams.get("search")?.trim();

    if (!query) return data;

    const fuse = new Fuse(data, {
        keys: options?.keys || Object?.keys(data?.[0] || {}),
        threshold: options?.threshold ?? 0.3,
        includeScore: true,
    });

    const result = fuse.search(query);

    return result
        .slice(0, options?.limit ?? result.length)
        .map((r) => r.item);
};

export default getUseSearchQuery;
