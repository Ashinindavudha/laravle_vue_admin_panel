<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
*/

Route::group(['prefix' => 'v1', 'as' => 'api.', 'namespace' => 'Api\V1\Admin', 'middleware' => ['auth:api']], function () {
    // Abilities
    Route::apiResource('abilities', 'AbilitiesController', ['only' => ['index']]);

    // Permissions
    Route::resource('permissions', 'PermissionsApiController');

    // Roles
    Route::resource('roles', 'RolesApiController');

    // Users
    Route::resource('users', 'UsersApiController');
    // Chapters
    Route::resource('chapters', 'ChapterApiController');
     // Sandis
    Route::resource('sandis', 'SandiApiController');

     // Namas
    Route::resource('namas', 'NamaApiController');

    // Karakas
    Route::resource('karakas', 'KarakaApiController');

    // Samasas
    Route::resource('samasas', 'SamasaApiController');

    // Tadisas
    Route::resource('tadisas', 'TadisaApiController');

    // Archas
    Route::resource('archas', 'ArchaApiController');

    // Kibbidhanas
    Route::resource('kibbidhanas', 'KibbidhanaApiController');

    // Unadikappas
    Route::resource('unadikappas', 'UnadikappaApiController');

    // Post Categories
    Route::resource('post-categories', 'PostCategoryApiController');

    // Posts
    Route::post('posts/media', 'PostApiController@storeMedia')->name('posts.storeMedia');
    Route::resource('posts', 'PostApiController');

    // English Lessons
    Route::post('english-lessons/media', 'EnglishLessonApiController@storeMedia')->name('english-lessons.storeMedia');
    Route::resource('english-lessons', 'EnglishLessonApiController');
});

// Our NEW group - for front-end users

// Route::group(['prefix' => 'v1', 'as' => 'api.', 'namespace' => 'Api\V1\User'], function () {
// Route::get('user-sandi-api', 'SandiUserApiController@index');
// });
Route::group(['middleware' => 'cors'], function () {
Route::get('user-sandi-api', 'User\SandiUserApiController@index');
Route::get('user-nama-api', 'User\UserNamaApiController@index');

});