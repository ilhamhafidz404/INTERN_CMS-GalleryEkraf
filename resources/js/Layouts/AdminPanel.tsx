import { IconStoreFill } from "justd-icons";
import React, { ReactNode } from "react";
import Sidebar from "../Components/Sidebar";
import Topbar from "../Components/Topbar";

type AdminPanelProps = {
    children: ReactNode;
    titlePage: string;
};

export default function AdminPanel({ children, titlePage }: AdminPanelProps) {
    return (
        <>
            <div className="grid grid-cols-5">
                <Sidebar />
                <section className="col-span-4">
                    <Topbar titlePage={titlePage} />

                    {children}
                </section>
            </div>
        </>
    );
}
