<?php

namespace App\Http\Controllers;

use App\Models\Sensor;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SensorController extends Controller
{
    //
    public function index(Request $request)
    {
        $data = [
            'kolam_id' => $request->kolam_id,
            'value1' => $request->value1,
            'value2' => $request->value2,
            'value3' => $request->value3,
            'value4' => $request->value4,
            'value5' => $request->value5
        ];

        Sensor::create($data);
        // simpan data ke database jika diperlukan
        return response()->json(['message' => 'Data berhasil diterima']);
    }
}
