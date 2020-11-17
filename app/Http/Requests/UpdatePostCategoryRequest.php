<?php

namespace App\Http\Requests;

use App\Models\PostCategory;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class UpdatePostCategoryRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('post_category_edit');
    }

    public function rules()
    {
        return [
            'title' => [
                'string',
                'required',
                'unique:post_categories,title,' . request()->route('post_category')->id,
            ],
        ];
    }
}
