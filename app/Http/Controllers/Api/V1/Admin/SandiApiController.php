<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreSandiRequest;
use App\Http\Requests\UpdateSandiRequest;
use App\Http\Resources\Admin\SandiResource;
use App\Models\Chapter;
use App\Models\Sandi;
use Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class SandiApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('sandi_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new SandiResource(Sandi::with(['chapter'])->advancedFilter());
    }

    public function store(StoreSandiRequest $request)
    {
        $sandi = Sandi::create($request->validated());

        return (new SandiResource($sandi))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create(Sandi $sandi)
    {
        abort_if(Gate::denies('sandi_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'meta' => [
                'chapter' => Chapter::get(['id', 'title']),
            ],
        ]);
    }

    public function show(Sandi $sandi)
    {
        abort_if(Gate::denies('sandi_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new SandiResource($sandi->load(['chapter']));
    }

    public function update(UpdateSandiRequest $request, Sandi $sandi)
    {
        $sandi->update($request->validated());

        return (new SandiResource($sandi))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit(Sandi $sandi)
    {
        abort_if(Gate::denies('sandi_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'data' => new SandiResource($sandi->load(['chapter'])),
            'meta' => [
                'chapter' => Chapter::get(['id', 'title']),
            ],
        ]);
    }

    public function destroy(Sandi $sandi)
    {
        abort_if(Gate::denies('sandi_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $sandi->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
