import React, { useEffect } from "react";
import { Link, usePage } from "@inertiajs/react";
import {
    IconEye,
    IconEyeFill,
    IconPencilBox,
    IconPlus,
    IconTrash,
} from "justd-icons";
import { responseUMKMAPI } from "../../Models/_apiResponse";

type PageProps = {
    umkms: responseUMKMAPI;
};

const UMKMIndexPage = () => {
    const { umkms } = usePage<PageProps>().props;

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
                                            <button className="btn btn-xs btn-primary">
                                                <IconPencilBox className="size-5" />
                                            </button>
                                            <button className="btn btn-xs btn-error">
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
