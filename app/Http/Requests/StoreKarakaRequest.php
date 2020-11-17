<?php

namespace App\Http\Requests;

use App\Models\Karaka;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class StoreKarakaRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('karaka_create');
    }

    public function rules()
    {
        return [
            'chapter_id' => [
                'integer',
                'exists:chapters,id',
                'nullable',
            ],
            'title'      => [
                'string',
                'required',
            ],
            'definition' => [
                'string',
                'required',
            ],
            'remark'     => [
                'string',
                'nullable',
            ],
        ];
    }
}