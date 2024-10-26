import React, { useEffect } from "react";
import { usePage } from "@inertiajs/react";
import { IconEye, IconEyeFill, IconPencilBox, IconTrash } from "justd-icons";

const UMKMPage = () => {
    type UMKM = {
        // code: string;
        // success: boolean;
        // message: string;
        // result: {
        //     current_page: number;
        //     data: [
        //         {
        //             id: number;
        //             name: string;
        //             slug: string;
        //             description: string;
        //             owner: string;
        //             image1: string;
        //             image2?: string;
        //             image3?: string;
        //             shopee_link?: string;
        //             tokopedia_link?: string;
        //             instagram_link?: string;
        //             tiktok_link?: string;
        //             youtube_link?: string;
        //             x_link?: string;
        //             whatsapp_link?: string;
        //             subsector_id: number;
        //             created_at: string;
        //             updated_at: string;
        //         }
        //     ];
        //     first_page_url: string;
        //     from: number;
        //     last_page: number;
        //     last_page_url: string;
        //     links: [
        //         {
        //             url?: string;
        //             label: string | number;
        //             active: boolean;
        //         }
        //     ];
        //     next_page_url?: string;
        //     path: string;
        //     per_page: number;
        //     prev_page_url?: string;
        //     to: number;
        //     total: number;
        // };

        current_page: number;
        data: [
            {
                id: number;
                name: string;
                slug: string;
                description: string;
                owner: string;
                image1: string;
                image2?: string;
                image3?: string;
                shopee_link?: string;
                tokopedia_link?: string;
                instagram_link?: string;
                tiktok_link?: string;
                youtube_link?: string;
                x_link?: string;
                whatsapp_link?: string;
                subsector_id: number;
                created_at: string;
                updated_at: string;
                subsector: {
                    id: number;
                    name: string;
                    slug: string;
                    description: string;
                    created_at?: string;
                    updated_at?: string;
                };
            }
        ];
        first_page_url: string;
        from: number;
        last_page: number;
        last_page_url: string;
        links: [
            {
                url?: string;
                label: string | number;
                active: boolean;
            }
        ];
        next_page_url?: string;
        path: string;
        per_page: number;
        prev_page_url?: string;
        to: number;
        total: number;
    };

    type PageProps = {
        umkms: UMKM;
    };
    const { umkms } = usePage<PageProps>().props;

    useEffect(() => {
        console.log("Data UMKM:", umkms);
    }, [umkms]);

    return (
        <>
            <section className="container mx-auto">
                <h1 className="text-xl font-medium mb-5 mt-10">LIST UMKM</h1>
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
                            {umkms?.data.map((umkm, index) => (
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

export default UMKMPage;

// import React from "react";

// const UMKMPage = () => {
//     return (
//         <div>
//             <h1>Users List</h1>
//         </div>
//     );
// };

// export default UMKMPage;
