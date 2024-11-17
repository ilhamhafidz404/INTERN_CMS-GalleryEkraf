import { UMKM } from "./UMKM";

type Product = {
    id: number;
    name: string;
    slug: string;
    price: number;
    description: string;
    umkm_id: number;
    umkm: UMKM;
    photo1: string;
    photo2?: string;
    photo3?: string;
    shopee_link?: string;
    tokopedia_link?: string;
    whatsapp_link?: string;
    created_at?: string;
    updated_at?: string;
};

type FormDataProduct = {
    name: string;
    slug: string;
    price: number;
    description: string;
    umkm_id: number;
    photo1: File | null;
    photo2?: File | null;
    photo3?: File | null;
    shopee_link?: string;
    tokopedia_link?: string;
    whatsapp_link?: string;
};

export type { Product, FormDataProduct };
