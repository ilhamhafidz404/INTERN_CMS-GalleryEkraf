import { Link, usePage } from "@inertiajs/react";
import {
    IconBag2Fill,
    IconDocumentChartFill,
    IconStoreFill,
} from "justd-icons";
import React from "react";

export default function Sidebar() {
    const { url } = usePage();

    return (
        <div className="bg-slate-800 min-h-screen text-white p-10">
            <h3 className="text-3xl font-semibold mb-14">Gallery Ekraf</h3>
            <ul>
                <li
                    className={`flex gap-2 mb-7 ${
                        url.startsWith("/umkms") ? "text-primary" : ""
                    }`}
                >
                    <IconStoreFill />
                    <Link href="/umkms">UMKM</Link>
                </li>
                <li
                    className={`flex gap-2 mb-7 ${
                        url.startsWith("/products") ? "text-primary" : ""
                    }`}
                >
                    <IconBag2Fill />
                    <Link href="/products">Produk</Link>
                </li>
                <li
                    className={`flex gap-2 mb-7 ${
                        url.startsWith("/agreements") ? "text-primary" : ""
                    }`}
                >
                    <IconDocumentChartFill />
                    <Link href="/agreements">Persetujuan</Link>
                </li>
            </ul>
        </div>
    );
}
