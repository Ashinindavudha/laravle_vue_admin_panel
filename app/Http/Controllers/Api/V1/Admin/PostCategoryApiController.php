<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StorePostCategoryRequest;
use App\Http\Requests\UpdatePostCategoryRequest;
use App\Http\Resources\Admin\PostCategoryResource;
use App\Models\PostCategory;
use Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class PostCategoryApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('post_category_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new PostCategoryResource(PostCategory::advancedFilter());
    }

    public function store(StorePostCategoryRequest $request)
    {
        $postCategory = PostCategory::create($request->validated());

        return (new PostCategoryResource($postCategory))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create(PostCategory $postCategory)
    {
        abort_if(Gate::denies('post_category_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'meta' => [],
        ]);
    }

    public function show(PostCategory $postCategory)
    {
        abort_if(Gate::denies('post_category_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new PostCategoryResource($postCategory);
    }

    public function update(UpdatePostCategoryRequest $request, PostCategory $postCategory)
    {
        $postCategory->update($request->validated());

        return (new PostCategoryResource($postCategory))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit(PostCategory $postCategory)
    {
        abort_if(Gate::denies('post_category_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'data' => new PostCategoryResource($postCategory),
            'meta' => [],
        ]);
    }

    public function destroy(PostCategory $postCategory)
    {
        abort_if(Gate::denies('post_category_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $postCategory->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
