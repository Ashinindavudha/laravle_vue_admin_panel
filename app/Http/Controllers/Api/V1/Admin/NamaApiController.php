<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreNamaRequest;
use App\Http\Requests\UpdateNamaRequest;
use App\Http\Resources\Admin\NamaResource;
use App\Models\Chapter;
use App\Models\Nama;
use Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class NamaApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('nama_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new NamaResource(Nama::with(['chapter'])->advancedFilter());
    }

    public function store(StoreNamaRequest $request)
    {
        $nama = Nama::create($request->validated());

        return (new NamaResource($nama))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create(Nama $nama)
    {
        abort_if(Gate::denies('nama_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'meta' => [
                'chapter' => Chapter::get(['id', 'title']),
            ],
        ]);
    }

    public function show(Nama $nama)
    {
        abort_if(Gate::denies('nama_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new NamaResource($nama->load(['chapter']));
    }

    public function update(UpdateNamaRequest $request, Nama $nama)
    {
        $nama->update($request->validated());

        return (new NamaResource($nama))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit(Nama $nama)
    {
        abort_if(Gate::denies('nama_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'data' => new NamaResource($nama->load(['chapter'])),
            'meta' => [
                'chapter' => Chapter::get(['id', 'title']),
            ],
        ]);
    }

    public function destroy(Nama $nama)
    {
        abort_if(Gate::denies('nama_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $nama->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}