<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('post_category_id')->nullable();
            //$table->foreign('post_category_id', 'post_category_fk_2379279')->references('id')->on('post_categories');
            $table->longText('post_title');
            $table->longText('description');
            $table->string('slug')->unique();
            $table->unsignedInteger('user_id')->nullable();
            //$table->foreign('user_id', 'user_fk_2379284')->references('id')->on('users');
            $table->boolean('publish')->default(0)->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('posts');
    }
}
