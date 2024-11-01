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
            <AdminPanel>
                <main className="px-20">
                    <div className="flex items-center mb-5 mt-10 justify-between">
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
                    <section>
                        <div>
                            <h3 className="text-3xl font-semibold">
                                {umkm.name}{" "}
                                <small className="text-gray-800">
                                    ({umkm.subsector.name})
                                </small>
                            </h3>
                            <p>Owner: {umkm.owner}</p>
                        </div>
                        <div className="mt-5">
                            <p className="text-primary font-medium">
                                Tentang UMKM
                            </p>
                            <p>{umkm.description}</p>
                        </div>
                        <div className="mt-10">
                            <p className="text-primary font-medium">Sosmed</p>
                            <ul>
                                <li>
                                    <a href={umkm.shopee_link} target="_blank">
                                        Shopee
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={umkm.tokopedia_link}
                                        target="_blank"
                                    >
                                        Tokopedia{" "}
                                    </a>
                                </li>
                                <li>
                                    <a href={umkm.tiktok_link} target="_blank">
                                        Tiktok
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={umkm.instagram_link}
                                        target="_blank"
                                    >
                                        Intagram
                                    </a>
                                </li>
                                <li>
                                    <a href={umkm.x_link} target="_blank">
                                        X
                                    </a>
                                </li>
                                <li>
                                    <a href={umkm.youtube_link} target="_blank">
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
