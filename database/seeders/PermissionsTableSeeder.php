<?php

namespace Database\Seeders;

use App\Models\Permission;
use Illuminate\Database\Seeder;

class PermissionsTableSeeder extends Seeder
{
    public function run()
    {
        $permissions = [
            [
                'id'    => 1,
                'title' => 'user_management_access',
            ],
            [
                'id'    => 2,
                'title' => 'permission_create',
            ],
            [
                'id'    => 3,
                'title' => 'permission_edit',
            ],
            [
                'id'    => 4,
                'title' => 'permission_show',
            ],
            [
                'id'    => 5,
                'title' => 'permission_delete',
            ],
            [
                'id'    => 6,
                'title' => 'permission_access',
            ],
            [
                'id'    => 7,
                'title' => 'role_create',
            ],
            [
                'id'    => 8,
                'title' => 'role_edit',
            ],
            [
                'id'    => 9,
                'title' => 'role_show',
            ],
            [
                'id'    => 10,
                'title' => 'role_delete',
            ],
            [
                'id'    => 11,
                'title' => 'role_access',
            ],
            [
                'id'    => 12,
                'title' => 'user_create',
            ],
            [
                'id'    => 13,
                'title' => 'user_edit',
            ],
            [
                'id'    => 14,
                'title' => 'user_show',
            ],
            [
                'id'    => 15,
                'title' => 'user_delete',
            ],
            [
                'id'    => 16,
                'title' => 'user_access',
            ],
            [
                'id'    => 17,
                'title' => 'original_pali_gramma_access',
            ],
            [
                'id'    => 18,
                'title' => 'chapter_create',
            ],
            [
                'id'    => 19,
                'title' => 'chapter_edit',
            ],
            [
                'id'    => 20,
                'title' => 'chapter_show',
            ],
            [
                'id'    => 21,
                'title' => 'chapter_delete',
            ],
            [
                'id'    => 22,
                'title' => 'chapter_access',
            ],
            [
                'id'    => 23,
                'title' => 'sandi_create',
            ],
            [
                'id'    => 24,
                'title' => 'sandi_edit',
            ],
            [
                'id'    => 25,
                'title' => 'sandi_show',
            ],
            [
                'id'    => 26,
                'title' => 'sandi_delete',
            ],
            [
                'id'    => 27,
                'title' => 'sandi_access',
            ],
            [
                'id'    => 28,
                'title' => 'nama_create',
            ],
            [
                'id'    => 29,
                'title' => 'nama_edit',
            ],
            [
                'id'    => 30,
                'title' => 'nama_show',
            ],
            [
                'id'    => 31,
                'title' => 'nama_delete',
            ],
            [
                'id'    => 32,
                'title' => 'nama_access',
            ],
            [
                'id'    => 33,
                'title' => 'karaka_create',
            ],
            [
                'id'    => 34,
                'title' => 'karaka_edit',
            ],
            [
                'id'    => 35,
                'title' => 'karaka_show',
            ],
            [
                'id'    => 36,
                'title' => 'karaka_delete',
            ],
            [
                'id'    => 37,
                'title' => 'karaka_access',
            ],
            [
                'id'    => 38,
                'title' => 'samasa_create',
            ],
            [
                'id'    => 39,
                'title' => 'samasa_edit',
            ],
            [
                'id'    => 40,
                'title' => 'samasa_show',
            ],
            [
                'id'    => 41,
                'title' => 'samasa_delete',
            ],
            [
                'id'    => 42,
                'title' => 'samasa_access',
            ],
            [
                'id'    => 43,
                'title' => 'tadisa_create',
            ],
            [
                'id'    => 44,
                'title' => 'tadisa_edit',
            ],
            [
                'id'    => 45,
                'title' => 'tadisa_show',
            ],
            [
                'id'    => 46,
                'title' => 'tadisa_delete',
            ],
            [
                'id'    => 47,
                'title' => 'tadisa_access',
            ],
            [
                'id'    => 48,
                'title' => 'archa_create',
            ],
            [
                'id'    => 49,
                'title' => 'archa_edit',
            ],
            [
                'id'    => 50,
                'title' => 'archa_show',
            ],
            [
                'id'    => 51,
                'title' => 'archa_delete',
            ],
            [
                'id'    => 52,
                'title' => 'archa_access',
            ],
            [
                'id'    => 53,
                'title' => 'kibbidhana_create',
            ],
            [
                'id'    => 54,
                'title' => 'kibbidhana_edit',
            ],
            [
                'id'    => 55,
                'title' => 'kibbidhana_show',
            ],
            [
                'id'    => 56,
                'title' => 'kibbidhana_delete',
            ],
            [
                'id'    => 57,
                'title' => 'kibbidhana_access',
            ],
            [
                'id'    => 58,
                'title' => 'unadikappa_create',
            ],
            [
                'id'    => 59,
                'title' => 'unadikappa_edit',
            ],
            [
                'id'    => 60,
                'title' => 'unadikappa_show',
            ],
            [
                'id'    => 61,
                'title' => 'unadikappa_delete',
            ],
            [
                'id'    => 62,
                'title' => 'unadikappa_access',
            ],
            [
                'id'    => 63,
                'title' => 'general_knowledge_access',
            ],
            [
                'id'    => 64,
                'title' => 'post_category_create',
            ],
            [
                'id'    => 65,
                'title' => 'post_category_edit',
            ],
            [
                'id'    => 66,
                'title' => 'post_category_show',
            ],
            [
                'id'    => 67,
                'title' => 'post_category_delete',
            ],
            [
                'id'    => 68,
                'title' => 'post_category_access',
            ],
            [
                'id'    => 69,
                'title' => 'post_create',
            ],
            [
                'id'    => 70,
                'title' => 'post_edit',
            ],
            [
                'id'    => 71,
                'title' => 'post_show',
            ],
            [
                'id'    => 72,
                'title' => 'post_delete',
            ],
            [
                'id'    => 73,
                'title' => 'post_access',
            ],
            [
                'id'    => 74,
                'title' => 'english_lesson_create',
            ],
            [
                'id'    => 75,
                'title' => 'english_lesson_edit',
            ],
            [
                'id'    => 76,
                'title' => 'english_lesson_show',
            ],
            [
                'id'    => 77,
                'title' => 'english_lesson_delete',
            ],
            [
                'id'    => 78,
                'title' => 'english_lesson_access',
            ],
        ];

        Permission::insert($permissions);
    }
}
