<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use PharIo\Manifest\Author;

class Posts extends Model
{
    use HasFactory;
    protected $fillable=[
        'title',
        'news_content',
        'Author',

    ];
}
