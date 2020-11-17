<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateArchasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('archas', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('chapter_id')->nullable();
            //$table->foreign('chapter_id', 'chapter_fk_2378560')->references('id')->on('chapters');
            $table->longText('titile');
            $table->longText('definition');
            $table->longText('remark')->nullable();
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
        Schema::dropIfExists('archas');
    }
}
