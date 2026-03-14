export type WordPressPost = {
  id: number;
  slug: string;
  link: string;
  date: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  content?: {
    rendered: string;
  };
  _embedded?: {
    author?: Array<{
      name: string;
    }>;
    "wp:featuredmedia"?: Array<{
      source_url: string;
      alt_text?: string;
    }>;
  };
};

const WORDPRESS_API = "https://aryanjalan.com/wp-json/wp/v2";

export async function getPosts(): Promise<WordPressPost[]> {
  try {
    const res = await fetch(`${WORDPRESS_API}/posts?_embed&per_page=9`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch posts: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("WordPress fetch error:", error);
    return [];
  }
}

export async function getPostBySlug(
  slug: string
): Promise<WordPressPost | null> {
  try {
    const res = await fetch(`${WORDPRESS_API}/posts?slug=${slug}&_embed`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch single post: ${res.status}`);
    }

    const data = await res.json();

    if (!data || data.length === 0) {
      return null;
    }

    return data[0];
  } catch (error) {
    console.error("Single post fetch error:", error);
    return null;
  }
}