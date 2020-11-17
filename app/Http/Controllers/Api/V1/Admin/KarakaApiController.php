<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreKarakaRequest;
use App\Http\Requests\UpdateKarakaRequest;
use App\Http\Resources\Admin\KarakaResource;
use App\Models\Chapter;
use App\Models\Karaka;
use Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class KarakaApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('karaka_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new KarakaResource(Karaka::with(['chapter'])->advancedFilter());
    }

    public function store(StoreKarakaRequest $request)
    {
        $karaka = Karaka::create($request->validated());

        return (new KarakaResource($karaka))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create(Karaka $karaka)
    {
        abort_if(Gate::denies('karaka_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'meta' => [
                'chapter' => Chapter::get(['id', 'title']),
            ],
        ]);
    }

    public function show(Karaka $karaka)
    {
        abort_if(Gate::denies('karaka_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new KarakaResource($karaka->load(['chapter']));
    }

    public function update(UpdateKarakaRequest $request, Karaka $karaka)
    {
        $karaka->update($request->validated());

        return (new KarakaResource($karaka))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit(Karaka $karaka)
    {
        abort_if(Gate::denies('karaka_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'data' => new KarakaResource($karaka->load(['chapter'])),
            'meta' => [
                'chapter' => Chapter::get(['id', 'title']),
            ],
        ]);
    }

    public function destroy(Karaka $karaka)
    {
        abort_if(Gate::denies('karaka_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $karaka->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
