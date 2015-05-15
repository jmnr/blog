h1 The FAC5 posts of Josh, Michelle, Nikhi and Ronan.
h3 I hope you enjoying reading this because it was hell to build. :)

for post, slug in public.articles._data
  h2: a(href="/roblog/posts/#{ slug }")= post.title
  != partial("posts/" + slug)
