import React from "react";

export default function Topbar() {
    return (
        <div className="shadow py-3 px-20 flex items-center justify-between">
            <div>
                <h1 className="text-2xl font-medium">UMKM</h1>
            </div>
            <div className="flex items-center gap-3">
                <p className="text-sm">Admin Gallery Ekraf</p>
                <div className="w-10 h-10 bg-primary rounded-full"></div>
            </div>
        </div>
    );
}
