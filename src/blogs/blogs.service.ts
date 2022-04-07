import { Injectable } from '@nestjs/common';
import { BlogsRepository } from './blogs.repository';
import { CreateBlogDto } from './create-blog.dto';

@Injectable()
export class BlogsService {
  constructor(private readonly blogsRepository: BlogsRepository) {}

  create(createBlogDto: CreateBlogDto) {
    return this.blogsRepository.createBlog(createBlogDto);
  }
}
