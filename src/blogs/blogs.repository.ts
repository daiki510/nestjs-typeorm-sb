import { Blog } from '../entities/blog.entity';
import { EntityRepository, Repository } from 'typeorm';
import { BlogStatus } from './blog-status.enum';

@EntityRepository(Blog)
export class BlogsRepository extends Repository<Blog> {
  async createBlog(): Promise<Blog> {
    const Blog = this.create({
      title: 'test-title',
      content: 'test-content',
      status: BlogStatus.PUBLISH,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    await this.save(Blog);

    return Blog;
  }
}
