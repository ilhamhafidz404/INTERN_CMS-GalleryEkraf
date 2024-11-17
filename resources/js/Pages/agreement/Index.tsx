import React, { useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";

//
import {
    IconDownload,
    IconEye,
    IconPencilBox,
    IconPlus,
    IconTrash,
} from "justd-icons";
import AdminPanel from "../../Layouts/AdminPanel";

// models
import { responseAgreementAPI } from "../../Models/_apiResponse";
import { Agreement } from "../../Models/Agreement";

type PageProps = {
    agreements: responseAgreementAPI;
};

const AgreementIndexPage = () => {
    const { agreements } = usePage<PageProps>().props;

    const [selectedUMKM, setSelectedProduct] = useState<Agreement>();

    const handleDelete = () => {
        Inertia.delete(`/products/${selectedUMKM?.slug || ""}`);
    };

    return (
        <>
            <AdminPanel titlePage="PERSETUJUAN">
                <main className="px-20">
                    <div className="bg-white px-10 py-5 rounded shadow mt-10">
                        <div className="flex items-center mb-5 justify-between">
                            <div>
                                <h1 className="text-xl font-medium ">
                                    LIST Persetujuan
                                </h1>
                            </div>
                            <div className="flex gap-1">
                                <button
                                    onClick={() => {
                                        window.location.href =
                                            "/products/export";
                                    }}
                                    className="btn btn-success"
                                >
                                    <IconDownload className="size-5" />
                                    Export
                                </button>
                                <Link
                                    href="/products/create"
                                    className="btn btn-primary"
                                >
                                    <IconPlus className="size-5" />
                                    Tambah Data
                                </Link>
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="table table-zebra">
                                {/* head */}
                                <thead>
                                    <tr className="bg-gray-900 text-gray-100">
                                        <th>No</th>
                                        <th>Nama</th>
                                        <th>Deskripsi</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {agreements.data.length ? (
                                        agreements?.data?.map(
                                            (agreement, index) => (
                                                <tr className="hover">
                                                    <th>{index + 1}</th>
                                                    <td>{agreement.name}</td>
                                                    <td>
                                                        {agreement.description}
                                                    </td>
                                                    <td>
                                                        <div className="flex gap-2">
                                                            <Link
                                                                href={`/agreements/${agreement.slug}`}
                                                                className="btn btn-xs btn-info"
                                                            >
                                                                <IconEye className="size-5" />
                                                            </Link>
                                                            <Link
                                                                href={`/agreements/${agreement.slug}/edit`}
                                                                className="btn btn-xs btn-primary"
                                                            >
                                                                <IconPencilBox className="size-5" />
                                                            </Link>
                                                            <button
                                                                onClick={() => {
                                                                    (
                                                                        document.getElementById(
                                                                            "confirmationDelete"
                                                                        ) as HTMLFormElement
                                                                    ).showModal();

                                                                    setSelectedProduct(
                                                                        agreement
                                                                    );
                                                                }}
                                                                className="btn btn-xs btn-error"
                                                            >
                                                                <IconTrash className="size-5" />
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        )
                                    ) : (
                                        <tr>
                                            <td
                                                colSpan={5}
                                                className="text-center"
                                            >
                                                Data Produk Kosong
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>
            </AdminPanel>
            <dialog id="confirmationDelete" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Konfirmasi Hapus</h3>
                    <p className="py-4">Yakin ingin menghapus data ini?</p>
                    <div className="modal-action">
                        <form method="dialog" className="flex gap-3">
                            <button
                                className="btn"
                                onClick={() => setSelectedProduct(undefined)}
                            >
                                Batal
                            </button>
                            <button
                                className="btn btn-error"
                                onClick={() => handleDelete()}
                            >
                                Yakin Hapus
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
};

export default AgreementIndexPage;

// import React from "react";

// const UMKMIndexPage = () => {
//     return (
//         <div>
//             <h1>Users List</h1>
//         </div>
//     );
// };

// export default UMKMIndexPage;
