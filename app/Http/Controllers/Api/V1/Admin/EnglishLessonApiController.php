<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreEnglishLessonRequest;
use App\Http\Requests\UpdateEnglishLessonRequest;
use App\Http\Resources\Admin\EnglishLessonResource;
use App\Models\EnglishLesson;
use App\Models\PostCategory;
use Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class EnglishLessonApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('english_lesson_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new EnglishLessonResource(EnglishLesson::with(['postCategory'])->advancedFilter());
    }

    public function store(StoreEnglishLessonRequest $request)
    {
        $englishLesson = EnglishLesson::create($request->validated());

        if ($media = $request->input('lesson_img', [])) {
            Media::whereIn('id', data_get($media, '*.id'))
                ->where('model_id', 0)
                ->update(['model_id' => $englishLesson->id]);
        }

        return (new EnglishLessonResource($englishLesson))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create(EnglishLesson $englishLesson)
    {
        abort_if(Gate::denies('english_lesson_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'meta' => [
                'post_category' => PostCategory::get(['id', 'title']),
            ],
        ]);
    }

    public function show(EnglishLesson $englishLesson)
    {
        abort_if(Gate::denies('english_lesson_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new EnglishLessonResource($englishLesson->load(['postCategory']));
    }

    public function update(UpdateEnglishLessonRequest $request, EnglishLesson $englishLesson)
    {
        $englishLesson->update($request->validated());

        $englishLesson->updateMedia($request->input('lesson_img', []), 'english_lesson_lesson_img');

        return (new EnglishLessonResource($englishLesson))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit(EnglishLesson $englishLesson)
    {
        abort_if(Gate::denies('english_lesson_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'data' => new EnglishLessonResource($englishLesson->load(['postCategory'])),
            'meta' => [
                'post_category' => PostCategory::get(['id', 'title']),
            ],
        ]);
    }

    public function destroy(EnglishLesson $englishLesson)
    {
        abort_if(Gate::denies('english_lesson_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $englishLesson->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }

    public function storeMedia(Request $request)
    {
        abort_if(Gate::none(['english_lesson_create', 'english_lesson_edit']), Response::HTTP_FORBIDDEN, '403 Forbidden');

        if ($request->has('size')) {
            $this->validate($request, [
                'file' => 'max:' . $request->input('size') * 1024,
            ]);
        }

        $model         = new EnglishLesson();
        $model->id     = $request->input('model_id', 0);
        $model->exists = true;
        $media         = $model->addMediaFromRequest('file')->toMediaCollection($request->input('collection_name'));

        return response()->json($media, Response::HTTP_CREATED);
    }
}
