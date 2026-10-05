import { fetchFeed } from "./rss.js";
import {
  getNextFeedToFetch,
  markFeedFetched,
} from "./lib/db/queries/feeds.js";
import { createPost } from "./lib/db/queries/posts.js";

export async function scrapeFeeds(): Promise<void> {
  const feed = await getNextFeedToFetch();

  if (!feed) {
    return;
  }

  console.log(`Fetching feed: ${feed.name}`);

  const rssFeed = await fetchFeed(feed.url);

  await markFeedFetched(feed.id);

  for (const item of rssFeed.channel.item) {
    const publishedAt = new Date(item.pubDate);

    await createPost(
      item.title,
      item.link,
      item.description,
      publishedAt,
      feed.id,
    );
  }
}
