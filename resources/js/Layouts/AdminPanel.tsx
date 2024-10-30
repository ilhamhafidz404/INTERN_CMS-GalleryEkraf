import { IconStoreFill } from "justd-icons";
import React from "react";
import Sidebar from "../Components/Sidebar";
import Topbar from "../Components/Topbar";

export default function AdminPanel({ children }: { children: any }) {
    return (
        <>
            <div className="grid grid-cols-5">
                <Sidebar />
                <section className="col-span-4">
                    <Topbar />

                    {children}
                </section>
            </div>
        </>
    );
}
