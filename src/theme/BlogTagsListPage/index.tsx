import React, {useMemo, useState} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
  translateTagsPageTitle,
} from '@docusaurus/theme-common';
import BlogLayout from '@theme/BlogLayout';
import TagsListByLetter from '@theme/TagsListByLetter';
import {TagsListByFlat} from '../TagsListByLetter';
import type {Props} from '@theme/BlogTagsListPage';
import SearchMetadata from '@theme/SearchMetadata';
import styles from './styles.module.css';

export default function BlogTagsListPage({tags, sidebar}: Props): JSX.Element {
  const title = translateTagsPageTitle();
  const [query, setQuery] = useState('');

  const keyword = query.trim().toLowerCase();
  const filteredTags = useMemo(
    () =>
      keyword
        ? tags.filter((tag) => tag.label.toLowerCase().includes(keyword))
        : tags,
    [tags, keyword],
  );

  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogTagsListPage,
      )}>
      <PageMetadata title={title} />
      <SearchMetadata tag="blog_tags_list" />
      <BlogLayout sidebar={sidebar}>
        <header className={styles.header}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>从一个关键词，找到感兴趣的内容。</p>
        </header>

        <div className={styles.toolbar}>
          <Link to="/blog" className={styles.back}>
            ← 返回博客
          </Link>
          <input
            type="search"
            className={styles.search}
            placeholder="搜索标签"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="搜索标签"
          />
          <span className={styles.count}>{filteredTags.length} 个标签</span>
        </div>

        {keyword ? (
          <TagsListByFlat tags={filteredTags} />
        ) : (
          <TagsListByLetter tags={tags} />
        )}
      </BlogLayout>
    </HtmlClassNameProvider>
  );
}
