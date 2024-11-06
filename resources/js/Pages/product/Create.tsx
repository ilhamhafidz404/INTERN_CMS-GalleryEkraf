import React, { useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";

//
import { IconChevronLeft } from "justd-icons";
import AdminPanel from "../../Layouts/AdminPanel";

// models
import { FormDataUMKM, UMKM } from "../../Models/UMKM";
import { FormDataProduct } from "../../Models/Product";

type PageProps = {
    umkms: UMKM[];
};

export default function UMKMCreatePage() {
    const { umkms } = usePage<PageProps>().props;

    console.log(umkms);

    const [formData, setFormData] = useState<FormDataProduct>({
        name: "",
        slug: "",
        price: 0,
        description: "",
        umkm_id: 0,
        photo1: null,
        photo2: null,
        photo3: null,
        shopee_link: "",
        tokopedia_link: "",
        whatsapp_link: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData();

        data.append("name", formData.name || "");
        data.append("slug", formData.slug || "");
        data.append("description", formData.description || "");
        if (formData.photo1) data.append("photo1", formData.photo1);
        if (formData.photo2) data.append("photo2", formData.photo2);
        if (formData.photo3) data.append("photo3", formData.photo3);
        data.append("shopee_link", formData.shopee_link || "");
        data.append("tokopedia_link", formData.tokopedia_link || "");
        data.append("whatsapp_link", formData.whatsapp_link || "");
        data.append(
            "umkm_id",
            formData.umkm_id ? formData.umkm_id.toString() : ""
        );
        Inertia.post("/products", formData);
    };

    return (
        <>
            <AdminPanel titlePage="PRODUK">
                <main className="px-20">
                    <div className="flex items-center justify-between bg-white px-5 py-3 rounded-md shadow mt-10 mb-5">
                        <div>
                            <h1 className="text-xl font-medium ">
                                Tambah Data Produk
                            </h1>
                        </div>
                        <div>
                            <Link href="/products" className="btn btn-ghost">
                                <IconChevronLeft className="size-5" />
                                Kembali
                            </Link>
                        </div>
                    </div>
                    <form
                        onSubmit={(e) => handleSubmit(e)}
                        method="post"
                        encType="multipart/form-data"
                    >
                        <section className="grid grid-cols-5 gap-4 relative">
                            <div className="col-span-3">
                                <div className="justify-between bg-white px-5 py-3 rounded-md shadow mb-5">
                                    <h3 className="">Informasi Produk</h3>
                                    <hr className="my-3" />
                                    <label className="form-control mb-3">
                                        <div className="label">
                                            <span className="label-text">
                                                Foto Produk{" "}
                                                <sup className="text-error">
                                                    *
                                                </sup>
                                            </span>
                                        </div>
                                        <input
                                            type="file"
                                            className="file-input input-bordered w-full"
                                            onChange={(e) => {
                                                const file =
                                                    e.target.files?.[0] || null;
                                                setFormData({
                                                    ...formData,
                                                    photo1: file, // Use null if no file is selected
                                                });
                                            }}
                                        />
                                    </label>
                                    <label className="form-control mb-3">
                                        <div className="label">
                                            <span className="label-text">
                                                Nama Produk{" "}
                                                <sup className="text-error">
                                                    *
                                                </sup>
                                            </span>
                                        </div>
                                        <input
                                            type="text"
                                            className="input input-bordered w-full"
                                            onChange={(e) => {
                                                setFormData({
                                                    ...formData,
                                                    name: e.target.value,
                                                });
                                            }}
                                        />
                                    </label>
                                    <label className="form-control mb-3">
                                        <div className="label">
                                            <span className="label-text">
                                                Harga{" "}
                                                <sup className="text-error">
                                                    *
                                                </sup>{" "}
                                            </span>
                                        </div>
                                        <input
                                            type="text"
                                            className="input input-bordered w-full"
                                            onChange={(e) => {
                                                setFormData({
                                                    ...formData,
                                                    price: parseInt(
                                                        e.target.value
                                                    ),
                                                });
                                            }}
                                        />
                                    </label>
                                    <label className="form-control mb-3">
                                        <div className="label">
                                            <span className="label-text">
                                                Deskripsi
                                            </span>
                                        </div>
                                        <textarea
                                            className="textarea textarea-bordered h-24"
                                            onChange={(e) => {
                                                setFormData({
                                                    ...formData,
                                                    description: e.target.value,
                                                });
                                            }}
                                        ></textarea>
                                    </label>
                                    <label className="form-control mb-3">
                                        <div className="label">
                                            <span className="label-text">
                                                Pilih UMKM
                                                <sup className="text-error">
                                                    *
                                                </sup>{" "}
                                            </span>
                                        </div>
                                        <select
                                            className="select select-bordered"
                                            onChange={(e) => {
                                                setFormData({
                                                    ...formData,
                                                    umkm_id: parseInt(
                                                        e.target.value
                                                    ),
                                                });
                                            }}
                                        >
                                            <option disabled selected></option>
                                            {umkms.map((umkm) => (
                                                <option value={umkm.id}>
                                                    {umkm.name}
                                                </option>
                                            ))}
                                        </select>
                                    </label>
                                </div>
                            </div>
                            <div className="relative col-span-2">
                                <div className="sticky top-3">
                                    <div className="justify-between bg-white px-5 py-3 rounded-md shadow mb-5">
                                        <h3 className="">Lainnya</h3>
                                        <hr className="my-3" />
                                        <label className="form-control mb-3">
                                            <div className="label">
                                                <span className="label-text">
                                                    Foto Lainnya 1
                                                </span>
                                            </div>
                                            <input
                                                type="file"
                                                placeholder="Input disini..."
                                                className="file-input input-bordered w-full"
                                                onChange={(e) => {
                                                    const file =
                                                        e.target.files?.[0] ||
                                                        null;
                                                    setFormData({
                                                        ...formData,
                                                        photo2: file, // Use null if no file is selected
                                                    });
                                                }}
                                            />
                                        </label>
                                        <label className="form-control mb-3">
                                            <div className="label">
                                                <span className="label-text">
                                                    Foto Lainnya 2
                                                </span>
                                            </div>
                                            <input
                                                type="file"
                                                placeholder="Input disini..."
                                                className="file-input input-bordered w-full"
                                                onChange={(e) => {
                                                    const file =
                                                        e.target.files?.[0] ||
                                                        null;
                                                    setFormData({
                                                        ...formData,
                                                        photo3: file, // Use null if no file is selected
                                                    });
                                                }}
                                            />
                                        </label>
                                        <label className="form-control mb-3">
                                            <div className="label">
                                                <span className="label-text">
                                                    Link Shopee
                                                </span>
                                            </div>
                                            <input
                                                type="text"
                                                className="input input-bordered w-full"
                                                onChange={(e) => {
                                                    setFormData({
                                                        ...formData,
                                                        shopee_link:
                                                            e.target.value,
                                                    });
                                                }}
                                            />
                                        </label>
                                        <label className="form-control mb-3">
                                            <div className="label">
                                                <span className="label-text">
                                                    Link Tokopedia
                                                </span>
                                            </div>
                                            <input
                                                type="text"
                                                className="input input-bordered w-full"
                                                onChange={(e) => {
                                                    setFormData({
                                                        ...formData,
                                                        tokopedia_link:
                                                            e.target.value,
                                                    });
                                                }}
                                            />
                                        </label>
                                    </div>
                                    <div className="col-span-3 mt-5 grid grid-cols-2 gap-5">
                                        <button className="btn btn-error w-full mb-3">
                                            Reset
                                        </button>
                                        <button className="btn btn-primary w-full">
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </form>
                </main>
            </AdminPanel>
        </>
    );
}
