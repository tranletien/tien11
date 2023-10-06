<?php

namespace App\Http\Controllers\Api;

use App\Models\Contact;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ContactController extends Controller
{
    /*lay danh sach*/
    public function index()
    {
        $contacts = Contact::all();
        return response()->json(['success' => true, 'message' => "Tải dữ liệu thành công", 'contacts' => $contacts], 200);
    }

    /*lay bang id -> chi tiet */
    public function show($id)
    {
        $contact = Contact::find($id);
        return response()->json(['success' => true, 'message' => "Tải dữ liệu thành công", 'contacts' => $contact], 200);
    }

    /* them */
    public function store(Request $request)
    {
        $contact = new Contact();
        $contact->name = $request->name; //form
        $contact->email = $request->email; //form
        $contact->phone = $request->phone; //form
        $contact->title = $request->title; //form
        $contact->content = $request->content; //form
        // $category->image = $request->name;
        $contact->user_id = $request->user_id; //form
        $contact->replay_id = $request->replay_id; //form
        $contact->created_by = 1;
        $contact->status = $request->status; //form
        $contact->save(); //Luuu vao CSDL
        return response()->json(['success' => true, 'message' => 'Thành công', 'contacts' => $contact], 201);
    }

    /*update*/
    public function update(Request $request, $id)
    {
        $contact = Contact::find($id);
        $contact->name = $request->name; //form
        $contact->email = $request->email; //form
        $contact->phone = $request->phone; //form
        $contact->title = $request->title; //form
        $contact->content = $request->content; //form
        // $category->image = $request->name;
        $contact->user_id = $request->user_id; //form
        $contact->replay_id = $request->replay_id; //form
        $contact->created_by = 1;
        $contact->status = $request->status; //form
        $contact->save(); //Luuu vao CSDL
        return response()->json(['success' => true, 'message' => 'Thành công', 'contact' => $contact], 201);
    }

    /* xoa */
    public function destroy($id)
    {
        $Contact = Contact::find($id);
        if ($Contact == null) {
            return response()->json(
                ['success' => false, 'message' => 'Xóa không thành công', 'Contact' => null],
                404
            );
        }
        $Contact->delete();
        return response()->json(
            ['success' => true, 'message' => 'Xóa thành công', 'id' => $Contact],
            200
        );
    }

    /* lay du lieu len frontend */
    public function contact_list($parent_id = 0, $status = 1)
    {
        $args = [
            ['parent_id', '=', $parent_id],
            ['status', '=', $status]
        ];
        $data = Contact::where($args)->orderBy('sort_order', 'ASC')->get();
        return response()->json($data, 200);
    }
}
