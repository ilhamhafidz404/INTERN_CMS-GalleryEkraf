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
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: umkm.description || "",
                                }}
                            ></div>
                        </div>
                        <div className="grid grid-cols-2 gap-5 mb-10">
                            {umkm.image2 && umkm.image2 != "/" && (
                                <div>
                                    <img
                                        src={`http://127.0.0.1:8000/storage/${umkm.image2}`}
                                        alt="Foto1"
                                        className="rounded h-full object-cover"
                                    />
                                </div>
                            )}
                            {umkm.image3 && umkm.image3 != "/" && (
                                <div>
                                    <img
                                        src={`http://127.0.0.1:8000/storage/${umkm.image3}`}
                                        alt="Foto2"
                                        className="rounded h-full object-cover"
                                    />
                                </div>
                            )}
                        </div>
                        {(umkm.shopee_link ||
                            umkm.tokopedia_link ||
                            umkm.tiktok_link ||
                            umkm.instagram_link ||
                            umkm.x_link ||
                            umkm.youtube_link) && (
                            <div className="mt-10">
                                <p className="text-primary font-medium mb-3">
                                    Sosmed
                                </p>
                                <ul className="flex gap-8">
                                    {umkm.shopee_link && (
                                        <li>
                                            <a
                                                href={umkm.shopee_link}
                                                target="_blank"
                                                className="flex flex-col items-center"
                                            >
                                                <img
                                                    src="/sosmedIcons/shopee.svg"
                                                    alt="shopee"
                                                    className="w-[40px] h-[40px]"
                                                />
                                                Shopee
                                            </a>
                                        </li>
                                    )}
                                    {umkm.tokopedia_link && (
                                        <li>
                                            <a
                                                href={umkm.tokopedia_link}
                                                target="_blank"
                                                className="flex flex-col items-center"
                                            >
                                                <img
                                                    src="/sosmedIcons/tokopedia.png"
                                                    alt="tokopedia"
                                                    className="w-[40px] h-[40px]"
                                                />
                                                Tokopedia{" "}
                                            </a>
                                        </li>
                                    )}
                                    {umkm.tiktok_link && (
                                        <li>
                                            <a
                                                href={umkm.tiktok_link}
                                                target="_blank"
                                                className="flex flex-col items-center"
                                            >
                                                <img
                                                    src="/sosmedIcons/tiktok.svg"
                                                    alt="tiktok"
                                                    className="w-[40px] h-[40px]"
                                                />
                                                Tiktok
                                            </a>
                                        </li>
                                    )}
                                    {umkm.instagram_link && (
                                        <li>
                                            <a
                                                href={umkm.instagram_link}
                                                target="_blank"
                                                className="flex flex-col items-center"
                                            >
                                                <img
                                                    src="/sosmedIcons/instagram.svg"
                                                    alt="instagram"
                                                    className="w-[40px] h-[40px]"
                                                />
                                                Intagram
                                            </a>
                                        </li>
                                    )}
                                    {umkm.x_link && (
                                        <li>
                                            <a
                                                href={umkm.x_link}
                                                target="_blank"
                                                className="flex flex-col items-center"
                                            >
                                                <img
                                                    src="/sosmedIcons/x.svg"
                                                    alt="x"
                                                    className="w-[40px] h-[40px]"
                                                />
                                                X
                                            </a>
                                        </li>
                                    )}
                                    {umkm.youtube_link && (
                                        <li>
                                            <a
                                                href={umkm.youtube_link}
                                                target="_blank"
                                                className="flex flex-col items-center"
                                            >
                                                <img
                                                    src="/sosmedIcons/youtube.svg"
                                                    alt="youtube"
                                                    className="w-[40px] h-[40px]"
                                                />
                                                Youtube
                                            </a>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        )}
                    </section>
                </main>
            </AdminPanel>
        </>
    );
}
