import React from "react";
import { Inertia } from "@inertiajs/inertia";

export default function Topbar({ titlePage }: { titlePage: string }) {
    const logout = () => {
        Inertia.post("/logout");
    };

    return (
        <div className="shadow py-3 px-20 flex items-center justify-between bg-white">
            <div>
                <h1 className="text-2xl font-medium">{titlePage}</h1>
            </div>
            <div className="flex items-center gap-3">
                <p className="text-sm">Admin Gallery Ekraf</p>
                <div
                    className="w-10 h-10 bg-primary hover:bg-error rounded-full cursor-pointer"
                    onClick={() => logout()}
                ></div>
            </div>
        </div>
    );
}
