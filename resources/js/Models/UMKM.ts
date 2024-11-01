import Subsector from "./Subsector";

type UMKM = {
    id?: number;
    name?: string;
    slug?: string;
    description?: string;
    location?: string;
    owner?: string;
    image1: string;
    image2?: string;
    image3?: string;
    agreement_id?: number;
    shopee_link?: string;
    tokopedia_link?: string;
    instagram_link?: string;
    tiktok_link?: string;
    youtube_link?: string;
    x_link?: string;
    whatsapp_link?: string;
    subsector_id?: number;
    created_at?: string;
    updated_at?: string;
    subsector: Subsector;
};

type FormDataUMKM = {
    id?: number;
    name?: string;
    slug?: string;
    description?: string;
    location?: string;
    owner?: string;
    image1: string | File | null;
    image2?: string | File | null;
    image3?: string | File | null;
    agreement_id?: number;
    shopee_link?: string;
    tokopedia_link?: string;
    instagram_link?: string;
    tiktok_link?: string;
    youtube_link?: string;
    x_link?: string;
    whatsapp_link?: string;
    subsector_id?: number;
};

export type { UMKM, FormDataUMKM };
