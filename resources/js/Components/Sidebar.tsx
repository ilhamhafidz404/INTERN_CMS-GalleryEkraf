import { IconBag2Fill, IconStoreFill } from "justd-icons";
import React from "react";

export default function Sidebar() {
    return (
        <div className="bg-slate-800 min-h-screen text-white p-10">
            <h3 className="text-3xl font-semibold mb-14">Gallery Ekraf</h3>
            <ul>
                <li className="flex gap-2 mb-7">
                    <IconStoreFill />
                    <a href="">UMKM</a>
                </li>
                <li className="flex gap-2 mb-7">
                    <IconBag2Fill />
                    <a href="">Produk</a>
                </li>
            </ul>
        </div>
    );
}
