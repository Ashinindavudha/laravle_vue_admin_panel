<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreKibbidhanaRequest;
use App\Http\Requests\UpdateKibbidhanaRequest;
use App\Http\Resources\Admin\KibbidhanaResource;
use App\Models\Chapter;
use App\Models\Kibbidhana;
use Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class KibbidhanaApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('kibbidhana_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new KibbidhanaResource(Kibbidhana::with(['chapter'])->advancedFilter());
    }

    public function store(StoreKibbidhanaRequest $request)
    {
        $kibbidhana = Kibbidhana::create($request->validated());

        return (new KibbidhanaResource($kibbidhana))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create(Kibbidhana $kibbidhana)
    {
        abort_if(Gate::denies('kibbidhana_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'meta' => [
                'chapter' => Chapter::get(['id', 'title']),
            ],
        ]);
    }

    public function show(Kibbidhana $kibbidhana)
    {
        abort_if(Gate::denies('kibbidhana_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new KibbidhanaResource($kibbidhana->load(['chapter']));
    }

    public function update(UpdateKibbidhanaRequest $request, Kibbidhana $kibbidhana)
    {
        $kibbidhana->update($request->validated());

        return (new KibbidhanaResource($kibbidhana))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit(Kibbidhana $kibbidhana)
    {
        abort_if(Gate::denies('kibbidhana_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'data' => new KibbidhanaResource($kibbidhana->load(['chapter'])),
            'meta' => [
                'chapter' => Chapter::get(['id', 'title']),
            ],
        ]);
    }

    public function destroy(Kibbidhana $kibbidhana)
    {
        abort_if(Gate::denies('kibbidhana_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $kibbidhana->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}