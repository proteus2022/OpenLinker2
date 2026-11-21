import React, {useMemo, useState} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useGlobalData from '@docusaurus/useGlobalData';
import {Icon} from '@iconify/react';
import styles from './styles.module.css';

const POSTS_PER_PAGE = 10;

type PostMeta = {
  permalink: string;
  title: string;
  description?: string;
  date: string;
  readingTime?: number;
  unlisted?: boolean;
  tags: {label: string; permalink: string}[];
};

function formatDate(date: string): string {
  const d = new Date(date);
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

export default function BlogIndexPage(): JSX.Element {
  const globalData = useGlobalData();
  const pluginData = (globalData as any)['docusaurus-plugin-content-blog']
    ?.default;

  const posts: PostMeta[] = useMemo(() => {
    const list = (pluginData?.blogs ?? []) as Array<{metadata: PostMeta}>;
    return list
      .map((item) => item.metadata)
      .filter((meta) => meta && !meta.unlisted)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [pluginData]);

  const [page, setPage] = useState(1);
  const [viewType, setViewType] = useState<'list' | 'grid'>('list');

  const totalPages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const items = posts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE,
  );

  return (
    <Layout title="博客" description="代码人生：编织技术与生活的博客之旅">
      <div className="container margin-vert--lg">
        <header className={styles.header}>
          <h1 className={styles.title}>博客</h1>
          <p className={styles.subtitle}>代码人生：编织技术与生活的博客之旅</p>
        </header>

        <div className={styles.toolbar}>
          <div className={styles.links}>
            <Link to="/tags">按标签浏览</Link>
            <Link to="/archive">按年份浏览</Link>
          </div>
          <div className={styles.controls}>
            <span className={styles.count}>
              共 {posts.length} 篇文章
              <span className={styles.muted}>
                {' '}
                第 {currentPage} / {totalPages} 页
              </span>
            </span>
            <Icon
              icon="ph:list-fill"
              width="22"
              height="22"
              onClick={() => setViewType('list')}
              color={
                viewType === 'list' ? 'var(--ifm-color-primary)' : '#ccc'
              }
            />
            <Icon
              icon="ph:grid-four"
              width="22"
              height="22"
              onClick={() => setViewType('grid')}
              color={
                viewType === 'grid' ? 'var(--ifm-color-primary)' : '#ccc'
              }
            />
          </div>
        </div>

        <div className={viewType === 'grid' ? styles.grid : styles.list}>
          {items.map((post) => (
            <article key={post.permalink} className={styles.post}>
              <div className={styles.meta}>
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                {post.readingTime ? (
                  <span>阅读需 {Math.ceil(post.readingTime)} 分钟</span>
                ) : null}
              </div>
              <h2 className={styles.postTitle}>
                <Link to={post.permalink}>{post.title}</Link>
              </h2>
              {post.description ? (
                <p className={styles.description}>{post.description}</p>
              ) : null}
              {post.tags?.length ? (
                <div className={styles.tags}>
                  {post.tags.map((tag) => (
                    <Link key={tag.permalink} className="tag" to={tag.permalink}>
                      {tag.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>

        <nav className={styles.pager} aria-label="分页">
          <button
            type="button"
            className={styles.pagerButton}
            disabled={currentPage <= 1}
            onClick={() => setPage(currentPage - 1)}>
            ← 较新的博文
          </button>
          <span className={styles.pagerInfo}>
            {currentPage} / {totalPages}
          </span>
          <button
            type="button"
            className={styles.pagerButton}
            disabled={currentPage >= totalPages}
            onClick={() => setPage(currentPage + 1)}>
            较旧的博文 →
          </button>
        </nav>
      </div>
    </Layout>
  );
}
