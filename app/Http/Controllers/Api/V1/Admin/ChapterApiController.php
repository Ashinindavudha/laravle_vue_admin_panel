<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreChapterRequest;
use App\Http\Requests\UpdateChapterRequest;
use App\Http\Resources\Admin\ChapterResource;
use App\Models\Chapter;
use Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ChapterApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('chapter_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new ChapterResource(Chapter::advancedFilter());
    }

    public function store(StoreChapterRequest $request)
    {
        $chapter = Chapter::create($request->validated());

        return (new ChapterResource($chapter))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create(Chapter $chapter)
    {
        abort_if(Gate::denies('chapter_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'meta' => [],
        ]);
    }

    public function show(Chapter $chapter)
    {
        abort_if(Gate::denies('chapter_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new ChapterResource($chapter);
    }

    public function update(UpdateChapterRequest $request, Chapter $chapter)
    {
        $chapter->update($request->validated());

        return (new ChapterResource($chapter))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit(Chapter $chapter)
    {
        abort_if(Gate::denies('chapter_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'data' => new ChapterResource($chapter),
            'meta' => [],
        ]);
    }

    public function destroy(Chapter $chapter)
    {
        abort_if(Gate::denies('chapter_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $chapter->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
