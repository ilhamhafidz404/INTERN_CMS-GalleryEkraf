import { IconStoreFill } from "justd-icons";
import React, { ReactNode } from "react";
import Sidebar from "../Components/Sidebar";
import Topbar from "../Components/Topbar";

type AdminPanelProps = {
    children?: ReactNode;
};

export default function AdminPanel({ children }: AdminPanelProps) {
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
