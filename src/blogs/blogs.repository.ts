import { Blog } from '../entities/blog.entity';
import { EntityRepository, Repository } from 'typeorm';
import { BlogStatus } from './blog-status.enum';
import { CreateBlogDto } from './create-blog.dto';

@EntityRepository(Blog)
export class BlogsRepository extends Repository<Blog> {
  async createBlog(createBlogDto: CreateBlogDto): Promise<Blog> {
    const { title, content } = createBlogDto;
    const Blog = this.create({
      title,
      content,
      status: BlogStatus.PUBLISH,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    await this.save(Blog);

    return Blog;
  }
}
