<?php

namespace App\Http\Requests;

use App\Models\EnglishLesson;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class UpdateEnglishLessonRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('english_lesson_edit');
    }

    public function rules()
    {
        return [
            'post_category_id' => [
                'integer',
                'exists:post_categories,id',
                'nullable',
            ],
            'title'            => [
                'string',
                'required',
            ],
            'description'      => [
                'string',
                'nullable',
            ],
            'lesson_img'       => [
                'array',
                'nullable',
            ],
            'lesson_img.*.id'  => [
                'integer',
                'exists:media,id',
            ],
        ];
    }
}