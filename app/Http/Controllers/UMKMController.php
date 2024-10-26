<?php

namespace App\Http\Controllers;

use App\Models\Subsector;
use App\Models\UMKM;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;

class UMKMController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $umkms = UMKM::with("subsector")->latest()->paginate(10);

        return Inertia::render('umkm/Index', [
            'umkms' => $umkms
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

        $subsectors = Subsector::latest()->get();

        return Inertia::render('umkm/Create', [
            'subsectors' => $subsectors
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        UMKM::create([
            "name" => $request->name,
            "slug" => Str::slug($request->name),
            "description" => $request->description,
            "owner" => $request->owner,
            "image1" => "/",
            "shopee_link" => $request->shopee_link,
            "tokopedia_link" => $request->tokopedia_link,
            "instagram_link" => $request->instagram_link,
            "tiktok_link" => $request->tiktok_link,
            "youtube_link" => $request->youtube_link,
            "x_link" => $request->x_link,
            "whatsapp_link" => $request->whatsapp_link,
            "subsector_id" => $request->subsector_id,
        ]);

        return response()->json($request);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $slug)
    {
        $umkm = UMKM::with("subsector")->whereSlug($slug)->first();
        $subsectors = Subsector::latest()->get();

        return Inertia::render('umkm/Edit', [
            'umkm' => $umkm,
            'subsectors' => $subsectors
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $slug)
    {
        UMKM::whereSlug($slug)->first()->update([
            "name" => $request->name,
            "slug" => Str::slug($request->name),
            "description" => $request->description,
            "owner" => $request->owner,
            "image1" => "/",
            "shopee_link" => $request->shopee_link,
            "tokopedia_link" => $request->tokopedia_link,
            "instagram_link" => $request->instagram_link,
            "tiktok_link" => $request->tiktok_link,
            "youtube_link" => $request->youtube_link,
            "x_link" => $request->x_link,
            "whatsapp_link" => $request->whatsapp_link,
            "subsector_id" => $request->subsector_id,
        ]);

        return response()->json($request);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $slug)
    {
        $umkm= UMKM::whereSlug($slug)->first();
        $umkm->delete();

        return response()->json($umkm);
    }
}
