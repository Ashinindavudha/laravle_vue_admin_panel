<?php

namespace App\Http\Requests;

use App\Models\Archa;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class UpdateArchaRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('archa_edit');
    }

    public function rules()
    {
        return [
            'chapter_id' => [
                'integer',
                'exists:chapters,id',
                'nullable',
            ],
            'titile'     => [
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