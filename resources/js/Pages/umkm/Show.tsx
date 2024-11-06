import React from "react";
import { Link, usePage } from "@inertiajs/react";

//
import { IconChevronLeft } from "justd-icons";
import AdminPanel from "../../Layouts/AdminPanel";

// models
import { UMKM } from "../../Models/UMKM";

type PageProps = {
    umkm: UMKM;
};

export default function UMKMShowPage() {
    const { umkm } = usePage<PageProps>().props;

    return (
        <>
            <AdminPanel titlePage="UMKM">
                <main className="px-20">
                    <div className="flex items-center mb-5 justify-between bg-white px-5 py-3 rounded-md shadow mt-10">
                        <div>
                            <h1 className="text-xl font-medium ">
                                Detail UMKM
                            </h1>
                        </div>
                        <div>
                            <Link href="/umkms" className="btn btn-ghost">
                                <IconChevronLeft className="size-5" />
                                Kembali
                            </Link>
                        </div>
                    </div>
                    <section className="bg-white p-7 rounded-md shadow mt-10 mb-10">
                        <div className="flex gap-4 items-center">
                            <div>
                                <img
                                    src={`http://127.0.0.1:8000/storage/${umkm.image1}`}
                                    alt="Logo"
                                    className="rounded w-[100px]"
                                />
                            </div>
                            <div>
                                <h3 className="text-3xl font-semibold mt-2">
                                    {umkm.name}{" "}
                                    <small className="text-gray-800 text-sm">
                                        ({umkm.subsector.name})
                                    </small>
                                </h3>
                                <p>Owner: {umkm.owner}</p>
                            </div>
                        </div>
                        <div className="mt-5 mb-10">
                            <p className="text-primary font-medium">
                                Tentang UMKM
                            </p>
                            <p>{umkm.description}</p>
                        </div>
                        <div className="grid grid-cols-2 gap-5 mb-10">
                            <div>
                                <img
                                    src={`http://127.0.0.1:8000/storage/${umkm.image2}`}
                                    alt="Foto1"
                                    className="rounded h-full object-cover"
                                />
                            </div>
                            <div>
                                <img
                                    src={`http://127.0.0.1:8000/storage/${umkm.image3}`}
                                    alt="Foto2"
                                    className="rounded h-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="mt-10">
                            <p className="text-primary font-medium">Sosmed</p>
                            <ul className="flex gap-5">
                                <li>
                                    <a
                                        href={umkm.shopee_link}
                                        target="_blank"
                                        className="underline"
                                    >
                                        Shopee
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={umkm.tokopedia_link}
                                        target="_blank"
                                        className="underline"
                                    >
                                        Tokopedia{" "}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={umkm.tiktok_link}
                                        target="_blank"
                                        className="underline"
                                    >
                                        Tiktok
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={umkm.instagram_link}
                                        target="_blank"
                                        className="underline"
                                    >
                                        Intagram
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={umkm.x_link}
                                        target="_blank"
                                        className="underline"
                                    >
                                        X
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={umkm.youtube_link}
                                        target="_blank"
                                        className="underline"
                                    >
                                        Youtube
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </section>
                </main>
            </AdminPanel>
        </>
    );
}
