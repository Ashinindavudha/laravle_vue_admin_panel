<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreUnadikappaRequest;
use App\Http\Requests\UpdateUnadikappaRequest;
use App\Http\Resources\Admin\UnadikappaResource;
use App\Models\Chapter;
use App\Models\Unadikappa;
use Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class UnadikappaApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('unadikappa_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new UnadikappaResource(Unadikappa::with(['chapter'])->advancedFilter());
    }

    public function store(StoreUnadikappaRequest $request)
    {
        $unadikappa = Unadikappa::create($request->validated());

        return (new UnadikappaResource($unadikappa))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create(Unadikappa $unadikappa)
    {
        abort_if(Gate::denies('unadikappa_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'meta' => [
                'chapter' => Chapter::get(['id', 'title']),
            ],
        ]);
    }

    public function show(Unadikappa $unadikappa)
    {
        abort_if(Gate::denies('unadikappa_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new UnadikappaResource($unadikappa->load(['chapter']));
    }

    public function update(UpdateUnadikappaRequest $request, Unadikappa $unadikappa)
    {
        $unadikappa->update($request->validated());

        return (new UnadikappaResource($unadikappa))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit(Unadikappa $unadikappa)
    {
        abort_if(Gate::denies('unadikappa_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'data' => new UnadikappaResource($unadikappa->load(['chapter'])),
            'meta' => [
                'chapter' => Chapter::get(['id', 'title']),
            ],
        ]);
    }

    public function destroy(Unadikappa $unadikappa)
    {
        abort_if(Gate::denies('unadikappa_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $unadikappa->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}