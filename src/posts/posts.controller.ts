import { Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { createPostDto } from './dto/create-post.dto';
import { PostsService } from './posts.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('posts')
export class PostsController {

    constructor(private postService: PostsService) {

    }

    @Post()
    @UseInterceptors(FileInterceptor('image'))
    createPost(@Body() dto: createPostDto,
               @UploadedFile() image) {
        this.postService.create(dto, image)
    return this.postService.create(dto, image)
    }
}
