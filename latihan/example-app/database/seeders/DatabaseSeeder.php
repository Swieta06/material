<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Posts;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        //\App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        User::create([
            'email' => 'admin04@gmail.com',
            'username' => 'admin04',
            'password' => 'password',
            'firstname' => 'admin',
            'lastname' => 'admin04',
        ]);
        Posts::create([
            'title' => 'Character Exellence',
            'news_content' => 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores dicta quam unde, molestias fuga ab est expedita? Ipsam quibusdam numquam nostrum, a magnam quasi est, cum quo adipisci temporibus illum?',
            'Author'=>1,

        ]);
    }
}
