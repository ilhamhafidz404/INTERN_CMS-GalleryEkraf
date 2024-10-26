<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\UMKM;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class UMKMController extends Controller
{
/**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $umkms = UMKM::with("subsector")->latest()->paginate(10);

            return response()->json([
                "code" => "EKRAF-001",
                "success" => true,
                "message" => "Get data UMKMs success",
                "result" => $umkms,
            ], 200);
        } catch(\Exception $e){
            return response()->json([
                "code" => "EKRAF-003",
                "success" => false,
                "message" => "Get data UMKMs failed, " . $e->getMessage(),
                "result" => [],
            ], 500);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $umkm = UMKM::create([
                "name" => $request->name,
                "slug" => Str::slug($request->name),
                "description" => $request->description,
                "owner" => $request->owner,
                "image1" => $request->image1,
                "image2" => $request->image2,
                "image3" => $request->image3,
                "shopee_link" => $request->shopee_link,
                "tokopedia_link" => $request->tokopedia_link,
                "instagram_link" => $request->instagram_link,
                "tiktok_link" => $request->tiktok_link,
                "youtube_link" => $request->youtube_link,
                "x_link" => $request->x_link,
                "whatsapp_link" => $request->whatsapp_link,
                "subsector_id" => $request->subsector_id,
            ]);

            return response()->json([
                "code" => "EKRAF-001",
                "success" => true,
                "message" => "Create data UMKMs success",
                "result" => $umkm,
            ], 200);
        } catch(\Exception $e){
            return response()->json([
                "code" => "EKRAF-003",
                "success" => false,
                "message" => "Create data UMKMs failed, " . $e->getMessage(),
                "result" => [],
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        try {
            $umkm = UMKM::find($id);

            return response()->json([
                "code" => "EKRAF-001",
                "success" => true,
                "message" => "Get data UMKM success",
                "result" => $umkm,
            ], 200);
        } catch(\Exception $e){
            return response()->json([
                "code" => "EKRAF-003",
                "success" => false,
                "message" => "Get data UMKM failed, " . $e->getMessage(),
                "result" => [],
            ], 500);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        try {

            $umkm = UMKM::find($id);

            $umkm->update([
                "name" => $request->name,
                "slug" => Str::slug($request->title),
                "description" => $request->description,
                "owner" => $request->owner,
                "image1" => $request->image1,
                "image2" => $request->image2,
                "image3" => $request->image3,
                "shopee_link" => $request->shopee_link,
                "tokopedia_link" => $request->tokopedia_link,
                "instagram_link" => $request->instagram_link,
                "tiktok_link" => $request->tiktok_link,
                "youtube_link" => $request->youtube_link,
                "x_link" => $request->x_link,
                "whatsapp_link" => $request->whatsapp_link,
                "subsector_id" => $request->subsector_id,
            ]);

            return response()->json([
                "code" => "EKRAF-001",
                "success" => true,
                "message" => "Update data UMKM success",
                "result" => $umkm,
            ], 200);
        } catch(\Exception $e){
            return response()->json([
                "code" => "EKRAF-003",
                "success" => false,
                "message" => "Update data UMKM failed, " . $e->getMessage(),
                "result" => [],
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {

            $umkm = UMKM::find($id);

            $umkm->delete();

            return response()->json([
                "code" => "EKRAF-001",
                "success" => true,
                "message" => "Delete data UMKM success",
                "result" => $umkm,
            ], 200);
        } catch(\Exception $e){
            return response()->json([
                "code" => "EKRAF-003",
                "success" => false,
                "message" => "Delete data UMKM failed, " . $e->getMessage(),
                "result" => [],
            ], 500);
        }
    }

}
