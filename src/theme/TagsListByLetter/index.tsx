import React from 'react';
import {listTagsByLetters, type TagLetterEntry} from '@docusaurus/theme-common';
import Tag from '@theme/Tag';
import type {Props} from '@theme/TagsListByLetter';

import styles from './styles.module.css';

function TagLetterEntryItem({letterEntry}: {letterEntry: TagLetterEntry}) {
  return (
    <div className={styles.letterGroup}>
      <h2 className={styles.letter}>{letterEntry.letter}</h2>
      <ul className={styles.tagList}>
        {letterEntry.tags.map((tag) => (
          <li key={tag.permalink} className={styles.tag}>
            <Tag {...tag} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function TagsListByLetter({tags}: Props): JSX.Element {
  const letterList = listTagsByLetters(tags);
  return (
    <section className={styles.tags}>
      {letterList.map((letterEntry) => (
        <TagLetterEntryItem
          key={letterEntry.letter}
          letterEntry={letterEntry}
        />
      ))}
    </section>
  );
}

export function TagsListByFlat({tags}: Props): JSX.Element {
  return (
    <section className={styles.tags}>
      <ul className={styles.tagList}>
        {tags.map((tag) => (
          <li key={tag.permalink} className={styles.tag}>
            <Tag {...tag} />
          </li>
        ))}
      </ul>
    </section>
  );
}
