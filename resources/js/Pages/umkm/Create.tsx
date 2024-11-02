import React, { useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";

//
import { IconChevronLeft } from "justd-icons";
import AdminPanel from "../../Layouts/AdminPanel";

// models
import { FormDataUMKM } from "../../Models/UMKM";
import Subsector from "../../Models/Subsector";

type PageProps = {
    subsectors: Subsector[];
};

export default function UMKMCreatePage() {
    const { subsectors } = usePage<PageProps>().props;

    const [formData, setFormData] = useState<FormDataUMKM>({
        name: "",
        slug: "",
        description: "",
        location: "",
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
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData();

        data.append("name", formData.name || "");
        data.append("slug", formData.slug || "");
        data.append("description", formData.description || "");
        data.append("location", formData.location || "");
        data.append("owner", formData.owner || "");
        if (formData.image1) data.append("image1", formData.image1);
        if (formData.image2) data.append("image2", formData.image2);
        if (formData.image3) data.append("image3", formData.image3);
        data.append("shopee_link", formData.shopee_link || "");
        data.append("tokopedia_link", formData.tokopedia_link || "");
        data.append("instagram_link", formData.instagram_link || "");
        data.append("tiktok_link", formData.tiktok_link || "");
        data.append("youtube_link", formData.youtube_link || "");
        data.append("x_link", formData.x_link || "");
        data.append("whatsapp_link", formData.whatsapp_link || "");
        data.append(
            "subsector_id",
            formData.subsector_id ? formData.subsector_id.toString() : ""
        );
        Inertia.post("/umkms", formData);
    };

    return (
        <>
            <AdminPanel>
                <main className="px-20">
                    <div className="flex items-center justify-between bg-white px-5 py-3 rounded-md shadow mt-10 mb-5">
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
                    <form
                        onSubmit={(e) => handleSubmit(e)}
                        method="post"
                        encType="multipart/form-data"
                    >
                        <section className="grid grid-cols-5 gap-4 relative">
                            <div className="col-span-3">
                                <div className="justify-between bg-white px-5 py-3 rounded-md shadow mb-5">
                                    <h3 className="">Informasi UMKM</h3>
                                    <hr className="my-3" />
                                    <label className="form-control mb-3">
                                        <div className="label">
                                            <span className="label-text">
                                                Foto Logo{" "}
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
                                                    image1: file, // Use null if no file is selected
                                                });
                                            }}
                                        />
                                    </label>
                                    <label className="form-control mb-3">
                                        <div className="label">
                                            <span className="label-text">
                                                Nama UMKM{" "}
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
                                                Nama Pemilik{" "}
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
                                                    owner: e.target.value,
                                                });
                                            }}
                                        />
                                    </label>
                                    <label className="form-control mb-3">
                                        <div className="label">
                                            <span className="label-text">
                                                Pilih Subsektor
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
                                            <option disabled selected></option>
                                            {subsectors.map((subsector) => (
                                                <option value={subsector.id}>
                                                    {subsector.name}
                                                </option>
                                            ))}
                                        </select>
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
                                                Alamat
                                            </span>
                                        </div>
                                        <textarea
                                            className="textarea textarea-bordered h-24"
                                            onChange={(e) => {
                                                setFormData({
                                                    ...formData,
                                                    location: e.target.value,
                                                });
                                            }}
                                        ></textarea>
                                    </label>
                                </div>
                                <div className="justify-between bg-white px-5 py-3 rounded-md shadow mb-5">
                                    <h3 className="">Foto Lainnya</h3>
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
                                                    e.target.files?.[0] || null;
                                                setFormData({
                                                    ...formData,
                                                    image2: file, // Use null if no file is selected
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
                                                    e.target.files?.[0] || null;
                                                setFormData({
                                                    ...formData,
                                                    image3: file, // Use null if no file is selected
                                                });
                                            }}
                                        />
                                    </label>
                                </div>
                            </div>
                            <div className="relative col-span-2">
                                <div className="sticky top-3">
                                    <div className="justify-between bg-white px-5 py-3 rounded-md shadow mb-5">
                                        <h3 className="">Sosial Media</h3>
                                        <hr className="my-3" />
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
                                        <label className="form-control mb-3">
                                            <div className="label">
                                                <span className="label-text">
                                                    Link Instagram
                                                </span>
                                            </div>
                                            <input
                                                type="text"
                                                className="input input-bordered w-full"
                                                onChange={(e) => {
                                                    setFormData({
                                                        ...formData,
                                                        instagram_link:
                                                            e.target.value,
                                                    });
                                                }}
                                            />
                                        </label>
                                        <label className="form-control mb-3">
                                            <div className="label">
                                                <span className="label-text">
                                                    Link Tiktok
                                                </span>
                                            </div>
                                            <input
                                                type="text"
                                                className="input input-bordered w-full"
                                                onChange={(e) => {
                                                    setFormData({
                                                        ...formData,
                                                        tiktok_link:
                                                            e.target.value,
                                                    });
                                                }}
                                            />
                                        </label>
                                        <label className="form-control mb-3">
                                            <div className="label">
                                                <span className="label-text">
                                                    Link Youtube
                                                </span>
                                            </div>
                                            <input
                                                type="text"
                                                className="input input-bordered w-full"
                                                onChange={(e) => {
                                                    setFormData({
                                                        ...formData,
                                                        youtube_link:
                                                            e.target.value,
                                                    });
                                                }}
                                            />
                                        </label>
                                        <label className="form-control mb-3">
                                            <div className="label">
                                                <span className="label-text">
                                                    Link X
                                                </span>
                                            </div>
                                            <input
                                                type="text"
                                                className="input input-bordered w-full"
                                                onChange={(e) => {
                                                    setFormData({
                                                        ...formData,
                                                        x_link: e.target.value,
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
                        <br />
                        <br />
                        <br />
                        <br />
                        {/* <section className="grid grid-cols-3 gap-4">
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
                                        Pilih Subsektor
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
                                    <option disabled selected></option>
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
                                    onChange={(e) => {
                                        const file =
                                            e.target.files?.[0] || null;
                                        setFormData({
                                            ...formData,
                                            image1: file, // Use null if no file is selected
                                        });
                                    }}
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
                                    onChange={(e) => {
                                        const file =
                                            e.target.files?.[0] || null;
                                        setFormData({
                                            ...formData,
                                            image2: file, // Use null if no file is selected
                                        });
                                    }}
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
                                    onChange={(e) => {
                                        const file =
                                            e.target.files?.[0] || null;
                                        setFormData({
                                            ...formData,
                                            image3: file, // Use null if no file is selected
                                        });
                                    }}
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
                        </section> */}
                    </form>
                </main>
            </AdminPanel>
        </>
    );
}
