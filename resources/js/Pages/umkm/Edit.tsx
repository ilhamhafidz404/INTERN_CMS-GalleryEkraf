import { Link, usePage } from "@inertiajs/react";
import { IconChevronLeft } from "justd-icons";
import React, { useState, useEffect } from "react";
import { Inertia } from "@inertiajs/inertia";
import { responseSubsectorAPI } from "../../Models/_apiResponse";
import Subsector from "../../Models/Subsector";
import AdminPanel from "../../Layouts/AdminPanel";
import { FormDataUMKM, UMKM } from "../../Models/UMKM";

type PageProps = {
    subsectors: Subsector[];
    umkm: UMKM;
};

export default function UMKMCreatePage() {
    const { subsectors, umkm } = usePage<PageProps>().props;

    const [formData, setFormData] = useState<FormDataUMKM>({
        name: umkm.name,
        slug: umkm.slug,
        description: umkm.description,
        owner: umkm.owner,
        image1: "",
        image2: "",
        image3: "",
        shopee_link: umkm.shopee_link,
        tokopedia_link: umkm.tokopedia_link,
        instagram_link: umkm.instagram_link,
        tiktok_link: umkm.tiktok_link,
        youtube_link: umkm.youtube_link,
        x_link: umkm.x_link,
        whatsapp_link: umkm.whatsapp_link,
        subsector_id: umkm.subsector_id,
        agreement_id: umkm.agreement_id,
        location: umkm.location,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.patch(`/umkms/${formData.slug}`, formData);
    };

    return (
        <>
            <AdminPanel>
                <main className="px-20">
                    <div className="flex items-center mb-5 mt-10 justify-between">
                        <div>
                            <h1 className="text-xl font-medium ">
                                Edit Data UMKM
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
                                    value={formData.name}
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
                                    value={formData.owner}
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
                                            subsector_id: parseInt(
                                                e.target.value
                                            ),
                                        });
                                    }}
                                >
                                    <option disabled selected>
                                        Pilih Subsektor
                                    </option>
                                    {subsectors.map((subsector) => (
                                        <option
                                            selected={
                                                subsector.id ==
                                                formData.subsector_id
                                            }
                                            value={subsector.id}
                                        >
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
                                >
                                    {formData.description}
                                </textarea>
                            </label>

                            <label className="form-control col-span-3">
                                <div className="label">
                                    <span className="label-text">Location</span>
                                </div>
                                <textarea
                                    className="textarea textarea-bordered h-24"
                                    placeholder="Input disini..."
                                    onChange={(e) => {
                                        setFormData({
                                            ...formData,
                                            location: e.target.value,
                                        });
                                    }}
                                >
                                    {formData.location}
                                </textarea>
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
                                    value={formData.shopee_link}
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
                                    value={formData.tokopedia_link}
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
                                    value={formData.instagram_link}
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
                                    value={formData.tiktok_link}
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
                                    value={formData.youtube_link}
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
                                    value={formData.x_link}
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
