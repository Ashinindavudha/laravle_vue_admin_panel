<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreTadisaRequest;
use App\Http\Requests\UpdateTadisaRequest;
use App\Http\Resources\Admin\TadisaResource;
use App\Models\Chapter;
use App\Models\Tadisa;
use Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class TadisaApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('tadisa_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new TadisaResource(Tadisa::with(['chapter'])->advancedFilter());
    }

    public function store(StoreTadisaRequest $request)
    {
        $tadisa = Tadisa::create($request->validated());

        return (new TadisaResource($tadisa))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create(Tadisa $tadisa)
    {
        abort_if(Gate::denies('tadisa_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'meta' => [
                'chapter' => Chapter::get(['id', 'title']),
            ],
        ]);
    }

    public function show(Tadisa $tadisa)
    {
        abort_if(Gate::denies('tadisa_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new TadisaResource($tadisa->load(['chapter']));
    }

    public function update(UpdateTadisaRequest $request, Tadisa $tadisa)
    {
        $tadisa->update($request->validated());

        return (new TadisaResource($tadisa))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit(Tadisa $tadisa)
    {
        abort_if(Gate::denies('tadisa_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'data' => new TadisaResource($tadisa->load(['chapter'])),
            'meta' => [
                'chapter' => Chapter::get(['id', 'title']),
            ],
        ]);
    }

    public function destroy(Tadisa $tadisa)
    {
        abort_if(Gate::denies('tadisa_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $tadisa->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}