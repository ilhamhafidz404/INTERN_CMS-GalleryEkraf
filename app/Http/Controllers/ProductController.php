<?php

namespace App\Http\Controllers;

use App\Exports\ProductExport;
use App\Models\Product;
use App\Models\UMKM;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Maatwebsite\Excel\Facades\Excel;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::with("umkm")->latest()->paginate(10);

        // return response()->json($products);

        return Inertia::render('product/Index', [
            'products' => $products
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $umkms = UMKM::latest()->get();

        return Inertia::render('product/Create', [
            'umkms' => $umkms
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $pathPhoto1 = $request->file('photo1') ? $request->file('photo1')->store('product_images', 'public') : '/';
        $pathPhoto2 = $request->file('photo2') ? $request->file('photo2')->store('product_images', 'public') : '/';
        $pathPhoto3 = $request->file('photo3') ? $request->file('photo3')->store('product_images', 'public') : '/';

        Product::create([
            "name" => $request->name,
            "slug" => Str::slug($request->name),
            "description" => $request->description,
            "price" => $request->price,
            "photo1" => $pathPhoto1,
            "photo2" => $pathPhoto2,
            "photo3" => $pathPhoto3,
            "shopee_link" => $request->shopee_link,
            "tokopedia_link" => $request->tokopedia_link,
            "whatsapp_link" => "-",
            "umkm_id" => $request->umkm_id,
        ]);

        // alert()->success('Title','Lorem Lorem Lorem');
        return redirect("/products");
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
        $product = Product::whereSlug($slug)->first();
        $umkms = UMKM::latest()->get();

        return Inertia::render('product/Edit', [
            'product' => $product,
            'umkms' => $umkms
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $slug)
    {
        Product::whereSlug($slug)->first()->update([
            "name" => $request->name,
            "slug" => Str::slug($request->name),
            "description" => $request->description,
            "price" => $request->price,
            "shopee_link" => $request->shopee_link,
            "tokopedia_link" => $request->tokopedia_link,
            "umkm_id" => $request->umkm_id,
        ]);

        return redirect("/products");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $slug)
    {
        $product= Product::whereSlug($slug)->first();
        $product->delete();

        // return response()->json($product);
        return redirect("/products");
    }

        /**
     * Export
     */
    public function export()
    {
        return Excel::download(new ProductExport, 'products.xlsx');
    }
}
