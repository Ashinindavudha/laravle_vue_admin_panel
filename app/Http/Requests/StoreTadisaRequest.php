<?php

namespace App\Http\Requests;

use App\Models\Tadisa;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class StoreTadisaRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('tadisa_create');
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
