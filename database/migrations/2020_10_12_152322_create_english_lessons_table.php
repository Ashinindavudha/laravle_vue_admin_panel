<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEnglishLessonsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('english_lessons', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('post_category_id')->nullable();
            //$table->foreign('post_category_id', 'post_category_fk_2379349')->references('id')->on('post_categories');
            $table->longText('title');
            $table->longText('description')->nullable();
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
        Schema::dropIfExists('english_lessons');
    }
}
