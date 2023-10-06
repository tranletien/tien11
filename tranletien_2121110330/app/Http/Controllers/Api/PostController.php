<?php

namespace App\Http\Controllers\Api;

use App\Models\Post;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class PostController extends Controller
{
    /*lay danh sach*/
    public function index()
    {
        $posts = Post::all();
        return response()->json(['success' => true, 'message' => "Tải dữ liệu thành công", 'posts' => $posts], 200);
    }

    /*lay bang id -> chi tiet */
    public function show($id)
    {
        $post = Post::find($id);
        return response()->json(['success' => true, 'message' => "Tải dữ liệu thành công", 'post' => $post], 200);
    }

    /* them */
    public function store(Request $request)
    {
        $post = new Post();
        $post->topic_id = $request->topic_id; //form
        $post->title = $request->title; //form
        $post->slug = Str::of($request->title)->slug('-');
        $post->detail = $request->detail; //form
        $post->image = $request->name;
        //upload hình ảnh
        $files = $request->image;
        if ($files != null) {
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $filename = $post->slug . '.' . $extension;
                $post->image = $filename;
                $files->move(public_path('images/post'), $filename);
            }
        }
        //
        $post->type = $request->type; //form
        $post->metakey = $request->metakey; //form
        $post->metadesc = $request->metadesc; //form
        $post->created_at = date('Y-m-d H:i:s');
        $post->status = $request->status; //form
        $post->save(); //Luuu vao CSDL
        return response()->json(['success' => true, 'message' => 'Thành công', 'posts' => $post], 201);
    }

    /*update*/
    public function update(Request $request, $id)
    {
        $post = Post::find($id);
        $post->topic_id = $request->topic_id; //form
        $post->title = $request->title; //form
        $post->slug = Str::of($request->title)->slug('-');
        $post->detail = $request->detail; //form
        // $brand->image = $request->name;
        //upload hình ảnh
        $files = $request->image;
        if ($files != null) {
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $filename = $post->slug . '.' . $extension;
                $post->image = $filename;
                $files->move(public_path('images/post'), $filename);
            }
        }
        //
        $post->type = $request->type; //form
        $post->metakey = $request->metakey; //form
        $post->metadesc = $request->metadesc; //form
        $post->created_at = date('Y-m-d H:i:s');
        $post->created_by = $request->created_by;
        $post->status = $request->status; //form
        $post->save(); //Luuu vao CSDL

        return response()->json(['success' => true, 'message' => 'Thành công', 'posts' => $post], 200);
    }

    /* xoa */
    public function destroy($id)
    {
        $post = post::find($id);
        if ($post == null) {
            return response()->json(
                ['success' => false, 'message' => 'Xóa không thành công', 'post' => null],
                404
            );
        }
        $post->delete();
        return response()->json(
            ['success' => true, 'message' => 'Xóa thành công', 'id' => $post],
            200
        );
    }
}
