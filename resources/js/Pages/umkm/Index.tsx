import React, { useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import { IconEye, IconPencilBox, IconPlus, IconTrash } from "justd-icons";
import { responseUMKMAPI } from "../../Models/_apiResponse";
import UMKM from "../../Models/UMKM";

import { Inertia } from "@inertiajs/inertia";

type PageProps = {
    umkms: responseUMKMAPI;
};

const UMKMIndexPage = () => {
    const { umkms } = usePage<PageProps>().props;

    const [selectedUMKM, setSelectedUMKM] = useState<UMKM>();

    const handleDelete = () => {
        Inertia.delete(`/umkms/${selectedUMKM.slug}`);
    };

    return (
        <>
            <section className="container mx-auto">
                <div className="flex items-center mb-5 mt-10 justify-between">
                    <div>
                        <h1 className="text-xl font-medium ">LIST UMKM</h1>
                    </div>
                    <div>
                        <Link href="/umkms/create" className="btn btn-primary">
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
                                <th>Name</th>
                                <th>Subsektor</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {umkms?.data?.map((umkm, index) => (
                                <tr className="hover">
                                    <th>{index + 1}</th>
                                    <td>{umkm.name}</td>
                                    <td>{umkm.subsector.name}</td>
                                    <td>
                                        <div className="flex gap-2">
                                            <button className="btn btn-xs btn-info">
                                                <IconEye className="size-5" />
                                            </button>
                                            <Link
                                                href={`/umkms/${umkm.slug}/edit`}
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

                                                    setSelectedUMKM(umkm);
                                                }}
                                                className="btn btn-xs btn-error"
                                            >
                                                <IconTrash className="size-5" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            <dialog id="confirmationDelete" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Konfirmasi Hapus</h3>
                    <p className="py-4">Yakin ingin menghapus data ini?</p>
                    <div className="modal-action">
                        <form method="dialog" className="flex gap-3">
                            <button
                                className="btn"
                                onClick={() => setSelectedUMKM()}
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

export default UMKMIndexPage;

// import React from "react";

// const UMKMIndexPage = () => {
//     return (
//         <div>
//             <h1>Users List</h1>
//         </div>
//     );
// };

// export default UMKMIndexPage;
