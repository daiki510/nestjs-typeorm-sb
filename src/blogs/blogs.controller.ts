import { Body, Controller, Post } from '@nestjs/common';
import { create } from 'domain';
import { BlogsService } from './blogs.service';

@Controller('blogs')
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) {}

  @Post()
  create(@Body()) {
    return this.blogsService.create();
  }
}
