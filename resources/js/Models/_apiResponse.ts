import Subsector from "./Subsector";
import UMKM from "./UMKM";

interface Pagination {
    current_page: number;
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: [
        {
            url?: string;
            label: string | number;
            active: boolean;
        }
    ];
    next_page_url?: string;
    path: string;
    per_page: number;
    prev_page_url?: string;
    to: number;
    total: number;
}

interface responseUMKMAPI extends Pagination {
    data: UMKM[];
}

interface responseSubsectorAPI extends Pagination {
    data: Subsector[];
}

export { Pagination, responseUMKMAPI, responseSubsectorAPI };