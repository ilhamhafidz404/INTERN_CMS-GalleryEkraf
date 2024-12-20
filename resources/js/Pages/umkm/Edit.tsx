import { Link, usePage } from "@inertiajs/react";
import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

//
import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
    ClassicEditor,
    Bold,
    Essentials,
    Italic,
    Mention,
    Paragraph,
    Undo,
} from "ckeditor5";

import "ckeditor5/ckeditor5.css";
import "ckeditor5-premium-features/ckeditor5-premium-features.css";

//
import { IconChevronLeft } from "justd-icons";
import AdminPanel from "../../Layouts/AdminPanel";

// models
import Subsector from "../../Models/Subsector";
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
            <AdminPanel titlePage="UMKM">
                <main className="px-20">
                    <div className="flex items-center mb-5 justify-between bg-white px-10 py-5 rounded-md shadow mt-10">
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
                                            value={formData.owner}
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

                                    <label className="form-control mb-3">
                                        <div className="label">
                                            <span className="label-text">
                                                Deskripsi
                                            </span>
                                        </div>
                                        {/* <textarea
                                            className="textarea textarea-bordered h-24"
                                            onChange={(e) => {
                                                setFormData({
                                                    ...formData,
                                                    description: e.target.value,
                                                });
                                            }}
                                        >
                                            {formData.description}
                                        </textarea> */}
                                        <CKEditor
                                            editor={ClassicEditor}
                                            config={{
                                                // toolbar: {
                                                //     items: [
                                                //         "|",
                                                //         "undo",
                                                //         "redo",
                                                //         "|",
                                                //         "bold",
                                                //         "italic",
                                                //     ],
                                                // },
                                                plugins: [
                                                    Bold,
                                                    Essentials,
                                                    Italic,
                                                    Mention,
                                                    Paragraph,
                                                    Undo,
                                                ],
                                                initialData: `${formData.description}`,
                                            }}
                                            onChange={(event, editor) => {
                                                const data = editor.getData();
                                                setFormData({
                                                    ...formData,
                                                    description: data,
                                                });
                                            }}
                                        />
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
                                        >
                                            {formData.location}
                                        </textarea>
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
                                        <label className="form-control w-full">
                                            <div className="label">
                                                <span className="label-text">
                                                    Link Shopee
                                                </span>
                                            </div>
                                            <input
                                                type="text"
                                                value={formData.shopee_link}
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
                                        <label className="form-control w-full">
                                            <div className="label">
                                                <span className="label-text">
                                                    Link Tokopedia
                                                </span>
                                            </div>
                                            <input
                                                type="text"
                                                className="input input-bordered w-full"
                                                value={formData.tokopedia_link}
                                                onChange={(e) => {
                                                    setFormData({
                                                        ...formData,
                                                        tokopedia_link:
                                                            e.target.value,
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
                                                className="input input-bordered w-full"
                                                value={formData.instagram_link}
                                                onChange={(e) => {
                                                    setFormData({
                                                        ...formData,
                                                        instagram_link:
                                                            e.target.value,
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
                                                value={formData.tiktok_link}
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
                                        <label className="form-control w-full">
                                            <div className="label">
                                                <span className="label-text">
                                                    Link Youtube
                                                </span>
                                            </div>
                                            <input
                                                type="text"
                                                className="input input-bordered w-full"
                                                value={formData.youtube_link}
                                                onChange={(e) => {
                                                    setFormData({
                                                        ...formData,
                                                        youtube_link:
                                                            e.target.value,
                                                    });
                                                }}
                                            />
                                        </label>
                                        <label className="form-control w-full">
                                            <div className="label">
                                                <span className="label-text">
                                                    Link X
                                                </span>
                                            </div>
                                            <input
                                                type="text"
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
                                    className="file-input input-bordered w-full"
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
