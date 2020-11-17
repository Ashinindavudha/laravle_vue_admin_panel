<?php

namespace App\Http\Requests;

use App\Models\Sandi;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class StoreSandiRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('sandi_create');
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
                'nullable',
            ],
            'remark'     => [
                'string',
                'nullable',
            ],
        ];
    }
}
