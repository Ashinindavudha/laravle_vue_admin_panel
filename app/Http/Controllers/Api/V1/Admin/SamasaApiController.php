<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreSamasaRequest;
use App\Http\Requests\UpdateSamasaRequest;
use App\Http\Resources\Admin\SamasaResource;
use App\Models\Chapter;
use App\Models\Samasa;
use Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class SamasaApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('samasa_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new SamasaResource(Samasa::with(['chapter'])->advancedFilter());
    }

    public function store(StoreSamasaRequest $request)
    {
        $samasa = Samasa::create($request->validated());

        return (new SamasaResource($samasa))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create(Samasa $samasa)
    {
        abort_if(Gate::denies('samasa_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'meta' => [
                'chapter' => Chapter::get(['id', 'title']),
            ],
        ]);
    }

    public function show(Samasa $samasa)
    {
        abort_if(Gate::denies('samasa_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new SamasaResource($samasa->load(['chapter']));
    }

    public function update(UpdateSamasaRequest $request, Samasa $samasa)
    {
        $samasa->update($request->validated());

        return (new SamasaResource($samasa))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit(Samasa $samasa)
    {
        abort_if(Gate::denies('samasa_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'data' => new SamasaResource($samasa->load(['chapter'])),
            'meta' => [
                'chapter' => Chapter::get(['id', 'title']),
            ],
        ]);
    }

    public function destroy(Samasa $samasa)
    {
        abort_if(Gate::denies('samasa_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $samasa->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
