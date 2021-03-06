<?php

namespace App\Http\Requests;

use App\Models\Post;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class StorePostRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('post_create');
    }

    public function rules()
    {
        return [
            'post_category_id' => [
                'integer',
                'exists:post_categories,id',
                'nullable',
            ],
            'post_title'       => [
                'string',
                'required',
            ],
            'description'      => [
                'string',
                'required',
            ],
            'slug'             => [
                'string',
                'required',
                'unique:posts',
            ],
            'post_image'       => [
                'array',
                'nullable',
            ],
            'post_image.*.id'  => [
                'integer',
                'exists:media,id',
            ],
            'user_id'          => [
                'integer',
                'exists:users,id',
                'nullable',
            ],
            'publish'          => [
                'boolean',
            ],
        ];
    }
}