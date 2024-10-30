import { Link, usePage } from "@inertiajs/react";
import { IconChevronLeft } from "justd-icons";
import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import UMKM from "../../Models/UMKM";
import Subsector from "../../Models/Subsector";
import AdminPanel from "../../Layouts/AdminPanel";

type PageProps = {
    subsectors: Subsector[];
};

export default function UMKMCreatePage() {
    const { subsectors } = usePage<PageProps>().props;

    const [formData, setFormData] = useState<UMKM>({
        name: "",
        slug: "",
        description: "",
        owner: "",
        image1: "",
        image2: "",
        image3: "",
        shopee_link: "",
        tokopedia_link: "",
        instagram_link: "",
        tiktok_link: "",
        youtube_link: "",
        x_link: "",
        whatsapp_link: "",
        subsector_id: 0,
        created_at: "",
        updated_at: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post("/umkms", formData);
    };

    return (
        <>
            <AdminPanel>
                <main className="px-20">
                    <div className="flex items-center mb-5 mt-10 justify-between">
                        <div>
                            <h1 className="text-xl font-medium ">
                                Tambah Data UMKM
                            </h1>
                        </div>
                        <div>
                            <Link href="/umkms" className="btn btn-ghost">
                                <IconChevronLeft className="size-5" />
                                Kembali
                            </Link>
                        </div>
                    </div>
                    <form onSubmit={(e) => handleSubmit(e)} method="post">
                        <section className="grid grid-cols-3 gap-4">
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">
                                        Nama UMKM{" "}
                                        <sup className="text-error">*</sup>
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Input disini..."
                                    className="input input-bordered w-full"
                                    onChange={(e) => {
                                        setFormData({
                                            ...formData,
                                            name: e.target.value,
                                        });
                                    }}
                                />
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">
                                        Nama Pemilik{" "}
                                        <sup className="text-error">*</sup>{" "}
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Input disini..."
                                    className="input input-bordered w-full"
                                    onChange={(e) => {
                                        setFormData({
                                            ...formData,
                                            owner: e.target.value,
                                        });
                                    }}
                                />
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">
                                        Pick the best fantasy franchise
                                    </span>
                                </div>
                                <select
                                    className="select select-bordered"
                                    onChange={(e) => {
                                        setFormData({
                                            ...formData,
                                            subsector_id: e.target.value,
                                        });
                                    }}
                                >
                                    <option disabled selected>
                                        Pilih Subsektor
                                    </option>
                                    {subsectors.map((subsector) => (
                                        <option value={subsector.id}>
                                            {subsector.name}
                                        </option>
                                    ))}
                                </select>
                            </label>

                            <label className="form-control col-span-3">
                                <div className="label">
                                    <span className="label-text">
                                        Description
                                    </span>
                                </div>
                                <textarea
                                    className="textarea textarea-bordered h-24"
                                    placeholder="Input disini..."
                                    onChange={(e) => {
                                        setFormData({
                                            ...formData,
                                            description: e.target.value,
                                        });
                                    }}
                                ></textarea>
                            </label>

                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">
                                        Foto Logo{" "}
                                        <sup className="text-error">*</sup>
                                    </span>
                                </div>
                                <input
                                    type="file"
                                    className="file-input input-bordered w-full"
                                />
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">
                                        Foto Lainnya
                                    </span>
                                </div>
                                <input
                                    type="file"
                                    placeholder="Input disini..."
                                    className="file-input input-bordered w-full"
                                />
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">
                                        Foto Lainnya
                                    </span>
                                </div>
                                <input
                                    type="file"
                                    placeholder="Input disini..."
                                    className="file-input input-bordered w-full"
                                />
                            </label>

                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">
                                        Link Shopee
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Input disini..."
                                    className="input input-bordered w-full"
                                    onChange={(e) => {
                                        setFormData({
                                            ...formData,
                                            shopee_link: e.target.value,
                                        });
                                    }}
                                />
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">
                                        Link Tokopedia
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Input disini..."
                                    className="input input-bordered w-full"
                                    onChange={(e) => {
                                        setFormData({
                                            ...formData,
                                            tokopedia_link: e.target.value,
                                        });
                                    }}
                                />
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">
                                        Link Instagram
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Input disini..."
                                    className="input input-bordered w-full"
                                    onChange={(e) => {
                                        setFormData({
                                            ...formData,
                                            instagram_link: e.target.value,
                                        });
                                    }}
                                />
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">
                                        Link Tiktok
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Input disini..."
                                    className="input input-bordered w-full"
                                    onChange={(e) => {
                                        setFormData({
                                            ...formData,
                                            tiktok_link: e.target.value,
                                        });
                                    }}
                                />
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">
                                        Link Youtube
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Input disini..."
                                    className="input input-bordered w-full"
                                    onChange={(e) => {
                                        setFormData({
                                            ...formData,
                                            youtube_link: e.target.value,
                                        });
                                    }}
                                />
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Link X</span>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Input disini..."
                                    className="input input-bordered w-full"
                                    onChange={(e) => {
                                        setFormData({
                                            ...formData,
                                            x_link: e.target.value,
                                        });
                                    }}
                                />
                            </label>
                            <div className="col-span-3 mt-5 grid grid-cols-2 gap-5">
                                <button className="btn btn-error w-full mb-3">
                                    Reset
                                </button>
                                <button className="btn btn-primary w-full">
                                    Submit
                                </button>
                            </div>
                        </section>
                    </form>
                </main>
            </AdminPanel>
        </>
    );
}
